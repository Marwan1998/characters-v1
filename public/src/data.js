function chracters(){

    return [
        {
            id: 1,
            img1: './images/1.jpg',
            img2: './images/2.jpg',
            img3: './images/3.jpg',
            charNam: "Luffy",
            animNam: "Onepiece",
        },
        {
            id: 2,
            img1: './images/4.jpeg',
            img2: './images/3.jpg',
            img3: './images/2.jpg',
            charNam: "Gon",
            animNam: "hinter x hinter",
        },
        {
            id: 3,
            img1: './images/1.jpg',
            img2: './images/2.jpg',
            img3: './images/3.jpg',
            charNam: "Nimi",
            animNam: "OnePice",
        },
    ];
  }
  
  export default chracters;


//   MongoDB Data

// const character1 = new Character({
//     id: 1,
//     img1: './images/1.jpg',
//     img2: './images/2.jpg',
//     img3: './images/3.jpg',
//     charNam: "Luffy",
//     animNam: "Onepiece",
//   }).save(function(err, saved){
//     if(!err){
//       console.log(saved);
//     }
//   });
//   const character2 = new Character({
//     id: 2,
//     img1: './images/4.jpeg',
//     img2: './images/3.jpg',
//     img3: './images/2.jpg',
//     charNam: "Gon",
//     animNam: "hinter x hinter",
//   }).save(function(err){
//     if(err){
//       console.log(err);
//     }
//   });
//   const character3 = new Character({
//     id: 3,
//     img1: './images/1.jpg',
//     img2: './images/2.jpg',
//     img3: './images/3.jpg',
//     charNam: "Nimi",
//     animNam: "OnePice",
//   }).save(function(err){
//     if(err){
//       console.log(err);
//     }
//   });