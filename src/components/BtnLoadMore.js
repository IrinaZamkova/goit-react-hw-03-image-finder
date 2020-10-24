import React from "react";
import PropTypes from "prop-types";
import { BtnLoad } from "./style.component";

const BtnLoadMore = ({onClick}) => {
    return(
<BtnLoad onClick={onClick} >Load more...</BtnLoad>)}
export default BtnLoadMore;

BtnLoadMore.propTypes = {
    onClick: PropTypes.func
};
