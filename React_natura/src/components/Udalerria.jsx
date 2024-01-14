import React, { useState, useEffect } from "react";
import Informazioa from "./Informazioa";

const Udalerria = ({ selectedProbintzia }) => {
  const [territories, setTerritories] = useState([]);
  const [selectedUdalerria, setSelectedUdalerria] = useState("");
  const [espaciosNaturales, setEspaciosNaturales] = useState([]);
  const [selectedEspacio, setSelectedEspacio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/espacios-naturales.json');
      const data = await response.json();
      setTerritories(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedUdalerria) {
      const udalerriaAukera = territories.find(
        (territory) => territory.name === selectedUdalerria
      );

      if (udalerriaAukera) {
        setEspaciosNaturales(udalerriaAukera.espaciosNaturales || []);
      }
    } else {
      setEspaciosNaturales([]);
    }
  }, [selectedUdalerria, territories]);

  const udalerriAldatu = (event) => {
    setSelectedUdalerria(event.target.value);
  };

  const espacioAukeratu = (event) => {
    const selectedEspacioName = event.target.value;
    const selectedEspacio = espaciosNaturales.find(
      (espacio) => espacio.name === selectedEspacioName
    );

    setSelectedEspacio(selectedEspacio);
  };

  return (
    <div className="border">
      <h1>Udalerria</h1>
      {selectedProbintzia && (
        <div>
          <p>{selectedProbintzia} Probintzian dauden udalerriak:</p>
          <select value={selectedUdalerria} onChange={udalerriAldatu}>
            {territories.map((territory) => (
              <option key={territory.id}>{territory.name}</option>
            ))}
          </select>
          <p> Parke naturalak:</p>
          <select onChange={espacioAukeratu}>
            {espaciosNaturales.map((espacio) => (
              <option key={espacio.id}>{espacio.name}</option>
            ))}
          </select>
        </div>
      )}
      <Informazioa selectedEspacio={selectedEspacio} />
    </div>
  );
};

export default Udalerria;
