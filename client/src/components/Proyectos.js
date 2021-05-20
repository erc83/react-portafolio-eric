import mern from "../img/mern.png";
import notesApp from "../img/notes-app.jpg"

const Proyectos = () => {
    return (
        <section id="project" className="text-center">
            <h3 className="my-5"><strong>Mis proyectos</strong></h3>
            <div className="row">
                {/* Card Memories*/}
                <div className="col-lg-4 col-md-12 mb-4">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src={mern} className="img-fluid" />
                            <a href="/books">
                                <div className="mask"></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Memories</h5>
                            <p className="card-text">Un espacio para crear memorias usando fotos de hasta 30mb, proyecto que utiliza dos servidores para la puesta en producción uno para el front-end y otro para el backen-end.</p>
                            <p>MERN: Mongo DB, express, reactjs, nodejs.
                                También se utilizo material UI, hooks y redux en react.js.</p>
                            <a href="https://mern-memories-redux.netlify.app" className="btn btn-primary">Ver proyecto</a>
                        </div>
                    </div>
                </div>
                {/* Card Notes-app */}
                <div className="col-lg-4 col-md-6">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src={notesApp} className="img-fluid" />
                            <a href="/pokemon">
                                <div className="mask"></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Notes app</h5>
                            <p className="card-text">
                                Creada para mostrar el uso de un CRUD en mongoDB, con rutas protegidas para los usuarios registrados.
                            </p>
                            <p>
                                Para la realización se utilizo handlebars, bootstrap, mongoDB, nodejs, express, entre otros.
                            </p>
                            <a href="https://notes-mongo-crud.herokuapp.com/" className="btn btn-primary">Ver proyecto</a>
                        </div>
                    </div>
                </div>
        {/* Card Juego conejo */}
        <div className="col-lg-4 col-md-6">
                    <div className="card">
                        <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://images.unsplash.com/photo-1612171709933-024a90133e42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" className="img-fluid" alt="imagen" />
                            <a href="#!">
                                <div className="mask"></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">En construccion</h5>
                            <p className="card-text">
                                próximamente nuevos proyectos.
                             </p>
                            {/* <a href="/" className="btn btn-primary">Ver proyecto</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos
