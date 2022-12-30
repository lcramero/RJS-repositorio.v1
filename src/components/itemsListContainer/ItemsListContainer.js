/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "../itemsListContainer/ItemsListContainer.css"
//Componentes
/*##################################
            Logica
####################################*/
const ItemsListContainer= (props) => {
    
    return(
        <p>
            Este es el componente contenedor ItemsListContainer {props.greetings}
        </p>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemsListContainer