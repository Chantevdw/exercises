const express = require('express');
var bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/**
 * Our default site
 */
app.get('/', (req, res) => res.render('index'));

// here you have created the same route as above
// there are two GET '/' routes
// look where the login api is trying to go to for a hint

/**
 * Our home page
 */
app.get('/home', (req, res) => res.render('home'));

/**
 * API Login call
 * This redirects to our home page
 */
app.post('/login', function(request, response) {
    const validUsername = "Chante";
    const validPassword = "Password";

    const username = request.body.username;
    const password = request.body.password;

    if (username === validUsername && password === validPassword) {
        response.redirect('/home');
        response.end();
    } else {
        response.send('Invalid Username or Password, please try again');
        response.end();
    }
});



app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
