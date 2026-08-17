//JAVA SCRIPT

const nome = window.prompt('Qual é o seu nome?');
const ano_nasc = window.prompt('Qual é a sua data de nascimento?');
const idade = 2026 - ano_nasc;
const cidade = window.prompt('Qual é a sua cidade?');
const salario = Number(window.prompt('Qual é o seu salário?'));
const salarioD = salario * 0.19;
const salarioE = salario * 0.17;

document.write(`Olá, ${nome.toUpperCase()} <br>`);
document.write(`Você nasceu em ${ano_nasc} e sua IDADE é: ${idade} anos. <br>`);
document.write(`Sua cidade em MAIÚSCULAS é: ${cidade.toUpperCase()} <br>`);
document.write(`A quantidade de CARACTERES DA SUA CIDADE é: ${cidade.length} <br>`);

//REAL
document.write(`Seu salário em REAL é: ${salario.toLocaleString('pt-br', {style:'currency', currency:'BRL'})} <br>`);

//DÓLAR
document.write(`Seu salário em DÓLAR é: ${salarioD.toLocaleString('pt-br', {style:'currency', currency:'USD'})} <br>`);

// EURO
document.write(`Seu salário em EURO é: ${salarioE.toLocaleString('pt-br', {style:'currency', currency:'EUR'})} <br>`);