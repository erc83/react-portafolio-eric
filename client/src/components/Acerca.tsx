
import { FaReact, FaNode, FaJenkins, FaDocker, FaAws, FaDatabase, FaFacebookF, FaLinkedinIn, FaGithub  } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { SiHandlebarsdotjs, SiNestjs, SiExpress, SiPostgresql, SiMongodb  } from "react-icons/si"

const Acerca = () => {
  return (
    <section className="text-center" id="about">
      <div className="container">

      <h3 className="my-5">
        <strong>Acerca de mí</strong>
      </h3>
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src="https://res.cloudinary.com/dhavhzmvy/image/upload/v1728053925/portafolio/avatar_eric_q1rfvc.png"
            height="200px"
            className="rounded-circle shadow-4-strong mb-4"
            alt="Avatar"
            />
          <p>
            <strong>¿Quién Soy?</strong>
          </p>
          <p>
            Soy un Desarrollador Full Stack JavaScript con una sólida formación
            en DevOps. Mi camino profesional comenzó en áreas distintas:
            Profesor de Educación Básica y Constructor Civil, lo que me permitió
            desarrollar habilidades en comunicación, organización y resolución
            de problemas.
          </p>
          <p>
            Durante la pandemia, decidí capacitarme como Full Stack JavaScript
            y, a lo largo de los años, obtuve experiencia trabajando como
            consultor en una empresa durante 4 años, donde apliqué mis
            conocimientos en tecnología para optimizar soluciones. Además, me
            desempeñé como ayudante del curso de capacitación Full Stack
            JavaScript durante un año, lo que me permitió compartir mis
            conocimientos y seguir aprendiendo.
          </p>
          <p>
            Me considero una persona proactiva, analítica y con gran capacidad
            para trabajar en equipo. Estoy buscando proyectos que me desafíen y
            me permitan seguir creciendo, donde pueda aportar mis habilidades
            técnicas y experiencia para generar soluciones efectivas.
          </p>

          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="https://www.facebook.com/eric.espinozamansilla/"
            role="button"
            >
            < FaFacebookF />
          </a>
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/eric-espinoza-mansilla/"
            role="button"
            >
            < FaLinkedinIn/>
          </a>
          <a
            className="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/erc83/"
            role="button"
            >
            < FaGithub />
          </a>
        </div>
        <div className="col-md-6">
          <h5>
            <strong>Front-End: </strong>
          </h5>
          <div className="row">
            <div className="col-md-4 mb-4">
              
              <i className="fa-3x m-2"><FaReact /></i>
              <p>React</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><RiNextjsFill /></i>
              <p>NEXTJS</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><SiHandlebarsdotjs /></i>
              <p>HANDLEBARS</p>
            </div>
          </div>

          <h5>
            <strong>Back-End: </strong>
          </h5>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><FaNode /></i>
              <p>NODEJS</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><SiNestjs /></i>
              <p>NESTJS</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><SiExpress /></i>
              <p>EXPRESS</p>
            </div>
          </div>

          <h5>
            <strong>Base-datos: </strong>
          </h5>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><SiPostgresql /></i>
              <p>POSTGRESQL</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><SiMongodb /></i>
              <p>MONGODB</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><FaDatabase /></i>
              <p>DB2</p>
            </div>
          </div>

          <h5>
            <strong>DevOps: </strong>
          </h5>
          <div className="row">
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><FaJenkins /></i>
              <p>JENKINS</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><FaDocker /></i>
              <p>DOCKER</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa-3x m-2"><FaAws /></i>
              <p>AWS</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Acerca;
