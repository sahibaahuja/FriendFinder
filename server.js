var express = require('express')
var app = express()
// var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())

// app.use(express.static('public'))
 
require("./app/routing/htmlRoutes")(app)
require("./app/routing/apiRoutes")(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

