const prompt =require("prompt-sync")();
const nbr = Number (prompt("entrez le nombre d'éléments d'un tableaus "));
const list = [];
let max = 
for ( let i = 1; i < nbr.length; i++ ){
    if (nbr[i] > max ){
        max = nbr[i];
    }
list[i]= Number (prompt ("entrez éléments du tableaus "));
}
console.log (list);

// let max  = list [0];
// if ( max < list[1] ){
//     max = list[1]
// }
// if ( max < list[2]){
//     max = list[2]
// }
// if ( max < list[3]){
//     max = list[3]
// }
// if ( max < list[4]){
//     max = list[4]
// }
console.log (max);