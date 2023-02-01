/*##################################
            Importaciones
####################################*/
//Modulos
import {Link} from "react-router-dom";
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
                                <Link to="/home">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="navbar-ul-text" to="/">
                                    Productos
                                </Link>
                                <ul>
                                    <li>
                                        <Link to="/category/climbing">
                                            Climbing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/trekking">
                                            Trekking
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/camping">
                                            Camping
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/kayak">
                                            Kayak
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/rafting">
                                            Rafting
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/fishing">
                                            Fishing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/category/diving">
                                            Diving
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link className="navbar-ul-text" to="/aboutus">
                                    Nosotros
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="navbar-header">
                    <Link to="/" className="navbar-titulo">
                        <h2>{props.nombre}</h2>
                    </Link>
                </div>
                <div className="navbar-carrito">
                    <Link to= "/cart">
                        <CarWidget cantidad = "7"></CarWidget>
                    </Link>
                </div>
            </div>
        </header>
    )
}

/*##################################
            Exportraciones
####################################*/
export default NavBar