/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import { useEffect } from "react"
import "./Home.css"
//Componentes
/*##################################
            Logica
####################################*/
const Home = () => {
    
  /*   useEffect(() => {

        const db = getFirestore()
        const items = db.collection("listaProductos")

        const itemsFiltrados = items.where("stock", ">" ,0)

        itemsFiltrados.get().then((querySnapshot) => {
            if (querySnapshot.size === 0){
                console.log("error");
            }
            console.log(querySnapshot.doc.map({...doc.data(), id:doc.id}));
        })

    },[])
 */



    return(
        <div className="home-div">
            Este es el home y  va a ir publicidad aca
        </div>
    )
}

/*##################################
            Exportraciones
####################################*/
export default Home