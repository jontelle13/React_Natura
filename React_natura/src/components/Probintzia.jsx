import React, { useState } from "react";

const Probintzia = ({ onProbintziaChange }) => {
  const [selectedProbintzia, setSelectedProbintzia] = useState("");

  const handleProbintziaChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedProbintzia(selectedOption);
    onProbintziaChange(selectedOption);
  };

  return (
    <div className="border">
      <h1>Probintzia</h1>
      <label>
        <input
          type="radio"
          value="Gipuzkoa"
          checked={selectedProbintzia === "Gipuzkoa"}
          onChange={handleProbintziaChange}
        />
        Gipuzkoa
      </label>
      <label>
        <input
          type="radio"
          value="Bizkaia"
          checked={selectedProbintzia === "Bizkaia"}
          onChange={handleProbintziaChange}
        />
        Bizkaia
      </label>
      <label>
        <input
          type="radio"
          value="Araba/Alava"
          checked={selectedProbintzia === "Araba/Alava"}
          onChange={handleProbintziaChange}
        />
        Araba/Alava
      </label>
    </div>
  );
};

export default Probintzia;
