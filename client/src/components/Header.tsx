import { ReactTyped } from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">

            <h1>Eric Espinoza Mansilla</h1>
        
            <ReactTyped 
                className="typed-text"
                strings={["Desarrollador Full Stack javascript", 
                            "DevOps: Jenkins, Docker, CI/CD",
                            "Front-end: React.js, Next.js", 
                            "Back-end: Nodejs, Nestjs, Express",
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
