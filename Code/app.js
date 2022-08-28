const express = require ('express');
const path = require ('path');

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

const mainRouter = require('./routes/index.js');
app.use('/', mainRouter);

const productsRouter = require('./routes/products.js');
app.use('/product', productsRouter);


app.listen(3000, () => console.log('Servidor corriendo'));