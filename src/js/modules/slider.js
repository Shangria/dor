(function () {
    window.addEventListener("load", function () {

        const swiper = new Swiper('.swiper-container', {
            // Optional parameters
            direction: 'vertical',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });

        if (this.document.querySelector(".swiper-desktop")) {
            try {
                const swiper = new Swiper("swiper-desktop", {
                    pagination: {
                        el: ".swiper-pagination",
                    },
                });
            } catch (e) {
                console.log(e);
            }
        }

        const swiperContainer = document.getElementById("swiper-tabs-wrap");
        const tabs = document.getElementById("tabs-box");

        swiperMode();

        if (document.querySelector(".swiper-tabs")) {
            let swiperTabs = new Swiper(".swiper-tabs", {
                pagination: {
                    el: ".swiper-pagination-tabs",
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                },
            });
        }

        function swiperMode() {
            let mobile = window.matchMedia("(min-width: 0px) and (max-width:692px)");
            let desktop = window.matchMedia("(min-width: 693px)");

            if (mobile.matches) {
                if (swiperContainer && tabs) {
                    tabs.style.display = "none";
                    swiperContainer.style.display = "block";
                }
            } else if (desktop.matches) {
                if (swiperContainer && tabs) {
                    swiperContainer.style.display = "none";
                    tabs.style.display = "block";
                }
            }
        }

        if (document.querySelector(".swiper-tabs")) {
            window.addEventListener("load", function () {
                swiperMode();
            });

            window.addEventListener("resize", function () {
                swiperMode();
            });
        }
    });
})();