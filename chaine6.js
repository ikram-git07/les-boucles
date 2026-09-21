// qui lit une chaîne de caractères et un caractère, 
// puis compte et affiche combien de fois le caractère apparaît dans la chaîne.
const prompt = require ("prompt-sync")();
let chain = prompt ("taper un caractere");
let lettre = prompt ("entrez un caract ");
let compte = 0;
for (let i = 0; i < chain.length; i++ ){
    if (chain[i] === lettre){
        compte = compte + 1 ;
    }
}
console.log(compte)