const servers = document.getElementById("servicios1");

let serv = [];

function servicios(servi){
    
    servers.innerHTML = "";

    servi.forEach((servi) =>{

        const div = document.createElement("div");
        div.classList.add("cards");

        if(servi.imagen){
            
            div.style.backgroundImage = `url(${servi.imagen})`;
            div.style.backgroundPosition = "center";
            div.style.backgroundSize = "100% 100%";
            div.style.zIndex = "0"
            div.style.border = "orangered"
            div.style.boxShadow  = `2px 3px 5px black`

        }else{

            div.style.backgroundImage = `url("../img/logo.png")`;
            div.style.backdropFilter = "blur(3px)";
            div.style.backgroundPosition = "center"
            div.style.backgroundSize = "contain"
            div.style.zIndex = "0"
            div.style.color = "orangered"
            div.style.boxShadow  = `2px 3px 5px black`
        }

        div.innerHTML = `
        <div class="cortes">

        <h3 class="nombre">${servi.nombre}</h3>

        <p class="descripcion">${servi.desc}</p>

        <span class="precio">${servi.precio}</span>

        <button class="btn-add">Agendar</button>
        </div>`

        const boton = div.querySelector(".btn-add");

        boton.addEventListener("click", () =>{

            abrirFrom(servi.nombre);
        });
        servers.appendChild(div);
    });
}

fetch("../json/servicios.json")
.then(res => res.json())
.then(data =>{
    serv = data;

    servicios(data)
})