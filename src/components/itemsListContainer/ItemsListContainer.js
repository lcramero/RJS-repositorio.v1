/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "../itemsListContainer/ItemsListContainer.css"
//Componentes
import ItemList from "../itemList/ItemList"
/*##################################
            Logica
####################################*/
const ItemsListContainer= () => {
    
    return(
        <div className="div-itemlistcontainer-akamain">
            <h2>Listado de Productos</h2>
            <ItemList />
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemsListContainer