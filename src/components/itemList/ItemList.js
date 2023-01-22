/*##################################
            Importaciones
####################################*/
//Modulos
import { useState,} from "react"

//Estilos
import "./ItemList.css"
//Componentes
import Item from "../item/Item"
/*##################################
            Logica
####################################*/
const ItemList = () => {
    const [Render, setRender] = useState ([])    
/*Añadimos la Promise, la funcion de esta es traer la informacion una vez que esta se cumple*/
    const devolucion = new Promise ((resolve, /* reject */) => {
        resolve(
            fetch ("./data/Data.json")
                .then((res) => res.json())
                .then((json) => json.map( (p) => <Item data = {p}/>))
        );
    });
        devolucion.then((data) => {
            setRender(data);
    });

    return(
        <div className="div-itemList">
            <div className="div-itemList-render">
                {Render}
            </div>
        </div>
    )
}
/*##################################
            Exportraciones
####################################*/
export default ItemList