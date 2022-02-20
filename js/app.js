let sign_in = document.querySelector('#sign-in')
let sign_up = document.querySelector('#sign-up')
let link_1 = document.querySelector('#signup-link')
let link_2 = document.querySelector('#signin-link')

link_1.addEventListener('click',function(){
    sign_in.style.display = 'none'
    sign_up.style.display = 'block'
})
link_2.addEventListener('click',function(){
    sign_up.style.display = 'none'
    sign_in.style.display = 'block'
})

function home() {
    window.location = 'index.html'
}