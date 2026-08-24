// Javascript

/* Capturando um elemento DOM */

/* window é desnecessário */
const titulo = window.document.getElementsByTagName('h1')[0]

// acessou o título e mudou logo de cara
titulo.innerText = "Fui alterado pelo Javascript =("

// toda vez que eu quiser mudar algo em relação ao estilo do elemento, coloco o 
// nome do elemento,ponto, style, ponto, o colo, abckground, etc

titulo.style.color = 'yellow'

// Alterando a cor da página pelo js
const pagina = window.document.body

pagina.style.backgroundColor = '#2f2f2f';

// Capturando a DIV
const caixaMagica = window.document.getElementById('caixaMagica');

//Criando uma função, chamada entrada
function entrada() {
    caixaMagica.innerText = 'Oi :)'
    caixaMagica.style.backgroundColor = 'blue'
}
function saida() {
    caixaMagica.innerText = 'Tchau :)'
    caixaMagica.style.backgroundColor = 'black'
}

function clicar() {
    caixaMagica.innerText = 'Clicou'
    caixaMagica.style.backgroundColor = 'red'
}

//Escutando um evento

//adicione um evento a caixaMagica, quando o usuário chegar com o cursor do mouse na caixa
caixaMagica.addEventListener('mouseenter', entrada)
caixaMagica.addEventListener('mouseout', saida)
caixaMagica.addEventListener('click', clicar)


