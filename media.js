
var nota1 = 3
var nota2 = 6
var nota3 = 8

var media = (nota1 + nota2 + nota3) / 3

while (nota1 > 10 || nota2 > 10 || nota3 > 10 || nota1 < 0 || nota2 < 0 || nota3 < 0) {
    console.log('Nota inválida, digite uma nota entre 0 e 10')
    break
}

while (media >= 7) {
  console.log('A média é ' + media + ', portanto o aluno está aprovado')
  break
}

while (media <= 7) {
  console.log('A média é ' + media + ', portanto o aluno está reprovado')
  break
}