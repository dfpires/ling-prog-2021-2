function carros(){
    let vetor = []
    let matriz = []
    entradaDados(vetor, matriz)
    calculaTotalVendas(vetor, matriz)
}

function entradaDados(vetor, matriz){
    for(let i=0;i<4;i++){
        let objeto = {
            codigo: prompt(`Informe o código do carro`),
            marca: prompt(`Informe a marca do carro`),
            modelo: prompt(`Informe o modelo do carro`),
            totVendas: 0
        }
        vetor[i] = objeto
        matriz[i] = []
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(`Informe quantidade de vendas no trimestre ${j+1}`))
        }
    }
}