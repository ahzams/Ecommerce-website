let desc = document.querySelector('.information')
let add_info = document.querySelector('.add-info')
let descLink = document.getElementById('descLink')
let addLink = document.getElementById('additionalLink')

window.onload = function(){
    descLink.style.color = "#f75b5b"
    
}

descLink.addEventListener('click',function(){
    desc.style.display = 'block'
    descLink.style.color = "#f75b5b"
    addLink.style.color = "black"
    add_info.style.display = 'none'
    addLink.classList.remove('navigate')
    descLink.classList.add('navigate')
})

addLink.addEventListener('click',function(){
    desc.style.display = 'none'
    descLink.style.color = "black"
    addLink.style.color = "#f75b5b"
    add_info.style.display = 'block'
    descLink.classList.remove('navigate')
    addLink.classList.add('navigate')
})

function home() {
    window.location = 'index.html'
}

function login() {
    window.location = 'login.html'
}