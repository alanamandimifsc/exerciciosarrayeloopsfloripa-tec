
let nota = prompt("Digite a nota do aluno: ");

if (nota >= 7) {
    alert("Aprovado");
} else if (7 < nota >= 5) {
    alert("Recuperação");
} else if (isNaN(nota)) {
    alert("Valor inválido!");
} else {
    alert("Reprovado");
}