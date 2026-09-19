const prompt =require("prompt-sync")();
let age = Number (prompt("entrez ton age"));
let note =Number  (prompt("entrez votre note"));
if ( age < 6){
    console.log ("tu est mineure");
}
else if (age >= 6 && age < 24 ){
    if ( note < 10 ){
        console.log ("tu est refuse ");
    }
      else if (note >= 10 && note <= 14 ) {
         console.log ("bien");
      } 
    if ( note > 14 ){
        console.log ("tres bien");
    }
}
else if ( age >= 24 ){
    console.log ("erreur");
}