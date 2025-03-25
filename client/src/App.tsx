
import Navbar from './components/Navbar'
import Header from "./components/Header";
import Main from "./components/Main";
import TypeForm from "./components/TypeForm";
import { FooterSocial } from "./components/FooterSocial";
import SidebarComponent from "./components/Sidebar";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'



import "bootstrap/dist/js/bootstrap.min.js"


function App() {

  return (
    <>
      <SidebarComponent />
      <Navbar />
      <Header />
      <Main />
      <TypeForm />
      <FooterSocial />
    </>
  )
}

export default App

