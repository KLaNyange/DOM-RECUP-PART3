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
    
    let competenceLength = competences[key].length
    let short = competences[key].substr(0, competenceLength-1)
    if (short > 50 && short < 100) {
        h2[i].style.background = 'green'
        h2[i].style.color = 'white'
    } else if (short == 100) {
        h2[i].style.background = 'gold'
    } else if (short < 50) {
        h2[i].style.background = 'red'
    }
    i++
    
}





// let i = 0 
// h2[i].innerText = h2[i].innerText + ": "+ competences.HTML
// console.log(h2[i].innerText);
// i++

//*Exo 3