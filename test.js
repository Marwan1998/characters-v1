// function testGet(){

//     let characters = await getData()

//     // const characters = await getData().resolve();

//     // getData().then(result => characters = result).catch((err) => characters = []);

//     console.log(characters);
// }

// async function getData() {
//     let characters;
//     await Character.find(function (err, character) {
//       if (!err) {
//         characters = character;
//       } else {
//         characters = []; // To avoid the undefind value.
//       }
//     });
//     return characters;
//   }

async function getData() {
  let characters;
  return new Promise((resolve, reject) => {
    await Character.find(function (err, character) {
      if (!err) {
        characters = character;
        resolve(reason);
        return characters;
      } else {
        characters = []; // To avoid the undefind value.
        reject(reason);
        return characters;
      }
    });
  });
}
