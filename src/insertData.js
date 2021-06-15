const ids = {
    img1: "img1",
    img2: "img2",
    img3: "img3",
    animNam: "animNam",
    charNam: "charNam",
  };

document.getElementById("formData").onsubmit = () => {
    
    console.log(document.getElementById(ids.img1).value);
    console.log(document.getElementById(ids.img2).value);
    console.log(document.getElementById(ids.img3).value);
    console.log(document.getElementById(ids.animNam).value);
    console.log(document.getElementById(ids.charNam).value);
    resetForm();
    return false;
};

function resetForm(){
    for(const elem in ids){
        document.getElementById(ids[elem]).value = "";
    }
}