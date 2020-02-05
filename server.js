if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', function() {
    console.log("Connected to Database....");
});
app.use('/', indexRouter);
app.use('/authors', authorRouter);
app.listen(3000, function() {
    console.log("Connected to Server....");
});