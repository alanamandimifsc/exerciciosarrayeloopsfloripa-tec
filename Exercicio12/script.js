while (true) {
    let lado = prompt("Digite a quantidade de lados que tem o polígono: ");
    switch (lado) {
        case "3":
            alert("Triângulo");
            break;
        case "4":
            alert("Quadrado");
            break;
        case "5":
            alert("Pentágono");
            break;
        case "6":
            alert("Hexágono");
            break;
        case "7":
            alert("Heptágono");
            break;
        case "8":
            alert("Octógono");
            break;
        case "9":
            alert("Eneágono");
            break;
        case "10":
            alert("Decágono");
            break;
        default:
            alert("Polígono não identificado");
            break;
    }
}