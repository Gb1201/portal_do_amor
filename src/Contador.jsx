import { useState } from "react";


//esse arquivo sera uma especie de contador

function Contador(){
    const [contador, setContador] = useState(0) //criar uma variavel a qual o contador comeca do 0

    //criar funcoes de aumentar e diminuir o contador

    function aumentarContador(){
        setContador(contador+1)
    }

    function diminuirContador(){
        setContador(contador-1)
    }


    return(
        <div>
            <h2>Contador: {contador} </h2>
            <button onClick={aumentarContador}>Aumentar </button>
            <button onClick={diminuirContador}> Diminuir </button>
        </div>
    )
}

export default Contador