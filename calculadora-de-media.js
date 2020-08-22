const input = require("readline-sync");

const nota1 = input.question ("qual a nota 1?");
const nota2 = input.question ("qual a nota 2?");
const nota3 = input.question ("qual a nota 3?");
const nota4 = input.question ("qual a nota 4?");
const nota5 = input.question ("qual a nota 5?");
const nota6 = input.question ("qual a nota 6?");


let media = (parseInt (nota1) + parseInt (nota2) + parseInt (nota3) + parseInt (nota4) + parseInt (nota5) + parseInt (nota6)) / 6


if (media >=7) {
console.log ("Aprovadíssima. Arrasou!");
} else if (media < 5) {
    console.log ("Reprovada. Bora estudar mais!");
}

if (media >= 5 && media < 7) {
    console.log ("Recuperação. Eita!");
}
 