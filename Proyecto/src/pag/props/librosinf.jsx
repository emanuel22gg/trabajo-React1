import React from "react";
import BotonesC from "../estados/botonC";

export default function LibrosInf({Nomlibro, precio, descripcion}) {
    return (
        <div className="card text-center shadow-sm" style={{ width: "18rem", height: "18rem", margin: "1rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center h-100">
                <h5 className="card-title">{Nomlibro}</h5>
                <p className="card-text">
                    <strong>Precio: ${precio}</strong> 
                </p>
                <p className="card-text"> 
                    <strong>Descripcion:</strong> {descripcion}
                </p>
                <div className="d-flex justify-content-center align-items-center">
                    <BotonesC />
                </div>
            </div>
        </div>
    );
}