import React from "react";

export default function Header() {
    return (
      <header className="header">
        <h1 className="h1">eoCode</h1>
        <nav className="mt-2">
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Ruta de Aprendizaje</a>
          <a href="#" className="nav-link">Cursos</a>
          <a href="#" className="nav-link">Recursos</a>
          <a href="#" className="nav-link">Contacto</a>
        </nav>
      </header>
    )
}