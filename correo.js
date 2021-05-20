require("dotenv").config();
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "espinoza.eric.portafolio@gmail.com",
    pass: process.env.EMAIL_PASSWORD,
  },
});

const send = function ({ email, nombre, mensaje }) {
  return new Promise(async (resolve, reject) => {
    let html =
      `<!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
      <h1>Hola ${nombre}, Un saludo de Eric Espinoza a través de nodemailer.</h1>
      <h2> </h2>
      <p>Mensaje: ${mensaje}.</p> 
      <p>Email: ${email}.</p>
      <p>No responder este correo es solo para registro y confirmación del mensaje.</p>
      <p>Me pondré en contacto lo más pronto posible gracias.</p>
  </body>
  </html>`;

    let mailOptions = {
      from: "espinoza.eric.portafolio@gmail.com",
      to: email,
      bcc: "espinoza.eric@gmail.com", 
      subject: `Gracias ${nombre}, por contactarme`,
      html,
    };
    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = send;
