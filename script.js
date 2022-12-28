const imgsMenuHamburguer = document.querySelectorAll('.menu-mobile img');
const listMenuMobile = document.querySelector('.menu-mobile-container ul');
const min650px = window.matchMedia('(min-width:650px)');

function ativaMenu() {
    
   
    if(imgsMenuHamburguer[0].classList.contains('desativa')) {
        listMenuMobile.classList.add('desativa');
        imgsMenuHamburguer[1].classList.add('desativa');
        imgsMenuHamburguer[0].classList.remove('desativa');
    } else {
        listMenuMobile.classList.remove('desativa');
        imgsMenuHamburguer[0].classList.add('desativa');
        imgsMenuHamburguer[1].classList.remove('desativa');
    }
}

imgsMenuHamburguer.forEach((item) => {
    item.addEventListener('click', ativaMenu);
})
