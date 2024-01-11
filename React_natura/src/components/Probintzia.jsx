import React, { useState } from 'react';

export default function Probintzia({ onProvinciaChange }) {
  const [selectedProvincia, setSelectedProvintzia] = useState('');

  const probintziaAukeratu = (e) => {
    const probintzia = e.target.value;
    setSelectedProvintzia(probintzia);

    // Llamar a la función proporcionada por el padre
    onProvinciaChange(probintzia);
  };
 
  return (
    <>
      <div className="border">
        <h1>Probintzia</h1>
        <label className="radioButton">
          <input
            type='radio'
            value='Araba/Álava'
            name='provincia'
            onChange={probintziaAukeratu}
          />
          Araba/Álava
        </label>
        <br />
        <label className="radioButton">
          <input
            type='radio'
            value='Bizkaia'
            name='provincia'
            onChange={probintziaAukeratu}
          />
          Bizkaia
        </label>
        <br />
        <label className="radioButton">
          <input
            type='radio'
            value='Gipuzkoa'
            name='provincia'
            onChange={probintziaAukeratu}
          />
          Gipuzkoa
        </label>
      </div>
    </>
  );
}
