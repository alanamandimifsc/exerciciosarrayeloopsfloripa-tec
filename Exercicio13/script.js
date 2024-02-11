// identifica positivo,zero e negativo

while (true) {
    let numero = parseInt(prompt("Digite um número: "));
    switch (numero) {
        case (numero < 0):
            alert("Negativo");
        case (numero > 0):
            alert("Positivo");

        case (numero == 0):
            alert("Zero");

        default:
            alert("Valor inválido!");
            break;
    }
}