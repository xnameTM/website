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
        $('.spis_box ol li:nth-child(1) a').text("Postać");
        $('.spis_box ol li:nth-child(2) a').text("Biografia");
        $('.spis_box ol li:nth-child(3) a').text("Miejsce ur.");
        $('.spis_box ol li:nth-child(4) a').text("Twórczość");
        $('.spis_box ol li:nth-child(5) a').text("Utwory");
        $('.spis_box ol li:nth-child(6) a').text("Dziedzictwo");
        $('.srodkowy_tekst p:nth-child(1)').text("Fryderyk Chopin,");
        $('.srodkowy_tekst p:nth-child(2)').text("czyli artysta, który odmienił świat.");
        $('.postac_main_text').text("Postać");
        $('.biografia_main_text').text("Biografia");
        $('.pochodzenie_main_text').text("Miejsce ur.");
        $('.tworczosc_main_text').text("Twórczość");
        $('.utwory_main_text').text("Utwory");
        $('.dziedzictwo_main_text').text("Dziedzictwo");
        $('footer a').text("Twórcy strony");
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
        $('.spis_box ol li:nth-child(1) a').text("Charakter");
        $('.spis_box ol li:nth-child(2) a').text("Biography");
        $('.spis_box ol li:nth-child(3) a').text("PlaceOfBirth");
        $('.spis_box ol li:nth-child(4) a').text("Composition");
        $('.spis_box ol li:nth-child(5) a').text("Songs");
        $('.spis_box ol li:nth-child(6) a').text("Heritage");
        $('.srodkowy_tekst p:nth-child(1)').text("Frédéric Chopin,");
        $('.srodkowy_tekst p:nth-child(2)').text("the artist who changed the world.");
        $('.postac_main_text').text("Charakter");
        $('.biografia_main_text').text("Biography");
        $('.pochodzenie_main_text').text("PlaceOfBirth");
        $('.tworczosc_main_text').text("Composition");
        $('.utwory_main_text').text("Songs");
        $('.dziedzictwo_main_text').text("Heritage");
        $('footer a').text("Website authors");
    }
});