let burger = document.querySelector('.hamburger')
let ham = document.querySelector('.ham')
let cross = document.querySelector('.close')
let navList = document.querySelector('.nav-list')

cross.style.display = 'none'
burger.addEventListener('click', function () {
    navList.classList.toggle('navGo')
    if (navList.classList.contains('navGo')) {
        ham.style.display = 'inline'
        cross.style.display = 'none'
    }
    else {
        ham.style.display = 'none'
        setTimeout(() => {
            cross.style.display = 'inline';
        }, 350);
    }
})