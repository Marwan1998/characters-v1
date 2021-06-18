import characters from "./data.js";

function Model() {
  let Characters = new characters();

  return {
    addCharacter: (userData) => {
      Characters.push(userData);
      console.log(Characters); //TODO: remove this log.
    },
    getLastID: () => {
      return Characters[Characters.length - 1].id;
    },
  };
}

function View() {
  const ids = {
    img1: "img1",
    img2: "img2",
    img3: "img3",
    animNam: "animNam",
    charNam: "charNam",
  };
  Object.freeze(ids);

  return {
    getIDs: ids,
    getUserData: (id) => {
      let userData = {id: id}; // the id is dynamic sent to this methode every time it called.
      for (const elem in ids) {
        // fill the empty object with user form data.
        userData[elem] = document.getElementById(ids[elem]).value;
      }
      return userData;
    },
    resetForm: () => {
      for (const elem in ids) {
        document.getElementById(ids[elem]).value = "";
      }
    },
    backHome: () => (location.href = "../index.html"),
  };
}

function Controle(data, view) {
  function startEvents() {
    document.getElementById("formData").onsubmit = () => {
      let id = data.getLastID() + 1;
      let userData = view.getUserData(id);
      data.addCharacter(userData);
      view.resetForm();
      view.backHome();
      return false;
    };
  }

  return {
    start: () => startEvents(),
  };
}

var controle = new Controle(new Model(), new View());

controle.start();