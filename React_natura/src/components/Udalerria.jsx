import React, { useState, useEffect } from 'react';

export default function Udalerria({ selectedProvincia }) {
  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    // Aquí debes realizar la solicitud Ajax usando el valor de selectedProvincia
    // y actualizar el estado de municipios con los datos recibidos.
    // Puedes usar la función fetch o cualquier otra biblioteca de manejo de Ajax.

    // Ejemplo de solicitud usando fetch:
    if (selectedProvincia) {
      fetch(`URL_DEL_PHP?provincia=${selectedProvincia}`)
        .then(response => response.json())
        .then(data => {
          // Actualizar el estado de municipios con los datos recibidos
          setMunicipios(data.item.map(item => item.municipality));
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [selectedProvincia]);

  return (
    <>
      <div className="border">
        <h1>Udalerria</h1>
        <ul>
          {municipios.map((municipio, index) => (
            <li key={index}>{municipio}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
