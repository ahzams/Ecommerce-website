
function home() {
    window.location = 'index.html'
}

let index = 0

show_image(index);

function show_image(i) {
    index += i;

    let images = document.getElementsByClassName('img')
    // console.log (images.length)
    for (i=0;i<images.length;i++){
        images[i].style.display = 'none'
    }
if (index>images.length-1){
    index=0;
}
else if (index<0){
    index= images.length-1;

}
images[index].style.display='block';
}

let imgBox = document.getElementById('imgBox')
let cross = document.getElementById('cross')

cross.addEventListener('click', function () {
    imgBox.style.display = 'none'
})

window.onload = function(){
    imgBox.style.display = 'none'
}

function zoom(){
    imgBox.style.display = 'flex'
}






