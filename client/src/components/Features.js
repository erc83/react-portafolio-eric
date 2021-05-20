const Features = () => {
    return (
        <section className="text-center" id="features">
            <h3><strong>Características desarrollando páginas web.</strong></h3>
            
            <div className="row">
                <div className="col-lg-3 col-md-6 my-4">
                    <i className="fas fa-tachometer-alt fa-3x text-primary"></i>
                    <h5 className="my-4">Rápido</h5>
                    <p className="mb-md-3">La velocidad de ejecución es mi prioridad.</p>
                </div>
                <div className="col-lg-3 col-md-6 my-4">
                    <i className="fas fa-mobile fa-3x text-primary"></i>
                    <h5 className="my-4">Responsivo</h5>
                    <p className="mb-md-3">El diseño se verá perfecto en cualquier dispositivo, independientemente del tamaño de la
                pantalla.</p>
                </div>
                <div className="col-lg-3 col-md-6 my-4">
                    <i className="far fa-lightbulb fa-3x text-primary"></i>
                    <h5 className="my-4">Intuitivo</h5>
                    <p className="mb-md-3">La navegación será intuitiva y fácil de utilizar por el cliente.</p>
                </div>
                <div className="col-lg-3 col-md-6 my-4">
                    <i className="fas fa-rocket fa-3x text-primary"></i>
                    <h5 className="my-4">Dinámico</h5>
                    <p className="mb-md-3">Los sitios web deben ser amigables, me encanta darles vida.</p>
                </div>
            </div>
        </section>
    )
}

export default Features
