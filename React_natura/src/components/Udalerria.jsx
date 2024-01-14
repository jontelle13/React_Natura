import React, { useEffect, useState } from "react";

const Udalerria = ({ selectedProbintzia }) => {
  const [udalerriak, setUdalerriak] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://opendata.euskadi.eus/contenidos/ds_recursos_turisticos/espacios_naturales_euskadi/opendata/espacios-naturales.json"
        );

        if (!response.ok) {
          throw new Error("Error fetching data");
        }

        const data = await response.json();
        const parkeak = data.espacios_naturales;

        const udalerriakArray = parkeak.map((parkea) => parkea.territory);
        setUdalerriak(udalerriakArray);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="border">
      <h1>Udalerria</h1>
      {selectedProbintzia && (
        <div>
          <p>{selectedProbintzia} Probintzian dauden udalerriak:</p>
          <select>
            {udalerriak.map((udalerri, index) => (
              <option key={index}>{udalerri}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Udalerria;
