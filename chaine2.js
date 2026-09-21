// Écrivez un programme JavaScript qui calcule et affiche la longueur d'une chaîne de caractères sans utiliser la propriété length.
const prompt = require("prompt-sync")();
let chaine = prompt ("entrez une chain ");
let compteur = 0;
for (let i = 0; i <= chaine.length; i++ ){
    compteur ++
}
console.log (" la chain est :  " + compteur );

