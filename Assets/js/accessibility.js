// VLibras
new window.VLibras.Widget('https://vlibras.gov.br/app');

// Abrir modal
const themeModal = document.querySelector(".customize-theme");
const modal = new bootstrap.Modal(document.getElementById('modalAccessibility'));


// close modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        modal.hide()
    }
}
themeModal.addEventListener("click", closeThemeModal);


//Trocar cor de fundo
// true == preto e false == branco
var body = document.querySelector('body');
var bgWhite = document.querySelector('.bg-1');
var bgDark = document.querySelector('.bg-2');

var cor = true;

function trocarBack(fundoAtual) {

    if (fundoAtual == "white" && cor == true) {


        body.classList.add("white");
        bgWhite.classList.add("active");
        bgDark.classList.remove("active");

        cor = false;
    } else if (fundoAtual == "dark" && cor == false) {
        body.classList.remove("white");
        bgWhite.classList.remove("active");
        bgDark.classList.add("active");

        cor = true;
    }
}

/*===== FONTS =====*/
const fontSizes = document.querySelectorAll('#font-size span');


const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if (size.classList.contains('font-size-1')) {
            fontSize = '13px';
        }
        else if (size.classList.contains('font-size-2')) {
            fontSize = '16px';
        }
        else if (size.classList.contains('font-size-3')) {
            fontSize = '19px';
        }

        document.querySelector('html').style.fontSize = fontSize;
    })
})

/*===== Constraste =====*/
const ConstrastSizes = document.querySelectorAll('#constraste-size span');


const removeConsSelector = () => {
    ConstrastSizes.forEach(size => {
        size.classList.remove("option");
    })
}
ConstrastSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeConsSelector();
        let constrasteSize;
        size.classList.toggle('option');
        if (size.classList.contains('font-size-1')) {
            document.querySelector('html').style.filter = 'invert(1)';
        }
        else if (size.classList.contains('font-size-2')) {
            constrasteSize = '1.0';
        }
        else if (size.classList.contains('font-size-3')) {
            constrasteSize = '1.5';
        }

        document.querySelector('html').style.filter = 'contrast(' + constrasteSize + ')';
    })
})


