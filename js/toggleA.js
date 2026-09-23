const boton = document.getElementById("nav_btn");
const nav = document.getElementById("navBar");
const heroI = document.getElementById("hero");
const overlay = document.getElementById("overlay");


function mostrarNav(){
    nav.classList.toggle("oculto");
   if(heroI){heroI.classList.toggle("menu_abierto");} 
    if(overlay){overlay.classList.add("active");}
};

function cerrar(){
     if(heroI){heroI.classList.remove("menu_abierto");}
    if(overlay){overlay.classList.remove("active");}
    nav.classList.toggle("oculto")

}
overlay.addEventListener("click", cerrar)