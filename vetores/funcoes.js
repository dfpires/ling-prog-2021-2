function exe1(){
    // declarar os vetores
    let vetor = []
    let impares = []
    let pares = []
    // entrada de dados
    for(let i=0;i<6;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
    // alimentar os vetores pares e impares
    // para não precisarmos controle o índice dos vetores destinos, usamos push()
    // push() já sabe a primeira posição vazia do vetor
    for(let i=0;i<6;i++){
        if (vetor[i] % 2 == 0) {
            // elemento par
            pares.push(vetor[i])            
        }
        else {
            // elemento ímpar
            impares.push(vetor[i])       
        }
    }
    console.log(`Elementos pares ${pares} e qtde ${pares.length}`)
    console.log(`Elementos ímpares ${impares} e qtde ${impares.length}`)
}

function exe2(){
     // declarar os vetores
     let vetor = []
     let m2 = []
     let m3 = []
     let m23 = []
    // entrada de dados
    for(let i=0;i<7;i++){
        vetor[i] = Number(prompt(`Informe o número ${i+1}`))
    }
     // alimentar os vetores m2, m3 e m23
    // para não precisarmos controle o índice dos vetores destinos, usamos push()
    // push() já sabe a primeira posição vazia do vetor
    for(let i=0;i<7;i++){
        if (vetor[i] % 2 == 0) {
            // elemento é múltiplo de 2
            m2.push(vetor[i])            
        }
        if (vetor[i] % 3 == 0) {
            // elemento ímpar
            m3.push(vetor[i])       
        }
        if ((vetor[i] % 2 == 0) && (vetor[i] % 3 == 0)) {
            // elemento ímpar
            m23.push(vetor[i])       
        }
    }
    console.log(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    console.log(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    console.log(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
    alert(`Elementos múltiplos de 2: ${m2} e qtde ${m2.length}`)
    alert(`Elementos múltiplo de 3: ${m3} e qtde ${m3.length}`)
    alert(`Elementos múltiplo de 2 e 3: ${m23} e qtde ${m23.length}`)
}

function exe3(){
    // declaração dos vetores
    let vetCodigos = []
    let vetEstoque = []

    // entrada de dados
    for(let i=0;i<10;i++){
        vetCodigos[i] = Number(prompt(`Informe o código do produto ${i+1}`))
        vetEstoque[i] = Number(prompt(`Informe o estoque do produto ${i+1}`))
    }

    let cliente = Number(prompt(`Informe o código do cliente`))
    do {
        let codigoCompra = Number(prompt(`Informe o código do produto para compra`))
        // verifica se o código
        let achou = false // ela é false quando não encontrou o produto, e true quando encontrou
        for(let i=0;i<10;i++){
            if (codigoCompra == vetCodigos[i]){ // achou
                achou = true
                // atualiza estoque
                let qtdeCompra = Number(prompt(`Informe a qtde da compra`))
                if (vetEstoque[i] - qtdeCompra >= 0){ // tem estoque suficiente
                    vetEstoque[i] = vetEstoque[i] - qtdeCompra
                }
                else {
                    alert(`Qtde em estoque é insuficiente`)
                }
            }
        }
        if (!achou){ // não encontrou
            alert(`Produto não comprado para venda`)
        }

        cliente = Number(prompt(`Informe o novo código do cliente. Digite 0 para encerrar`))
    }
    while(cliente != 0)
    alert(`Estoque atualizado ${vetEstoque}`)
}

function exe4() {

    // let vetor = [] // vetor com tamanho dinâmico
    let vetor = new Array(15) // vetor com tamanho estático - fixado
    let vetorR = []

    for(let i=0;i<15;i++){
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i+1}`))
    }
    // construi o vetor resultante

}