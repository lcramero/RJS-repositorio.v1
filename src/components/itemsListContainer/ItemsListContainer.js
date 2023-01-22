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
            <div className="div-banner">
                <img src="https://altagraciadigital.com/wp-content/uploads/2019/08/banner2.jpg"></img>
            </div>
            <h2>Listado de Productos</h2>
            <ItemList />
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemsListContainer