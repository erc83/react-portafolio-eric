import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">

            <h1>Eric Espinoza Mansilla</h1>
        
            <Typed 
                className="typed-text"
                strings={["Desarrollador Full Stack javascript", 
                            "Front-end: React.js, Handlebars, Javascript", 
                            "Back-end: Nodejs, express ",
                             "Bases-datos: PostgreSQL, MongoDB"]}
                typeSpeed={40}            
                backSpeed={60}
                loop
            />
            <a href="#contact" className="btn-main-offer">Contáctame</a>
            </div>
        </div>
    )
}

export default Header
