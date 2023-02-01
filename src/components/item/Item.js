/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./Item.css"
//Componentes
import {Link} from 'react-router-dom';
/*##################################
            Logica
####################################*/
const Item = (props) => {

    const {title, id, image, price} =props.data

    return(
        <div className="div-item">
            <div className="div-title">
                <Link to= {`/products/${id}`}><h3>{title}</h3></Link>
            </div>
            <div className="div-img">
                <img src= {image} />
            </div>
            <div className="div-link">
                <Link to= {`/products/${id}`}>ver detalle del producto</Link>
            </div>
            <div className="div-price">
                <h4>U$D{price}</h4>
            </div>
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default Item