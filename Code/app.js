//Requires
const express = require ('express');
const path = require ('path');
const methodOverride =  require('method-override'); // Para poder usar los métodos PUT y DELETE
const session = require('express-session'); // Para implementar session
const cookieParser = require('cookie-parser'); //Para implementar cookie
const recordameMiddleware = require('./src/middlewares/recordameMiddleware');  //Para requerir middleware de recordar usuario
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');

//Ejecucion de express
const app = express();

//Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); //Capturar pedidos por POST
app.use(express.json());
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE
app.use(session({
    secret: 'Secreto Titabe',
    resave: false,                        //Ejecución de session
    saveUninitialized: false,
}));                                   
app.use(cookieParser());                //Ejecución de cookie
app.use(recordameMiddleware);
app.use(userLoggedMiddleware);

//Template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

//Rutas
const mainRouter = require('./src/routes/indexRouter.js');
app.use('/', mainRouter);
const productsRouter = require('./src/routes/productsRouter.js');
app.use('/products', productsRouter);
const usersRouter = require('./src/routes/usersRouter.js'); 
app.use("/users", usersRouter);

//Ruta no encontrada
app.use((req, res, next) => {
    res.status(404).render('not-found');
    next();
});

//Inicio de servidor
app.listen(3000, () => console.log('Servidor corriendo'));