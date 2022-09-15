/*********************************************************************************
* BTI325 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __Samarth Patel___ Student ID: __150061208____ Date: __15 september 2023____
*
* Online (Cyclic) URL:
* 
* 
* https://rabbit-smock.cyclic.app/
*
********************************************************************************/ 





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
