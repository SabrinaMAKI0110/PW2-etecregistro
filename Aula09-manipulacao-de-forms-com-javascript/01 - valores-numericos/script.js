// javascript

// Coletando os elementos

// querySelector coleta dados da id (você coloca (tag/id) )
// e da classe

const inputN1 = document.querySelector('input#inputN1');
const inputN2 = document.querySelector('input#inputN2');
// ↑ aqui, capturei o elemento (caixa input), mas o valor não

const resultado = document.querySelector('div#resultado')

// Funções da calculadora

function somar() {
    const n1 = Number(inputN1.value);
    //↑ captura o valor da input e guarda na variável n1
    const n2 = Number(inputN2.value);
    const soma = n1 + n2;
    resultado.innerHTML = `A soma entre ${n1} e ${n2} é igual a <u><strong>${soma}</strong></u>.`
}

function limpar(){
    inputN1.value  = "";
    inputN2.value  = "";
    resultado.innerHTML = "=";
}

// innerText = muda a string
// innerHTML = muda as tags