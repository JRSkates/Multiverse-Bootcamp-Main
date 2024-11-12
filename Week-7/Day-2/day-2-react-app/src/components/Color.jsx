import React from 'react';

function Color(props) {
  return (
    <button
      onClick={() => props.updateColor(props.color)}
      className={props.color === props.selectedColor ? 'selected' : ''}
      style={{ color: props.color.toLowerCase() }} // Inline styling to set button color
    >
      {props.color}
    </button>
  );
}

export default Color;