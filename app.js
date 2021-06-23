const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/public"));
// app.use(express.static('static')); 

// TODO: remove this line
app.get('/', (req, res) => res.sendFile(__dirname + "/public/index.html"));


app.get("/index.html", function (req, res) {

  res.sendFile(__dirname + "/public/index.html");

});

app.get("/insert.html", function (req, res) {

  res.sendFile(__dirname + "/public/insert.html");
  // res.sendFile(__dirname + "/public/insert.html");

});











// to get all the css styles that required in html page
app.get('/css/:css', function (req, res) {
    const css = req.params.css;
    res.sendFile(__dirname + `/public/css/${css}`);
});

// to get all js file that required in html page
app.get('/src/:src', function (req, res) {
    const src = req.params.src;
    res.sendFile(__dirname + `/public/src/${src}`);
});

// to get all the images that required in html page
app.get('/images/:imgNum', function(req, res){
    const imgNum = req.params.imgNum;
    res.sendFile(__dirname + `/public/images/${imgNum}`);
});






app.listen(3000, function () {
  console.log("Server running");
});
