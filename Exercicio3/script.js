// ano bisexto
// 1. Crie uma função que recebe um ano e retorna se ele é bissexto ou não.
// 2. Para ser bissexto, o ano deve ser:
//    - Divisível por 4. Sendo assim, a divisão é exata com o resto igual a zero;
//    - Não pode ser divisível por 100. Com isso, a divisão não é exata, ou seja, deixa resto diferente de zero;
//    - Pode ser que seja divisível por 400. Caso seja divisível por 400, a divisão deve ser exata, deixando o resto igual a zero.

let ano = prompt("Digite um ano: ");

if (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) {
    alert("Ano bissexto");
} else if (isNaN(ano)) {
    alert("Valor inválido!");
} else {
    alert("Ano  não é bissexto");

}