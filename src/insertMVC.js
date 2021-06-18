import characters from "./data.js";

function Model() {
  let Characters = new characters();
  //TODO: save the userData to the DB or the array

  return {
    addCharacter: (userData) => {Characters.push(userData); console.log(Characters);},
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
    getUserData: () => {
      let userData = {};
      for (const elem in ids) {
        // fill the empty object with user form data.
        userData[elem] = document.getElementById(ids[elem]).value;
      }
      return userData;
    },
    resetForm: () => {
        for(const elem in ids){
            document.getElementById(ids[elem]).value = "";
        }
    },
    backHome: () => location.href = '../index.html',
  };
}

function Controle(data, view) {
  function startEvents() {
    document.getElementById("formData").onsubmit = () => {

        let userData = view.getUserData();
        console.log(userData);
        data.addCharacter(userData);
        view.resetForm();
        // view.backHome();
        return false;
    };
  }

  return {
    start: () => startEvents(),
  };
}

var controle = new Controle(new Model(), new View());

controle.start();
