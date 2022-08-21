const express = require("express");
const computerSchema = require("../model/computer"); // importamos el modelo de cliente
//Este reouter es lo que voy a exportar de este archivo y emplear en el servidor
const router = express.Router();
//PARAMETROS: lo que se quiere poner para recoger informacion
//BODY: lo que se quiere escribir para añadir info
///GET all users///
router.get('/computers', (req,res) => {
    computerSchema //Cargamos el esquema ya creado en model de nuestro cliente
    .find() //empleamos find para encontrar
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})); 
});
//GET 1 user by id (id no _id)
router.get("/computer/:id", (req,res) => { //a la url le añadimos un parámetro id para encontrar al usuario
    const { id } = req.params; //Extraemos el parámetro ID con req.params del IB objetc y con req.body del cuerpo tomamos el parámetro
    computerSchema 
    .find({id:id}) //Buscar por ID no objet (puede ser cualquier parámetro que le asignemos)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
}); 
//POST 
router.post('/computer', (req,res) => {//nombre de la ruta para crear un nuevo usuario de la API www./api/get
    const computer = computerSchema(req.body); //Añadimos el esquema de cliente
    //console.log(req.body); //Es la respuesta que nos dará
    computer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error})); //Guarda el client y da uan respuesta y un error en caso de que no se guarde
}); 
module.exports = router;