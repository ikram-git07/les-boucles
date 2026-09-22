// qui crée un objet pour représenter un point dans un plan avec les propriétés x et y.
//  Modifiez directement les valeurs de ses propriétés, 
// puis affichez les valeurs du point.
const  plan ={
     x :14,  
     y :40,
    
}
plan.x = 10;
plan.y = 30;
console.log("les valeurs du pointest :");
for (let cle in plan ){
    console.log(cle ,plan[cle])
}
// console.log("les valeurs du pointest :");
