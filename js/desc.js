let desc = document.querySelector('.information')
let add_info = document.querySelector('.add-info')
let reviews = document.querySelector('.reviews')
let descLink = document.getElementById('descLink')
let addLink = document.getElementById('additionalLink')
let revLink = document.getElementById('reviewLink')

window.onload = function () {
    descLink.style.color = "#f75b5b"

}

descLink.addEventListener('click', function () {
    desc.style.display = 'block'
    descLink.style.color = "#f75b5b"
    addLink.style.color = "black"
    add_info.style.display = 'none'
    reviews.style.display = 'none'
    revLink.style.color = 'black'
    addLink.classList.remove('navigate')
    descLink.classList.add('navigate')
    revLink.classList.remove('navigate')

})

addLink.addEventListener('click', function () {
    desc.style.display = 'none'
    descLink.style.color = "black"
    addLink.style.color = "#f75b5b"
    add_info.style.display = 'block'
    reviews.style.display = 'none'
    revLink.style.color = 'black'
    descLink.classList.remove('navigate')
    addLink.classList.add('navigate')
    revLink.classList.remove('navigate')

})

revLink.addEventListener('click', function () {
    desc.style.display = 'none'
    descLink.style.color = "black"
    addLink.style.color = "black"
    add_info.style.display = 'none'
    revLink.style.color = "#f75b5b"
    reviews.style.display = 'block'
    descLink.classList.remove('navigate')
    addLink.classList.remove('navigate')
    revLink.classList.add('navigate')
})



function home() {
    window.location = 'index.html'
}

function login() {
    window.location = 'login.html'
}

function elaborate0() {
    window.location = 'description-page1.html'
}

function elaborate1() {
    window.location = 'description-page2.html'
}

function elaborate2() {
    window.location = 'description-page3.html'
}

function elaborate3() {
    window.location = 'description-page4.html'
}

function upper(temp, top) {
    let topimg = document.getElementById(top);
    topimg.src = temp;
}