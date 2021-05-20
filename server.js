const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

const send = require("./correo");

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send("hola server correo")
})

app.post("/correo", async (req, res) => {
    const {nombre, email, mensaje} = req.body;
    console.log(req.body)
  
      let NewContacto = {
        nombre,
        email,
        mensaje
      };
      if (NewContacto) {
        // aceptado.push({ message: "Gracias por Contactarme" });
        await send(NewContacto);
        res.send("correo enviado")
      } 
      // else {
      //   errors.push({ message: "contacto no enviado" })
      // }
})



app.get('*' , (req, res) => {
  res.send('Error la ruta que quieres visitar no existe')
})

  app.listen(PORT, () => {
    console.log(`Your app listening on port ${PORT}`)
  })