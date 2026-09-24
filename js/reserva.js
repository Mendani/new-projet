const guardar = document.getElementById("Guardar");

    guardar.addEventListener("click", () => {

        const nuevaReserva = {
            
            nombre: document.getElementById("nombre").value,
            telefono: document.getElementById("telefono").value,
            fecha: document.getElementById("fecha").value,
            hora: document.getElementById("hora").value,
            servicio: document.getElementById("reserva").value
        };

        
    })