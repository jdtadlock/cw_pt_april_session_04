const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override')
const path = require('path');
const view_routes = require('./routes/view_routes');
const port = process.env.PORT || 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cw_session_04', { useNewUrlParser: true });

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

view_routes(app);

app.listen(port, () => console.log(`Listening on port ${port}`));