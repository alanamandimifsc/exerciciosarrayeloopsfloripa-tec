// verificar se ano é par ou impar
let ano = prompt("Digite o ano: ");

if (ano % 2 == 0) {
    alert("Ano par");
} else if (isNaN(ano)) {
    alert("Valor inválido")
} else {
    alert("Ano impar");
}