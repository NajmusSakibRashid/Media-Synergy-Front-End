import React from "react";

const HeroCommunity = ({ scrollToNextSection }) => {
  const handleGetStartedClick = () => {
    scrollToNextSection();
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200 w-full">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            className="mask mask-squircle max-w-80"
            src="https://media.istockphoto.com/id/1357830750/vector/geometric-illustration-of-multi-coloured-human-figures.jpg?s=612x612&w=0&k=20&c=2uvkAa8B9pyBcMbMUoE6zQVXPrNAz8Tdysdfq8G3oKM="
          /> */}
          <img
            src="https://media.istockphoto.com/id/1357830750/vector/geometric-illustration-of-multi-coloured-human-figures.jpg?s=612x612&w=0&k=20&c=2uvkAa8B9pyBcMbMUoE6zQVXPrNAz8Tdysdfq8G3oKM="
            className="max-w-sm rounded-lg shadow-2xl mask mask-squircle"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to MediaSynergy Communities!
            </h1>
            <p className="py-6">
              Connect to the best communities you suit. Connect to the best.
            </p>
            <button className="btn btn-primary" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCommunity;
