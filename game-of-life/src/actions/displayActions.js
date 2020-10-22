export const DISPLAY_ACTIONS = {
    UPDATE_COLOR: "UPDATE_COLOR",
    CHANGE_CELL_SIZE: "CHANGE_CELL_SIZE",
  };
  
  export const updateColor = color => ({
    type: DISPLAY_ACTIONS.UPDATE_COLOR,
    payload: { color },
  });
  export const changeCellSize = cellSize => ({
    type: DISPLAY_ACTIONS.CHANGE_CELL_SIZE,
    payload: { cellSize },
  });