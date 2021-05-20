import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import logo from "../img/logo.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="logo..."/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "white"}} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#features">Características<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">Acerca de mí</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Mis proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contáctame</a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="https://www.facebook.com/eric.espinozamansilla/">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="https://www.linkedin.com/in/eric-espinoza-mansilla/">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li className="nav-item me-3 me-lg-0">
                            <a className="nav-link" href="https://github.com/erc83/">
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
