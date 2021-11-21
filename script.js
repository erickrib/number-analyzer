let numero = document.querySelector('input#numero')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valor = []
function isNumber(n){
    n = Number(n)
    if(n > 1 && n < 100){
        return true
    } else {
        return false
    }
}

function notlista(n,v){
    n = Number(n)
    if(v.indexOf(n) == -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumber(numero.value) && notlista(numero.value, valor)){
        valor.push(Number(numero.value))
        let add = document.createElement('option')
        add.innerText = `Valor ${Number(numero.value)} foi adicionado`
        lista.appendChild(add)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valor.length != 0){
        valor.sort((a,b) => a -b)
        let soma = 0
        for (let pos in valor){
            soma += valor[pos]
        } 
        let med = soma/valor.length
        res.innerHTML = ''
        res.innerHTML = `<p>Ao todo, temos ${valor.length} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor informado foi ${valor[valor.length -1]}.`
        res.innerHTML += `<p> O menor valor informado foi ${valor[0]}.`  
        res.innerHTML += `<p> Somando todos valores temos ${soma}.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${med.toFixed(2)}.</p>`
    } else {
        alert('Adicione valores antes de finalizar')
    }
}