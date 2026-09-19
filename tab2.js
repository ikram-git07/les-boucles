//demande à l'utilisateur le nombre d'éléments d'un tableaus. 
//puis demande à l'utilisateur de saisir ces éléments.
// Affichez ensuite les éléments du tableau.
const prompt =require("prompt-sync")();
const nbr = Number (prompt("entrez le nombre d'éléments d'un tableaus "));
const list = [];
for ( let i = 0; i < nbr; i++ ){
list[i]= Number (prompt ("entrez éléments du tableaus "));
console.log (list);
}
