const express = require("express");
const mongoose = require("mongoose");
// let ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/public"));



app.get('/', (req, res) => {
  //TODO: here i will add find all the doc in mongodb and send it to the view


  
  res.render('index', {characters});
});



app.get("/insert.ejs", function (req, res) {
  res.render('insert')
});

app.post("/insert.ejs", function(req, res){
  //TODO: here i will only save the data in the mongodb db then redirect the home page

  const char = {
    id: "giveID",
    img1: req.body.img1,
    img2: req.body.img2,
    img3: req.body.img3,
    animNam: req.body.animNam,
    charNam: req.body.charNam,
  }

  res.redirect('/');
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



app.listen(3000, () => console.log("Server running"));


const characters = [
  {
      id: 1,
      img1: './images/1.jpg',
      img2: './images/2.jpg',
      img3: './images/3.jpg',
      charNam: "Luffy",
      animNam: "Onepiece",
  },
  {
      id: 2,
      img1: './images/4.jpeg',
      img2: './images/3.jpg',
      img3: './images/2.jpg',
      charNam: "Gon",
      animNam: "hinter x hinter",
  },
  {
      id: 3,
      img1: './images/1.jpg',
      img2: './images/2.jpg',
      img3: './images/3.jpg',
      charNam: "Nimi",
      animNam: "OnePice",
  },
];