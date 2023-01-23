/*##################################
            Importaciones
####################################*/
//Modulos
import { useState } from "react"
//Estilos
import "../itemCount/ItemCount.css"
//Componentes
/*##################################
            Logica
####################################*/
const ItemCount = (props) => {
    //props.stock ="7"
    //Tener en cuenta las condiciones
    //manejo de estado
    //useState
    const [count, setCount] = useState(0)
    //Metodos de suma y resta

    //Funciones de suma y resta
    const addOne = () => {
        if(count < props.stock)
        setCount (count + 1)
    }
    const disOne = () =>{
        if (count > 0){
            setCount (count - 1)
        }
    }
    //Funcion agregar
    const onAdd = () =>{
        console.log(count)
    }

    return(
        <div className="div-itemcount">
            <div className="div-itemcount-buttons-add-dis">
                <div>
                    <button onClick={addOne}><h5>+</h5></button>
                </div>
                <div>
                    <p>{count}</p>
                </div>
                <div>
                    <button onClick={disOne}><h5>-</h5></button>
                </div>
            </div>
            <div className="div-itemcount-buttons-onadd">
                <button onClick={onAdd}><h5>Add</h5></button>
            </div>
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemCount