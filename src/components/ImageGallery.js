import React from "react";
import PropTypes from "prop-types";
import { GalleryList } from "./style.component";
import ImagaGalleryItem from "./ImageGalleryItem";

export default function ImageGallery({ hits, onImgClick }) {
  return (
    <GalleryList>
      {hits.map((hit) => (
        <ImagaGalleryItem
          key={hit.id}
          url={hit.webformatURL}
          largeImgURL={hit.largeImageURL}
          onImgClick={onImgClick}
        />
      ))}
    </GalleryList>
  );
}
ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      largeImgURL: PropTypes.string,
    })
  ),
  onImgClick: PropTypes.func,
};
