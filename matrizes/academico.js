
function principal(){
    let vetor = [] // declaração do vetor
    let matriz = [] // declaração da matriz
    entradaDados(vetor, matriz)
    calculaMediaAlunos(vetor, matriz) // calcula e mostra média de cada aluno
}
function entradaDados(vetor, matriz){

    for(let i=0;i<4;i++) { // para cada aluno
        let objeto = {
            ra: Number(prompt(`Informe RA do aluno`)),
            nome: prompt(`Informe o nome do aluno`)
        }
        vetor[i] = objeto // insere o objeto no vetor
        matriz[i] = [] // declara vetor dentro da matriz
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe a nota do bimestre ${j+1}`))
        }
    }
}