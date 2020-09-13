
(function($){
    //$('.carousel').carousel();
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 1500
        //nav: true
        //autoWidth: true
        //nav: true
    });
})(jQuery);

//toggleMainMenu();

function toggleMainMenu() {
    const hamburgerBtn = document.querySelector('.hamburger__btn');
    const mainMenu = document.querySelector('#main-menu-nav');
    const animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    let show = false;
    let effectIn = 'animate__zoomIn';
    let effectOut = 'animate__zoomOut';
    
    hamburgerBtn.addEventListener('click', () => {
        if(!show) {
            mainMenu.classList.add(effectIn);
            mainMenu.style.display = 'block';

            // On animation END state remove the class
            /* mainMenu.addEventListener(animationEndEvent, () => {
                mainMenu.classList.remove(effectIn);
            }); */

            /* mainMenu.onanimationend = () => {
                console.log('Animation ended');
                mainMenu.classList.remove(effectIn);
            }; */

            if( mainMenu.classList.contains(effectOut) ) {
                mainMenu.classList.remove(effectOut);
            }
            
            show = true;
            
        } else {
            mainMenu.classList.add(effectOut);
            mainMenu.classList.remove(effectIn);
            mainMenu.style.display = 'none';
            
            // On animation END state remove the class
            /* mainMenu.addEventListener(animationEndEvent, () => {
                mainMenu.classList.remove(effectOut);
            }); */

            /* mainMenu.onanimationend = () => {
                console.log("Out");
                mainMenu.classList.remove(effectOut);
            }; */

            /* if( mainMenu.classList.contains(effectIn) ) {
                mainMenu.classList.remove(effectIn);
            } */

            show = false;
        }
        console.log(show);
    });

}


