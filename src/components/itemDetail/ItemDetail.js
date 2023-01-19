/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./ItemDetail.css"
//Componentes
/*##################################
            Logica
####################################*/
const ItemDetail = (props) => {
    
    const {title, category, description, price, image} = props.data

    return(
        <article className="itemDetail-article">

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
            </div>
        </div>

        </article>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemDetail