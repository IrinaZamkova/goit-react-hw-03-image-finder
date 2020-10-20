import React from "react";
import PropTypes from "prop-types";
import { Lay } from "./style.component";

const Layout = ({ children }) => <Lay>{children}</Lay>;

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
};
