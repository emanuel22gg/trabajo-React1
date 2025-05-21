import React from "react";

export default function CursosInf({nombre, nivel, duracion}) {
    return (
        <div className="card-custom">
            <strong>{nombre}</strong><br />
            Nivel: {nivel} - Duración: {duracion}
        </div>
    )
}