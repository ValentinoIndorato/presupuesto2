import Modal from "./Form/FormDashboard/Modal"
import { useState } from "react"
function Button({p}){
    const [openModal, setOpenModal]=useState(false)
return(
    <>
    {p!==null ?
    <>
    <button className="addButton" onClick={()=>{setOpenModal(true)}}>+ Nuevo</button>
    {openModal && <Modal closeModal={setOpenModal}/>}</>
    :<button className="register-button">Inscribirse</button>}
    </>
)
}
export default Button