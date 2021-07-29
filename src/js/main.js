(function () {
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

})();

(function () {
    window.addEventListener('load', function () {
        const swiper = new Swiper('.swiper-desktop', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });


        const swiperMobile = new Swiper('.swiper-mobile', {

            pagination: {
                el: '.swiper-pagination',
            },

        });
    });
})();


(function () {
    window.addEventListener('load', function () {
        const links = document.querySelectorAll('.header__item a');

        links.forEach(el => {
            el.addEventListener('click', e => {
                links.forEach(el => {
                    el.classList.remove('active');
                });
                e.target.classList.add('active');
            });
        });
    });
})();

(function () {
    const dataModal = [
        {
            id: 0,
            title: "אפליקציית PhotoMe",
            text: "\n" +
                "בכל מקום בו אתם נמצאים, אתם יכולים\n" +
                "להזמין צלם עם מצלמה מקצועיית עד \n" +
                "אליכם. לדוגמה אם אתם רוצים תמונה \n" +
                "משפחתית איכותית במסעדה.",
            src: "images/slider1-2.png",
            alt: "slide",
        },
        {
            id: 1,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "images/slider1-4.png",
            alt: "slide",
        },
        {
            id: 2,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "images/slider2-3.png",
            alt: "slide",
        },
        {
            id: 3,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "images/slider2-1.png",
            alt: "slide",
        },
        {
            id: 4,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "images/slider1-1.png",
            alt: "slide",
        },
        {
            id: 5,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "images/slider1-3.png",
            alt: "slide",
        },
        {
            id: 6,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "images/slider2-2.png",
            alt: "slide",
        },
        {
            id: 7,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
                "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            src: "images/slider2-4.png",
            alt: "slide",
        },
    ];

    window.addEventListener('load', function () {
        const mobileContainerImages = document.querySelectorAll("[data-attr-popup-trigger]");
        let idSlide;
        let idModal;

        mobileContainerImages.forEach(function (img, indexImg) {
            img.dataset.id = indexImg;
            img.addEventListener("click", function (e) {
                idSlide = Number(img.getAttribute('data-id'));
                dataModal.forEach(function (dataSlide, i) {
                    idModal = Number(dataSlide.id);
                    if (idModal === idSlide) {
                        renderPopup(dataSlide);
                    }
                })
            });
        });


        function renderPopup(object) {
            const modalSlid = document.getElementById("modal-slid");
            const popupBg = document.createElement('div');
            popupBg.classList.add('slider__bg');
            modalSlid.appendChild(popupBg);
            const popupBox = document.createElement('div');
            popupBox.classList.add('slider__modal-window');
            modalSlid.appendChild(popupBox);

            popupBox.innerHTML = `
                    <div class="slider__modal-wrap">
                        <div class="slider__close" id="popup-close"></div> 
                         <h3 dir="rtl">
                               ${object.title}
                        </h3>
                         <div class="slider__modal-img-wrap">
                            <img src=${object.src} alt=${object.alt}>        
                         </div>
                          <p dir="rtl">
                            ${object.text}
                          </p>
                    </div>
                   `

            const btnClose = document.getElementById('popup-close');
            btnClose.addEventListener('click', function () {
                popupBg.remove();
                popupBox.remove();
            });
        }
    });
})();

(function () {
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
})();
