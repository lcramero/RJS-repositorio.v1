/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./ItemDetail.css"
//Componentes
import ItemCount from "../itemCount/ItemCount.js"
import { Link } from "react-router-dom"
/*##################################
            Logica
####################################*/
const ItemDetail = (props) => {
    
    const {title, category, description, price, image, stock} = props

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
                    <p id="price">U$D{price}</p>
                    <p id="category">{category}</p>
                </div>
                <div>
                    <ItemCount stock={stock}/>
                </div>
            </div>
        </article>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemDetail