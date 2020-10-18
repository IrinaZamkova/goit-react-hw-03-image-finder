import Loader from "react-loader-spinner";
import React from "react";


export default function Spiner() {
    return (
      <Loader
      type="ThreeDots" color="#3f51b5" height={80} width={80}
        timeout={3000} //3 secs
      />
    );
  
}