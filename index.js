// dependencies
const express = require('express')
const app = express();
const { engine } = require('express-handlebars');

// enviroment
require('dotenv').config();

const bodyParser = require('body-parser');

//
// import
const {
    getStores,
    getCategories,
    getBrands,
    getCustomers,
    getOrders,
    getProducts,
    getStaffs,
    getStotcks
} = require('./consultas');

// start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT} and PID: ${process.pid}`)
});

// public
app.use(express.static(__dirname + '/public'));

// handlebars
app.set('view engine', 'handlebars');

// handlebars config
app.engine(
    'handlebars',
    engine({
        defaultLayout: 'main',
        layoutsDir: __dirname + '/views/mainLayout',
    })
)

// root
app.get('/', (req, res) => {
    res.render('Home');
})


//GET
//stores
app.get('/stores', async (req, res) => {
    const response = await getStores();
    res.send(response);
});
//categories
app.get('/categories', async (req, res) => {
    const response = await getCategories();
    res.send(response);
});
//brands
app.get('/brands', async (req, res) => {
    const response = await getBrands();
    res.send(response);
});
//customers
app.get('/customers', async (req, res) => {
    const response = await getCustomers();
    res.send(response);
});
//orders
app.get('/orders', async (req, res) => {
    const response = await getOrders();
    res.send(response);
});
//products
app.get('/products', async (req, res) => {
    const response = await getProducts();
    res.send(response);
});
//orders
app.get('/staffs', async (req, res) => {
    const response = await getStaffs();
    res.send(response);
});
//stocks
app.get('/stocks', async (req, res) => {
    const response = await getStotcks();
    res.send(response);
});
//--------------------------------------