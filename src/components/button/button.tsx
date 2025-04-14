import { ReactNode } from "react";
import "./button.css"
import { useGlobalContext } from "../../context/global.context";

interface props {

    children: ReactNode,
    parentMethod: () => void
}

interface childrenProps {
    children: ReactNode,
}

export const ColorRed = ({ children }: childrenProps ) => {  
    const {value} = useGlobalContext()
    return (<div className="color-red">{value}:{children}</div>)
}

export const Button = ({children, parentMethod}: props) => {
    const {setValue} = useGlobalContext()

    const handleClick = () => { 
        setValue(10)
        parentMethod()
    }
    return (
        <button className='custom-button' onClick={handleClick}>
        {children}
      </button>
    )
}
