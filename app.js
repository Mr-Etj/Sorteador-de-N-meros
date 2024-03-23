function text(id, texto) {
    let titulo = document.getElementById(id)
    titulo.innerHTML = texto
}
 
function limparCampo() {
    let quantidade = document.getElementById('quantidade')
    let de = document.getElementById('de')
    let ate = document.getElementById('ate')
    de.value = ''
    quantidade.value = ''
    ate.value = ''
}
 
console.log('Já vou avisando antes que vire moda que sou fã de FÁBIO PIRES')
 
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value)
    let de = parseInt(document.getElementById('de').value)
    let ate = parseInt(document.getElementById('ate').value)
    let msgFinal = quantidade == 1 ? 'O número sorteado foi:' : 'Os números sorteados foram:'
    let sorteados = 0
    var numeros = []
    let Ran = ate - de
    while(sorteados < quantidade) {
        let sortear = parseInt(Math.random() * ate + 1)
        if(ate < de) {
            alert("Erro, o número minimo não pode ser maior que o máximo")
            reiniciar()
            break
        }
        while(sortear < de) {
            sortear = parseInt(Math.random() * ate + 1)
    }

        if(quantidade > Ran + 1) {
            alert("Erro, verifique os números")
            reiniciar()
            break
}       if(sortear >= de) {
            while(numeros.includes(sortear)) {
                sortear = parseInt(Math.random() * ate + 1)
        }
    } 
        numeros.push(sortear)
        sorteados++
}

    text('resultado',`${msgFinal} ${numeros}`)
    habilitarBotao()
}
function habilitarBotao() {
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}
 
function reiniciar() {
    sorteados = 0
    var numeros = []
    limparCampo()
    text('resultado', 'Números sorteados:  nenhum até agora')
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else {
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }
}