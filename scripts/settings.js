const settingsBtn = document.querySelector('.settings');
const settingsMenu = document.querySelector('.settings-menu');
let settingsIsOpen = true;

settingsBtn.addEventListener('click', function(){
    if (settingsIsOpen) {
        settingsIsOpen = false;
        settingsMenu.classList.add("active");
        main.classList.add('blockScroll');
    } else {
        settingsIsOpen = true;
        settingsMenu.classList.remove("active");
        main.classList.remove('blockScroll');
    }
});





// Graphics

const qualityGraphicsTag = document.querySelector('.settings-box .quality');
const performenceGraphicsTag = document.querySelector('.settings-box .performance');

qualityGraphicsTag.addEventListener('click', function(){
    qualityGraphicsTag.classList.add('active');
    performenceGraphicsTag.classList.remove('active');
    $('.main_background p').css("background-clip", "");
    $('.backtotop ion-icon').css("animation", "shortAnim 5s linear infinite");
    $('.settings ion-icon').css("animation", "rotateAnimation 10s linear infinite");
});

performenceGraphicsTag.addEventListener('click', function(){
    qualityGraphicsTag.classList.remove('active');
    performenceGraphicsTag.classList.add('active');
    $('.main_background p').css("background-clip", "border-box");
    $('.backtotop ion-icon').css("animation", "none");
    $('.settings ion-icon').css("animation", "none");
});





// Theme color

const color1ThemeTag = document.querySelector('.settings-theme .dark');
const color2ThemeTag = document.querySelector('.settings-theme .light');

color1ThemeTag.addEventListener('click', function(){
    color1ThemeTag.classList.add('active');
    color2ThemeTag.classList.remove('active');
    $(':root').css("--theme1", "#000");
    $(':root').css("--theme2", "#fff");
    $(':root').css("--theme3", "#fff");
    $(':root').css("--themeHeader", "#ffffffe7");
    $(':root').css("--themeSrodkowyTekst", "#000000c0");
    if (isBlackOrWhiteText) {
        color1TextTag.classList.remove('active');
        color2TextTag.classList.add('active');
        $(':root').css("--text", "#000");
        $(':root').css("--text2", "#fff");
    }
});

color2ThemeTag.addEventListener('click', function(){
    color1ThemeTag.classList.remove('active');
    color2ThemeTag.classList.add('active');
    $(':root').css("--theme1", "#fff");
    $(':root').css("--theme2", "#dadada");
    $(':root').css("--theme3", "#000");
    $(':root').css("--themeHeader", "#000000e7");
    $(':root').css("--themeSrodkowyTekst", "#ffffffc0");
    if (isBlackOrWhiteText) {
        color1TextTag.classList.add('active');
        color2TextTag.classList.remove('active');
        $(':root').css("--text", "#000");
        $(':root').css("--text2", "#000");
    }
});





// Text color

const color1TextTag = document.querySelector('.settings-text .color1');
const color2TextTag = document.querySelector('.settings-text .color2');
const color3TextTag = document.querySelector('.settings-text .color3');
const color4TextTag = document.querySelector('.settings-text .color4');
const color5TextTag = document.querySelector('.settings-text .color5');
const color6TextTag = document.querySelector('.settings-text .color6');
const color7TextTag = document.querySelector('.settings-text .color7');
let isBlackOrWhiteText = true;


color1TextTag.addEventListener('click', function(){
    color1TextTag.classList.add('active');
    color2TextTag.classList.remove('active');
    color3TextTag.classList.remove('active');
    color4TextTag.classList.remove('active');
    color5TextTag.classList.remove('active');
    color6TextTag.classList.remove('active');
    color7TextTag.classList.remove('active');
    if (color1ThemeTag.classList.contains('active')) {
        color1ThemeTag.classList.remove('active');
        color2ThemeTag.classList.add('active');
        $(':root').css("--theme1", "#fff");
        $(':root').css("--theme2", "#dadada");
        $(':root').css("--theme3", "#000");
        $(':root').css("--themeHeader", "#000000e7");
        $(':root').css("--themeSrodkowyTekst", "#ffffffc0");
    }
    $(':root').css("--text", "#000");
    $(':root').css("--text2", "#000");
    isBlackOrWhiteText = true;
});

color2TextTag.addEventListener('click', function(){
    color1TextTag.classList.remove('active');
    color2TextTag.classList.add('active');
    color3TextTag.classList.remove('active');
    color4TextTag.classList.remove('active');
    color5TextTag.classList.remove('active');
    color6TextTag.classList.remove('active');
    color7TextTag.classList.remove('active');
    if (color2ThemeTag.classList.contains('active')) {
        color1ThemeTag.classList.add('active');
        color2ThemeTag.classList.remove('active');
        $(':root').css("--theme1", "#000");
        $(':root').css("--theme2", "#fff");
        $(':root').css("--theme3", "#fff");
        $(':root').css("--themeHeader", "#ffffffe7");
        $(':root').css("--themeSrodkowyTekst", "#000000c0");
    }
    $(':root').css("--text", "#000");
    $(':root').css("--text2", "#fff");
    isBlackOrWhiteText = true;
});

color3TextTag.addEventListener('click', function(){
    color1TextTag.classList.remove('active');
    color2TextTag.classList.remove('active');
    color3TextTag.classList.add('active');
    color4TextTag.classList.remove('active');
    color5TextTag.classList.remove('active');
    color6TextTag.classList.remove('active');
    color7TextTag.classList.remove('active');
    $(':root').css("--text", "#ec1839");
    $(':root').css("--text2", "#ec1839");
    isBlackOrWhiteText = false;
});

color4TextTag.addEventListener('click', function(){
    color1TextTag.classList.remove('active');
    color2TextTag.classList.remove('active');
    color3TextTag.classList.remove('active');
    color4TextTag.classList.add('active');
    color5TextTag.classList.remove('active');
    color6TextTag.classList.remove('active');
    color7TextTag.classList.remove('active');
    $(':root').css("--text", "#fa5b0f");
    $(':root').css("--text2", "#fa5b0f");
    isBlackOrWhiteText = false;
});

color5TextTag.addEventListener('click', function(){
    color1TextTag.classList.remove('active');
    color2TextTag.classList.remove('active');
    color3TextTag.classList.remove('active');
    color4TextTag.classList.remove('active');
    color5TextTag.classList.add('active');
    color6TextTag.classList.remove('active');
    color7TextTag.classList.remove('active');
    $(':root').css("--text", "#37b182");
    $(':root').css("--text2", "#37b182");
    isBlackOrWhiteText = false;
});

color6TextTag.addEventListener('click', function(){
    color1TextTag.classList.remove('active');
    color2TextTag.classList.remove('active');
    color3TextTag.classList.remove('active');
    color4TextTag.classList.remove('active');
    color5TextTag.classList.remove('active');
    color6TextTag.classList.add('active');
    color7TextTag.classList.remove('active');
    $(':root').css("--text", "#1854b4");
    $(':root').css("--text2", "#1854b4");
    isBlackOrWhiteText = false;
});

color7TextTag.addEventListener('click', function(){
    color1TextTag.classList.remove('active');
    color2TextTag.classList.remove('active');
    color3TextTag.classList.remove('active');
    color4TextTag.classList.remove('active');
    color5TextTag.classList.remove('active');
    color6TextTag.classList.remove('active');
    color7TextTag.classList.add('active');
    $(':root').css("--text", "#f021b2");
    $(':root').css("--text2", "#f021b2");
    isBlackOrWhiteText = false;
});