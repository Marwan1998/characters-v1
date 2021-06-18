import characters from "./data.js";
// import renderCharacter from "./render.js";
// import setValues from "./setchar.js";

const ids = {
    animNam: "animNam",
    charNam: "charNam",
    img1: "img1",
    img2: "img2",
    img3: "img3",
  };

document.getElementById("formData").onsubmit = () => {

    let userData = {};
    for(const elem in ids){ // fill the empty object with user form data.
        userData[elem] = document.getElementById(ids[elem]).value;
    }
    // sendData(userData);
    resetForm();


    return false;
};

function resetForm(){
    for(const elem in ids){
        document.getElementById(ids[elem]).value = "";
    }
}

function sendData(userData){
    let Characters = characters();
    // location.href = '../index.html';
    Characters.push(userData);
    // renderCharacter(Characters);
    console.log(Characters);
    location.href = '../index.html';
}