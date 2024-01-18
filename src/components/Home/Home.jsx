import React from "react";

const Home = () => {
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
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                A Journey Through Breathtaking Natural Views
              </h1>
              <p className="mb-5">
                Natural views offer a breathtaking spectacle of Earth's beauty,
                encompassing diverse landscapes that evoke awe and serenity.
                From majestic mountain vistas adorned with snow-covered peaks to
                tranquil meadows teeming with wildflowers, each scene tells a
                story of nature's resilience.
              </p>
              <button className="btn btn-primary">You can Visit..!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
