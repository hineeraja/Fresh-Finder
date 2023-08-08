const express = require('express');
const session = require('express-session');
const passport = require('passport');
const app = express();
const port = 3000;

//Loads the handlebars module
const handlebars = require('express-handlebars');


app.use(session({
    secret: 'your-generated-secret-key',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', handlebars({
layoutsDir: __dirname + '/views/layouts',
}));
app.use(express.static('public'));
app.get('/', (req, res) => {
//Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
res.render('main', {layout : 'index'});
});

app.listen(port, () => console.log(`App listening to port ${port}`));