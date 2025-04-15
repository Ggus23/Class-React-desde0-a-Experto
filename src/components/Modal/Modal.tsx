import {  useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalContext } from "./Context/useModalContext";
import "./Modal.css"

interface Props {
children: React.ReactNode;
}

const eventListener = "keydown"

export const Modal = ({ children }: Props) => {   
    const modalRef = useRef<HTMLDivElement>(null)

    const {state, setState} = useModalContext();

    const closeModal = () => {setState(false)};

    const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }
    
    const modalRoot = document.getElementById("modal");

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setState(false);
            }
            if(state){
                document.addEventListener(eventListener, handleEsc);
            }

            return () => {
                document.removeEventListener(eventListener, handleEsc);
            }

        }
    },[setState, state])
    if(!state || !modalRoot) {
        return null;
    }

    return createPortal(
        <div className="overlay" onClick={closeModal}>
            <div className="modal" onClick={handleContentClick} ref={modalRef}>
                {children}
                <button className="close-button" onClick={closeModal}>Cerrar</button>
            </div>
        </div>
    , modalRoot) 
 }
 