function next(){
    window.location='shop-page2.html';
}

function previous(){
    window.location='shop.html';
}

function login() {
    window.location='login.html'
}

function elaborate3() {
    window.location = 'description-page4.html'
}

let midBtn = document.getElementById('midBtn')
let btn3 = document.getElementById('page-3')
let prevBtn = document.getElementById('prev-btn')

window.onload = function (){
    btn3.style.backgroundColor = "#f75b5b"
    btn3.style.color = 'white'
    prevBtn.style.backgroundColor = "#f75b5b"
    prevBtn.style.color = 'white'
}

function hover(){
    midBtn.style.backgroundColor = '#f75b5b'
    midBtn.style.color = 'white'
}

function hoverout(){
    midBtn.style.backgroundColor = 'white'
    midBtn.style.color = 'black'
}

function prevHover(){
    prevBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
}

function prevHoverOut (){
    prevBtn.style.backgroundColor = '#f75b5b'
}

