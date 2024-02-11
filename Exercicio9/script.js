
while (true) {

    let letra = prompt("Digite uma letra: ");

    if (isNaN(letra) && letra.length == 1) {
        switch (letra.toLowerCase()) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                alert("Vogal");
                break;
            default:
                alert("Consoante");
                break;
        }
    } else {
        alert("Valor inválido!");
    }
}
