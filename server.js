



var path = require("path"); 
var express = require("express"); 
var app = express();
var HTTP_PORT = process.env.PORT || 8080;  

function Start(){
    console.log("Express: " + HTTP_PORT);
}

app.get("/", function(req, res){
    let Text = "Samarth Patel.\n student id:150061208 <br> This is my homepage. <br> Enjoy... <br>";
    res.send(Text);
});
app.listen(HTTP_PORT, Start);
