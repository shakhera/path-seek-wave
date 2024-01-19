import React, { useEffect, useState } from "react";
import Nature from "../Nature/Nature";

const NaturalView = () => {
  const [natures, setNatures] = useState([]);
  useEffect(() => {
    fetch("nature.json")
      .then((res) => res.json())
      .then((data) => setNatures(data));
  }, []);
  return (
    <div>
      <h2>Nature View: {natures.length}</h2>
      {/* <div className=" grid grid-cols-2 gap-2">
        {natures.map((nature) => (
          <Nature key={nature.id} nature={nature}></Nature>
        ))}
      </div> */}
    </div>
  );
};

export default NaturalView;
