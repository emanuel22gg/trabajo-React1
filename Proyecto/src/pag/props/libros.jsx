import React from 'react'
import LibrosInf from './librosinf'
const librosVent = [
    {
    libro: "programacion javascript",
    precio: 25000,
    descripcion: "libro de programacion javascript"
    },
    {
    libro: "programacion java",
    precio: 17000,
    descripcion: "libro de programacion java"
    },
]

export default function VentaLibros() {
    return (
        librosVent.map(({libro, precio, descripcion}) => (
            <LibrosInf
                key={libro}
                Nomlibro={libro}
                precio={precio}
                descripcion={descripcion}
            />
        ))
    )
}