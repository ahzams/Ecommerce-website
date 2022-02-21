let ham = document.querySelector('.hamburger')
let topBox = document.querySelector('.top-container')
let navList = document.querySelector('.nav-list')
let icon = document.querySelector('.icons')


ham.addEventListener('click',function(){
    navList.classList.toggle('v-class')
    icon.classList.toggle('v-class')
    topBox.classList.toggle('h-nav')
})