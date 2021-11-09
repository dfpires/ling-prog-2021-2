
// função que não retorna nada
function potencia(x, y){
    console.log(Math.pow(x, y))
}
// função que retorna um valor
function potencia2(x, y){
    return Math.pow(x, y)
}

potencia(2, 3)
console.log(potencia2(2, 3))

// passagem de parâmetro por valor
function soma10(a){
    a = a + 10
}

let x = 50
soma10(x)
console.log(x) // qual o valor de x ?

let a = 50
soma10(a)
console.log(a) // qual o valor de a ?

// passagem de parâmetro por referência
function soma10Vetores(a){
    for(let i=0;i<a.length;i++){
        a[i] = a[i] + 10
    }
}

let vetor = [1, 2, 3, 4, 5]
soma10Vetores(vetor) // a variável a recebe uma referência de vetor
// o que for alterado em a, na verdade, será alterado em vetor
console.log(vetor) // 11, 12, 13, 14, 15



function cadastraVendedor(vetVendedores){
    let objeto = {
        codigo: prompt(`Informe o código do vendedor`),
        nome: prompt(`Informe o nome do vendedor`)    
    }
    // vamos percorrer vetor para encontrar código já existente
    let achou = false // se não encontrar, recebe false, caso encontre, recebe true
    // vetVendedores.length -> qtde de elementos no vetor
    for(let i=0;i<vetVendedores.length;i++){
        if (vetVendedores[i].codigo == objeto.codigo){
            achou = true // encontramos um vendedor com este código
        }
    }
    if (achou) {
        alert(`Já existe um vendedor com este código`)
    }
    else {
        vetVendedores.push(objeto) // adiciona o vendedor no vetor
        alert(`Vendedor cadastrado com sucesso`)
    }
}

function cadastraVenda(vetVendedores, vetVendas){
    let objeto = {
        vendedor: prompt(`Informe o código do vendedor`),
        mes: Number(prompt(`Informe o mês da venda`)),
        valor: Number(prompt(`Informe o valor da venda`))
    }
    let achou = false // verifica se o vendedor existe
    for(let i=0;i<vetVendedores.length;i++){
        if (vetVendedores[i].codigo == objeto.vendedor){
            achou = true // existe
        }
    }
    if (!achou){
        alert(`Vendedor não existe`)
    }
    else {
        achou = false
        for(let i=0;i<vetVendas.length;i++){
            if ((vetVendas[i].vendedor == objeto.vendedor) && (vetVendas[i].mes == objeto.mes)){
                achou = true
            }
        }
        if (achou){
            alert(`Já existe uma venda deste vendedor neste mês`)
        }
        else {
            vetVendas.push(objeto)
            alert(`Venda cadastrada com sucesso`)
        }
    }
}
// Exercício 1 - transforme o case 1 em uma função
function calculaMesVendasCodigoMes(vetVendas, codigoInteresse, mesInteresse){
    console.log(`Entrou na função com 3 parâmetros`)
    let achou = false
    for(let i=0;i<vetVendas.length;i++){
        if ((vetVendas[i].vendedor == codigoInteresse) && (vetVendas[i].mes == mesInteresse)){
            alert(`O valor das vendas no mês ${mesInteresse} do funcionário ${codigoInteresse} é de ${vetVendas[i].valor}`)
            achou = true
        }
    }
    if (!achou){
        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse} no mês ${mesInteresse}`)
    }
}
function calculaMesVendasCodigo(vetVendas, codigoInteresse){
    console.log(`Entrou na função com 2 parâmetros`)
    let achou = false
    let soma = 0
    for(let i=0;i<vetVendas.length;i++){
        if ((vetVendas[i].vendedor == codigoInteresse)){
            soma = soma + vetVendas[i].valor
            achou = true
        }
    }
    if (!achou){
        alert(`Não foi encontrada venda para o vendedor ${codigoInteresse}`)
    }
    else {
        alert(`O total de vendas do vendedor ${codigoInteresse} é ${soma}`)
    }
}

function calculaMaiorVendaMes(vetVendas, mesInter){
    let maiorVenda = 0
    let quemVendeu = ""
    let achou = false
    for(let i=0;i<vetVendas.length;i++){
        if (vetVendas[i].mes == mesInter){
            achou = true
            if (vetVendas[i].valor > maiorVenda){
                maiorVenda = vetVendas[i].valor
                quemVendeu = vetVendas[i].vendedor
            }
        }
    }
    if (achou){
        alert(`O maior venda no mês ${mesInter} foi de ${quemVendeu} no valor de ${maiorVenda}`)
    }
    else {
        alert(`Não existe venda no mês informado`)
    }
}
function exe1nl(){
    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt("Informe \n1. Cadastrar vendedor \n2. Cadastrar venda \n3. Mostra venda a partir de vendedor e mês \n4. Mostra total vendas a partir de um vendedor \n5. Maior Venda de um mês \n6. Mês com maior venda \n7. Sair"))
        switch(opcao){
            case 1: cadastraVendedor(vetVendedores)
                    break
            case 2: cadastraVenda(vetVendedores, vetVendas)
                    break
            case 3: let codigoInteresse = prompt(`Informe código do vendedor`)
                    let mesInteresse = Number(prompt(`Informe mês de interesse`))
                    calculaMesVendasCodigoMes(vetVendas, codigoInteresse, mesInteresse)
                    break
            case 4: 
                    let codInteresse = prompt(`Informe código do vendedor`)
                    calculaMesVendasCodigo(vetVendas, codInteresse)
                    break
            case 5: let mesInter = Number(prompt(`Informe o mês de interesse`))
                    calculaMaiorVendaMes(vetVendas, mesInter)
                    break
            case 6: calculaMesMaiorVenda(vetVendas)
                    break
            case 7: alert("Finalizando o programa")
                    break
            default: alert("Opção inválida")
        }
    }
    while (opcao != 7)
}

function calculaMesMaiorVenda(vetVendas){
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
            maiorVenda = vendasMes[i]
            maiorMes = i + 1
        }
    }
    alert(`O mês ${maiorMes} teve a maior venda de ${maiorVenda}`)
}