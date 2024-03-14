// VLibras
new window.VLibras.Widget('https://vlibras.gov.br/app');


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
        console.log(1)
        body.classList.remove("white");
        bgWhite.classList.remove("active");
        bgDark.classList.add("active");

        cor = true;
    }



}