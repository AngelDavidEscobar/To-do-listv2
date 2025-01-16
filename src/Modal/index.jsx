import "./Modal.css"
import { createPortal } from "react-dom";


function Modal({ children }){
    return createPortal(
        <div className="ModalBackground">
            <div className="modal-container">
            {children}
            </div>
            
        </div>,
        document.getElementById('modal')
    );
}


export {Modal}