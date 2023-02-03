/*##################################
            Importaciones
####################################*/
//Modulos
import { useState } from "react"
//Estilos
import "./ItemDetail.css"
//Componentes
import ItemCount from "../itemCount/ItemCount"
import {CartProvider, useCartContext} from "../../context/CartContext"
/*##################################
            Logica
####################################*/
const ItemDetail = (props) => {

    const [cantidadProductosAComprar, setCantidadProductosAComprar] = useState (0)

    const {id, title , category, description, price, image, stock} = props

    const funcionHijoGuardarCantidad = (cantidadX) => {
        setCantidadProductosAComprar(cantidadX)
    }
    const {agregarAlCarrito} = useCartContext()
    //Funcion agregar
    const onAdd = () => {
        if (cantidadProductosAComprar != 0){
            const producto = {
            id: id,
            title: title,
            category: category,
            price: price,
            count: cantidadProductosAComprar
            }
                agregarAlCarrito(producto)
            } else{
                alert("Debes ingresar al menos un producto al carrito")
            }
        }
        
        
        return(
            <article className="itemDetail-article">

            <div className="div-item">
                <div className="div-detail-title">
                    <h3>{title}</h3>
                </div>
                <div className="div-img">
                    <img src= {image} />
                </div>
                <div>
                    <p id="description">{description}</p>
                    <p id="category">{category}</p>
                    <p id="price">U$D{price}</p>
                </div>
                <div className="div-itemCount-buttons">
                    <div>
                        {<ItemCount stock={stock} guardarCantidadAComprar={funcionHijoGuardarCantidad}/>}
                    </div>
                    <div className="div-itemcount-buttons-onadd">
                        <button onClick={onAdd}><h5>Add</h5></button>
                    </div>
                </div>
            </div>
        </article>
    )
}
    


/*##################################
            Exportraciones
####################################*/
export default ItemDetail