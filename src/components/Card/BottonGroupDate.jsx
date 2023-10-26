import { useState } from "react"


function BottonGroupDate() {
    const [date, setDate]=useState("Octubre")
    function handleClick(){
         setDate("26 de octubre")
    }
    return (
    <>
        <h3>{date}</h3>
        <div  id='Group'>
            <button onClick={handleClick    } id='Button'>Dia</button>
            <button onClick={()=>{setDate("23 al 29 de octubre")}} id='Button'>Semana</button>
            <button onClick={()=>{setDate("Octubre")}} id='Button'>Mes</button>
        </div>
    </>
    )
}
export default BottonGroupDate

