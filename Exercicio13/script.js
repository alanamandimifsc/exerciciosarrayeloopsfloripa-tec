// identifica positivo,zero e negativo

while (true) {
    let numero = parseInt(prompt("Digite um número: "));
    if (numero < 0) {
        alert("Negativo");
    } else if (numero > 0) {
        alert("Positivo");
    }
    else (numero == 0) {
        alert("Zero");
    }
}