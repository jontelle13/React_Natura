import React, { useState } from "react";
import Probintzia from "./Probintzia";
import Udalerria from "./Udalerria";

const Main = () => {
  const [probintzia, setProbintzia] = useState("");

  const handleProbintziaChange = (selectedProbintzia) => {
    setProbintzia(selectedProbintzia);
  };

  return (
    <div className="border">
      <h1>Main</h1>

      <Probintzia onProbintziaChange={handleProbintziaChange} />

      <Udalerria selectedProbintzia={probintzia} />
    </div>
  );
};

export default Main;
