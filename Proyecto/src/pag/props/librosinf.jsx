import React from "react";
import BotonesC from "../estados/botonC";


export default function LibrosInf({Nomlibro, precio, descripcion, img}) {
    return (
        <div className="card text-center shadow-sm" style={{ width: "19rem", height: "24rem", margin: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)" }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center h-100">
                <h5 className="card-title"><strong>{Nomlibro}</strong></h5>
                <img src={img} className="card-img-top" alt={Nomlibro} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
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