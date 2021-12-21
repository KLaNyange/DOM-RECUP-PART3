//?Exo1
let h1 = document.querySelector("h1")
h1.innerText = "Les attributs class et id"
console.log(h1.innerText);
//?Exo2
let firstH2 = document.querySelector("h2")
firstH2.innerText = "Exercice 2 partie A"
console.log(firstH2);

//?Exo3
let secondH2 = document.querySelector("section").nextElementSibling.firstElementChild
secondH2.innerText = "Exercice 2 partie B"
console.log(secondH2);

//?Exo4
let firstP = document.querySelector("section").firstElementChild.nextElementSibling
firstP.innerHTML = `L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <span> <b>par coeur</b> </span>`
console.log(firstP);

//?Exo5
let secondP = document.querySelector("section").nextElementSibling.firstElementChild.nextElementSibling
secondP.innerHTML = ` La manipulation de l'attribut Style peut-être une solution rapide`
console.log(secondP);

//?Exo6
h1.setAttribute("id","bigTitle")
console.log(h1);

//?Exo7
let div = document.querySelector("div")
div.classList.add("container")
console.log(div);

//?Exo8
let h2 = document.querySelectorAll("h2")
h2.forEach(element => {
    element.classList.add("title")
});


//?Exo9
let p = document.querySelectorAll("p")
p.forEach(element => {
    element.classList.add("text")
});
console.log(p[0]);

//?Exo10
let section1 = document.querySelector("section")
section1.classList.add("margin-bottom","border-black","padding")
console.log(section1);
//?Exo11
let section2 = document.querySelector("section").nextElementSibling
section2.classList.add("margin-top","border-black","padding")
console.log(section2);

//?Exo12
let divStyle = document.querySelector("section").nextElementSibling.lastElementChild
divStyle.setAttribute("style", "border-top:20px solid blueviolet; border-radius:100%; background-color:blue; height:20px; width:20px;")
console.log(divStyle);

