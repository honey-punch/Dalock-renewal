// ham-menu

const ham = document.querySelector(".ham");
const menu = document.querySelector(".menu");

ham.addEventListener('click', () => {
    menu.classList.toggle("flex");
})

window.addEventListener('resize', () => {
    if (window.outerWidth > 1100) {
        menu.classList.remove("flex")
    }
});

// jQuery

// $(document).ready(function() {
    
//     //section3 
//     setInterval(function() { 
//         $('.general-info .card:first-child')
//             .fadeOut(1000)
//             .next()
//             .fadeIn(1000)
//             .end()
//             .appendTo(".general-info")
//     },  5000);
    
// });

// section3
// fade in & out
const cards = document.querySelectorAll('.card');
const cardFirst = document.querySelector('.card:first-child');
cardFirst.style.opacity = 0;

function fadeOut(element) {
    if (element.style.opacity > 0) {
        setTimeout(function () {
            element.style.opacity -= 0.02;
            fadeOut(element);
        }, 50);
    }
}



function fadeIn(element) {
    if (element.style.opacity < 1) {
        setTimeout(function () {
            element.style.opacity += 0.02;
            fadeIn(element);
        }, 50);
    }
}
fadeIn(cardFirst);




// section4
// tab frist icon color & img & info
document.querySelector(".tabmenu li:first-child svg").classList.add('fill-blue');
document.querySelector(".unit-img img:first-child").classList.add('block');
document.querySelector(".tabmenu li:first-child .unit-info").classList.add('block');

// tab icon & unit img & unit info
const tabIconList = document.querySelectorAll(".tab-icon");
const tabIconSvgList = document.querySelectorAll(".tab-icon svg");
const unitImgList = document.querySelectorAll(".unit-img img");
const unitInfoList = document.querySelectorAll(".unit-info");

// auto tab menu
// let i = 0;

// function autoTab () {
//     for (let j = 0; j < tabIconSvgList.length; j++) {
//         unitImgList[j].classList.remove('block');
//         unitInfoList[j].classList.remove('block');
//         tabIconSvgList[j].classList.remove('fill-blue');
//     }
//     unitImgList[i].classList.add('block');
//     unitInfoList[i].classList.add('block');
//     tabIconSvgList[i].classList.add('fill-blue');
//     i++;
//     if(i === tabIconSvgList.length) {
//         i = 0;
//     }
// }
// setInterval(autoTab, 1000);

// tab menu
// for (let i = 0; i < tabIconList.length; i++) {
//     tabIconList[i].addEventListener('click', (e) => {
//         e.preventDefault();
//         for (let j = 0; j < tabIconList.length; j++) {
//             unitImgList[j].classList.remove('block');
//             unitInfoList[j].classList.remove('block');
//             tabIconSvgList[j].classList.remove('fill-blue');
//         }
//         unitImgList[i].classList.add('block');
//         unitInfoList[i].classList.add('block');
//         tabIconSvgList[i].classList.add('fill-blue');
//     })
// }

// refactor
let index = 0;

function autoTab() {
    tabIconSvgList.forEach((value, i) => {
        unitImgList[i].classList.remove('block');
        unitInfoList[i].classList.remove('block');
        tabIconSvgList[i].classList.remove('fill-blue');
    });

    unitImgList[index].classList.add('block');
    unitInfoList[index].classList.add('block');
    tabIconSvgList[index].classList.add('fill-blue');

    index++;

    if (index === tabIconSvgList.length) {
        index = 0;
    }
}

let intervalId = setInterval(autoTab, 5000);

for (let i = 0; i < tabIconList.length; i++) {
    tabIconList[i].addEventListener('click', (e) => {
        e.preventDefault();
    
        clearInterval(intervalId);
    
        index = i;
    
        autoTab();
    
        intervalId = setInterval(autoTab, 5000);
    });
}