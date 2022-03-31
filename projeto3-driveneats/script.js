let frango = document.getElementById('frango')
let carne = document.getElementById('carne')
let ovo = document.getElementById('ovo')
let pizza = document.getElementById('pizza')
let hamburguer = document.getElementById('hamburguer')
let checkmarkFrango = document.getElementById('checkmark-frango')
let checkmarkCarne = document.getElementById('checkmark-carne')
let checkmarkOvo = document.getElementById('checkmark-ovo')
let checkmarkPizza = document.getElementById('checkmark-pizza')
let checkmarkHamburguer = document.getElementById('checkmark-hamburguer')

const green = '6px solid #32B72F'
const white = '6px solid white'

function changeFoodSelection(id) {
    frango.style.border = white
    carne.style.border = white
    ovo.style.border = white
    pizza.style.border = white
    hamburguer.style.border = white
    checkmarkFrango.style.color = 'white'
    checkmarkCarne.style.color = 'white'
    checkmarkOvo.style.color = 'white'
    checkmarkPizza.style.color = 'white'
    checkmarkHamburguer.style.color = 'white'

    console.log(frango.childNodes[0].nextSibling.childNodes[3].childNodes[1].innerHTML) // nome
    console.log(frango.childNodes[0].nextSibling.childNodes[3].childNodes[5].childNodes[1].innerHTML) // preço

    if(id === 'frango') {
        if(frango.style.border === white) {
            frango.style.border = green
            checkmarkFrango.style.color = '#32B72F'
        } else {
            frango.style.border = white
            checkmarkFrango.style.color = 'white'
        }
    } else ''
    if(id === 'carne') {
        if(carne.style.border === white) {
            carne.style.border = green
            checkmarkCarne.style.color = '#32B72F'
        } else {
            carne.style.border = white
            checkmarkCarne.style.color = 'white'
        }
    } else ''
    if(id === 'ovo') {
        if(ovo.style.border === white) {
            ovo.style.border = green
            checkmarkOvo.style.color = '#32B72F'
        } else {
            ovo.style.border = white
            checkmarkOvo.style.color = 'white'
        }
    } else ''
    if(id === 'pizza') {
        if(pizza.style.border === white) {
            pizza.style.border = green
            checkmarkPizza.style.color = '#32B72F'
        } else {
            pizza.style.border = white
            checkmarkPizza.style.color = 'white'
        }
    } else ''
    if(id === 'hamburguer') {
        if(hamburguer.style.border === white) {
            hamburguer.style.border = green
            checkmarkHamburguer.style.color = '#32B72F'
        } else {
            hamburguer.style.border = white
            checkmarkHamburguer.style.color = 'white'
        }
    } else ''
}

    // id === 'frango' ? frango.style.border === white ? frango.style.border = green : frango.style.border = white : ''
    // id === 'carne' ? carne.style.border === white ? carne.style.border = green : carne.style.border = white : ''
    // id === 'ovo' ? ovo.style.border === white ? ovo.style.border = green : ovo.style.border = white : ''
    // id === 'pizza' ? pizza.style.border === white ? pizza.style.border = green : pizza.style.border = white : ''
    // id === 'hamburguer' ? hamburguer.style.border === white ? hamburguer.style.border = green : hamburguer.style.border = white : ''

