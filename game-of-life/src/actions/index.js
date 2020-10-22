import { DISPLAY_ACTIONS } from "./displayActions";
import { GRID_ACTIONS } from "./gridActions";
export * from "./displayActions";
export * from "./gridActions";

export const ACTIONS = {
  ...DISPLAY_ACTIONS,
  ...GRID_ACTIONS,
};