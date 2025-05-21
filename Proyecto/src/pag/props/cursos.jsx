import React from "react";
import  CursosInf  from "./cursosinf";


const cursos = [
    {
        id: 1,
        nombre: "Curso de Python Básico",
        nivel: "Principiante",
        duracion: "10 lecciones",
    },
    {
        id: 2,
        nombre: "Curso de JavaScript y Web",
        nivel: "Intermedio",
        duracion: "15 lecciones",
    },
    {
        id: 3,
        nombre: "Lógica y Pensamiento Computacional",
        nivel: "Principiante",
        duracion: "8 lecciones",
    },
    {
        id: 4,
        nombre: "Curso de Desarrollo Web Completo",
        nivel: "Intermedio",
        duracion: "20 lecciones",
    },
    {
        id: 5,
        nombre: "Curso de sql server",
        nivel: "intermedio",
        duracion: "12 lecciones",
    },
    {
        id: 6,
        nombre: "Curso de JavaScript Avanzado",
        nivel: "Avanzado",
        duracion: "22 lecciones",
    }
]

export default function Cursosaplicados(){
    return (
        cursos.map(({id,nombre, nivel, duracion}) => (
            <CursosInf
                key={id}    
                nombre={nombre}
                nivel={nivel}
                duracion={duracion}
            />
        ))
    )
}