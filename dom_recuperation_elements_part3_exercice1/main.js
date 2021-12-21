//?Exo1
let h2 = document.querySelector("h2.ml-5")
console.log(h2.innerText);
//?Exo2
h2.innerText = "Exercice 1"
console.log(h2.innerText);

//?Exo3
let p = document.querySelector("h2").nextElementSibling
p.innerText = "Exercice 1"
console.log(p);

//?Exo4
let section = document.querySelector("section#users")
console.log(section.id);

//?Exo5
let h1 = document.querySelector("h1")
console.log(h1.className);
console.log(h1.classList);

//?Exo6
let eachH1 = document.querySelectorAll("h1")
eachH1.forEach(element => {
    console.log(element.className);
});

//?Exo7
let input = document.querySelector("input")
console.log(input.attributes);

//?Exo8
let inputType = document.querySelector("input")
console.log(inputType.attributes.type.value);

//?Exo9
let psw = document.querySelector("input#inputPassword3")
psw.type = "password"
console.log(psw);

//?Exo10p.
console.log(input);
input.type = "color"
console.log(input);

