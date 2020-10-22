import React from "react";
import { connect } from "react-redux";

function AlgorithmInfo({ color }) {
  return (
    <>
      <h2 style={{ color }}>About the Algorithm:</h2>
      <p>
        The Game of Life is a "zero-player" game created by John Conway, a
        mathematician, in 1970. Its simple rule-set, coupled with its
        possibility for highly complex emergent "gameplay", have made it a
        favorite of mathematicians and computer scientists for decades.
      </p>
      <p>
        "Life" has the interesting feature of being Turing-complete. That is, it
        can be used to emulate the functionality of a Turing machine, a
        theoretical computer proposed by Alan Turing and the basis of much of
        modern computation. Given a sufficiently-large infinite grid and
        sufficient time, the Game of Life can be used to perform any computation.
      </p>
    </>
  );
}
const mapStateToProps = ({ display: { color }, props }) => ({ ...props, color });
export default connect(mapStateToProps, null)(AlgorithmInfo);