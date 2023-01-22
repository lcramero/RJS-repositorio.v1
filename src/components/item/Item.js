/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./Item.css"
//Componentes
import ItemCount from "../itemCount/ItemCount"
import {Link} from 'react-router-dom';
/*##################################
            Logica
####################################*/
const Item = (props) => {

    const {title, id, stock, image} =props.data

    return(
        <div className="div-item">
            <div className="div-title">
                <h3>{title}</h3>
            </div>
            <div className="div-img">
                <img src= {image} />
            </div>
            <div className="div-link">
                <Link to= {`/products/${id}`}>ver detalle del producto</Link>
            </div>
            <div>
            <ItemCount stock={stock}/>
            </div>
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default Item