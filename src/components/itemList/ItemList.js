/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./ItemList.css"
//Componentes
import Item from "../item/Item"
/*##################################
            Logica
####################################*/
const ItemList = () => {
    const listaDeProductos = [
        {
            id: 1,
            nombre: "Rafting",
            descripcion: "Descensos guiados por el río en grupos de hasta 6 personas",
            precio: 40,
            categoria: "actividad exteriores agua",
            stock: 18,
            image: "../../img/rafting.jpeg"
        },
        {
            id: 2,
            nombre: "Kayak",
            descripcion: "Recorridos guiados por el lago en grupos o individuales",
            precio: 35,
            categoria: "actividad exteriores agua",
            stock: 20,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/375px-Rio_Salvaje_Jalcomulco.jpegs"
        },
        {
            id: 3,
            nombre: "Catamaran",
            descripcion: "Recorridos guiados por el lago en grupos de hasta 12 personas",
            precio: 25,
            categoria: "actividad exteriores agua",
            stock: 25,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/375px-Rio_Salvaje_Jalcomulco.jpegs"
        },
        {
            id: 4,
            nombre: "Diving",
            descripcion: "Exploraciones guiadas en el lago en grupos de hasta 6 personas",
            precio: 45,
            categoria: "actividad exteriores agua",
            stock: 19,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/375px-Rio_Salvaje_Jalcomulco.jpegs"
        },
        {
            id: 5,
            nombre: "Trekking",
            descripcion: "Recorridos guiados por senderos en grupos de hasta 24 personas",
            precio: 20,
            categoria: "actividad exteriores tierra",
            stock: 16,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/375px-Rio_Salvaje_Jalcomulco.jpegs"
        },
        {
            id: 6,
            nombre: "Climb",
            descripcion: "Ascensos guiados por la montaña en grupos reducidos",
            precio: 40,
            categoria: "actividad exteriores tierra",
            stock: 21,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/375px-Rio_Salvaje_Jalcomulco.jpegs"
        },
        {
            id: 7,
            nombre: "Zip line",
            descripcion: "Recorridos individuales a través de montañas y lagos",
            precio: 15,
            categoria: "actividad exteriores tierra",
            stock: 23,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/375px-Rio_Salvaje_Jalcomulco.jpegs"
        },
        {
            id: 8,
            nombre: "Cave expedition",
            descripcion: "Exploraciones guiadas a través de cuevas en grupos de hasta 6 personas",
            precio: 60,
            categoria: "actividad exteriores tierra",
            stock: 12,
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Rio_Salvaje_Jalcomulco.jpeg/375px-Rio_Salvaje_Jalcomulco.jpegs"
        }
    ]
    const listaDeProductosRend = listaDeProductos.map( p => <Item data = {p}/> )
    return(
        <div className="div-itemList">
            <h2>Productos</h2>
            <div className="div-itemList-render">
                {listaDeProductosRend}
            </div>
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default ItemList