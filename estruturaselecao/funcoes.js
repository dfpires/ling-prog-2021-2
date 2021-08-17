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