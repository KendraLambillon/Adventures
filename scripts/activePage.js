const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(navLink => {
    if(navLink.href.includes(`${activePage}`)){
        navLink.classList.add('active');
    }
})