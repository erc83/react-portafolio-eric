import { useState } from 'react';
import axios from 'axios';

const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        //console.log(event.target.name)
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    interface Datos {
        nombre: string;
        email: string;
        mensaje: string;
    }

    const enviarDatos = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!datos.nombre) {
            alert('Please add un nombre');
        } else {
            try {
                const correo: Datos = datos;
                await axios.post('https://portafolio-eric.herokuapp.com/correo', correo)
                    .then(res => console.log(res.data));
                alert('Gracias por contactarme');
                setDatos({
                    nombre: '',
                    email: '',
                    mensaje: '',
                });
            } catch (error) {
                alert(error);
            }
        }
    };
    return (
        <div>
            <section id="contact" className="text-center mb-4">

            <h1>Contáctame</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 mb-4">
                    <div className="container p-5">
                        <form onSubmit={enviarDatos} className="card card-body" >
                            <div className="form-group">
                                <input 
                                    placeholder="Ingrese Nombre" 
                                    className="form-control" 
                                    type="text" 
                                    name="nombre"
                                    onChange={handleInputChange}>
                                    </input>
                            </div>
                            <div className="form-group">
                                <input 
                                    placeholder="Ingrese Email" 
                                    className="form-control" 
                                    type="email" 
                                    name="email"
                                    onChange={handleInputChange}>    
                                    </input>
                            </div>
                            <div className="form-group">
                                <textarea 
                                    placeholder="Ingrese mensage" 
                                    className="form-control" 
                                    name="mensaje"
                                    onChange={handleInputChange}>    
                                    </textarea>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>  
            </div>   
        </section>
        </div>
    );
}

export default Formulario;
