// questão 1 da prova
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

// questão 2 da prova
function prova(){
    let opcao; let qtdeTeams = 0; let qtdePapel = 0; let qtdeWhats = 0; let qtdeEmail = 0; let qtdeTantoFaz = 0;
    do {
        opcao = Number(prompt(`Digite 1.Teams 2.Papel 3.WhatsApp 4.Email 5.Tanto faz 0.Sair`))
        switch(opcao){
            case 1: qtdeTeams++; break;
            case 2: qtdePapel++; break;
            case 3: qtdeWhats++; break;
            case 4: qtdeEmail++; break;
            case 5: qtdeTantoFaz++; break;
            case 0: alert(`Encerrando a entrada de dados`); break;
            default: alert(`Opção inválida`)
        }
    }
    while(opcao != 0);
    // mostra os resultados
    alert(` Teams: ${qtdeTeams} Papel ${qtdePapel} WhatsApp ${qtdeWhats} Email ${qtdeEmail} Tanto Faz ${qtdeTantoFaz}`)
    let total = qtdeEmail + qtdePapel + qtdeTantoFaz + qtdeTeams + qtdeWhats
    alert(` % Tanto Faz ${qtdeTantoFaz/total*100}`)
    // 
    let primeiro = "Teams"; let segundo = "Papel"; let terceiro = "WhatsApp"; let quarto = "Email"; let quinto = "Tanto Faz"
    let a = qtdeTeams; let b = qtdePapel; let c = qtdeWhats; let d = qtdeEmail; let e = qtdeTantoFaz
    let aux
    // 5 elemementos - 4 vezes
    for(let i=0;i<4;i++){
        if (a < b){
            aux = a;
            a = b
            b = aux
            aux = primeiro
            primeiro = segundo 
            segundo  = aux
        }
        if (b < c){
            aux = b;
            b = c
            c = aux
            aux = segundo
            segundo = terceiro 
            terceiro  = aux
        }
        if (c < d){
            aux = c;
            c = d
            d = aux
            aux = terceiro
            terceiro = quarto 
            quarto  = aux
        }
        if (d < e){
            aux = d;
            d = e
            e = aux
            aux = quarto
            quarto = quinto 
            quinto  = aux
        }
    }
    alert( ` ${primeiro} - ${a} ${segundo} - ${b} ${terceiro} - ${c} ${quarto} - ${d} ${quinto} - ${e}`)
}