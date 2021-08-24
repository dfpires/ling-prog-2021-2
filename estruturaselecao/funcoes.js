function exe1(){

    // recuperar entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)

    // calcular a média
    let media = (nota1 + nota2 + nota3 + nota4) / 4

    if (media >= 7){
        document.getElementById("resultado").innerHTML = `A média é ${media} está aprovado`
    }
    else {
        document.getElementById("resultado").innerHTML = `A média é ${media} está reprovado`
    }
}

function exe2(){
    // entrada de dados
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    // calcula a média
    let media = (nota1 + nota2) / 2
    // operadores lógicos
    // E -> &&
    let resultado 
    if ((media >=0) && (media < 3)){

        resultado = `Aluno aprovado com média ${media}`

    }
    else if ((media >= 3) && (media < 7)){

        resultado = `Aluno em exame com média ${media}`

    }
    else if ((media >= 7 ) && (media <= 10)){

        resultado = `Aluno reprovado com média ${media}`

    }
    else {

        resultado = `Notas informadas são inválidas`

    }
    // mostra resultado
    document.getElementById("resultado").innerHTML = resultado
}
// exercício 3
function exe3(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    if (nro1 < nro2){
        document.getElementById("resultado").innerHTML = `O menor número é ${nro1}`
    }
    else if (nro2 < nro1){
        document.getElementById("resultado").innerHTML = `O menor número é ${nro2}`
    }
    else {
        document.getElementById("resultado").innerHTML = `Não existe número menor, ambos são iguais`
    }
}

function exe4(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)

    // quem é o maior
    if ((nro1 == nro2) && (nro2 == nro3)){
        document.getElementById("resultado").innerHTML = `Todos os números são iguais`
    }
    else if ((nro1 > nro2) && (nro1 > nro3)){
            document.getElementById("resultado").innerHTML = `O maior número é ${nro1}`
    }
    else if (nro2 > nro3){  // nro1 não é maior
              document.getElementById("resultado").innerHTML = `O maior número é ${nro2}`
        }
    else {
            document.getElementById("resultado").innerHTML = `O maior número é ${nro3}`
        }
}

function exe5(){
    // entrada de dados
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let opcao = Number(document.getElementById("opcao").value)
    // processamento
    let resultado
    switch(opcao){
        case 1: resultado = (nro1 + nro2) / 2
               break
        case 2: if (nro1 >= nro2){
                    resultado = nro1 - nro2
                }
                else {
                    resultado = nro2 - nro1
                }
                break
        case 3: resultado = (nro1 * nro2)
                break
        case 4: if (nro2 != 0){
                    resultado = nro1 / nro2
                }
                else {
                    resultado = "Divisão por zero"
                }
                break
        default: resultado = "opção inválida"
    }
    document.getElementById("resultado").innerHTML = resultado
}