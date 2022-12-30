/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "../cardWidget/CardWidget.css"
//Componentes
/*##################################
            Logica
####################################*/
const CarWidget = (props) => {
    
    return(
        <div>
            Carrito{props.cantidad}
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default CarWidget