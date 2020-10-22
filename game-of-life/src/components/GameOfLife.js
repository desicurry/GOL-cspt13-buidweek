import React from "react";
import Rules from "./gameoflife/Rules";
import PlayGrid from "./gameoflife/PlayGrid";
import Presets from "./gameoflife/Presets";

export default function GameOfLife() {
  return (
    <div className='GameOfLife'>
      <PlayGrid />
      <Presets />
      <Rules />
    </div>
  );
}