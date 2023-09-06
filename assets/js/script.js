
function clickMenu(){

        var menumobile = document.querySelector ('.mobile-menu')

     if (menumobile.classList.contains('open')) {
        menumobile.classList.remove('open');
         document.querySelector('.icone').src = "assets/img/menu_white_36dp.svg";
     } else {
        menumobile.classList.add('open');
         document.querySelector('.icone').src = "assets/img/close_white_36dp.svg";
     }
} 

function trocarConteudo() {
    var conteudo1 = document.getElementById("conteudo1");
    var conteudo2 = document.getElementById("conteudo2");

    conteudo1.style.display = "block";
    conteudo2.style.display = "none";

}

function trocarConteudo2() {
    var conteudo1 = document.getElementById("conteudo1");
    var conteudo2 = document.getElementById("conteudo2");

    conteudo2.style.display = "block";
    conteudo1.style.display = "none";
    
}
