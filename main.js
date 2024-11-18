/*==================== TOGGLE BUTTON ====================*/
const navMenu = document.getElementById('nav-menu');
const navLink = document.querySelectorAll('.nav-link');
const hamburger = document.getElementById('hamburger');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-[0]');
    hamburger.classList.toggle('ri-close-large-line');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('left-[0]');
        hamburger.classList.remove('ri-close-large-line');
    });
});
/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class
    if(this.scrollY >= 200) {
        scrollUp.classList.add('opacity-100');
        scrollUp.classList.add('pointer-events-auto');
    } else {
        scrollUp.classList.remove('opacity-100');
        scrollUp.classList.remove('pointer-events-auto');
    }
}
window.addEventListener('scroll', scrollUp)
/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SWIPER ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

/*==================== SCROLL REVEAL ANIMATION ====================*/
