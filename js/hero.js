const hero = document.getElementById("hero");

const imgagenes = [
    "img/ichi.jpeg",
    "img/nii.jpeg",
    "img/san.jpeg",
    "img/local.jpeg"
];

let indice = 0;

function heroSwich(){

    indice++;
    
    if(indice >= imgagenes.length){
        
        indice = 0;
    }

    const nuvoHero = document.createElement("div");

    nuvoHero.classList.add("nuevo");

    nuvoHero.style.backgroundImage = `url("${imgagenes[indice]}")`;

    hero.appendChild(nuvoHero);

    setTimeout(() =>{

        nuvoHero.classList.add("entrar")
    },80);

    setTimeout(() =>{
        hero.style.backgroundImage = `url=("{$imgagenes[indice]"})`
        
        nuvoHero.remove();
    },9500)
}

setInterval(heroSwich, 4000)