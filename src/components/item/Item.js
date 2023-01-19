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

    const {title, category, description, price, id, stock, image} =props.data

    return(
        <div className="div-item">
            <div>
                <h3>{title}</h3>
            </div>
            <div className="div-img">
                <img src= {image} height={135} width={150} />
            </div>
            <div>
                <p>{description}</p>
                <p>U$D{price}</p>
                <p>{category}</p>
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