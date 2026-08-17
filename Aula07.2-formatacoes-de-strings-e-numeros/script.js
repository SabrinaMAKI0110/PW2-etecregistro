// externo

//JAVASCRIPT

const nome = window.prompt('Qual é o seu nome?');

// CONTANDO OS CARACTERES
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} caracteres. <br>`);

// ALTERANDO PARA MAIÚSCULAS
document.write(`Seu nome em maiúsculas é: ${nome.toUpperCase()} <br>`);

// ALTERANDO PARA MINÚSCULAS
document.write(`Seu nome em minúsculas é: ${nome.toLowerCase()} <br>`);

// FORMATANDO NÚMEROS
const salario = Number(window.prompt('Digite seu salário:'));

// INSERINDO CASAS DECIMAIS
document.write(`Seu salário com casas decimais é:  ${salario.toFixed(2)} <br>`)

//ALTERANDO O IDENTIFICADOR DE CASAS DECIMAIS
document.write(`Seu salário com vírgula nas casas decimais  é: ${salario.toFixed(2).replace('.', ',')} <br>`);

//FORMATAÇÕES DE MOEDA
document.write(`Seu salário em real é: ${salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} <br>`);

//DÓLAR
document.write(`Seu salário em dólar é: ${salario.toLocaleString('pt-br', {style:'currency', currency:'USD'})} <br>`);

// EURO
document.write(`Seu salário em euro é: ${salario.toLocaleString('pt-br', {style:'currency', currency:'EUR'})} <br>`);

// dólar português pt-br -> US$
// dólar inglês en -> $


// R$ 1000,00
//const salarioD=salario*cotação em dólar(0.19)
// = 200