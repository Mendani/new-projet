const modal = document.getElementById("form");
const servicio = document.getElementById("reserva")
const cancelar = document.getElementById("Cancelar")

function abrirFrom(nombreServicio){

    modal.classList.remove("oculto");

    servicio.value = nombreServicio;
}


cancelar.addEventListener("click", () =>{

    modal.classList.add("oculto");

});