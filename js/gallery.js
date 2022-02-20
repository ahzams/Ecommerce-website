
// function home() {
//     window.location = 'index.html'
// }

// function login() {
//     window.location = 'login.html'
// }

// let index = 0

// show_image(index);

// function show_image(i) {
//     index += i;

//     let images = document.getElementsByClassName('img')
//     // console.log (images.length)
//     for (i=0;i<images.length;i++){
//         images[i].style.display = 'none'
//     }
// if (index>images.length-1){
//     index=0;
// }
// else if (index<0){
//     index= images.length-1;

// }
// images[index].style.display='block';
// }

// let imgBox = document.getElementById('imgBox')
// let cross = document.getElementById('cross')

// cross.addEventListener('click', function () {
//     imgBox.style.display = 'none'
// })

// window.onload = function(){
//     imgBox.style.display = 'none'
// }

// function zoom(){
//     imgBox.style.display = 'flex'
// }

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

    // for (i = 0; i < images.length; i++) {
    //     images[i].style.display = 'none'
    // }
    // if (temp123 == -1) {
    //     index += i;

    //     let images = document.getElementsByClassName('img')

    //     if (index > images.length - 1) {
    //         index = 0;
    //     } else if (index < 0) {
    //         index = images.length - 1;
    //     }
    //     images[index].style.display = 'block';
    // } else {
    //     let images = document.getElementsByClassName('img')
    //     images[temp123].style.display = 'block';
    // }

}

let imgBox = document.getElementById('imgBox')
let cross = document.getElementById('cross')

cross.addEventListener('click', function() {
    document.body.style.overflowY = "visible"
    imgBox.style.display = 'none'
})

// window.onload = function() {
//     imgBox.style.display = 'none'
// }

function zoom(temp123) {
    // show_image(0, temp123)
    document.body.style.overflowY = "hidden"
    index = temp123;
    let imgcalled = document.getElementById("imagehover");
    imgcalled.src = "img/img" + temp123 + ".png";
    imgBox.style.display = 'flex';
}




