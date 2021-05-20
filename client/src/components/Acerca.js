import avatar from "../img/avatar.jpg";

const Acerca = () => {
    return (
        <section className="text-center" id="about">
            <h3 className="my-5">
                <strong>Acerca de mí</strong>
            </h3>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <img src={avatar} height="200px" className="rounded-circle shadow-4-strong mb-4" alt="Avatar" />
                    <p><strong>¿Quién Soy?</strong></p>
                    <p>Un Desarrollador Full stack Javascript, que disfruta de la vida a cada instant me apasionan los códigos y resolver problemas, 
                        también tengo 2 profesiones extras: Constructor Civil y Profesor Educación Básica de las que me siento orgulloso.</p>
                    <p>Decidí programar porque es algo que me complementa y quiero seguir en esta dirección.</p>
                    <p>No espero que me regalen las cosas sé que hay que esforzarse por alcanzar las metas. </p>
                    <p>Tengo mucha capacidad analítica y espero poder participar de proyectos en los que valoricen a las personas y el trabajo en equipo.</p>

                    <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#3b5998"}} 
                        href="https://www.facebook.com/eric.espinozamansilla/" role="button"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#0082ca"}}
                        href="https://www.linkedin.com/in/eric-espinoza-mansilla/" role="button"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-primary btn-floating m-1" style={{backgroundColor: "#333333"}} href="https://github.com/erc83/"
                        role="button"><i className="fab fa-github"></i></a>
                </div>
                <div className="col-md-6">

                    <p><strong>Front-End: </strong></p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-html5 fa-3x m-2"></i>
                            <p>HTML</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-css3 fa-3x m-2"></i>
                            <p>CSS</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-js fa-3x m-2"></i>
                            <p>JAVASCRIPT</p>
                        </div>
                    </div>

                    <p><strong>Back-End: </strong></p>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <i className="fab fa-node fa-3x m-2"></i>
                            <p>NODEJS</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fas fa-database fa-3x m-2"></i>
                            <p>POSTGRESQL</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fas fa-code fa-3x m-2"></i>
                            <p>EXPRESS</p>
                        </div>
                    </div>

                    <p><strong>Estudiando: </strong></p>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <i className="fas fa-database fa-3x m-2"></i>
                            <p>MONGODB</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <i className="fab fa-react fa-3x m-2"></i>
                            <p>REACTJS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Acerca
