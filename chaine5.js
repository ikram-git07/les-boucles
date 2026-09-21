// qui lit une chaîne de caractères et affiche la chaîne inversée. Par exemple, si la chaîne est "abcd", le programme doit afficher "dcba".
const prompt = require ("prompt-sync")();
let chain = prompt ("taper un caractere");
let inverse = "";
for (let i = chain.length-1; i >= 0; i--  ){
    inverse = inverse + chain[i]
}
console.log(inverse)