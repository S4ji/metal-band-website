let button = document.querySelector('button')
let email = document.getElementById('email')
let emailagain = document.getElementById('emailagain')
let divErreur = document.getElementById('diverreur')
let divValider = document.getElementById('divvalider')
let message = document.getElementById('message')
let messageErreur = document.getElementById('messageerreur')
let form = document.getElementById('contactform')

function myFunction(event) {
    if (message.value.length === 0 && email.value != emailagain.value) {
        message.style.border = '1px solid red'
        messageErreur.style.visibility = 'visible'
        messageErreur.style.color = 'red'
        emailagain.style.border = '1px solid red'
        divValider.style.visibility = 'collapse'
        divErreur.style.visibility = 'visible'
        divErreur.style.color = 'red'

        // eviter que les comportement par defaut de la page se fasse comme le rechargement
    } else if (message.value.length === 0) {
        message.style.border = '1px solid red'
        messageErreur.style.visibility = 'visible'
        divErreur.style.visibility = 'collapse'
        messageErreur.style.color = 'red'
    } else if (email.value != emailagain.value) {
        emailagain.style.border = '1px solid red'
        divValider.style.visibility = 'collapse'
        messageErreur.style.visibility = 'collapse'
        divErreur.style.visibility = 'visible'
        divErreur.style.color = 'red'
    } else {
        messageErreur.style.visibility = 'collapse'
        divErreur.style.visibility = 'collapse'
        divValider.style.visibility = 'visible'
        divValider.style.color = 'green'
        form.style.display = 'none'
    }

    event.preventDefault()
}

button.addEventListener('click', myFunction)
