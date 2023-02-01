/*##################################
            Importaciones
####################################*/
//Modulos
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
//Estilos
import "./ItemDetailContainer.css"
//Componentes
import ItemDetail from "../itemDetail/ItemDetail.js";
/*##################################
            Logica
####################################*/
const ItemDetailContainer = () => {

    const [Render, setRender] = useState ([]) 

    const {productoId} = useParams()

    useEffect(() => {

        fetch ("../data/Data.json")
                .then(res => res.json())
                .then((p) => {
                    setRender (p.filter((product) => product.id === parseInt(productoId)).shift())
                })

    },[productoId])

        return( 
        <div className="div-itemDetailContainer">
            <div className="div-link">
                <Link to = '/'>
                Volver a la lista de productos
                </Link>
            </div>
            <div className="div-itemDetail">
                <ItemDetail 
                title = {Render.title} 
                category = {Render.category} 
                description = {Render.description} 
                price = {Render.price} 
                image = {Render.image}
                stock = {Render.stock}
                />
            </div>
        </div>
        
        )
    }
/*##################################
            Exportraciones
####################################*/
export default ItemDetailContainer
