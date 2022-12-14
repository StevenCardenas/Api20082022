const express = require("express");
const mongoose = require("mongoose");
//Call routes
const computerRoutes = require("./routes/computerRoutes")

const app = express();
const port = 3002;
//middlewares
app.use(express.json()); //Transformamos a objeto
app.use('/cpustore', computerRoutes);
//route app
app.get('/', (req,res) => {
    res.send('Welcome to my API on port ' +port)
});

//mongodb connection specify /dbname?
const MONGODB_URI="mongodb+srv://bscardenas:2016@cluster0.p3zey.mongodb.net/cpustore?retryWrites=true&w=majority"

mongoose
//Para conectar con .evn .connect(process.env.MONGODB_URI) //definimos nuestra URI como variable de ambiente
.connect(MONGODB_URI)
.then(() => console.log("Coneccted to MongoDB Atlas")) //creamos un acción en caso de que se conecte que de un msg
.catch((error) => console.error(error)); // en caso de error

//Cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//status server
app.listen(port, () => console.log('Server is listening on port',port));