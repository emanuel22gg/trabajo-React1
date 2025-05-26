import React,{useState} from "react";
import './BotonC.css';

export default function BotonesC(){
    const [count, setCount] = useState(0)
    const Btonreset=()=> setCount(0)
    const Btonsuma=() => setCount(count + 1)
    const Btonresta=() => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            alert("No tienes productos en el carrito");
        }
    }

    return(
        
        <div>
            <strong>agregar al carrito</strong><br />
            <button onClick={Btonsuma}>+1</button>  
            <button onClick={Btonresta}>-1</button> 
            <button onClick={Btonreset}>0</button> 
            <p>llevas:{count} productos</p>
        </div>
    )
}