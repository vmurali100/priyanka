import React from "react";

const Progress = (props) => {
  const { bar } = props;
  return (
    <div>
      <div className="progress-bar">
        <div
          className="progress-done"
          style={{ width: `${bar}%`, background: "green", color: "white" }}
        >
          <span>{bar}%</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
