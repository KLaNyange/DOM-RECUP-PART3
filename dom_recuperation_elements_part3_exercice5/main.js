let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub: '50%',
    Discord: '15%',
}
//*Exo1
let div = document.querySelector("#liste-soft-skills")
// let h2 = div.querySelectorAll("h2")
// console.log(h2);
//*Exo2

let elements = document.querySelectorAll('#liste-soft-skills h2');
let h2;

for (const softSkill in softSkills) {
    elements.forEach(skill => {
        if (skill.innerText == softSkill) {
            skill.innerText += ' '+ softSkills[softSkill]
            h2 = skill
        }
    });

    let softLength = softSkills[softSkill].length
    let short = softSkills[softSkill].substr(0, softLength-1)
    if (short > 50 && short < 100) {
        h2.style.background = 'green'
        h2.style.color = 'white'
    } else if (short == 100) {
        h2.style.background = 'gold'
        h2.style.color = 'black'
    } else if (short < 50) {
        h2.style.background = 'red'
    }
}

//*Mes tests

// console.log(Object.keys(softSkills)); 
// let verif = Object.keys(softSkills)
// console.log(h2[0].innerText.includes(verif[2]));
// let i = 0
// // let index = 0
// console.log(h2);
// let marouane = Object.keys(softSkills)
// let alixe = Object.values(softSkills)
// let hedi = h2[i];
// console.log(alixe);
// console.log(Object.keys(softSkills));
// for (const key in softSkills) {
//     switch (h2[i].innerText) {
//         case "GitHub":
//             h2[0].innerText = h2[0].innerText + ": " + alixe[2]
//         case "Trello":
//             h2[1].innerText = h2[1].innerText + ": " + alixe[0]
//         case "Git":
//             h2[2].innerText = h2[2].innerText + ": " + alixe[1]
//         case "Discord":
//             h2[3].innerText = h2[3].innerText + ": " + alixe[3]

//     }
    // let longueur = softSkills[key].length;
    // let short = softSkills[key].substr(0, longueur - 1);

    // if (short > 50 && short < 100) {
    //     hedi.style.backgroundColor = "green"
    //     hedi.style.color = "white"
    // } else if (short == 100) {
    //     hedi.style.backgroundColor = "gold"
    // } else if (short < 50) {
    //     hedi.style.backgroundColor = "red"
    // }
// }

// let i = 0
// let hedi;

// for (const key in softSkills) {
//     h2.forEach(element => {
//         if (element.innerText == key) {
//             hedi = element 
//             hedi.innerText = key + ": " + softSkills[key]

//         }
//     });
//     let longueur = softSkills[key].length;
//     let short = softSkills[key].substr(0, longueur -1);

//     if (short > 50 && short< 100) {
//         hedi.style.backgroundColor = "green"
//         hedi.style.color = "white"
//     }
//     else if (short == 100) {
//         hedi.style.backgroundColor = "gold"
//     }
//     else if (short < 50) {
//         hedi.style.backgroundColor = "red"
//     }
//     i++
// }



// if (h2[0].innerText == marouane[2]) {
//     h2[0].innerText = h2[0].innerText + ": " + alixe[2]
// }else if (h2[1].innerText == marouane[0]) {
//     h2[1].innerText = h2[1].innerText + ": " + alixe[0]

// }
