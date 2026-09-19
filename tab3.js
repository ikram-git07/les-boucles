 const prompt =require("prompt-sync")();
 const nbr = Number (prompt("entrez le nombre d'éléments d'un tableau "));
 const list = [];
 for ( let i = 0; i < nbr; i++ ){
 list[i]= Number (prompt ("entrez éléments du tableaus "));
 console.log (list);
 }
 
let somme = 0 ;
for (let i = 0; i < list.length; i++ ){
somme = somme + list[i]; 
}
console.log (somme);


