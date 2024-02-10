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
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
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
// Seleciona todas as seções que possuem um ID definido
const sections = document.querySelectorAll("section[id]");

// Adiciona um ouvinte de evento para detectar a rolagem da página
window.addEventListener("scroll", highlightNavigation);

// Função para destacar o link de navegação correspondente à seção visível
function highlightNavigation() {
    // Obtém a posição atual de rolagem vertical da janela
    let scrollY = window.pageYOffset;

    // Itera sobre cada seção encontrada no documento HTML
    sections.forEach(section => {
        // Obtém a altura e a posição superior da seção atual
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 500; // Ajuste para melhorar a detecção

        // Obtém o ID da seção atual
        const sectionId = section.getAttribute("id");

        // Verifica se a posição de rolagem está dentro da área da seção atualmente visível
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Adiciona a classe "active-link" ao link de navegação correspondente
            const correspondingLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
            correspondingLink.classList.add("active");
        } else {
            // Remove a classe "active-link" do link de navegação correspondente
            const correspondingLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
            correspondingLink.classList.remove("active");
        }
    });
}

// change color

function change() {
    // Seleciona o elemento root
    var icon = document.querySelector('#changeIcon');
    var body = document.querySelector('body');

    body.classList.toggle("white");
    icon.classList.toggle("moon");

    if (icon.classList.contains("moon")) {
        icon.innerHTML = "";
        icon.innerHTML = "mode_night";
    } else {
        icon.innerHTML = "";
        icon.innerHTML = "brightness_5";
    }
}