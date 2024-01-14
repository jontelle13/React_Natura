import React from "react";

export default function Informazioa({ selectedEspacio }) {
  return (
    <div className="border">
      <h1>Informazioa</h1>
      {selectedEspacio ? (
        <form>
          <p>
            Izena
            <input
              type="text"
              name="izena"
              value={selectedEspacio.name}
              readOnly
            />
            Tokia
            <input
              type="text"
              name="tokia"
              value={selectedEspacio.location}
              readOnly
            />
          </p>
          <p>
            Mota
            <input
              type="text"
              name="mota"
              value={selectedEspacio.type}
              readOnly
            />
          </p>
          <p>
            Turismo euskadi
            <input
              type="text"
              name="turismo"
              value={selectedEspacio.turismoEuskadi}
              readOnly
            />
          </p>
          <p>
            Deskripzioa
            <input
              type="text"
              name="deskripzioa"
              value={selectedEspacio.description}
              readOnly
            />
          </p>
        </form>
      ) : (
        <p>No space selected</p>
      )}
    </div>
  );
}
