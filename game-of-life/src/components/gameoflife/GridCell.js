import React from "react";

import { connect } from "react-redux";

function GridCell(props) {
  let { x, y, color, alive, size, cellSize } = props;
  if (!size) size = cellSize;
  return (
    <td
      data-x={x}
      data-y={y}
      style={{
        backgroundColor: alive ? color : "white",
        padding: size + "px",
      }}
    />
    // >{alive}</td>
  );
}

export default connect(
  ({ display: { color, cellSize } }, props) => ({
    ...props,
    color,
    cellSize,
  }),
  null
)(GridCell);