const express = require("express");
const app = express();

// Puerto que corre el servidor
const port = 3000;

// En pagina principal, le doy esta respuesta.
app.get("/", (req, res) => {
  res.send("mi respuesta desde express v2");
});

// En pagina /servicios, le doy esta respuesta.
app.get("/servicios", (req, res) => {
  res.send("estas en la pagina de servicios");
});

// MiddleWare (cualquier pagina que no sea las que tengo yo)
app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

// dirname => estatico, accede a los archivos con el dominio del archivo html.
app.use(express.static(__dirname + "/public"));

// Escuchar el puerto.
app.listen(port, () => {
  console.log("servido a su servicio en puerto " + port);
});
