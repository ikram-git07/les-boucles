const prompt =require("prompt-sync")();
const nbr = Number(prompt("entrez un nombre"));
let somme = 0 ;
for (let i = 1 ; i <= nbr; i++ ){
somme = somme + i ;
}
console.log(`la somme de ${nbr} est la ${somme}`);
