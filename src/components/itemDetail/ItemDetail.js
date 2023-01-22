/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./ItemDetail.css"
//Componentes
import ItemCount from "../itemCount/ItemCount"
import { Link } from "react-router-dom"
/*##################################
            Logica
####################################*/
const ItemDetail = (props) => {
    
    const {title, category, description, price, image, stock} = props

    return(
        <article className="itemDetail-article">

            <div className="div-item">
                <div>
                    <h3>{title}</h3>
                </div>
                <div className="div-img">
                    <img src= {image} />
                </div>
                <div>
                    <p>{description}</p>
                    <p>U$D{price}</p>
                    <p>{category}</p>
                </div>
                <div>
                    <ItemCount stock={stock}/>
                </div>
            </div>
            <div>
                <Link to="/products"></Link>
            </div>
        </article>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemDetail