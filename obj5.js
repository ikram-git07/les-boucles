//  qui crée un objet pour représenter un livre avec les propriétés titre,auteur et année. 
// Écrivez une fonction qui retourne un objet initialisé avec des valeurs données.
//  Affichez les informations du livre.
// const livre ={
// titre :"karoma" ,
// auteur :"meryem" ,
// année :2007,
// }

function livre (titre, auteur, annee){
    return{
        titre: titre, 
        auteur: auteur,
        année: annee,
    }
}
const resultst = livre("ikram", "mery", 2007);

console.log(resultst.titre);
console.log(resultst.auteur);
console.log(resultst.année);

