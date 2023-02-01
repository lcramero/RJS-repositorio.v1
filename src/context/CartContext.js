/***************************
Importaciones
****************************/
import {useContext, createContext, useState} from "react";

//creamos el contexto y lo exportamos
export const CartContext = createContext([])
//creamos y exportamos la funcion que utiliza al hook useContext
export const useCartContext = () => { return (useContext (CartContext)) }
//creamos el componente que proveera el contexto

const CartProvider = ({children}) => {

    const  [items, setItems] = useState([])
    
    const agregarAlCarrito = (data) => {

        if (validarProductoExistente(data.id)){

            alert("El producto ya se cargó al carrito")

        } else{

            const listaActual = items;
            listaActual.push(data)
            setItems(listaActual)
            console.log(items);
            
        }
    }
    
    const borrarDelCarrito = (id) => {
        const nuevaLista = items.filter(e => e.id !== id)
        setItems(nuevaLista)
    }

    
    const limpiarDelCarrito = () => {
        setItems ([])
    }

    
    const validarProductoExistente = (id) => {
        if(items.find(e => e.id === id)){
            return true
        } else{
            return false
        }
    }
    return(
        <CartContext.Provider value={{items, agregarAlCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider







