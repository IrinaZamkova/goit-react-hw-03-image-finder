import Loader from "react-loader-spinner";
import React from "react";
import { SpinerContainer } from "./style.component";

export default function Spiner() {
  return (
    <SpinerContainer>
      <Loader
        type="ThreeDots"
        color="#3f51b5"
        height={80}
        width={80}
        timeout={2000}
      />
    </SpinerContainer>
  );
}
