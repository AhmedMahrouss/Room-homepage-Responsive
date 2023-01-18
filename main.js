let humburger = document.querySelector('.humburger img');
let close = document.querySelector('.close img');
let responsiveNav = document.querySelector('.responsiveNav');
let container = document.querySelector('.container')
let arrowLeft = document.querySelector('.slider p img:first-child')
let arrowRight = document.querySelector('.slider p img:nth-child(2)')
let nav = document.querySelector('.container nav');
let arrowLeftDes = document.querySelector('.sliderDesktop p img:first-child');
let arrowRightDes = document.querySelector('.sliderDesktop p img:nth-child(2)')
humburger.onclick=()=>{
responsiveNav.style.top='0'
container.style.filter = 'brightness(0.7)'
}
close.onclick=()=>{
responsiveNav.style.top='-110px'
container.style.filter = 'brightness(1)'
}
let numImg = 0;
let imagesMobile = [
'mobile-image-hero-1.jpg'
,'mobile-image-hero-2.jpg'
,'mobile-image-hero-3.jpg'];

arrowRight.onclick = ()=>{
if(numImg < 2){
numImg++;
}
nav.style.background =`url(images/${imagesMobile[numImg]}) no-repeat`;
nav.style.backgroundSize='cover'
}


arrowLeft.onclick = ()=>{
if(numImg > 0){
numImg--;
}
nav.style.background =`url(images/${imagesMobile[numImg]}) no-repeat`;
nav.style.backgroundSize='cover'
}



let imagesDes = [
'desktop-image-hero-1.jpg'
,'desktop-image-hero-2.jpg'
,'desktop-image-hero-3.jpg'
]
arrowRightDes.onclick = ()=>{
if(numImg < 2){
numImg++;
}
nav.style.background =`url(images/${imagesDes[numImg]}) no-repeat`;
nav.style.backgroundSize='cover'
}
arrowLeftDes.onclick = ()=>{
if(numImg > 0){
numImg--;
}
nav.style.background =`url(images/${imagesDes[numImg]}) no-repeat`;
nav.style.backgroundSize='cover'
}
