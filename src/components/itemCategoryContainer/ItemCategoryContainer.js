/*##################################
            Importaciones
####################################*/
//Modulos
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
//Firebase imports
import {db} from "../../services/firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
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

    /* const devolucion = new Promise((resolve,  reject ) =>{

            fetch("../data/Data.json")
            .then(res => res.json())
            .then(json => resolve(json.filter((element) => element.categoryId === categoryId)));
        
    });

    useEffect(() => {
        devolucion.then((respuesta) => setProductos(respuesta))
    },[categoryId]); */

    useEffect(() => {
        const getData = async() => {
            //esta linea de abajo trae los productos de coincidan con la categoria y si no los trae todo (esto ultimo esta luego de los dos puntos donde se consulta por la collecion db llamada listaProductos)
            const queryRef = categoryId ? query(collection(db, "listaProductos"), where("category", "==", categoryId)) : collection(db, "listaProductos") ;
        
            const response = await getDocs(queryRef);
        
            const docsInfo= response.docs.map( doc => {
                const newDoc = {
                id: doc[0].id,
                ...doc[0].data()
            }
            return newDoc;
            });
            setProductos(docsInfo)
        }
        getData();
    },[])

    
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




/* const getData = async() => {
    //esta linea de abajo trae los productos de coincidan con la categoria y si no los trae todo (esto ultimo esta luego de los dos puntos donde se consulta por la collecion db llamada listaProductos)
    const queryRef = productoId ? query(collection(db, "listaProductos"), where("category", "==", productoId)) : collection(db, "listaProductos") ;

    const response = await getDocs(queryRef);

    const docsInfo= response.docs.map( doc => {
        const newDoc = {
        id: doc[0].id,
        ...doc[0].data()
    }
    return newDoc;
    });
    setRender(docsInfo)
}
getData(); */