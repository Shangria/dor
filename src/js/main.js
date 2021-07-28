window.addEventListener('load', function () {

    const hamburgerMain = document.getElementById('header__hamburger-main');
    const hamburgerSub = document.getElementById('header__hamburger-sub');
    const headerMenu = document.getElementById('mobile-menu');

    hamburgerMain.addEventListener('click', () => {
        hamburgerMain.classList.add('header_hide-hamburger');
        headerMenu.classList.add('header__menu_active');
    });


    hamburgerSub.addEventListener('click', () => {
        hamburgerMain.classList.remove('header_hide-hamburger');
        headerMenu.classList.remove('header__menu_active');
    });
});


window.addEventListener('load', function (){
    const swiper = new Swiper('.swiper-desktop', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});