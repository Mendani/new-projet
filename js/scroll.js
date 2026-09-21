const scroll2 = document.getElementById("scroll");
const scroll1 = document.getElementById("scroll1");

let posicionAnterior = window.scrollY;

window.addEventListener("scroll", () => {

    const posicionActual = window.scrollY;

    if(posicionActual > posicionAnterior){
         //cuando se baja
        scroll2.classList.add("oculto-scroll");
        scroll1.classList.add("oculto-scroll");      
    }else{
        //cuando se sube
        scroll2.classList.remove("oculto-scroll");
        scroll1.classList.remove("oculto-scroll");   
    }

    posicionAnterior = posicionActual;
});