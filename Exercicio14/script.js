//identifica estacao do ano pelo mes

while (true) {
    let mes = prompt("Digite um número de 1 a 12: ");
    switch (mes) {
        case "1":
        case "2":
        case "12":
            alert("Verão");
            break;
        case "3":
        case "4":
        case "5":
            alert("Outuno");
            break;
        case "6":
        case "7":
        case "8":
            alert("Inverno");
            break;
        case "9":
        case "10":
        case "11":
            alert("Primavera");
            break;
        default:
            alert("Valor inválido!");
            break;
    }
}
