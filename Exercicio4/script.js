let numero = prompt("Digite um número: ");

if (numero % 2 == 0) {
    alert("Número par");
} else if (isNaN(numero)) {
    alert("Valor inválido!");
} else {
    alert("Número ímpar");
}