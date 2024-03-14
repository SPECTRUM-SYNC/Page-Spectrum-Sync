var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        425: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    },
});




/** link automatico**/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", highlightNavigation);

function highlightNavigation() {
    let scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 500;

        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            const correspondingLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
            correspondingLink.classList.add("active");
        } else {
            const correspondingLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
            correspondingLink.classList.remove("active");
        }
    });
}