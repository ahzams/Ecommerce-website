
function home() {
    window.location = 'index.html'
}

function login() {
    window.location = 'login.html'
}

let index = 0

show_image(index);

function show_image(i) {
    index = (9 + index + i) % 9;
    let imgcalled = document.getElementById("imagehover");
    imgcalled.src = "img/img" + index + ".png";
}

let imgBox = document.getElementById('imgBox')
let close = document.getElementById('cross')

close.addEventListener('click', function() {
    document.body.style.overflowY = "visible"
    imgBox.style.display = 'none'
})

function zoom(temp123) {
    document.body.style.overflowY = "hidden"
    index = temp123;
    let imgcalled = document.getElementById("imagehover");
    imgcalled.src = "img/img" + temp123 + ".png";
    imgBox.style.display = 'flex';
}




