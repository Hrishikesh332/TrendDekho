import React from "react";

const DisplaySection = ({ triggerPreview }) => {
  const handleLearnMore = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Niceeee!</p>
      <span>Have a look at the new logo of twitter</span>
      <button className="button" onClick={triggerPreview}>
        Play!
      </button>
      <button className="back-button" onClick={handleLearnMore}>
        Top
      </button>
    </div>
  );
};

export default DisplaySection;
