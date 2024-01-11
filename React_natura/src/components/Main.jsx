import React, { useState } from 'react';
import Probintzia from './Probintzia';
import Udalerria from './Udalerria';

export default function Main() {
  const [selectedProvincia, setSelectedProvincia] = useState('');

  const handleProvinciaChange = (provincia) => {
    setSelectedProvincia(provincia);
  };

  return (
    <div>
      <Probintzia onProvinciaChange={handleProvinciaChange} />
      <Udalerria selectedProvincia={selectedProvincia} />
    </div>
  );
}
