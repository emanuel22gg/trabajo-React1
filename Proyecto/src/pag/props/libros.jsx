import React from 'react'
import LibrosInf from './librosinf'
import libro1 from '../../assets/img/libroJs.png'
import libro2 from '../../assets/img/libroSql.png'
import libro3 from '../../assets/img/granLibro.png'
const librosVent = [
    {
    libro: "programacion javascript",
    precio: 25000,
    descripcion: "introduccion a la programacion con javascript, fundamentos y conceptos basicos",
    img: libro1
    },
    {
    libro: "libro de sql",
    precio: 17000,
    descripcion: "habla sobre fundamentos basicos sobre bases de datos relacionales",
    img: libro2
    },
    {libro: "gran libro de html y css",
    precio: 20000,
    descripcion: "contiene informacion sobre html,css y javascript",
    img: libro3
    }
]

export default function VentaLibros() {
    return (
        librosVent.map(({libro, precio, descripcion,img}) => (
            <LibrosInf
                key={libro}
                Nomlibro={libro}
                precio={precio}
                descripcion={descripcion}
                img={img}
            />
        ))
    )
}