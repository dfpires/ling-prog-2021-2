
function principal(){
    let vetor = [] // declaração do vetor
    let matriz = [] // declaração da matriz
    entradaDados(vetor, matriz)
    calculaMediaAlunos(vetor, matriz) // calcula e mostra média de cada aluno
    calculaMediaBimestral(matriz) // calcula e mostra média por bimestre
}
function entradaDados(vetor, matriz){

    for(let i=0;i<4;i++) { // para cada aluno
        let objeto = {
            ra: Number(prompt(`Informe RA do aluno`)),
            nome: prompt(`Informe o nome do aluno`),
            media: 0
        }
        vetor[i] = objeto // insere o objeto no vetor
        matriz[i] = [] // declara vetor dentro da matriz
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe a nota do bimestre ${j+1}`))
        }
    }
}

function calculaMediaAlunos(vetor, matriz) {
    for(let i=0;i<4;i++){ // para cada aluno
        let soma = 0 // cria uma soma para cada aluno
        for(let j=0;j<4;j++){ // para cada bimestre
            soma = soma + matriz[i][j]
        }
        // encerrou os bimestres
        alert(`A média do aluno ${vetor[i].nome} é ${soma/4}`)
        // alterar o aluno colocando a sua média
        vetor[i].media = soma / 4
    }
}

function calculaMediaBimestral(matriz){
    for(let j=0;j<4;j++){ // para cada bimestre
        let soma = 0 // cria a soma das notas por bimestre
        for(let i=0;i<4;i++){ // para cada aluno
            soma = soma + matriz[i][j]
        }
        alert(`A média do bimestre ${j+1} é ${soma/4}`) // 4 alunos
    }
}