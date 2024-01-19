import React from "react";

const Nature = ({ nature }) => {
  const { name, img } = nature;
  return (
    <div>
      <div className="">
        <div className="carousel-item w-1/2">
          <img src={img} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Nature;
