// qui crée un objet pour représenter un étudiant avec les propriétés nom, prenom et un tableau de notes. 
// Attribuez des valeurs aux propriétés et aux notes,
//  puis affichez les informations de l'étudiant.
const étudiant ={
    nom :"ikram",
    prenom :"arbaoui",
    notes : [16, 12, 10, 20 ],
}
console.log("voila tes info");
// console.log(étudiant.nom);
// console.log(étudiant.prenom);
// console.log(étudiant.notes);
// console.log(étudiant.notes[2]);
// console.log(étudiant.notes.length);
for(let cle in  étudiant ){
    
    console.log(cle,  étudiant[cle] )
}
    console.log("voila tes info");

