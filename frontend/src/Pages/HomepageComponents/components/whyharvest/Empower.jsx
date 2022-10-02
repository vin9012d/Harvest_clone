import React from "react";
import data from "./content.json"
import MidHarvest from "./MidHarvest";

export const Empower = () => {
    const contents = data.contents
  return (
    <div>
      {contents.map((i) => {
        return <MidHarvest key={i.id} content={{...i}} />
      })}
    </div>
  );
};

// export default Empower;
