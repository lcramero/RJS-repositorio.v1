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
            <div className="navbar-header">
                <img src="./img/seasonal.webp"></img>
                <a href="index.js" className="navbar-titulo">
                    {props.nombre}
                </a>
            </div>
            <div className="navbar-div">
                <div className="navbar-div-ul">
                    <nav>
                        <ul className="navbar-ul">
                            <li>
                                <a className="navbar-ul-text" href="index.js">
                                    Inicio
                                </a>
                            </li>
                            <li>
                                <a className="navbar-ul-text" href="index.js">
                                    Cities
                                </a>
                                <ul>
                                    <li>
                                        <a>
                                            Europe
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            USA
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Asia
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Latin America
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a className="navbar-ul-text" href="index.js">
                                    Activities
                                </a>
                                <ul>
                                    <li>
                                        <a>
                                            Rafting
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Kayak
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Catamaran
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Diving
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Trekking
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Climb
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Zip line
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Cave expeditions
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
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