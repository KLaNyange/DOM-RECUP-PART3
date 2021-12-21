let myObject = {
    nom: 'nicolas',
    age: 18,
}

//?Ex01
let titre = document.querySelector("#object").children
let myElements = [titre[0], titre[1]]
// let myElements = Array.from(titre)
console.log(titre);
console.log(myElements);
// console.log(myElements2);

//?Ex02
// let tab = [myObject]
console.log(Object.values(myObject));
// console.log(tab);

//?Ex03
let i = 0
for (const propriete in myObject) {
    const element = myObject[propriete];
    console.log(myObject[propriete]);
    myElements[i];
    console.log(myElements[i]);
    i++
}

//?Ex04
console.clear()
console.log(myObject.nom, myObject.age);


//?Ex05 //?Exo6

//Methode 1
// let myDiv = document.querySelector('div#object').children;

// Object.keys(myObject).forEach((key, count) => {
//     myDiv[count].innerText = myObject[key];
// });

// Methode 2
let myDiv = Array.from(document.querySelector('div#object').children);
myDiv.forEach((key, count) => {
    myDiv[count].innerText = Object.values(myObject)[count];
});



