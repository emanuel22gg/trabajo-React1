import React,{useState} from "react";
import Swal from 'sweetalert2';

export default function Formulario(){

    const [nombre, setNombre]= useState("");
    const [apellido, setApellido]= useState("");
    const [telefono, setTelefono]= useState("");
    const [correo, setCorreo]= useState("");

    const [errorNombre, setErrorNombre] = useState("");
    const [errorApellido, setErrorApellido] = useState("");
    const [errorTelefono, setErrorTelefono] = useState("");
    const [errorCorreo, setErrorCorreo] = useState("");

    const formularioValido =
        nombre &&
        apellido &&
        telefono &&
        correo &&
        !errorNombre &&
        !errorApellido &&
        !errorTelefono &&
        !errorCorreo;

    const limpiarFormulario = () => {
        setNombre("");
        setApellido("");
        setTelefono("");
        setCorreo("");
        setErrorNombre("");
        setErrorApellido("");
        setErrorTelefono("");
        setErrorCorreo("");
    };

    const enviarDatos= () => {
        if (formularioValido) {
            Swal.fire({
                icon: 'success',
                title: '¡Datos guardados!',
                text: 'Tus datos han sido enviados correctamente.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'Aceptar'
            });
            limpiarFormulario();
        } 
        else {
            Swal.fire({
                icon: 'error',
                title: 'Formulario incompleto',
                text: 'Por favor, completa el formulario correctamente.',
                confirmButtonColor: '#d33',
                confirmButtonText: 'Ok'
            });
            }
}

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
        
return (
        <div className="container mt-5 d-flex justify-content-center">
            <form className="p-4 border rounded shadow bg-white" style={{ minWidth: "320px", maxWidth: "400px", width: "100%" }}>
                <h4 className="mb-4 text-center">Formulario de Registro</h4>
                <div className="mb-3">
                    <label className="form-label">Nombre:</label>
                    <input type="text" className="form-control" value={nombre} onChange={nomVal} placeholder="ej. carlos" />
                    <div className="form-text text-danger">{errorNombre}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Apellido:</label>
                    <input type="text" className="form-control" value={apellido} onChange={apeVal} placeholder="ej. perez" />
                    <div className="form-text text-danger">{errorApellido}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Teléfono:</label>
                    <input type="number" className="form-control" value={telefono} onChange={telVal} placeholder="ej. 301457367" />
                    <div className="form-text text-danger">{errorTelefono}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo:</label>
                    <input type="text" className="form-control" value={correo} onChange={corrVal} placeholder="ej. carlitos@gmail.com" />
                    <div className="form-text text-danger">{errorCorreo}</div>
                </div>
                <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-primary" onClick={enviarDatos} disabled={!formularioValido} >Guardar</button>
                    <button type="reset" className="btn btn-secondary" onClick={limpiarFormulario}>Cancelar</button>
                </div>
            </form>
        </div>
    );

    }