import React, { Component } from "react";
import Layout from "./Layout";
import ImageApi from "./Api";
// import PropTypes from "prop-types";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searcbar";
import Loader from "./Loader";

export default class App extends Component {
  static propTypes = {};
  state = {
    hits: [],
    loading: false,
    err: null,
    query: "",
    page: 1,
  };

  componentDidMount() {
    this.setState({ loading: true });
    ImageApi.fetchImgWithQuery(this.state.query, this.state.page)
      .then((hits) => this.setState({ hits }))
      .catch((err) => this.setState({ err }))
      .finally(() => this.setState({ loading: false }));
  }
  componentDidUpdate(prevState) {}

  render() {
    return (
      <Layout>
        <Searchbar></Searchbar>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <ImageGallery hits={this.state.hits} />
        )}
        <Loader />
      </Layout>
    );
  }
}
