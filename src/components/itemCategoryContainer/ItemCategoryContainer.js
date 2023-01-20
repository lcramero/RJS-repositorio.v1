/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./ItemCategoryContainer.css"
//Componentes
import ItemList from "../itemList/ItemList"

/*##################################
            Logica
####################################*/
const ItemCategoryContainer = () => {
    const devolucion = new Promise((resolve, /* reject */) =>{
        resolve (
            fetch("./data/Data.json")
            .then(res => res.json())
            .then(json => console.log(json))
        )
        console.log(devolucion);
        ;
    })
    
    return(
        <div className="div-itemlistcontainer-akamain">
            <h2>{/* {category} */}</h2>
            <ItemList />
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemCategoryContainer