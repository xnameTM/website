const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const main = document.querySelector('body');

const afterClick1 = document.querySelector('.afterClick1');
const afterClick2 = document.querySelector('.afterClick2');
const afterClick3 = document.querySelector('.afterClick3');
const afterClick4 = document.querySelector('.afterClick4');
const afterClick5 = document.querySelector('.afterClick5');
const afterClick6 = document.querySelector('.afterClick6');

let menuOpen = false;

afterClick1.addEventListener('click', () => {
    if (menuOpen) {
        menuBtn.classList.remove("open");
        menu.classList.remove("active");
        main.classList.remove('blockScroll');
        menuOpen = false;
    }
});

afterClick2.addEventListener('click', () => {
    if (menuOpen) {
        menuBtn.classList.remove("open");
        menu.classList.remove("active");
        main.classList.remove('blockScroll');
        menuOpen = false;
    }
});

afterClick3.addEventListener('click', () => {
    if (menuOpen) {
        menuBtn.classList.remove("open");
        menu.classList.remove("active");
        main.classList.remove('blockScroll');
        menuOpen = false;
    }
});

afterClick4.addEventListener('click', () => {
    if (menuOpen) {
        menuBtn.classList.remove("open");
        menu.classList.remove("active");
        main.classList.remove('blockScroll');
        menuOpen = false;
    }
});

afterClick5.addEventListener('click', () => {
    if (menuOpen) {
        menuBtn.classList.remove("open");
        menu.classList.remove("active");
        main.classList.remove('blockScroll');
        menuOpen = false;
    }
});

afterClick6.addEventListener('click', () => {
    if (menuOpen) {
        menuBtn.classList.remove("open");
        menu.classList.remove("active");
        main.classList.remove('blockScroll');
        menuOpen = false;
    }
});

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        menu.classList.add("active");
        main.classList.add('blockScroll');
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        menu.classList.remove("active");
        main.classList.remove('blockScroll');
        menuOpen = false;
    }
});