const bar = document.getElementById("interuno");

let barNew = [];

function crearNew(menus) {

    bar.innerHTML = "";

    menus.forEach((menu) =>{

        const div = document.createElement("div");
        div.classList.add("menu");

        if(menu.imagen){
            div.style.backgroundImage = `url(${menu.imagen})`;
            div.style.backgroundPosition = "center center";
            div.style.backgroundSize = "cover";
        }else{
            div.style.backgroundColor = "transparent";
            div.style.backdropFilter = "blur(15px)";
        }

        div.innerHTML= `
        <a href="${menu.enlace}" class="titulo">
            <span>${menu.nombre}</span>
        </a>
        `;
    bar.appendChild(div);

    });
}

fetch("json/span.json")
.then(res => res.json())
.then(data =>{
    barNew = data;

    crearNew(data);
});