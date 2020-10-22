import React from "react";
import Grid from "./Grid";
import DisplaySettings from "./DisplaySettings";
import { connect } from "react-redux";
import {
  toggleCell,
  resetGrid,
  randomizeGrid,
  progressGame,
} from "../../actions";

class PlayGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      generation: 0,
      isPlaying: false,
      speed: 1,
      intervalCode: null,
      stepInterval: 1,
      toggledCount: 0,
    };
  }
  componentDidMount() {
    this.props.resetGrid();
  }
  togglePlaying = () => {
    this.setState({ isPlaying: !this.state.isPlaying });
    if (this.state.intervalCode) {
      window.clearInterval(this.state.intervalCode);
      this.setState({ intervalCode: null });
    } else {
      const intervalCode = window.setInterval(() => {
        this.props.progressGame();
        this.setState({
          generation: this.state.generation + this.state.stepInterval,
        });
      }, 1000 / this.state.speed);
      this.setState({ intervalCode });
    }
  };
  toggleCellAndUpdate = coordinates => {
    this.setState({ toggledCount: this.state.toggledCount + 1 });
    this.props.toggleCell(coordinates);
  };
  progressGame = () => {
    this.setState({
      generation: this.state.generation + this.state.stepInterval,
    });
    this.props.progressGame(this.state.stepInterval);
  };
  resetGame = random => () => {
    random ? this.props.randomizeGrid() : this.props.resetGrid();
    this.setState({ generation: 0, isPlaying: false });
    if (this.state.intervalCode) {
      window.clearInterval(this.state.intervalCode);
      this.setState({ intervalCode: null });
    }
  };
  setSpeed = ({ target: { value } }) => {
    if (this.state.intervalCode) {
      window.clearInterval(this.state.intervalCode);
      const intervalCode = window.setInterval(() => {
        this.props.progressGame();
        this.setState({
          generation: this.state.generation + this.state.stepInterval,
        });
      }, 1000 / this.state.speed);
      this.setState({ intervalCode });
    }
    this.setState({ speed: value });
  };
  setInterval = ({ target: { value } }) => {
    if (value < 0) value = 0;
    this.setState({ stepInterval: Number(value) });
  };
  render() {
    return (
      <div className='PlayGrid'>
        <h3 style={{ color: this.props.color }}>
          Generation {this.state.generation}
        </h3>
        <Grid
          grid={this.props.grid}
          toggleCell={
            this.state.isPlaying ? () => {} : this.toggleCellAndUpdate
          }
        />
        {this.props.errorMessage && (
          <div style={{ color: "red" }}>{this.props.errorMessage}</div>
        )}
        <div className='PlayGridFooter'>
          <div className='PlaybackControls'>
            <div className='ButtonRow'>
              <button onClick={this.togglePlaying}>
                {this.state.isPlaying ? "Stop" : "Play"}
              </button>
              <label>
                {`${this.state.speed}x`}
                <input
                  type='range'
                  min={1}
                  max={10}
                  value={this.state.speed}
                  onInput={this.setSpeed}
                  onChange={() => {}}
                />
              </label>
            </div>
            <div className='ButtonRow'>
              <button onClick={this.progressGame}>Step forward by</button>
              <input
                type='number'
                size='1'
                value={this.state.stepInterval}
                onChange={this.setInterval}
              ></input>
            </div>
            <button onClick={this.resetGame("random")}>Randomize!</button>
            <button onClick={this.resetGame()}>Reset</button>
          </div>
          <DisplaySettings resetGame={this.resetGame()}/>
        </div>
      </div>
    );
  }
}
const mapPropsToState = (
  { grid: { grid, errorMessage }, display: { color } },
  props
) => ({
  ...props,
  grid,
  errorMessage,
  color,
});
export default connect(mapPropsToState, {
  toggleCell,
  resetGrid,
  randomizeGrid,
  progressGame,
})(PlayGrid);