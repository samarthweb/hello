/* (1) you can rename your heroku app inside the application using the command from terminal:
 * heroku apps:rename newname
 * if rename from outside the app:
 * heroku apps:rename newname --app oldname
 * 
 * (2) When you try to install Heroku CLI on MacOS, using the following command
 * brew tap heroku/brew && brew install heroku
 * you may encounter the error showing 
 * bash: brew: command not found
 * 
 * That may be because you don't have brew yet.
 *  Make sure you've already installed brew on your system.
 *  if not try read this :
    https://brew.sh/
    run the following on terminal to install brew, 
 * /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
 * then try the above command: brew tap heroku/brew && brew install heroku
 */
// http://localhost:8080
var express = require("express"); // Include express.js module
var app = express();

var path = require("path"); // include moduel path to use __dirname, and function path.join()

var HTTP_PORT = process.env.PORT || 8080;  // || : or

// call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req, res){
    let resText = "Hello World. <br> This is my homepage. <br> Enjoy... <br>";
    resText += "<a href = './about'> Go to About page </a> <br>";
    resText += "<a href = './aboutFile'> Go to About File page </a> <br>"; 
    resText += " Happy Coding! "; 
    res.send(resText);
});

 // setup another route to listen on /about
app.get("/about", function (req, res){
    var resText = "<h3> This is from route /About. </h3> <br>";
    resText += "<a href='/'> Home </a>";
    res.send(resText);
});

/* app.get("/contact", function (req, res){
    var resText = "<h3> This is from route /About. </h3> <br>";
    resText += "<a href='/'> Home </a>";
    res.send(resText);
});

*/

// setup another route to listen on /aboutFile
app.get("/aboutFile", function(req, res){
    res.sendFile(path.join(__dirname, "/views/about.html"));
});

//setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT, onHttpStart);