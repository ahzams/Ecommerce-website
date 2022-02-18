let prev = "redshoe";

function ahzam(temp) {
    console.log(temp)
    document.getElementById(prev).classList.remove("front");
    document.getElementById(temp).classList.add("front")
    prev = temp;
}

// let zoom = document.getElementsByClassName('zoom')
// let plus = document.querySelector('.plus')

// for(var i=0;i<zoom.length;i++){

    
    
//     zoom[i].addEventListener('mouseenter',function(){
//         plus.style.display = 'block';
//     })
    
//     zoom[i].addEventListener('mouseleave', function(){
//         plus.style.display = 'none'
//     })
// }


function next(){
    window.location='shop-page2.html';
}

function previous(){
    window.location='shop.html';
}

function login() {
    window.location='login.html'
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


let btn1 = document.getElementById('page-1')
let btn2 = document.getElementById('page-2')
let nextBtn = document.getElementById('next-btn')

window.onload = function (){
    btn1.style.backgroundColor = "#f75b5b"
    btn1.style.color = 'white'
    nextBtn.style.backgroundColor = "#f75b5b"
    nextBtn.style.color = 'white'
}

function hover(){
    btn2.style.backgroundColor = '#f75b5b'
    btn2.style.color = 'white'
}

function hoverout(){
    btn2.style.backgroundColor = 'white'
    btn2.style.color = 'black'
}

function nextHover(){
    nextBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
}

function nextHoverOut (){
    nextBtn.style.backgroundColor = '#f75b5b'
}

