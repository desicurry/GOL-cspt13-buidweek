import { ACTIONS } from "../actions";

const initialState = {
  color: "#000000",
  cellSize: 5.0,
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_COLOR:
      return { ...state, color: action.payload.color };
    case ACTIONS.CHANGE_CELL_SIZE:
      return { ...state, cellSize: action.payload.cellSize };
    default:
      return state;
  }
}