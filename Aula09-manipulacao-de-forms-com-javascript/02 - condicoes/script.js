// javascript

// Capturando os elementos
const inputVelocidade = document.querySelector('input#inputVelocidade');
const resultado = document.querySelector('div#resultado');

// Definindo um limite de velocidade 
const limite = 80;

function verificarVelocidade(){
    const velocidade = inputVelocidade.value;
    resultado.innerHTML = `Sua velocidade atual é de ${velocidade}Km/h. O limite da via é ${limite}Km/h`;
    // Condicao
    if (velocidade > limite){
       // Multado
       resultado.innerHTML += `<p>Você está <strong>multado</strong> por excesso de velocidade!</p>`;
    }
    // Dentro do limite
    else {
        resultado.innerHTML += `<p>Você está dentro do limite de velocidade! Dirija com cuidado!</p>`;
    }
}

// +=   =  adiciona as mensagens, impede que o if apague a primeira mensagem