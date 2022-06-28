const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]') //lista das estatisticas

const pecas = {
    "braco": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
  
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleo":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "perna":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguete":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach ( elemento => {
    elemento.addEventListener("click", (evento) =>{ //para cada elemento que estou clicando
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //ajusta os dados dos valores dos elementos das peças
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if(operacao ==='-'){
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]})
    }