import chracters from "./data.js";
import setValues from "./setchar.js";

function  Model() {
  let Chracters = new chracters();

  return {
    getData: function(){
        return Chracters;
    },

    setNewChar: (char) => {
      Characters.push(char);
    },
  };
}

function  View() {
  const ids = {
    img1: "img1",
    img2: "img2",
    img3: "img3",
    animNam: "animNam",
    charNam: "charNam",
  };

  return {
      
    renderCharacter: (characters) => {
      characters.map((char) => {
        const value = new setValues(
          char.id,
          char.charNam,
          char.animNam,
          char.charPhotos
        );
        document.getElementById("mainDiv").appendChild(value.createDiv);
      });
    },

  };
}

function Controle(data, view) {

    view.renderCharacter(data.getData());
    

}

var controle = new Controle(new Model(), new View());

// controle;



