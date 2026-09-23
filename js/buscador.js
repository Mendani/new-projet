const btn2 = document.getElementById("Search_btn");
const input = document.getElementById("search");
const hero2 = document.getElementById("hero");



function  searchInput(){
    input.classList.toggle("oculto");

    if(!input.classList.contains("oculto")){
        if(hero2){hero2.style.marginTop = "220px";}
    }else{
        if(hero2){hero2.style.marginTop = "190px"}
    }
}
