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
                <a href="index.js" className="navbar-titulo">
                    {props.nombre}
                </a>
            </div>
            <div className="navbar-div">
                <div className="navbar-div-ul">
                    <input type="checkbox" id="check-menu"></input>
                    <label htmlFor="check-menu" id="label-check">
                        <svg class="svg-icon" className="label-icon" viewBox="0 0 20 20" stroke="#fff">
						    <path d="M10,1.445c-4.726,0-8.555,3.829-8.555,8.555c0,4.725,3.829,8.555,8.555,8.555c4.725,0,8.555-3.83,8.555-8.555C18.555,5.274,14.725,1.445,10,1.445 M10,17.654c-4.221,0-7.654-3.434-7.654-7.654c0-4.221,3.433-7.654,7.654-7.654c4.222,0,7.654,3.433,7.654,7.654C17.654,14.221,14.222,17.654,10,17.654 M14.39,10c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,9.55,14.39,9.752,14.39,10 M14.39,12.702c0,0.247-0.203,0.449-0.45,0.449H6.06c-0.248,0-0.45-0.202-0.45-0.449c0-0.248,0.203-0.451,0.45-0.451h7.879C14.187,12.251,14.39,12.454,14.39,12.702 M14.39,7.298c0,0.248-0.203,0.45-0.45,0.45H6.06c-0.248,0-0.45-0.203-0.45-0.45s0.203-0.45,0.45-0.45h7.879C14.187,6.848,14.39,7.051,14.39,7.298">
                            </path>
						</svg>
                    </label>
                    <nav>
                        <ul className="navbar-ul">
                            <li>
                                <a className="" href="index.js">
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