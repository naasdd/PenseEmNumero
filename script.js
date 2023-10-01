let res = document.getElementById('res')
let vidas = document.getElementById('vidas')
let comecar = document.getElementById('comecar')
let jogotodo = document.getElementById('jogotodo')
let maiorN = 100
let menorN = 0
let numero = 0
let tentativa = 6
let comecou = false
let acertoFX = document.getElementById('acertoFX')
let erroFX = document.getElementById('erroFX')



function start(){
    if(!comecou){
        numero = Math.floor(Math.random() * (70 - 30 + 1) + 30)
        res.innerHTML = numero
        vidas.innerHTML = `Tentativas restantes: ${tentativa}`

        comecou = true
        comecar.innerHTML = 'Começar'

        // jogotodo.classList.add("Active")
        jogotodo.style.display = 'block'
        jogotodo.style.transition = 'all 0.2s'
        jogotodo.style.transform = 'scale(100%)'
    }
    else if(tentativa == 0){
        numero = 0
        maiorN = 100
        menorN = 1
        tentativa = 6


        numero = Math.floor(Math.random() * (70 - 30 + 1) + 30)
        res.innerHTML = numero
        vidas.innerHTML = `Tentativas restantes: ${tentativa}`

        comecou = true
        comecar.innerHTML = 'Comecar'
    }
}

function maior(){
    if(comecou && tentativa != 0){
        menorN = numero
        numero = numero + (Math.floor( (maiorN - numero)/2 ))


        res.innerHTML = numero
        tentativa--
        vidas.innerHTML = `Tentativas restantes: ${tentativa}`
    }
    else{
        erroFX.play()
        comecar.innerHTML = 'Recomeçar'
        window.alert('Minhas tentativas acabaram! perdi.')
    }
}


function menor(){
    if(comecou && tentativa != 0){
        maiorN = numero
        numero = numero + (Math.floor( (menorN - numero)/2 ))


        res.innerHTML = numero
        tentativa--
        vidas.innerHTML = `Tentativas restantes: ${tentativa}`
    }
    else{
        erroFX.play()
        comecar.innerHTML = 'Recomeçar'
        window.alert('Minhas tentativas acabaram! perdi.')  
    }
}


function correto(){
    acertoFX.play()
    jogotodo.style.transform = 'rotate(520%)'
    window.alert('EBAA')
    comecar.innerHTML = 'Recomeçar'
    
}