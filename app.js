/* Characters Web App v1.0 Created By Marwan Algadi, MG45.

TODO 2:  Deploying The App to Heroku .

run 'npm i' to install all required packages 

in upcoming versions there will be:
- add log in page and accounts, now every one has the url can view the same data 
- fix the footer layout
- delete Item functionality
- should render insert.ejs if the database if empty insted of using isEmpty().
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

mongoose.connect(
  "mongodb+srv://marwan:MarwanAdmin45Cl@cluster0.dwbrr.mongodb.net/CharactersDB",{
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

isEmpty(); // inside this methode there's if statement that will insert one Item if the collection is empty.
// setTimeout(() => 1000);

app.get("/", async (req, res) => {
  const emptyCharacters = [
    {
      id: 0,
      img1: "",
      img2: "",
      img3: "",
      animNam: "Error With geting he data",
      charNam: "please Refresh",
    },
  ];

  await Character.find(function (err, charactersFound) {
    if (!err) {
      res.render("index", {characters: charactersFound});
    } else {
      res.render("index", {characters: emptyCharacters});
    }
  });
});

app.get("/insert.ejs", (req, res) => res.render("insert", {isError: false}));

app.post("/insert.ejs", async function (req, res) {
  const char = new Character({
    id: 0,
    img1: req.body.img1,
    img2: req.body.img2,
    img3: req.body.img3,
    animNam: req.body.animNam,
    charNam: req.body.charNam,
  });

  await Character.find(function (err, character) {
    if (!err && character.length > 0) {
      let lastID = character[character.length - 1].id;
      lastID += 1; // increase the id by one.
      char.id = lastID;
    } else if (character.length === 0) {
      char.id = 1; // to avoid the undefined id value in the first item inserted
    } else {
      char.id = 999; // to avoid the undefined id value
    }
    char.save((saveErr) => {
      if (!saveErr) {
        res.redirect("/");
      } else {
        console.log("error saving the data: " + err);
        res.render("insert", {isError: true}); // send an error flag to html
      }
    });
  }).sort({id: 1});
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

function isEmpty() {
  Character.countDocuments(function (err, count) {
    if (!err && count === 0) {
      const character1 = new Character({
        id: 1,
        img1: "https://cdn.dribbble.com/users/6550236/screenshots/14885885/media/c6e9168572d9bd7cafef22fcd333a6c0.jpg?compress=1&resize=400x300",
        img2: "https://greathdwallpapers.com/thumbs/anime-girl-winter-snow-cat-t2.jpg",
        img3: "https://i.pinimg.com/400x300/bc/2c/e6/bc2ce68f609460d319013406199585d1.jpg",
        charNam: "Character example",
        animNam: "Start Saving",
      });
      character1.save(function (savErr) {
        if (!savErr) {
          console.log("Saved!");
        }
      });
    }
    console.log("Count is:---- " + count);
  });
}