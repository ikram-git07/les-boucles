// const prompt =require("prompt-sync")();
// const nbr = Number (prompt("entrez le nombre d'éléments d'un tableaus "));
// const list = [];
// for ( let i = 0; i < nbr; i++ ){
// list[i]= Number (prompt ("entrez éléments du tableaus "));
// console.log (list);
// }


const list = [1,2,3,4,0];
let max  = list [0];
if ( max < list[1] ){
    max = list[1]
}
if ( max < list[2]){
    max = list[2]
}
if ( max < list[3]){
    max = list[3]
}
if ( max < list[4]){
    max = list[4]
}
console.log (max);