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


window.addEventListener('load', function () {
    const swiper = new Swiper('.swiper-desktop', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});


$(document).ready(function () {

    //form submit
    var form_content = $('.form'),
        form = $('#from');

    form.submit(function () {
        var form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'php/send.php',
            data: form_data,
        });
        $(this)[0].reset();
        return false;
    });

});

let form = document.getElementById("from");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let body = document.body;
    body.className = 'submit';
});