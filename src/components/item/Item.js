/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./Item.css"
//Componentes
import ItemCount from "../itemCount/ItemCount"
/*##################################
            Logica
####################################*/
const Item = (props) => {
    
    return(
        <div className="div-item">
            <div>
            <p>{props.data.nombre}</p>
            </div>
            <div className="div-img">
                <img src= {props.data.image} height={150} width={150} />
            </div>
            <div>
                <p>{props.data.descripcion}</p>
                <p>U$D{props.data.precio}</p>
                <p>{props.data.categoria}</p>
            </div>
            <div>
            <ItemCount stock={props.data.stock}/>
            </div>
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default Item