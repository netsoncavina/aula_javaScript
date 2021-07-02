let valor = 89;

let n100 = valor / 100;
valor %= 100;
let n50 = valor / 50;
valor %= 50;
let n20 = valor / 20;
valor %= 20;
let n10 = valor / 10;
valor %= 10;
let n5 = valor / 5;
valor %= 5;
let n2 = valor / 2;
valor %= 2;
let n1 = valor;

console.log(Math.floor(n100) + " nota(s) de R$ 100,00");
console.log(Math.floor(n50) + " nota(s) de R$ 50,00");
console.log(Math.floor(n20) + " nota(s) de R$ 20,00");
console.log(Math.floor(n10) + " nota(s) de R$ 10,00");
console.log(Math.floor(n5) + " nota(s) de R$ 5,00");
console.log(Math.floor(n2) + " nota(s) de R$ 2,00");
console.log(Math.floor(n1) + " nota(s) de R$ 1,00");