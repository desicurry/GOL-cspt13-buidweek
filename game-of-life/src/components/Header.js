import React from "react";
import { connect } from "react-redux";

function Header({ color }) {
  return <h1 style={{ color }}>Conway's Game of Life</h1>;
}

const mapStateToProps = ({ display: { color } }, props) => ({
  ...props,
  color,
});

export default connect(mapStateToProps, {})(Header);