// JavScript

const Num1 = document.querySelector('input#Num1');
const Num2 = document.querySelector('input#Num2');

const resultado = document.querySelector('div#resultado');

function Somar(){
    const n1 = Number(Num1.value);
    const n2 = Number(Num2.value);
    const soma = n1 + n2;
    resultado.innerHTML = `<strong>${soma}</strong>`;
}

function Subtrair(){
    const n1 = Number(Num1.value);
    const n2 = Number(Num2.value);
    const subtracao = n1 - n2;
    resultado.innerHTML = `<strong>${subtracao}</strong>`;
}

function Multiplicar(){
    const n1 = Number(Num1.value);
    const n2 = Number(Num2.value);
    const multiplicacao = n1 * n2;
    resultado.innerHTML = `<strong>${multiplicacao}</strong>`;
}

function Dividir(){
    const n1 = Number(Num1.value);
    const n2 = Number(Num2.value);
    const divisao = n1 / n2;
    resultado.innerHTML = `<strong>${divisao}</strong>`;
}

function limpar(){
    Num1.value = "";
    Num2.value = "";
    resultado.innerHTML = "";
}
