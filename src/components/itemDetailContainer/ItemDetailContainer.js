/*##################################
            Importaciones
####################################*/
//Modulos
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

        fetch ("./data/Data.json")
                .then(res => res.json())
                .then((p) => setRender (p))

    },[productoId])
        const arrayProductos = [...new Set(Render.map((item)=>item.id))]

        const renderItem = (item) => {
            return(
                    <div>
                        <section> 
                            {arrayProductos.filter( (product) => product.id === item.id).map(product =>{
                                return <ItemDetail data ={product}/>
                            })}
                        </section>
                    </div>
            );
        };
        return( 
        <div>
            {arrayProductos.map(renderItem)}
        </div>
        )
    }
/*##################################
            Exportraciones
####################################*/
export default ItemDetailContainer
