import React from "react";
import PropTypes from "prop-types";
import { GalleryItem, Img } from "./style.component";

export default function ImagaGalleryItem({ url, largeImgURL, onImgClick }) {
  return (
    <GalleryItem>
      <Img src={url} alt="photo" onClick={onImgClick} data-img={largeImgURL} />
    </GalleryItem>
  );
}
ImagaGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  onImgClick: PropTypes.func.isRequired,
};
