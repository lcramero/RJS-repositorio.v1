/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./AboutUs.css"
//Componentes
/*##################################
            Logica
####################################*/
const AboutUs = () => {
    
    return(
        <div className="aboutus-div">
            <div className="aboutus-div-info">
                <div>
                    <h2>CONTACTO</h2>   
                </div>
                <div>
                    Av. Hipólito Yrigoyen 1079, M5600 San Rafael, Mendoza
                </div>
                <div>
                    Lunes a Viernes de 8hs a 18hs y Sábados de 9hs a 14hs
                </div>
                <div>
                    011-2567-4656
                </div>
                <div>
                    contact@seasonal.com
                </div>
                <div>
                    /seasonalshop
                </div>
            </div>
            <div className="aboutus-div-maps">
                <img src="./img/ubicacion.jpg" />
            </div>
        </div>
        
    )
}
//AIzaSyAZgoMNbZvuYkhY63ofMCe3iR8pXH66Mv4
/*##################################
            Exportraciones
####################################*/
export default AboutUs