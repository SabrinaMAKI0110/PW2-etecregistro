// JavaScript

const CPU = document.querySelector('input#CPU');
const Memoria = document.querySelector('input#Memoria');
const Temperatura = document.querySelector('input#Temperatura');
const resultado1 = document.querySelector('div#resultadoCpu');
const resultado2 = document.querySelector('div#resultadoMemoria');
const resultado3 = document.querySelector('div#resultadoTemperatura');

function verificarCpu() {
    const valor_cpu = Number(CPU.value);
    if(valor_cpu <= 60){
        resultado1.innerHTML = `CPU: ${valor_cpu}.0% - Normal`;
        resultado1.style.backgroundColor = "green";
    }
    else if(valor_cpu >= 61 && valor_cpu <= 85){
        resultado1.innerHTML = `CPU: ${valor_cpu}.0% - Atenção`;
        resultado1.style.backgroundColor = "yellow";
    }
    else{
        resultado1.innerHTML = `CPU: ${valor_cpu}.0% - Crítico`;
        resultado1.style.backgroundColor = "red";
    }
}

function verificarMemoria() {
    const valor_memoria = Number(Memoria.value);
    if(valor_memoria <= 70){
        resultado2.innerHTML = `Memória: ${valor_memoria}.0% - Normal`;
        resultado2.style.backgroundColor = "green";

    }
    else if(valor_memoria >= 71 && valor_memoria <= 90){
        resultado2.innerHTML = `Memória: ${valor_memoria}.0% - Atenção`;
        resultado2.style.backgroundColor = "yellow";
    }
    else{
        resultado2.innerHTML = `Memória: ${valor_memoria}.0% - Crítico`;
        resultado2.style.backgroundColor = "red";
    }
}

function verificarTemperatura() {
    const valor_temperatura = Number(Temperatura.value);
    if(valor_temperatura <= 65){
        resultado3.innerHTML = `Temperatura: ${valor_temperatura}°C - Normal`;
        resultado3.style.backgroundColor = "green";
    }
    else if(valor_temperatura>= 66 && valor_temperatura <= 80){
        resultado3.innerHTML = `Temperatura: ${valor_temperatura}°C - Atenção`;
        resultado3.style.backgroundColor = "yellow";
    }
    else{
        resultado3.innerHTML = `Temperatura: ${valor_temperatura}°C - Crítico`;
        resultado3.style.backgroundColor = "red";
    }
}


function ReiniciarServidor(){
    CPU.value = "";
    Memoria.value = "";
    Temperatura.value = "";
    resultado1.innerHTML = "";
    resultado2.innerHTML = "";
    resultado3.innerHTML= "";
    resultado1.style.backgroundColor = "";
    resultado2.style.backgroundColor = "";
    resultado3.style.backgroundColor = "";
}