import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container site-footer">
        <div className="grid-footer contenedor">

            <div>
                <h3>Categorías</h3>
                <nav className="footer-menu">
                    <Link className='footer-link' to="/">Cocina</Link>
                    <Link className='footer-link' to="/">Oficina</Link>
                    <Link className='footer-link' to="/">Jardín</Link>
                    <Link className='footer-link' to="/">Cochera</Link>
                    <Link className='footer-link' to="/">Dormitorios</Link>
                </nav>
            </div>

            <div>
                <h3>Sobre Nosotros</h3>
                <nav className="footer-menu">
                    <Link className='footer-link' to="/">Nuestra Historia</Link>
                    <Link className='footer-link' to="/">Misión, Visión y Valores</Link>
                    <Link className='footer-link' to="/">Carreras</Link>
                    <Link className='footer-link' to="/">Política de Privacidad</Link>
                    <Link className='footer-link' to="/">Términos del Servicio</Link>
                </nav>
            </div>

            <div>
                <h3>Soporte</h3>
                <nav className="footer-menu">
                    <Link className='footer-link' to="/">Preguntas Frecuentes</Link>
                    <Link className='footer-link' to="/">Ayuda en línea</Link>
                    <Link className='footer-link' to="/">Confianza y Seguridad</Link>
                </nav>
            </div>
            <div className="contenedor contenido-newsletter">
            <div className="texto-newsletter">
                <h2>Noticias</h2>
                <p>¡Recibe las mejores promociones y noticias que tenemos para ti!</p>
                
                <form className="formulario" action="">
                    <div className="input">
                        <input className='input-text ' type="text" placeholder="Tu email"/>
                    </div>
                    <input type="submit" value="Inscribirme"/>
                </form>
            </div>
        </div>
        </div>

        <p className="copyright">Todos los derechos Reservados</p>
    </footer>
  )
}

export default Footer
