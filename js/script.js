// let prev = "redshoe";

// function ahzam(temp) {
//     console.log(temp)
//     document.getElementById(prev).classList.remove("front");
//     document.getElementById(temp).classList.add("front")
//     prev = temp;
// }

// function home() {
//     window.location = 'index.html'
// }

// let redDesc = document.getElementById('rdesc')
// let spItems = document.getElementById('shop-items')
// let navBtns = document.getElementById('nav-butns')
// let midBtn = document.getElementById('midBtn')
// let btn3 = document.getElementById('page-3')
// let prevBtn = document.getElementById('prev-btn')

// function next() {
//     // window.location = 'shop-page2.html';
//     redDesc.style.display = 'flex'
//     spItems.style.height = '60vh'
//     bItem.style.display = 'none'
//     blItem.style.display = 'none'
//     gItem.style.display = 'none'
//     navBtns.innerHTML = `<button onclick="previous()" onmouseenter="prevHover()" onmouseleave="prevHoverOut()" class="btn" id="prev-btn"><span class="material-icons-outlined">west</span>Previous</button>
//     <button onclick="previous()" onmouseenter="Hover()" onmouseleave="Hoverout()" class="btn" id="midBtn">1</button>
//     <button class="btn" id="page-3">2</button>`
// }

// function Hover() {
//     let midBtn = document.getElementById('midBtn')
//     midBtn.style.backgroundColor = '#f75b5b'
//     midBtn.style.color = 'white'
// }

// function Hoverout() {
//     let midBtn = document.getElementById('midBtn')
//     midBtn.style.backgroundColor = 'white'
//     midBtn.style.color = 'black'
// }

// function prevHover() {
//     let prevBtn = document.getElementById('prev-btn')
//     prevBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
// }

// function prevHoverOut() {
//     let prevBtn = document.getElementById('prev-btn')
//     prevBtn.style.backgroundColor = '#f75b5b'
// }

// function previous() {
//     window.location = 'shop.html';
// }

// function login() {
//     window.location = 'login.html'
// }

// function elaborate0() {
//     window.location = 'description-page1.html'
// }
// function elaborate1() {
//     window.location = 'description-page2.html'
// }
// function elaborate2() {
//     window.location = 'description-page3.html'
// }

// function elaborate3() {
//     window.location = 'description-page4.html'
// }


// let btn1 = document.getElementById('page-1')
// let btn2 = document.getElementById('page-2')
// let nextBtn = document.getElementById('next-btn')

// window.onload = function () {
//     btn1.style.backgroundColor = "#f75b5b"
//     btn1.style.color = 'white'
//     nextBtn.style.backgroundColor = "#f75b5b"
//     nextBtn.style.color = 'white'
// }

// function hover() {
//     btn2.style.backgroundColor = '#f75b5b'
//     btn2.style.color = 'white'
// }

// function hoverout() {
//     btn2.style.backgroundColor = 'white'
//     btn2.style.color = 'black'
// }

// function nextHover() {
//     nextBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
// }

// function nextHoverOut() {
//     nextBtn.style.backgroundColor = '#f75b5b'
// }

// let bItem = document.getElementById('bdesc')
// let blItem = document.getElementById('bldesc')
// let gItem = document.getElementById('gdesc')
// let black = document.getElementById('b')
// let blue = document.getElementById('bl')
// let gray = document.getElementById('g')
// let red = document.getElementById('r')

// black.addEventListener('click', function () {
//     blItem.style.display = 'none'
//     gItem.style.display = 'none'
//     btn1.style.display = 'none'
//     btn2.style.display = 'none'
//     nextBtn.style.display = 'none'
//     blue.style.display = 'none'
//     gray.style.display = 'none'
//     red.style.display = 'none'
// })

// blue.addEventListener('click', function () {
//     bItem.style.display = 'none'
//     gItem.style.display = 'none'
//     btn1.style.display = 'none'
//     btn2.style.display = 'none'
//     nextBtn.style.display = 'none'
//     black.style.display = 'none'
//     gray.style.display = 'none'
//     red.style.display = 'none'
// })

// gray.addEventListener('click', function () {
//     bItem.style.display = 'none'
//     blItem.style.display = 'none'
//     btn1.style.display = 'none'
//     btn2.style.display = 'none'
//     nextBtn.style.display = 'none'
//     black.style.display = 'none'
//     blue.style.display = 'none'
//     red.style.display = 'none'
// })


let prev = "redshoe";

