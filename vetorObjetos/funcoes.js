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
    let vetor = [] // não especifica o tamanho do vetor

    // entrada de dados
    for(let i=0;i<4;i++){
        let objeto = {
            codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
            estoque: Number(prompt(`Informe o estoque do produto ${i+1}`))
        }
        vetor[i] = objeto
    }

    let cliente = Number(prompt(`Informe o código do cliente`))
    do {
        let codigoCompra = Number(prompt(`Informe o código do produto para compra`))
        // verifica se o código
        let achou = false // ela é false quando não encontrou o produto, e true quando encontrou
        for(let i=0;i<4;i++){
            if (codigoCompra == vetor[i].codigo){ // achou
                achou = true
                // atualiza estoque
                let qtdeCompra = Number(prompt(`Informe a qtde da compra`))
                if (vetor[i].estoque - qtdeCompra >= 0){ // tem estoque suficiente
                    vetor[i].estoque = vetor[i].estoque - qtdeCompra
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
    for(let i=0;i<4;i++){
        alert(` Código do produto ${vetor[i].codigo} e tem estoque ${vetor[i].estoque}`)
    }
}

function exe4() {

    // let vetor = [] // vetor com tamanho dinâmico
    let vetor = new Array(15) // vetor com tamanho estático - fixado
    let vetorR = []

    for(let i=0;i<15;i++){
        vetor[i] = Number(prompt(`Informe o valor do elemento ${i+1}`))
    }
    // construi o vetor resultante
    for(let i=0;i<15;i++){
        if (vetor[i] == 30){
            vetorR.push(i) // adicionamos a posição
        }
    }
    alert(`As posições contendo elementos igual a 30 é ${vetorR}`)
}

function exe5(){

    let vetLogica = new Array(15)
    let vetLp = new Array(10)
    let interseccao = []

    // entrada de dados
    for(let i=0;i<15;i++){
        vetLogica[i] = Number(prompt(`Informe código de matrícula do aluno que faz Lógica`))
    }
     // entrada de dados
     for(let i=0;i<10;i++){
        vetLp[i] = Number(prompt(`Informe código de matrícula do aluno que faz Linguagem de Programação`))
    }

    // intersecção
    for(let i=0;i<15;i++){ // percorre o vetor de lógica
        for(let j=0;j<10;j++){// percorre o vetor de linguagem de programação
            if (vetLogica[i] == vetLp[j]){
                interseccao.push(vetLogica[i])
            }
        } 
    }
    alert(`Alunos que fazem ambas as disciplinas ${interseccao}`)
}

function exe6() {
    // declaração dos vetores
    let vetor = new Array(5) // operador new aloca espaço na memória
    for(let i=0;i<5;i++){
        let objeto = {
            nome: prompt(`Informe o nome do vendedor ${i+1}`),
            vendas: Number(prompt(`Informe o total de vendas do vendedor ${i+1}`)),
            comissao: Number(prompt(`Informe o % de comissão do vendedor ${i+1}`))
        }
        vetor[i] = objeto
    }
    let totalVendas = 0
    let maior = 0
    let nomeMaior = ""
    let menor = 100000
    let nomeMenor = ""
    for(let i=0;i<5;i++){
        let receber = (vetor[i].vendas * vetor[i].comissao) / 100 // calcular o valor a receber do vendedor
        if (receber > maior){
            maior = receber // atualizar valor maior
            nomeMaior = vetor[i].nome
        }
        if (receber < menor){
            menor = receber // atualizar valor menor
            nomeMenor = vetor[i].nome
        }
        alert(`O vendedor ${vetor[i].nome} vai receber ${receber}`) // mostra o relatório
        totalVendas = totalVendas + vetor[i].vendas // calcula o total de vendas
    }
    alert(`O total de vendas foi de ${totalVendas}`)
    alert(`O maior valor a receber é ${maior} do vendedor ${nomeMaior}`)
    alert(`O menor valor a receber é ${menor} do vendedor ${nomeMenor}`)
}

function exe8(){
    let vetor = new Array(7)
    for(let i=0;i<7;i++){
        let objeto = {
            nome: prompt(`Informe o nome do aluno ${i+1}`),
            media: Number(prompt(`Informe a média do aluno ${i+1}`))
        }
        vetor[i] = objeto
    }
    // assume que o primeiro aluno tem a maior média
    let nomeMaiorMedia = vetor[0].nome
    let maiorMedia = vetor[0].media
    for(let i=0;i<7;i++){ // percorre o vetor
        if (vetor[i].media > maiorMedia){
            maiorMedia = vetor[i].media
            nomeMaiorMedia = vetor[i].nome
        }
        if (vetor[i].media < 7){
            alert(`O aluno ${vetor[i].nome} está de exame e precisa tirar ${10 - vetor[i].media}` )
        }
    }
    alert(`Nome do aluno com maior média ${nomeMaiorMedia} com média ${maiorMedia}`)
}

function exe9(){
   let vetor = new Array(10)
    // leitura de dados
    for(let i=0;i<10;i++){
        let objeto = {
            nome: prompt(`Informe o nome do produto ${i+1}`),
            codigo: Number(prompt(`Informe o código do produto ${i+1}`)),
            preco:  Number(prompt(`Informe o preço do produto ${i+1}`))
        }
        vetor[i] = objeto
    }

    for(let i=0;i<10;i++){
        if ((vetor[i].codigo % 2 == 0) && (vetor[i].preco > 1000)) {
            vetor[i].novo = vetor[i].preco + (vetor[i].preco*20/100)
        }
        else if (vetor[i].codigo % 2 == 0){
            vetor[i].novo = vetor[i].preco + (vetor[i].preco*15/100)
        }
        else if (vetor[i].preco > 1000){
            vetor[i].novo = vetor[i].preco + (vetor[i].preco*10/100)
        }
        else {
            vetor[i].novo = -1 // indica que não teve aumento
        }
    }
    for(let i=0;i<10;i++){
        if (vetor[i].novo != -1) {
            alert(`Produto ${vetor[i].nome} com código ${vetor[i].codigo} tinha preço ${vetor[i].preco} e terá novo preço ${vetor[i].novo}`)
        }
    }
   
}

function exe1nl(){
    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt("Informe \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Mostra venda a partir de vendedor e mês \n4. Mostra total vendas a partir de um vendedor \n5. Maior Venda de um mês \n6. Mês com maior venda \n7. Sair"))
        switch(opcao){
            case 1: let objeto1 = {
                        codigo: prompt(`Informe o código do vendedor`),
                        nome: prompt(`Informe o nome do vendedor`)    
                    }
                    // vamos percorrer vetor para encontrar código já existente
                    let achou1 = false // se não encontrar, recebe false, caso encontre, recebe true
                    // vetVendedores.length -> qtde de elementos no vetor
                    for(let i=0;i<vetVendedores.length;i++){
                        if (vetVendedores[i].codigo == objeto1.codigo){
                            achou1 = true // encontramos um vendedor com este código
                        }
                    }
                    if (achou1) {
                        alert(`Já existe um vendedor com este código`)
                    }
                    else {
                        vetVendedores.push(objeto1) // adiciona o vendedor no vetor
                        alert(`Vendedor cadastrado com sucesso`)
                    }
                    break
            case 2: let objeto2 = {
                        vendedor: prompt(`Informe o código do vendedor`),
                        mes: Number(prompt(`Informe o mês da venda`)),
                        valor: Number(prompt(`Informe o valor da venda`))
                    }
                    let achou22 = false // verifica se o vendedor existe
                    for(let i=0;i<vetVendedores.length;i++){
                        if (vetVendedores[i].codigo == objeto2.vendedor){
                            achou22 = true // existe
                        }
                    }
                    if (!achou22){
                        alert(`Vendedor não existe`)
                    }
                    else {
                        let achou2 = false
                        for(let i=0;i<vetVendas.length;i++){
                            if ((vetVendas[i].vendedor == objeto2.vendedor) && (vetVendas[i].mes == objeto2.mes)){
                                achou2 = true
                            }
                        }
                        if (achou2){
                            alert(`Já existe uma venda deste vendedor neste mês`)
                        }
                        else {
                            vetVendas.push(objeto2)
                            alert(`Venda cadastrada com sucesso`)
                        }
                    }
                    break
            case 3: let codigoInteresse = prompt(`Informe código do vendedor`)
                    let mesInteresse = Number(prompt(`Informe mês de interesse`))
                    let achou3 = false
                    for(let i=0;i<vetVendas.length;i++){
                        if ((vetVendas[i].vendedor == codigoInteresse) && (vetVendas[i].mes == mesInteresse)){
                            alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteresse} é de ${vetVendas[i].valor}`)
                            achou3 = true
                        }
                    }
                    if (!achou3){
                        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse} no mês ${mesInteresse}`)
                    }
                    break
            case 4: 
                    let codigoInteresse2 = prompt(`Informe código do vendedor`)
                    let achou4 = false
                    let soma = 0
                    for(let i=0;i<vetVendas.length;i++){
                        if ((vetVendas[i].vendedor == codigoInteresse2)){
                            soma = soma + vetVendas[i].valor
                            achou4 = true
                        }
                    }
                    if (!achou4){
                        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse2}`)
                    }
                    else {
                        alert(`O total de vendas do vendedor ${codigoInteresse2} é ${soma}`)
                    }
                    break
            case 5: let mesInteresse2 = Number(prompt(`Informe o mês de interesse`))
                    let maiorVenda = 0
                    let quemVendeu = ""
                    let achou5 = false
                    for(let i=0;i<vetVendas.length;i++){
                        if (vetVendas[i].mes == mesInteresse2){
                            achou5 = true
                            if (vetVendas[i].valor > maiorVenda){
                                maiorVenda = vetVendas[i].valor
                                quemVendeu = vetVendas[i].vendedor
                            }
                        }
                    }
                    if (achou5){
                        alert(`O maior venda no mês ${mesInteresse2} foi de ${quemVendeu} no valor de ${maiorVenda}`)
                    }
                    else {
                        alert(`Não existe venda no mês informado`)
                    }
                    break
            case 6:
                    let vendasMes = [0,0,0,0,0,0,0,0,0,0,0,0] // zero neutraliza a soma
                    for(let i=0;i<vetVendas.length;i++){
                        let posicao = vetVendas[i].mes - 1 // posição é no mês da venda - 1
                        vendasMes[posicao] = vendasMes[posicao] + vetVendas[i].valor
                    }
                    // procurar o mês com maior venda
                    let maiorVenda = 0
                    let maiorMes = 0
                    for(let i=0;i<vendasMes.length;i++){
                        if (vendasMes[i] > maiorVenda){
                            maiorVenda = vendasMes
                            maiorMes = i + 1
                        }
                    }
                    alert(`O mês ${maiorMes} teve a maior venda de ${maiorVenda}`)
                    break
            case 7: alert("Finalizando o programa")
                    break
            default: alert("Opção inválida")
        }
    }
    while (opcao != 7)
}