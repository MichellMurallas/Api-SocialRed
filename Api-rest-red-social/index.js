//Importar dependencias:
const connection = require("./database/connection");
const express = require("express");
const cors = require("cors");


//Mensaje de Bienvenida:
console.log("Api Node para red social arrancada!!")

//Conexion a base de datos:
connection();

// Crear servidor Node:
const app = express();
const puerto = 3900;


//Configurar Cors:
app.use(cors());


//Convertir los datos del body a objetos js:
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cargar conf rutas:
app.get("/ruta-prueba", (req, res)=>{
  return res.status(200).json(
    {
      "id": 1,
      "nombre": "Miguel",
      "web": "MiguelQuintero.com"
    }
  )
})

//poner servidor a escuchar http:
app.listen(puerto, () =>{
  console("Servidor de node corriendo en el puerto: ", puerto);
})