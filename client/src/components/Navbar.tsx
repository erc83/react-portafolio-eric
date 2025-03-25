import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container  mx-auto">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..."/></a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#caracteristicas">Características<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Acerca de mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portafolio">Portafolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contáctame</a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="https://www.facebook.com/eric.espinozamansilla/">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="https://www.linkedin.com/in/eric-espinoza-mansilla/">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="https://github.com/erc83/">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
