/*##################################
            Importaciones
####################################*/
//Modulos
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
//Estilos
import "./ItemCategoryContainer.css"
//Componentes
import Item from "../item/Item"

/*##################################
            Logica
####################################*/
const ItemCategoryContainer = () => {

    const {categoryId} = useParams ();

    const [productos, setProductos] = useState([]);

    const devolucion = new Promise((resolve, /* reject */) =>{

            fetch("../data/Data.json")
            .then(res => res.json())
            .then(json => resolve(json.filter((element) => element.categoryId === categoryId)));
        
    });

    useEffect(() => {
        devolucion.then((respuesta) => setProductos(respuesta))
    },[categoryId]);
    
    return(
        <div className="div-itemCategoryContainer">
            {productos.map((elemento) => (
                <Item data= {elemento} key={elemento.id} /> 
            ))}
        </div>
    );
};

/*##################################
            Exportraciones
####################################*/
export default ItemCategoryContainer