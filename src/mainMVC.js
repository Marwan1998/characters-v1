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

  return {
      
    renderCharacter: (characters) => {
      characters.map((char) => {
        const value = new setValues(
          char.id,
          char.charNam,
          char.animNam,
          char.img1,
          char.img2,
          char.img3
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