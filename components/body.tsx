import React from "react";
import Artists from "./artists";

const Body: React.FC = () => {
  return (
    <section
      style={{
        maxHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        overflowY: "scroll",
      }}
    >
      <Artists />
    </section>
  );
};

export default Body;
