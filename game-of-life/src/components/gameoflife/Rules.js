import React from "react";
import { connect } from "react-redux";

function Rules({color}) {
  return (
    <div className='rules'>
      <h2 style={{ color }}>Rules</h2>
      <h3 style={{ color }}>The Algorithm:</h3>
      <ul>
        <li>Filled cells are "alive" - empty cells are "dead"</li>
        <li>
          If a live cell has fewer than 2 neighbors, it dies due to isolation.
        </li>
        <li>
          If a live cell has more than 3 neighbors, it dies due to
          overpopulation.
        </li>
        <li>
          If a dead cell has exactly 3 neighbors, it comes to life due to
          reproduction.
        </li>
      </ul>
      <h3 style={{ color }}>The Game:</h3>
      <ul>
        <li>
          Create the initial board state by clicking on cells to toggle them
          between alive and dead.
        </li>
        <li>
          You can also load a preset as a starting point, or hit "Randomize" for
          a random starting point.
        </li>
        <li>
          Start the animation by pressing "Play", or move it forward once with
          "Step Forward".
        </li>
        <li>You can stop the animation at any time by pressing "Stop".</li>
      </ul>
    </div>
  );
}

const mapStateToProps = ({ display: { color }, props }) => ({ ...props, color });
export default connect(mapStateToProps, null)(Rules);