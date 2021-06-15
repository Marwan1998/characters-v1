// TODO: TO add MVC style here soon.

import characters from "./data.js";
import setValues from "./setchar.js";

let Characters = characters();

Characters.map(renderCharacter);

function renderCharacter(character) {
  const value = new setValues(
    character.id,
    character.charNam,
    character.animNam,
    character.charPhotos
  );
  document.getElementById("mainDiv").appendChild(value.createDiv);
}
