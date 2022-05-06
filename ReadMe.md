Terminal : node app.js (ver en consola). Cada cambio, volver a escribir node app.js


Q Veces que se repite =>   console.count(e);

Module.exports = {
    frutas,
    dinero
}

const frutas = require("./frutas.js)


npm install -g (de forma global)
npx cowsay "hola mundo" (ejecuta algo que no esta instalado en nuestra computadora, pero muestra el codigo como si lo hubiramos hecho.)

=> No se comparte ni sube la carpeta node modules. 
=> npm i ; se vuelve a descargar. 
=> Si borro node_modules no pasa nada (pesa un monton)

Servidor HTTP =>  Protocolo de transferencia de hipertexto. 
 Intercambia Inforamcion entre el c liente y el servidor. 
 Espera al cliente y proporciona una respuesta.

 Nodemon install => npm run luego. 
 nodemon app => Escucha el archivo app. 

Middleware =>  Usuario entra a una url desconocida, lo derivo a una url que yo quiero. ERROR 404. 

Template Engines => EJS 
  install => npm i ejs
  app.set("view engine", "ejs");
   Crear carpeta Views => El servidor no lee EJS 
     index.ejs 
       titulo: "titulo dinamico"