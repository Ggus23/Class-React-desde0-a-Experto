//objetivo: nos permite crear una referencia mutable que persiste durante todo el ciclo de vida del componente.
// Sin causar un re-render del componente al cambiar su valor.
// objetivo2: hacer referencia de un elemento del DOM, como un input, un div, etc.

import { useRef, useState } from "react"

//Ejemplo:-
//Un marcador de un libro que utilizamos para guardar la ultima posicion de la lectura
//NO modifica el contenido del libro

export const BookReader = () => {
    const currentPageRef = useRef<number>(1)
    const [currentPage, setCurrentPage] = useState<number>(1)

    const nextPage = () => {
        currentPageRef.current = currentPageRef.current + 1;
        console.log(`Avanzaste a la pagina: ${currentPageRef.current}`)
    }
    const previousPage = () => {
        if(currentPageRef.current === 1) {
            console.log(`No se puede retroceder la pagina porque ya te encuentras en: 
                ${currentPageRef.current}`)        
        }

        currentPageRef.current = currentPageRef.current - 1;
        console.log(`Retrocediste a la pagina: ${currentPageRef.current}`)
    }

    const goToPage = (page: number) => {
        if(page < 1) {
            console.log(`No se puede ir a la pagina ${page} porque no existe`)
            return
        }

        currentPageRef.current = page;
        setCurrentPage(page)
        console.log(`Fuiste a la pagina: ${currentPageRef.current}`)
    }
    return (
        <div>
            <h2>Lectura de libro</h2>
            <p>Pagina actual: {currentPageRef.current}</p>
            <p>Pagina actual [state]: {currentPage}</p>
            <button onClick={previousPage}>Pagina Anterior</button>
            <button onClick={nextPage}>Pagina Siguiente</button>
            <button onClick={() => { goToPage(50) }}>Ir a la pagina 50</button>
        </div>
    )
}