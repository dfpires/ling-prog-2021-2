function funcao(){
    // entrada de dados
    let tamanho = Number(document.getElementById('tamanho').value)
    let garagem = Number(document.getElementById('garagem').value)
    let andar = Number(document.getElementById('andar').value)
    let posicao = Number(document.getElementById('posicao').value)

    // calcula valor base
    let valorBase
    if (tamanho < 80){
        switch(garagem){
            case 1: valorBase = 300000; break;
            case 2: valorBase = 320000; break;
            case 3: valorBase = 340000; break;
            default: alert(` Garagem inválida`)
        }
    }
    else if (tamanho <= 120){
        switch(garagem){
            case 1: valorBase = 400000; break;
            case 2: valorBase = 420000; break;
            case 3: valorBase = 440000; break;
            default: alert(` Garagem inválida`)
        }
    }
    else {
        switch(garagem){
            case 1: valorBase = 500000; break;
            case 2: valorBase = 520000; break;
            case 3: valorBase = 540000; break;
            default: alert(` Garagem inválida`)
        }
    }
    // acréscimo em função do andar
    let acrescimentoAndar
    switch (andar){
        case 1: acrescimentoAndar = 10000; break;
        case 2: acrescimentoAndar = 20000; break;
        case 3: acrescimentoAndar = 30000; break;
        default: alert(` Andar inválido`)
    }
    // acréscimo em função da posição do sol
    let acrescimoPosicao
    switch(posicao){
        case 'M': acrescimoPosicao = (5 * valorBase)/ 100; break;
        case 'T': acrescimoPosicao = (8 * valorBase)/ 100; break; 
    }
    // valor total
    let valorTotal = valorBase + acrescimentoAndar + acrescimoPosicao
    // mostra o resultado
    document.getElementById("resultado").innerHTML = `R$ ${valorTotal.toFixed(2)}`
}