import { useRef } from "react";

export const FocusInput = () => {
    const inputref = useRef<HTMLInputElement>(null);
    
    const handleButtonClick = () => {
        if(!inputref.current) {
            console.log("No existe la referencia al elemento")
            return
        }
        inputref.current.focus()
    }
    return (
        <div>
            <input type="text" ref={inputref} placeholder="Escribe algo aqui..." />
            <button onClick={handleButtonClick}>Enfocar en el Input</button>
        </div>
    )
}
