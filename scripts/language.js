var btn = document.querySelector('.language_btn');
let language = false;

btn.addEventListener('click', () => {
    if (language == true) {
        // PL -----------------------------------------------------------
        language = false;
        $('.language_btn').text("ENG");

        $('.main_text').text("Życie i Twórczość Chopina");

        $('.afterClick1 a').text("Postać");
        $('.afterClick2 a').text("Biografia");
        $('.afterClick3 a').text("Miejsce ur.");
        $('.afterClick4 a').text("Twórczość");
        $('.afterClick5 a').text("Utwory");
        $('.afterClick6 a').text("Dziedzictwo");
    } else {
        // ENG -----------------------------------------------------------
        language = true;
        $('.language_btn').text("PL");
        $('.main_text').text("Chopin's life and composition");
        $('.afterClick1 a').text("Charakter");
        $('.afterClick2 a').text("Biography");
        $('.afterClick3 a').text("PlaceOfBirth");
        $('.afterClick4 a').text("Composition");
        $('.afterClick5 a').text("Songs");
        $('.afterClick6 a').text("Heritage");
    }
});