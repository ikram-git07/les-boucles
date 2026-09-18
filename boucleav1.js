const prompt =require("prompt-sync")();
const nbr = Number(prompt("entrez un nombre"))
let afficher = 5 ;
for (let i = 10 ; i >= nbr; i--) {
    let resultat = nbr * i ;
    afficher += (`le nombre afficher est ${nbr} * ${i} = ${resultat} `)
}
console.log ("afficher");
