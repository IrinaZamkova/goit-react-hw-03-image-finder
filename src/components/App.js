import React, { Component } from "react";
import Layout from "./Layout";
import ImageApi from "../service/Api";
import PropTypes from "prop-types";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searcbar";
import Spiner from "./Spiner";
import Modal from "./Modal";
import BtnLoadMore from "./BtnLoadMore";

export default class App extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    err: PropTypes.string,
    query: PropTypes.string,
    page:PropTypes.number,
    largeImageURL: PropTypes.string,
  };
  state = {
    hits: [],
    loading: false,
    err: null,
    query: "bright",
    page: 1,
    largeImageURL: null,
  };
  componentDidUpdate(prevProps, prevState) {
    const { query, largeImageURL} = this.state;
    if (prevState.query !== query) {
      this.fetchImg();
    }
    if (largeImageURL) {
      window.addEventListener("keydown", this.onCloseModalEscape);
    } else {
      window.removeEventListener("keydown", this.onCloseModalEscape);
    }

  }

  fetchImg = () => {
    this.setState({ loading: true });
    ImageApi.fetchImgWithQuery(this.state.query, this.state.page)
      .then((res) => {
        this.setState((prevState) => {
          return {
            hits: [...prevState.hits, ...res],
            page: prevState.page + 1,
          };
          
        });
      
       window.scrollTo({
          top: document.documentElement.scrollHeight ,
          behavior: "smooth",
        });
          
      })
      .catch((err) => this.setState({ err }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchbarSubmit = (query) => {
    this.setState({
      query,
      hits: [],
      page: 1,
    });
  };

  onCloseOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      this.setState({ largeImageURL: null });
    }
  };
  onCloseModalEscape = (e) => {
    if (e.code === "Escape") {
      this.setState({ largeImageURL: null });
    }
  };
  onGalleryImageClick = (e) => {
    this.setState({ largeImageURL: e.target.dataset.img });
  };
  render() {
    const { hits, loading, largeImageURL } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        {loading ? (
          <Spiner />
        ) : (
          <ImageGallery hits={hits} onImgClick={this.onGalleryImageClick} />
        )}

        {hits.length > 0 && !loading && <BtnLoadMore onClick={this.fetchImg} />}

        {largeImageURL && (
          <Modal
            url={largeImageURL}
            onOverlayClick={this.onCloseOverlayClick}
          />
        )}
      </Layout>
    );
  }
}
