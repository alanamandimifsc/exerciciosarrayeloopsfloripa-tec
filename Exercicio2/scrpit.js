// Crie um programa que classifique um número como positivo, negativo ou zero.

let numero = prompt("Digite um número");

if (numero > 0) {
    alert("Positivo");
} else if (numero < 0) {
    alert("Negativo");
} else if (isNaN(numero)) {
    alert("Inválido");
} else {
    alert("Zero");
}