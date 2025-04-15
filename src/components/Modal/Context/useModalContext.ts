import { useContext } from "react";
import { ModalContext } from "./Modal.context";

export const useModalContext = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error("Modal is being used outside of its provider");
    }
    return context;
}