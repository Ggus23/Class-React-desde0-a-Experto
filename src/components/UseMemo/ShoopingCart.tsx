// Objetivo: memorizar (caché) el resultado de ejecutar una función costosa
// para evitar que se vuelva a llamar el metodo
// Controlar si el veneficio de memorizarlo es superior al recalcular

import { useMemo, useState } from "react";

// Ejemplo: 
// Tenemos una lista de compras y ya calculaste el costo total de hacer toda la compra
// Si no agregamos nada ni tampoco cambio nada, cual es el costo total?

interface Item {
    id: number;
    name: string;
    price: number;
}

export const ShoopingCart = () => {
    const [items, setItems] = useState<Item[]>([
        {
            id: 1,
            name: "Leche",
            price: 1.5
        },
        {
            id: 2,
            name: "Pan",
            price: 0.8
        },
        {
            id: 3,
            name: "Carne",
            price: 5.0
        }
    ]);
    const [discount, setDiscount] = useState<number>(0);

    const totalcost = useMemo(() => 
    items.reduce((total, item) => total + item.price, 0), [items]);

    const finalCost = useMemo(() => totalcost - discount, [totalcost, discount]
    ) 

    const addItem = () => {
        const newItem ={
            id: items.length + 1,
            name: `Producto ${items.length + 1}`,
            price: Math.random() * 5
        }
        setItems([...items, newItem])
    }
    return (
        <div>
            <h2>Lista de Compras</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name}: ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <p>Costo Total: ${totalcost.toFixed(2)}</p>

            <p>Descuento: $
                <input 
                type="number" 
                value={discount} 
                onChange={e => setDiscount(parseFloat(e.target.value)|| 0)}/>
            </p>
            <p>Costo Final: ${finalCost.toFixed(2)}</p>

            <button onClick={addItem}> Agregar Producto </button>
        </div>
    )
}
