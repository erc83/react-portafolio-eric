
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCogs, faUsers, faTools  } from '@fortawesome/free-solid-svg-icons'

export const Caracteristicas = () => {

    return (
        <section className="content-section bg__deep__teal text-white text-center" id="caracteristicas">
            <div className="container px-4 px-lg-5">
                <div className="content-section-heading">
                    <h3 className="text-sunflower-yellow mb-0">Características</h3>
                    <h2 className="mb-5">Fortalezas en Desarrollo Full Stack JavaScript y DevOps</h2>
                </div>
                <div className="row gx-4 gx-lg-5">
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faCode} />
                        </span>
                        <h4><strong>Versátil</strong></h4>
                        <p className="text-faded mb-0">Experto en el desarrollo tanto del frontend (React, Nextjs) como del backend (Node.js, Express, Nestjs), con habilidades para gestionar toda la pila tecnológica de JavaScript</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faCogs} />
                        </span>
                        <h4><strong>Escalable</strong></h4>
                        <p className="text-faded mb-0">Capaz de diseñar aplicaciones altamente eficientes y escalables, implementando soluciones modernas con bases de datos (MongoDB, PostgreSQL) y asegurando una arquitectura robusta para alto rendimiento</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faUsers} />
                            <i className="icon-like"></i>
                        </span>
                        <h4><strong>Colaborativo</strong></h4>
                        <p className="text-faded mb-0">
                            Con experiencia en trabajar de forma fluida en equipos multidisciplinarios, gestionando tanto la parte de desarrollo como la infraestructura, integrando CI/CD y manteniendo el control de versiones (Git).
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <span className="service-icon rounded-circle mx-auto mb-3">
                            <FontAwesomeIcon icon={faTools} />
                        </span>
                        <h4><strong>Automatizado</strong></h4>
                        <p className="text-faded mb-0">Hábil en la creación de pipelines CI/CD con herramientas como Jenkins, GitLab CI, o GitHub Actions, para la automatización de despliegues y la mejora continua de aplicaciones JavaScript.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

