import React from "react";
import presetDescriptions from "./presetDescriptions";
import Preset from "./Preset";
import { connect } from "react-redux";
function Presets(props) {
  let [currentPreset, setCurrentPreset] = React.useState(
    Object.keys(presetDescriptions)[0]
  );
  return (
    <div className='Presets'>
      <h3 style={{ color: props.color }}>Presets:</h3>
      <nav>
        {Object.entries(presetDescriptions).map(([key, category]) => (
          <button
            key={key}
            className={key === currentPreset ? "category active" : "category"}
            onClick={() => setCurrentPreset(key)}
          >
            {category.name}
          </button>
        ))}
      </nav>

      {presetDescriptions[currentPreset].items.map(p => (
        <Preset key={p.name} {...p} />
      ))}
    </div>
  );
}

export default connect(
  ({ display: { color } }, props) => ({ ...props, color }),
  null
)(Presets);