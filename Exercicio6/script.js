
let num = [];

num.push(prompt("Digite um número: "));
num.push(prompt("Digite outro número: "));
num.push(prompt("Digite mais um número: "));

let maior = num[0];
for (numero of num) {
    if (numero > maior && !isNaN(numero) {
        maior = numero;
    }
}

alert("O maior número é: " + maior);