const prompt =require("prompt-sync"());
let nbr =Number(`entrez un nombre dans la table`:);
for (let i=1; i<=10; i++){
    let resultat = nbr * i ;
    console.log (`${nbr} * ${i} = ${resultat}`);
}
 
