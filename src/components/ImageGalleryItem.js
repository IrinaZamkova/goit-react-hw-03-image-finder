import React from "react";
import PropTypes from "prop-types";
import { GalleryItem, Img } from "./style.component";

export default function ImagaGalleryItem({ url }) {
  return (
    <GalleryItem>
      <Img src={url} alt="photo" />
    </GalleryItem>
  );
}
ImagaGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
};
