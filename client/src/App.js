import {} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Particles from "react-particles-js"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main"
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";



import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle"


function App() {
  return (
    <>
      <Particles 
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area:900
              }
            },
            shape: {
              type: "square",
              stroke: {
                width: 5,
                color: "#f9ab00"
              }
            }

          }
        }}
      />
      <Navbar />
      <Header />
      <Main />
      <Formulario />
      <Footer />
    </>
    );
  }
  
export default App;
