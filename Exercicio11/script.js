// verifica se o dia é útil ou final de samana


while (true) {
    let dia = prompt("Informe o dia da semana sendo 1 para domingo, 2 para segunda e assim por diante: ");
    switch (dia) {
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
            alert("Dia útil");
            break;
        case "1":
        case "7":
            alert("Final de semana");
            break;
        default:
            alert("Valor inválido!");
            break;
    }

}