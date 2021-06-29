/* Characters Web App v1.0 Created By Marwan Algadi, MG45.

run 'npm i' to install all required packages 

in next version 'v1.1' there will be:
- fix the footer layout
- delete Item functionality
- add Upload photos insted of writing the URL
- add Search functionality

*/

const express = require("express");
const mongoose = require("mongoose");
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

app.get("/", (req, res) => {
  getData()
    .then((characters) => res.render("index", {characters}))
    .catch((err) => {
      const characters = [
        {
          id: 0,
          img1: "",
          img2: "",
          img3: "",
          animNam: "Error",
          charNam: "Error",
        },
      ];
      console.log(err);
      res.render("index", {characters}); // Empty values to avoid the undefined value.
    });
});

app.get("/insert.ejs", (req, res) => res.render("insert", {isError: false}));

app.post("/insert.ejs", async function (req, res) {
  let id;
  await getLastID()
    .then((value) => (id = value))
    .catch((err) => (id = 999)); //get the last object's id from the DB
  id += 1; // increase the id by one.

  const char = new Character({
    id: id,
    img1: req.body.img1,
    img2: req.body.img2,
    img3: req.body.img3,
    animNam: req.body.animNam,
    charNam: req.body.charNam,
  });

  char.save(function (err) {
    if (!err) {
      res.redirect("/");
    } else {
      console.log("error saving the data: " + err);
      res.render("insert", {isError: true}); // send an error flag to html
    }
  });
});

// to get all the css styles that required in html page
app.get("/css/:css", (req, res) =>
  res.sendFile(__dirname + `/public/css/${req.params.css}`)
);

// to get all the images that required in html page
app.get("/images/:imgNum", (req, res) =>
  res.sendFile(__dirname + `/public/images/${req.params.imgNum}`)
);

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

async function getLastID() {
  let id;
  await Character.find(function (err, character) {
    if (!err) {
      id = character[character.length - 1].id;
    } else {
      id = 999; // to avoid the undefined id value
    }
  }).sort({id: 1});
  return id;
}