function ahzam(temp) {
    console.log(temp)
    document.getElementById(prev).classList.remove("front");
    document.getElementById(temp).classList.add("front")
    prev = temp;
}

function home() {
    window.location = 'index.html'
}

let redDesc = document.getElementById('rdesc')
let spItems = document.getElementById('shop-items')
let navBtns = document.getElementById('nav-butns')
let midBtn = document.getElementById('midBtn')
let btn3 = document.getElementById('page-3')
let prevBtn = document.getElementById('prev-btn')

function next() {
    // window.location = 'shop-page2.html';
    redDesc.style.display = 'flex'
        // spItems.style.height = '60vh'
    bItem.style.display = 'none'
    blItem.style.display = 'none'
    gItem.style.display = 'none'
    navBtns.innerHTML = `<button onclick="previous()" onmouseenter="prevHover()" onmouseleave="prevHoverOut()" class="btn" id="prev-btn"><span class="material-icons-outlined">west</span>Previous</button>
    <button onclick="previous()" onmouseenter="Hover()" onmouseleave="Hoverout()" class="btn" id="midBtn">1</button>
    <button class="btn" id="page-3">2</button>`
}

function Hover() {
    let midBtn = document.getElementById('midBtn')
    midBtn.style.backgroundColor = '#f75b5b'
    midBtn.style.color = 'white'
}

function Hoverout() {
    let midBtn = document.getElementById('midBtn')
    midBtn.style.backgroundColor = 'white'
    midBtn.style.color = 'black'
}

function prevHover() {
    let prevBtn = document.getElementById('prev-btn')
    prevBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
}

function prevHoverOut() {
    let prevBtn = document.getElementById('prev-btn')
    prevBtn.style.backgroundColor = '#f75b5b'
}

function previous() {
    window.location = 'shop.html';
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


let btn1 = document.getElementById('page-1')
let btn2 = document.getElementById('page-2')
let nextBtn = document.getElementById('next-btn')

window.onload = function() {
    btn1.style.backgroundColor = "#f75b5b"
    btn1.style.color = 'white'
    nextBtn.style.backgroundColor = "#f75b5b"
    nextBtn.style.color = 'white'
}

function hover() {
    btn2.style.backgroundColor = '#f75b5b'
    btn2.style.color = 'white'
}

function hoverout() {
    btn2.style.backgroundColor = 'white'
    btn2.style.color = 'black'
}

function nextHover() {
    nextBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
}

function nextHoverOut() {
    nextBtn.style.backgroundColor = '#f75b5b'
}

let headings = document.getElementById('headings')
let bItem = document.getElementById('bdesc')
let blItem = document.getElementById('bldesc')
let gItem = document.getElementById('gdesc')
let rItem = document.getElementById('rdesc')
let black = document.getElementById('b')
let blue = document.getElementById('bl')
let gray = document.getElementById('g')
let red = document.getElementById('r')

// black.addEventListener('click', function () {
//     blItem.style.display = 'none'
//     gItem.style.display = 'none'
//     btn1.style.display = 'none'
//     btn2.style.display = 'none'
//     nextBtn.style.display = 'none'
//     blue.style.display = 'none'
//     gray.style.display = 'none'
//     red.style.display = 'none'
// })

// blue.addEventListener('click', function () {
//     bItem.style.display = 'none'
//     gItem.style.display = 'none'
//     btn1.style.display = 'none'
//     btn2.style.display = 'none'
//     nextBtn.style.display = 'none'
//     black.style.display = 'none'
//     gray.style.display = 'none'
//     red.style.display = 'none'
// })

// gray.addEventListener('click', function () {
//     bItem.style.display = 'none'
//     blItem.style.display = 'none'
//     btn1.style.display = 'none'
//     btn2.style.display = 'none'
//     nextBtn.style.display = 'none'
//     black.style.display = 'none'
//     blue.style.display = 'none'
//     red.style.display = 'none'
// })
function fun1() {

}

function fun(tp) {
    blItem.style.display = 'none'
    bItem.style.display = 'none'
    gItem.style.display = 'none'
    rItem.style.display = 'none'
    navBtns.style.display = 'none'
    headings.style.display = 'none'
    let temperary = document.getElementById(tp);
    console.log(temperary);
    temperary.style.display = "flex";
}

let rslider = document.getElementById("rslider");
let routput = document.getElementById("routput");
rslider.oninput = function() {
    routput.innerHTML = "Price: &#8377;8,215 - &#8377;" + this.value;
}