// Efeito de escrever ================================
function typeWrite(element) {
    const textoArray = element.innerHTML.split('');
    element.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            element.innerHTML += letra;
        }, 180 * i)
    });
}
typeWrite(document.querySelector('.name'));

// Efeito SubirProTopo =================================
function subirtela() {
    const rocket = document.querySelector('.scrool');
    rocket.classList.add('active');

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function decidirScroll() {
    const rocket = document.querySelector('.scrool');

    if (window.scrollY === 0) {
        //Ocultar
        document.querySelector('.scrool').style.display = "none";
        rocket.classList.remove('active');

    } else {
        //Mostar
        document.querySelector('.scrool').style.display = "block";
    }
}
window.addEventListener('scroll', decidirScroll);


// Contagem Regressiva =================================
var dataFutura = new Date("February 12, 2022 21:00:00").getTime();

var dias, horas, minutos, segundos;

function setValores(e) {
    return document.getElementById(e)
}

setInterval(function () {
    var dataAtual = new Date().getTime();

    var segundoTotal = (dataFutura - dataAtual) / 1000;

    dias = parseInt(segundoTotal / 86400)
    segundoTotal = segundoTotal % 86400

    horas = parseInt(segundoTotal / 3600)
    segundoTotal = segundoTotal % 3600

    minutos = parseInt(segundoTotal / 60)
    segundos = parseInt(segundoTotal % 60)

    setValores("timerD").innerHTML = dias < 10 ? '0' + dias : dias;
    setValores("timerH").innerHTML = horas < 10 ? '0' + horas : horas;
    setValores("timerM").innerHTML = minutos < 10 ? '0' + minutos : minutos;
    setValores("timerS").innerHTML = segundos < 10 ? '0' + segundos : segundos;
}, 1000);


// Menu Mobile ===============================
const menuSection = document.querySelector('.menu-section');
const menuToggle = menuSection.querySelector('.menu-toggle');



menuToggle.addEventListener('click', () => {
    menuSection.classList.toggle("on")
})
