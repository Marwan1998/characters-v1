const express = require("express");
const mongoose = require("mongoose");
// let ejs = require('ejs');
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("/public"));

mongoose.connect("mongodb://localhost:27017/CharactersDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const characterSchema = mongoose.Schema({
  id: Number,
  img1: String,
  img2: String,
  img3: String,
  animNam: String,
  charNam: String,
});

const Character = mongoose.model("Character", characterSchema);

app.get("/", async (req, res) => {

  getData()
  .then(characters => res.render("index", {characters}))
  .catch((err) => {
    const characters = [{id:0, img1:"", img2:"", img3:"", animNam:"Error", charNam:"Error"}];
    res.render("index", {characters}) // To avoid the undefind value.
  });

});

app.get("/insert.ejs", function (req, res) {
  res.render("insert");
});

app.post("/insert.ejs", function (req, res) {
  //TODO: here i will only save the data in the mongodb db then redirect the home page

  //TODO 1: find the last id and use it to the new one.

  const char = new Character({
    id: 4, // Needs an id here
    img1: req.body.img1,
    img2: req.body.img2,
    img3: req.body.img3,
    animNam: req.body.animNam,
    charNam: req.body.charNam,
  });

  char.save(function (err) {
    if (err) {
      console.log(err);
    } //TODO: Handel the error, re enter the values if error
  });

  res.redirect("/");
});

// to get all the css styles that required in html page
app.get("/css/:css", function (req, res) {
  const css = req.params.css;
  res.sendFile(__dirname + `/public/css/${css}`);
});

// to get all js file that required in html page
app.get("/src/:src", function (req, res) {
  const src = req.params.src;
  res.sendFile(__dirname + `/public/src/${src}`);
});

// to get all the images that required in html page
app.get("/images/:imgNum", function (req, res) {
  const imgNum = req.params.imgNum;
  res.sendFile(__dirname + `/public/images/${imgNum}`);
});

app.listen(3000, () => console.log("Server running"));



async function getData() {
  let characters;
  await Character.find(function (err, character) {
    if (!err) {
      characters = character;
    } else {
      characters = []; // To avoid the undefind value.
    }
  });
  return characters;
}
