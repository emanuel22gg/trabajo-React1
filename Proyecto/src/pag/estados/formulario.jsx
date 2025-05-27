import React,{useState} from "react";

export default function Formulario(){

    const [nombre, setNombre]= useState("");
    const [apellido, setApellido]= useState("");
    const [telefono, setTelefono]= useState("");
    const [correo, setCorreo]= useState("");

    const [errorNombre, setErrorNombre] = useState("");
    const [errorApellido, setErrorApellido] = useState("");
    const [errorTelefono, setErrorTelefono] = useState("");
    const [errorCorreo, setErrorCorreo] = useState("");

    const nomVal = (e) => {
        const valor = e.target.value;
        setNombre(valor);
        if (valor === "") {
            setErrorNombre("el campo debe de estar lleno");
        } else if (valor.length < 5 || valor.length > 30) {
            setErrorNombre("el nombre debe de tener más de 5 y menos de 30 letras");
        }
        else {
            setErrorNombre("");
        }
    };
    const apeVal= (e)=> {
        const valor = e.target.value;
        setApellido(valor);
        if (valor===""){
            setErrorApellido("el campo debe de estar lleno");
            }
        else if (valor.length <=3 || valor.length >=30){
            setErrorApellido("el apellido debe de tener mas de 5 y menos de 30 letras");
        }
        else{
            setErrorApellido("");
        }
    };

    const telVal= (e)=> {
        const valor = e.target.value;
        setTelefono(valor);
        if (valor===""){
            setErrorTelefono("el campo debe de estar lleno")
        }
        else if (valor.length <7 || valor.length >10){
            setErrorTelefono("el telefono debe de tener 7 o 10 digitos")
        }
        else{
            setErrorTelefono("");
        }

    };

    const corrVal= (e) => {
        const valor = e.target.value;
        setCorreo(valor);
        if(valor===""){
            setErrorCorreo("el campo debe de estar lleno");
        }
        else if (!valor.includes("@") || !valor.includes(".") || valor.length < 5){
            setErrorCorreo("el correo debe de tener un @, un punto y más de 5 letras");
        }
        else if (valor.length > 50){
            setErrorCorreo("el correo no debe de tener más de 50 letras");
        }
        else{
            setErrorCorreo("");
        }

    };
        
    return(
        <form action="">
            <label htmlFor={nombre}>nombre:</label>
            <input type="text" value={nombre} onChange={nomVal} placeholder="ej. carlos" /> 
            <p>{errorNombre}</p> <br />
            <label htmlFor={apellido}>apellido:</label>
            <input type="text" value={apellido} onChange={apeVal} placeholder="ej. perez" />
            <p>{errorApellido}</p><br />
            <label htmlFor={telefono}>telefono:</label>
            <input type="number" value={telefono} onChange={telVal} placeholder="ej. 301457367" />
            <p>{errorTelefono}</p> <br />
            <label htmlFor={correo}>correo:</label>
            <input type="text" value={correo} onChange={corrVal} placeholder="ej. carlitos@gmail.com" />
            <p>{errorCorreo}</p>
        </form>

    )
} 