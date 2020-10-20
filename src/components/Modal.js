import React from "react";
import { Overlay, ModalDiv, ImgModal } from "./style.component";
import PropTypes from "prop-types";

export default function Modal({ onOverlayClick, url }) {
  return (
    <Overlay onClick={onOverlayClick}>
      <ModalDiv>
        <ImgModal src={url} alt={url} />
      </ModalDiv>
    </Overlay>
  );
}

Modal.propTypes = {
  onOverlayClick: PropTypes.func,
  url: PropTypes.string.isRequired,
};
