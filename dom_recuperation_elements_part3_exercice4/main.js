let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
}

//*Exo 1
let div = document.querySelector("#liste-competences")
let h2 = div.querySelectorAll("h2")
console.log(div);
console.log(h2);

//*Exo 2
// for (let key in competences) {
//     console.log(`${h2}`.innerText = `${competences[key]}`);
// } 
// let i = 0
// for (let key in competences) {
//     console.log(`${h2[i]}`.innerText = `${competences[key]}`);
//     console.log(h2[i].innerText);
//     `${h2[i]}`.innerText = `${h2[i]}`.innerText + competences[key]
//     i++
// }

let i = 0
for (const key in competences) {
    h2[i].innerText = h2[i].innerText + ": " + competences[key]
    console.log(h2[i].innerText);
    i++
    // if (competences[key] = '50%') {
    //     h2[i].setAttribute("style", "background-color: black;") 
    // }else if (competences[key] > '50%') {
    //     h2[i].setAttribute("style", "background-color: green; color:white;") 
    // }else if (competences[key] < '50%') {
    //     h2[i].setAttribute("style", "background-color: red;")
    // }else if (competences[key] == '100%') {
    //     h2[i].setAttribute("style", "background-color: gold; color:black;") 
        
    // }
    
}





// let i = 0 
// h2[i].innerText = h2[i].innerText + ": "+ competences.HTML
// console.log(h2[i].innerText);
// i++

//*Exo 3