const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"db_hotel"
});

app.post("/create",(req,res)=>{
    const id_usuario = req.body.id_usuario;
    const usuario = req.body.usuario;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const correo = req.body.correo;
    const password = req.body.password;
    const id_tipo = req.body.id_tipo;

    // Query

    db.query("INSERT INTO datos_usuario(id_usuario, usuario, nombre, apellido, correo, password, id_tipo)VALUES(?,?,?,?,?,?,?)", [id_usuario, usuario, nombre, apellido, correo, password, id_tipo], (error, result) => {
        if (error) {
            console.log(error);
        } else {
            res.send("Registro exitoso")
        }
    }
    );

});

app.listen(3001,()=>{
    console.log("Puerto activo")
});