import Features from "./Features";
import Acerca from "./Acerca";
import Proyectos from "./Proyectos"

const Main = () => {
    return (
        <main className="my-5">
            <div className="container">
                <Features />
                <Acerca />
                <Proyectos />
            </div>
        </main>
    )
}

export default Main
