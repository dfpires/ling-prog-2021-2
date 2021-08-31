
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
        idade = Number(prompt(`Informe a idade ${i}`))
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