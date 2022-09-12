//Requires
const express = require ('express');
const path = require ('path');
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE

//Ejecucion de express
const app = express();

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); //capturar pedidos por POST
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

//Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

//Rutas
const mainRouter = require('./src/routes/index.js');
app.use('/', mainRouter);
const productsRouter = require('./src/routes/products.js');
app.use('/products', productsRouter);

//Inicio de servidor
app.listen(3000, () => console.log('Servidor corriendo'));