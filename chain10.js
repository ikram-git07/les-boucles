//  qui lit une chaîne de caractères principale et une sous-chaîne, 
// puis vérifie si la sous-chaîne est présente dans la chaîne principale. 
// Affichez un message indiquant si la sous-chaîne est trouvée ou non.

const prompt = require("prompt-sync")();
let nom = prompt ("entrez une chain");
let sousChain = prompt ("entrez une sous chain");
if ( nom.includes(sousChain)){
    console.log("la sousChaîne est trouvée");
}
else {
    console.log("la sousChaîne nest pas trouvée");
}



