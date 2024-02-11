// Escreva um programa que leia um número de 1 a 7 e imprima o dia da semana correspondente.

while (true) {
    let dia = prompt("Digite um número de 1 a 7: ");

    switch (dia) {
        case "1":
            alert("Domingo");
            break;
        case "2":
            alert("Segunda");
            break;
        case "3":
            alert("Terça");
            break;
        case "4":
            alert("Quarta");
            break;
        case "5":
            alert("Quinta");
            break;
        case "6":
            alert("Sexta");
            break;
        case "7":
            alert("Sábado");
            break;
        default:
            alert("Valor inválido!");
            break;
    }
}