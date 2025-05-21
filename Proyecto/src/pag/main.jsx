import React from "react";
import CursosAplicados from "./props/cursos";
export default function Main() {
    return (
        <main>
            <section className="hero">
                <h1 className="mb-3">Aprende a programar desde cero</h1>
                <p className="mb-4">Guías claras, proyectos reales y todo lo que necesitas para comenzar en el mundo del código.</p>
                <a href="#" className="btn-custom">Comienza Gratis</a>
            </section>

            <section className="section">
                <h2>¿Qué aprenderás aquí?</h2>
                <ul className="mt-3">
                    <li>✅ Fundamentos de programación explicados fácil</li>
                    <li>✅ Python y JavaScript desde cero</li>
                    <li>✅ Proyectos prácticos paso a paso</li>
                    <li>✅ Recursos, consejos y comunidad de apoyo</li>
                </ul>
            </section>

            <section className="section">
                <h2>Ruta de Aprendizaje</h2>
                <ol className="mt-3">
                    <li>Introducción y lógica de programación</li>
                    <li>Aprende Python paso a paso</li>
                    <li>Inicia con JavaScript y desarrollo web</li>
                    <li>Crea proyectos reales</li>
                    <li>Publica tu código en línea</li>
                </ol>
                <a href="#" className="btn-custom mt-3">Ver ruta completa</a>
            </section>


            <section className="section">
                <h2>Cursos Disponibles</h2>
                    <CursosAplicados />
            </section>

            <section className="section">
                <h2>Proyectos que podrás construir</h2>
                <ul className="mt-3">
                    <li>🧾 Calculadora interactiva</li>
                    <li>✅ App de tareas</li>
                    <li>🎮 Juego de adivinar el número</li>
                    <li>🌐 Tu primera página web personal</li>
                </ul>
            </section>

            <section className="hero">
                <h2 className="mb-4">¿Listo para empezar tu camino como programador?</h2>
                <a href="#" className="btn-custom">Comenzar gratis ahora</a>
            </section>
        </main>
    )
}