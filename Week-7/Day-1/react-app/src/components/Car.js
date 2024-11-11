import React from "react";

function Car(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.data.brand}</h5>
        <p className="card-text">{props.data.color}</p>
      </div>
    </div>
  );
}

export default Car;