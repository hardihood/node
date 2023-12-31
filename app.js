// @ts-check
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const routes = require("./routes");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404');
})

app.listen(3000);
//const server = http.createServer(app);
//WITHOUT EXPRESS USE LIKE THIS
//const server = http.createServer(routes);

//server.listen(3000);
