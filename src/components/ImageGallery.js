import React, { Component } from "react";
// import PropTypes from "prop-types";
import { GalleryList } from "./style.component";
import ImagaGalleryItem from "./ImageGalleryItem";

export default class ImageGallery extends Component {
  // static propTypes = {

  //   };
  onClickImage = () => {};
  render() {
    const { hits } = this.props;
    return (
      <GalleryList>
        {hits.map((hit) => (
          <ImagaGalleryItem key={hit.id} url={hit.webformatURL} />
        ))}
      </GalleryList>
    );
  }
}
