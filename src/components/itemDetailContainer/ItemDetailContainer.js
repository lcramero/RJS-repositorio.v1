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

        fetch (`./data/Data.json/${productoId}`)
                .then(res => res.json())
                .then(Render => setRender (<ItemDetail key={Render.id} id={"producto" + Render.id} data={Render} />))

    },[productoId])
    
    return(
        
        <div>
            <section> 
                {Render}
            </section>
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemDetailContainer