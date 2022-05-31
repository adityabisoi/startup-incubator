import React from "react";

const Description = function ({ imageUrl, description }) {
  const style = {
    minHeight: "450px",
    margin: "1em 1em",
    padding: "1.5em",
    background: "#FFFFFF",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
    borderRadius: "4px",
    overflow: "hidden",
  };

  return (
    <div style={style}>
      <img src={imageUrl} text="just random image" />
      <p>{description}</p>
    </div>
  );
};

export default Description;
