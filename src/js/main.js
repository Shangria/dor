(function () {
    window.addEventListener('load', function () {

        const hamburgerMain = document.getElementById('header__hamburger-main');
        const hamburgerSub = document.getElementById('header__hamburger-sub');
        const headerMenu = document.getElementById('mobile-menu');

        hamburgerMain.addEventListener('click', function () {
            hamburgerMain.classList.add('header_hide-hamburger');
            headerMenu.classList.add('header__menu_active');
        });


        hamburgerSub.addEventListener('click', function () {
            hamburgerMain.classList.remove('header_hide-hamburger');
            headerMenu.classList.remove('header__menu_active');
        });
    });

})();

(function () {
    window.addEventListener('load', function () {
        const swiper = new Swiper('.swiper-desktop', {
            loop:true,
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


(function (){
    window.addEventListener('load', function (){
        const linkArrow=document.getElementById('hero__arrow');
        const linkToInfo=document.getElementById('link-to-info');
        const linkToHero=document.getElementById('link-to-hero');

        linkArrow.addEventListener('click', function (){
            linkToInfo.classList.add('active');
            linkToHero.classList.remove('active');
        })
    })
})();

(function () {
    window.addEventListener('load', function () {
        const links = document.querySelectorAll('.header__item a');
        const linksMobile = document.querySelectorAll('.header__mobile-item a');


        addActive(links);
        addActive(linksMobile);

        function addActive(elements) {
            elements.forEach( function (el) {
                el.addEventListener('click', function (e) {
                    elements.forEach(function (el) {
                        el.classList.remove('active');
                    });
                    const headerMenuActive = document.getElementById('mobile-menu');
                    const headerHamburger = document.getElementById('header__hamburger-main');
                    headerMenuActive.classList.remove('header__menu_active');
                    headerHamburger.classList.remove('header_hide-hamburger');

                    e.target.classList.add('active');
                });
            });
        }
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
            title: "אפליקציית Direct",
            text: " צופים בפרסומות של עסקים שונים ומתוגמלים בסכום כספי פר צפייה.\n" +
                "                                מודעות ווידאו או מודעות תמונה. ",
            src: "images/slider1-4.png",
            alt: "slide",
        },
        {
            id: 2,
            title: "אפליקציית Modeling",
            text: " בוחרים את הבגדים החדשים בעזרת דוגמנים חיים.\n" +
                "                                אפשר לראות היכן בסביבה שלכם ישנם דוגמנים אשר לובשים היום את בגדי המעצבים.\n" +
                "                                קובעים פגישה עם הדוגמן וקונים דרכו במקום את הבגד דרך החנות איקומרס השונות.",
            src: "images/slider2-3.png",
            alt: "slide",
        },
        {
            id: 3,
            title: "אפליקציית Kids",
            text: "מוחביאים בפארקים ציבוריים שוברי הנחה לקנייה בחנויות צעצועים.\n" +
                "                                על כל מטמון שהילד מוצא הוא יכול לקבל הנחה או מתנה. ",
            src: "images/slider2-1.png",
            alt: "slide",
        },
        {
            id: 4,
            title: "אפליקצית Chefy",
            text: " יוזר סורק בסופר מוצרי מזון והאפליקציה תציג לפניו רשימת מתכונים אפשריים עם אותו מוצר.",
            src: "images/slider1-1.png",
            alt: "slide",
        },
        {
            id: 5,
            title: "אפליקציית AnySCAN",
            text: "\n" +
                " מאפשרת לכם לדלג על התור בחנויות השונות ולבצע את התשלום על כל פריט בצורה עצמאית.\n" +
                "בוחרים את החנות בה אתם נמצאים, לסרוק את הברקודים על הפריטים ולשלם ישירות.",
            src: "images/slider1-3.png",
            alt: "slide",
        },
        {
            id: 6,
            title: "אפליקצית RealLife",
            text: " שולחים הודעה למי שמוצא חן בטווח עיין בבית קפה, ועוברים לדייט מיידי.",
            src: "images/slider2-2.png",
            alt: "slide",
        },
        {
            id: 7,
            title: "אפליקצית FRDZ",
            text: "עוקב אחרי הפעילות באינטרנט\n" +
                "                                ובמדיה חברתית למציאת חברויות חדשות. ",
            src: "images/slider2-4.jpg",
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
            const header = document.querySelector('header');
            const body = document.querySelector('body');
            header.style.display = "none";
            body.style.overflow = "hidden";
            const modalSlid = document.getElementById("modal-slid");
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
                popupBox.remove();
                header.style.display = "block";
                body.style.overflow = "auto";
            });
        }
    });
})();

(function (){

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
