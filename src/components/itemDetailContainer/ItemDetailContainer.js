/*##################################
            Importaciones
####################################*/
//Modulos
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

//Firebase imports
import {db} from "../../services/firebase"
import { doc, getDoc, query, where } from "firebase/firestore";
//Estilos
import "./ItemDetailContainer.css"
//Componentes
import ItemDetail from "../itemDetail/ItemDetail.js";
/*##################################
            Logica
####################################*/
const ItemDetailContainer = () => {

    const [Render, setRender] = useState ([]) 
    //con el use params capturamos el Id desde la URL
    const {productoId} = useParams()

    useEffect(() => {

        const getProducto = async() => {
            //esta linea de abajo trae los productos de coincidan con la categoria y si no los trae todo (esto ultimo esta luego de los dos puntos donde se consulta por la collecion db llamada listaProductos)
            const queryRef = productoId ? query(doc(db, "listaProductos",productoId), where("category", "==", productoId)) : doc(db, "listaProductos",productoId) ;

            const response = await getDoc(queryRef);
            
            const newDoc = {
                id: response.id,
                ...response.data()
            }
            setRender(newDoc)
        }
        getProducto();


        /*  fetch ("../data/Data.json")
                .then(res => res.json())
                .then((p) => {
                    setRender (p.filter((product) => product.id === parseInt(productoId)).shift())
                }) */

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
                id = {Render.id}
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
