//This is a constructor
function setValues(animeID, animNam, charNam, img1, img2, img3) {
  this.id = animeID;
  this.anime = animNam;
  this.character = charNam;
  this.image1 = img1;
  this.image2 = img2;
  this.image3 = img3;
  this.createDiv = CreateDiv(animeID, animNam, charNam, img1, img2, img3);
}

function CreateDiv(id, anime, character, image1, image2, image3){
    
    let elements = `<div class="card bg-info"><div id=id${id}
     class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div 
     class="carousel-item active"><img src=${image1} class="d-block w-100" alt=${anime}></div><div 
     class="carousel-item"><img src=${image2} class="d-block w-100" alt=${anime}> </div><div 
     class="carousel-item"><img src=${image3} class="d-block w-100" alt=${anime}></div></div><button 
     class="carousel-control-prev" type="button" data-bs-target=#id${id} data-bs-slide="prev"><span 
     class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button 
     class="carousel-control-next" type="button" data-bs-target=#id${id} data-bs-slide="next"><span 
     class="carousel-control-next-icon" aria-hidden="true"></span><span 
     class="visually-hidden">Next</span></button></div><div class="card-body center"><h5 
     class="card-title">${anime}</h5><p class="card-text">${character}</p></div></div>`;

     let colmDiv = document.createElement("div");
     colmDiv.className = "col";
     colmDiv.innerHTML = elements;

    return colmDiv;
}

export default setValues;