const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');


btnHamburger.addEventListener('click', function(){
    console.log('open hamburger');
    if (header.classList.contains('open')) { // Ferme le menu hamburger
        header.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    } 
    else { // ouvre le menu hamburger
        header.classList.add('open');
        overlay.classList.remove('fade-out')
        overlay.classList.add('fade-in');

    }
})
