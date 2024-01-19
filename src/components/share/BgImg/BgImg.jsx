import React from "react";

const BgImg = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8bmF0dXJhbHxlbnwwfHx8fDE3MDU1NjUxOTN8MA&ixlib=rb-4.0.3)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="max-w-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgImg;
