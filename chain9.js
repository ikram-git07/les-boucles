//  qui lit une chaîne de caractères et supprime tous les espaces. 
//  Affichez la chaîne résultante.
const prompt = require("prompt-sync")();
let car = prompt ("entrez une chain");
let vide = ""; 
for (let i = 0 ; i < car.length; i++ ){
     if (car[i] !== " " ){
        vide = vide + car[i]
}
    }
console.log(vide);

