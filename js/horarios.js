const horas = document.getElementById("horas");
const horarios = document.getElementById("horarios");
const hero3 = document.getElementById("hero");

function mostrarHorarios(){

    horarios.classList.toggle("oculto");

    if(!horarios.classList.contains("oculto")){

        if(hero3){hero3.style.marginTop = "220px";}

    }else{
        if(hero3){hero3.style.marginTop = "190px"}
    }
}

let estadoActual;


function Abierto_cerrado(){

    const ahora = new Date();
    const dia = ahora.getDay();
    const hora = ahora.getHours();
    const minutos = ahora.getMinutes();

    if ((dia === 1 || dia === 2 || dia === 3 || dia === 4 || dia === 5) && hora >= 16 && hora <= 20){

        estadoActual = "Abierto"

    }else if((dia === 1 || dia === 2 || dia === 3 || dia === 4 || dia === 5) && hora == 15 && minutos >= 30){

        estadoActual = "Abrira pronto"

    }else{

        estadoActual = "Cerrado"
    }

    switch(estadoActual){
        case "Abierto":

            horas.textContent = "Abierto 🟢";
            horas.style.color = "green"

        break;

        case "Abrira pronto":

            horas.textContent = "Abriremos pronto 🟡"
            horas.style.color = "yellow"

            
        break;

        case "Cerrado":

            horas.textContent = "Esatmos Cerrado ⛔"
            horas.style.color = "red"
            
        break;
    }
}

Abierto_cerrado()