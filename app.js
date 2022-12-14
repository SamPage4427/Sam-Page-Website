const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const skillsMenu = document.querySelector('#skills-page');
    const projectsMenu = document.querySelector('#projects-page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    if(window.innerWidth > 960 && scrollPos < 756) {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 1588) {
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        skillsMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 2368) {
        skillsMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        projectsMenu.classList.remove('highlight');
        return;
    }else if(window.innerWidth > 960 && scrollPos < 3140) {
        projectsMenu.classList.add('highlight');
        skillsMenu.classList.remove('highlight');
        return;
    }

    if(elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);