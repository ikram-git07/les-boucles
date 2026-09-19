const prompt =require("prompt-sync")();
let n = Number(prompt("entrez un nombre entier pour un factorielle :"));
let factorille = 1;
for (let i = 1; i <= n; i++) {
 factorille *= i  ; 
}
console.log (`la factorielle de ${n} est: ${factorille}`);
