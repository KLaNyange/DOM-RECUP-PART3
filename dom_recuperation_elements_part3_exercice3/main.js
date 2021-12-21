let myObject = {
    nom: 'nicolas',
    age: 18,
}

//?Ex01
let titre = document.querySelector("#object").children
// let myElements2 = [titre[0], titre[1]]
let myElements = Array.from(titre)
console.log(titre);
console.log(myElements);
// console.log(myElements2);

//?Ex02
// let tab = [myObject]
console.log(Object.values(myObject));
// console.log(tab);

//?Ex03
for (let property in myObject) {
    console.log(`${property}: ${myObject[property]}`);
}

//?Ex04
// console.clear()
// let dedans = Object.entries(myObject)
// let dedans = Object.entries(myObject)
// console.log(dedans);
for (let [key, value] in myObject) {
    // console.log(`${key} : ${value}`);
    console.log(Object.values(myObject));
}


//?Ex05
// for (let property in myObject) {
//     console.log(`${property}: ${myObject[property]}`);
//     console.clear()
//     let un = myObject.nom
//     let deux = myObject.age
//     console.log(un);
//     console.log(deux);
    
// }

// for (let property in myObject) {
//     console.log(`${property}: ${myObject[property]}`);

//     // console.log(count);
    
// }

//?Ex06
for (let property in myObject) {
    console.count(`${property}: ${myObject[property]}`);

}
