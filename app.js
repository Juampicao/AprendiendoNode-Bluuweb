const express = require("express");
const app = express();

// Puerto que corre el servidor
const port = 3000;

// Motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// En pagina principal, le doy esta respuesta.
// Titulo: lo voy a llamar en views/index.ejs. Futura base de datos.
app.get("/", (req, res) => {
  res.render("index", {
    titulo: "mi titulo dinamico",
    subtitulo: "esto es el subtitulo dinamico",
  });
});

// En pagina /servicios, le doy esta respuesta.
app.get("/servicios", (req, res) => {
  res.render("servicios", {
    tituloServicios: "Este es un mensaje dinamico de serivicos",
  });
});

// MiddleWare (cualquier pagina que no sea las que tengo yo)
app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    descripcion: "titulo del sitio web",
  });
});

// dirname => estatico, accede a los archivos con el dominio del archivo html.
app.use(express.static(__dirname + "/public"));

// Escuchar el puerto.
app.listen(port, () => {
  console.log("servido a su servicio en puerto " + port);
});
