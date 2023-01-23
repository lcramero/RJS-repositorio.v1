/*##################################
            Importaciones
####################################*/
//Modulos
//Estilos
import "./Footer.css"
//Componentes
/* import logo from './img/wind.svg';
import Wind from "../icons/wind" */
/*##################################
            Logica
####################################*/
const Footer= () => {
    
    return(
        <footer>
            <div className='div-footer'>
                <div className='footer-text'>
                    <div className="div-footer-img">
                        <svg viewBox="0 0 512 512" /* xmlns="http://www.w3.org/2000/svg" {...props}  */width="100%" height="100%" fill="#FFFFFF">
                            <path d="M156.7 256H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h142.2c15.9 0 30.8 10.9 33.4 26.6 3.3 20-12.1 37.4-31.6 37.4-14.1 0-26.1-9.2-30.4-21.9-2.1-6.3-8.6-10.1-15.2-10.1H81.6c-9.8 0-17.7 8.8-15.9 18.4 8.6 44.1 47.6 77.6 94.2 77.6 57.1 0 102.7-50.1 95.2-108.6C249 291 205.4 256 156.7 256zM16 224h336c59.7 0 106.8-54.8 93.8-116.7-7.6-36.2-36.9-65.5-73.1-73.1-55.4-11.6-105.1 24.9-114.9 75.5-1.9 9.6 6.1 18.3 15.8 18.3h32.8c6.7 0 13.1-3.8 15.2-10.1C325.9 105.2 337.9 96 352 96c19.4 0 34.9 17.4 31.6 37.4-2.6 15.7-17.4 26.6-33.4 26.6H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm384 32H243.7c19.3 16.6 33.2 38.8 39.8 64H400c26.5 0 48 21.5 48 48s-21.5 48-48 48c-17.9 0-33.3-9.9-41.6-24.4-2.9-5-8.7-7.6-14.5-7.6h-33.8c-10.9 0-19 10.8-15.3 21.1 17.8 50.6 70.5 84.8 129.4 72.3 41.2-8.7 75.1-41.6 84.7-82.7C526 321.5 470.5 256 400 256z" />
                        </svg>
                    </div>
                    <div className="div-footer-aboutus">
                        <h3>
                            Sobre nosotros
                        </h3>
                        <div>
                            <p>
                            En nuestra tienda online encontraras los mejores productos para actividades exteriores. Esta selección es realizada por nuestro Departamento de Innovación y Desarrollo seleccionando los mejores artículos del mercado que mejor se adapten a tus necesidades.
                            </p>
                            <p>
                            Nos encanta asesorarte en la selección de productos que mejor se adapten a tu afición, este asesoramiento te lo ofrecen nuestros expertos en cada una de las actividades que encontrarás, estando muy próximos a nuestros clientes ya que orientamos todos nuestros esfuerzos para conseguir la máxima satisfacción y la relación más duradera posible.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='footer-icons'>
                    <div>
                        <h3>Seguinos</h3>
                    </div>
                    <div className="footer-icons-self">
                        <a class="footer__link--decoration" href="mailto:cvdiv@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="30"
                                height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#165ed3" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="3" y="5" width="18" height="14" rx="2" />
                                <polyline points="3 7 12 13 21 7" />
                            </svg>
                        </a>
                        <p>support@seasonal.com</p>
                    </div>
                    <div className="footer-icons-self">
                        <a class="footer__link--decoration" href="https://wa.me/+5942658963552">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp"
                                width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#165ed3" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                                <path
                                    d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                            </svg>
                        </a>
                        <p>(023)4567-2345</p>
                    </div>
                    <div className="footer-icons-self">
                        <a class="footer__link--decoration" href="https://www.instagram.com/lcramero/?hl=es">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram"
                                width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#165ed3" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                                <circle cx="12" cy="12" r="3" />
                                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                            </svg>
                        </a>
                        <p>/seasonal</p>
                    </div>
                </div>
            </div>
            <div className='footer-links'>
                    <div>
                        <p>Copyright 2022 | Dontyoudare</p>
                    </div>
                    <div className="footer-links-self">
                        <div>
                            <a href="index.js">Home</a>
                        </div>
                        <div>
                            <a href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">Contact</a>
                        </div>
                        <div>
                            <a href="https://fotografias.lasexta.com/clipping/cmsimages02/2017/11/12/722DD0B7-3582-4FE6-BC2B-0CE99BF7F26F/58.jpg">Support</a>
                        </div>
                    </div>
                </div>
        </footer>
        
    )
}

/*##################################
            Exportraciones
####################################*/
export default Footer