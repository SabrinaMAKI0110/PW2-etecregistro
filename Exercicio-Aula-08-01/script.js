// JavaScript

const circVermelho = window.document.getElementById('Vermelho');
const circAmarelo = window.document.getElementById('Amarelo');
const circVerde = window.document.getElementById('Verde');

const Parar = window.document.getElementById('Parar');
const Atencao = window.document.getElementById('Atencao');
const Prosseguir = window.document.getElementById('Prosseguir');

function clicar() {
    circVermelho.style.backgroundColor = 'red'
    circAmarelo.style.backgroundColor = 'rgb(54,54,54)'
    circVerde.style.backgroundColor = 'rgb(54,54,54)'
}

function clicar2() {
    circAmarelo.style.backgroundColor = 'yellow'
    circVermelho.style.backgroundColor = 'rgb(54,54,54)'
    circVerde.style.backgroundColor = 'rgb(54,54,54)'
}

function clicar3() {
    circVerde.style.backgroundColor = 'green'
    circVermelho.style.backgroundColor = 'rgb(54,54,54)'
    circAmarelo.style.backgroundColor = 'rgb(54,54,54)'
}

Parar.addEventListener('click', clicar)
Atencao.addEventListener('click', clicar2)
Prosseguir.addEventListener('click', clicar3)
