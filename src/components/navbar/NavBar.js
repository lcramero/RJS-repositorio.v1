/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./NavBar.css"
import CarWidget from "../cardWidget/CardWidget.js"
//Componentes
/*##################################
            Logica
####################################*/
const NavBar = (props) => {
    
    return(
        <header className="navbar">
            <a href="index.js" className="navbar-titulo">
                {props.nombre}
            </a>
            <div className="navbar-div">
            <div className="navbar-div-cities">
                    <p>
                        Packs
                    </p>
                    <ul className="navbar-ul">
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Europe
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                USA
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Asia
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Latin America
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-div-cities">
                    <p>
                        Cities
                    </p>
                    <ul className="navbar-ul">
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Europe
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                USA
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Asia
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Latin America
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-div-activities">
                    <p>
                        Activities
                    </p>
                    <ul className="navbar-ul">
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Diving
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Zip line
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Climb
                            </a>
                        </li>
                        <li>
                            <a className="navbar-ul-text" href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">
                                Trekking
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-carrito">
                <CarWidget cantidad = "7"></CarWidget>
                </div>
            </div>
        </header>
    )
}

/*##################################
            Exportraciones
####################################*/
export default NavBar