
function exe0(){

    let contador = 1
    let preco
    let soma = 0
    while (contador <= 10) {
        preco = Number(prompt(`Informe o preço do produto ${contador}`))
        soma = soma + preco	
        contador++
    }
    alert(`A média de preço dos produto é ${soma/10}`)
}

function exe3(){
    let contador =1 
    let idade
    let f1 = 0; let f2 = 0; let f3 = 0; let f4 = 0; let f5 = 0;
    while (contador <= 8){
        idade = Number(prompt(`Informe a idade ${contador}`))
        if (idade <= 15){
            f1++
        }
        else if (idade <= 30){
            f2++
        }
        else if (idade <= 45){
            f3++
        }
        else if (idade < 60){
            f4++
        }
        else {
            f5++
        }
        contador++
    }
    alert(`Faixa 1: ${f1} Faixa 2: ${f2} Faixa 3: ${f3} Faixa 4: ${f4} Faixa 5: ${f5}`)
    alert(`Percentual da faixa 1 ${f1/8*100} Percentual da faixa 5 ${f5/8*100}`)
}

function exe6(){

    let contador = 1
    let valor
    let codigo
    let totalVista = 0
    let totalPrazo = 0
    while (contador <= 15){
        valor = Number(prompt(`Informe o valor do produto ${contador}`))
        // converte para maiúsculo
        codigo = prompt(`Informe V para compra à vista e P para compra à prazo`).toUpperCase()  
        switch(codigo){
            case 'V': totalVista += valor
                        break
            case 'P': totalPrazo += valor
                        break
            default: alert(`Forma de pagamento inválido`)
        }
        contador++
    }
    alert(`Total à vista ${totalVista.toFixed(2)} Total à prazo ${totalPrazo.toFixed(2)} Total geral ${(totalVista + totalPrazo).toFixed(2)}`)
    alert(`Primeira parcela do valor total à prazo ${(totalPrazo/3).toFixed(2)}`)
}

function exe23(){
    let opcao
    let salario
    do {    
        opcao = Number(prompt(`Digite \n1. Novo salário \n2. Férias \n3. Décimo terceiro \n4. Sair`))
        switch(opcao){
            case 1: salario = Number(prompt(`Informe o salário`))
                    let novoSalario
                    if (salario < 210){
                        novoSalario = salario + (15*salario)/100
                    }
                    else if (salario <= 600){
                        novoSalario = salario + (10*salario)/100
                    }
                    else {
                        novoSalario = salario + (5*salario)/100
                    }
                    alert(`O novo salário é de ${novoSalario}`)
                    break
            case 2: salario = Number(prompt(`Informe o salário`))
                    alert(`As férias serão ${salario + salario/3}`)
                    break
            case 3: salario = Number(prompt(`Informe o salário`))
                    let meses = Number(prompt(`Informe qts meses foram trabalhados`))
                    alert(`Décimo terceiro ${salario * meses/12}`)
                    break
            case 4: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 4)
}

function exe1(){
    let a, b, c, d, aux // para troca

    // conta de 1 até 5
    for (let conta2=1;conta2<=5;conta2++){
        a = Number(prompt(`Informe o valor de A`))
        b = Number(prompt(`Informe o valor de B`))
        c = Number(prompt(`Informe o valor de C`))
        d = Number(prompt(`Informe o valor de D`))
    
        
        for(let cont=1;cont <= 3; cont++) {
            if (a > b){
                aux = a
                a = b
                b = aux
            }
            if (b > c){
                aux = b
                b = c
                c = aux
            }
            if (c > d){
                aux = c
                c = d
                d = aux
            }
        }
        alert(`Ordem crescente ${a} ${b} ${c} ${d}`)
        alert(`Ordem decrescente ${d} ${c} ${b} ${a}`)
    }
}