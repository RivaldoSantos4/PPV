
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
