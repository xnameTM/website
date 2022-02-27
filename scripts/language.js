var btn = document.querySelector('.language_btn');
let language = false;

btn.addEventListener('click', () => {
    if (language == true) {
        // PL -----------------------------------------------------------
        language = false;

        // authors.html
        $(".short_text").text(" Jesteśmy uczniami ZSŁ na profilu programistycznym, a o to nasz projekt na temat najsłynniejszego polskiego pianisty - Fryderyka Chopina");
        $(".chxi24r").text("Twórcy");

        // index.hmtl
        $('.language_btn').text("ENG");
        $('.main_text').text("Życie i Twórczość Chopina");
        $('.afterClick1 a').text("Postać");
        $('.afterClick2 a').text("Biografia");
        $('.afterClick3 a').text("Dom Chopina");
        $('.afterClick4 a').text("Twórczość");
        $('.afterClick5 a').text("Utwory");
        $('.afterClick6 a').text("Dziedzictwo");
        $('.spis_box ol li:nth-child(1) a').text("I. Postać");
        $('.spis_box ol li:nth-child(2) a').text("II. Biografia");
        $('.spis_box ol li:nth-child(3) a').text("III. Dom Chopina");
        $('.spis_box ol li:nth-child(4) a').text("IV. Twórczość");
        $('.spis_box ol li:nth-child(5) a').text("V. Utwory");
        $('.spis_box ol li:nth-child(6) a').text("V. Dziedzictwo");
        $('.srodkowy_tekst p:nth-child(1)').text("Fryderyk Chopin,");
        $('.srodkowy_tekst p:nth-child(2)').text("czyli artysta, który odmienił świat.");
        $('.postac_main_text').text("Postać");
        $('.biografia_main_text').text("Biografia");
        $('.pochodzenie_main_text').text("Dom Chopina");
        $('.tworczosc_main_text').text("Twórczość");
        $('.utwory_main_text').text("Utwory");
        $('.dziedzictwo_main_text').text("Dziedzictwo");
        $('footer a').text("Twórcy strony");
        $('.text1').text('Fryderyk Franciszek Chopin - urodził się 22 lutego 1810 w Żelazowej Woli, zmarł 17 października 1849 w Paryżu) – polski kompozytor i pianista. Od października 1831 roku mieszkał we Francji w Paryżu. Jest uważany za jednego z najwybitniejszych kompozytorów romantycznych, nazywany "poetą fortepianu", a także za jednego z najważniejszych polskich kompozytorów w historii. U źródeł jego twórczości leżała wrażliwość artystyczna oraz umiejętność czerpania wzorców polskiej muzyki ludowej.');
        $('.text2').text('"Rodem warszawianin, sercem Polak, a talentem obywatel świata..."');
        $('.text3').text('Według legendy Chopin urodził się w czasie, gdy w pobliżu jego ojciec Mikołaj grał na skrzypcach w jednej z dworskich oficyn Kaspra Skarbka. A dokładniej według zapisu w metryce parafialnej sporządzonej przez ks. Józefa Morawskiego w kościele św. Rocha w Brochowie, 22 lutego 1910 r. w Żelazowej Woli koło Sochaczewa. Rodzicami Fryderyka Chopina byli Fryderyk, Mikołaj Chopin oraz Justyna z Krzyżanowskich. Ojciec był rodowitym Francuzem, który w 1788 roku przybył do Polski "w interesach", poznał ten kraj, jego dzieje, nauczył się dobrze mówić po polsku. A jego matka była obdarzona dużymi zdolnościami muzycznymi oraz najlepszymi cechami Polki, była filarem i dobrym duchem ich domu. Na chrzcie Chopinowi nadano imiona Fryderyk Franciszek (na cześć ojca chrzestnego i zapewne dziadka – François). Jesienią 1810 Mikołaj i Justyna wraz z dziećmi przenieśli się do Warszawy. W październiku zamieszkali w nieistniejącej obecnie kamienicy należącej do Jana Böhma przy Krakowskim Przedmieściu (obecnie w tym miejscu znajduje się kamienica Józefa Grodzickiego pod nr 7). Na przełomie czwartego i piątego roku życia Chopin rozpoczął naukę gry na fortepianie, początkowo u swej matki. W 1816 zaczął brać lekcje u Wojciecha Żywnego. Bardzo szybko się uczył. 27 listopada 1831 Mikołaj pisał do Fryderyka:');
        $('.text4').text('Według legendy Chopin urodził się w czasie, gdy w pobliżu jego ojciec Mikołaj grał na skrzypcach w jednej z dworskich oficyn Kaspra Skarbka. A dokładniej według zapisu w metryce parafialnej sporządzonej przez ks. Józefa Morawskiego w kościele św. Rocha w Brochowie, 22 lutego 1910 r. w Żelazowej Woli koło Sochaczewa. Rodzicami Fryderyka Chopina byli Fryderyk, Mikołaj Chopin oraz Justyna z Krzyżanowskich. Ojciec był rodowitym Francuzem, który w 1788 roku przybył do Polski "w interesach", poznał ten kraj, jego dzieje, nauczył się dobrze mówić po polsku. A jego matka była obdarzona dużymi zdolnościami muzycznymi oraz najlepszymi cechami Polki, była filarem i dobrym duchem ich domu. Na chrzcie Chopinowi nadano imiona Fryderyk Franciszek (na cześć ojca chrzestnego i zapewne dziadka – François). Jesienią 1810 Mikołaj i Justyna wraz z dziećmi przenieśli się do Warszawy. W październiku zamieszkali w nieistniejącej obecnie kamienicy należącej do Jana Böhma przy Krakowskim Przedmieściu (obecnie w tym miejscu znajduje się kamienica Józefa Grodzickiego pod nr 7). Na przełomie czwartego i piątego roku życia Chopin rozpoczął naukę gry na fortepianie, początkowo u swej matki. W 1816 zaczął brać lekcje u Wojciecha Żywnego. Bardzo szybko się uczył. 27 listopada 1831 Mikołaj pisał do Fryderyka:');
        $('.text5').text('Technika gry zabrała Ci bardzo niewiele czasu Twoje palce mniej się natrudziły niż umysł inni trawili całe dni, przebierając palcami po klawiaturze, Ty rzadko spędzałeś przy niej godzinę.');
        $('.text6').text('Podczas lekcji koncentrował się głównie na zaznajamianiu ucznia z dziełami muzyki barokowej i klasycznej oraz objaśnianiu budowy utworów fortepianowych Johanna  Sebastiana Bacha, Josepha Haydna, Wolfganga Amadeusza Mozarta oraz (w mniejszym stopniu) Johanna Nepomuka Hummla. Pozostałością po tej niekonwencjonalnej edukacji było zamiłowanie Fryderyka do dawnych kompozytorów. Następnym nauczycielem Fryderyka był, pochodzący – tak samo jak Żywny – z Czech, Wacław Wilhelm Würfel.');
        $('.text7').text('Przed ukończeniem 7 roku życia był już autorem kilku drobnych kompozycji (były to polonezy – owa forma muzyczna była w polskiej muzyce fortepianowej tą, która wraz z wychowaniem muzycznym Żywnego oraz modną w owym czasie operą w stylu włoskim składała się na atmosferę muzyczną, w jakiej dorastał Fryderyk), które pomagali zapisywać mu Żywny oraz ojciec.');
        $('.text8').text('24 lutego 1818 roku w pałacu Radziwiłłów (obecnie Pałac Prezydencki) odbył się pierwszy koncert publiczny Chopina, zorganizowany na rzecz Towarzystwa Dobroczynności przygotowany przez ordynatową Zamoyską. Julian Ursyn Niemcewicz fakt wykorzystania talentu 8-letniego dziecka dla potrzeb filantropii skomentował w komedii, gdzie wyśmiał pogoń za sensacją i gorliwość filantropek, które na fikcyjnym zebraniu licytują się w odejmowaniu lat „Szopenkowi”, a w końcu sztuki zapada uchwała, że cudowne dziecko na scenę wniesie niańka.');
        $('.text9').text('Gdy u 16-letniego Chopina lekarze rozpoznali pierwsze objawy choroby płuc, dla ratowania zdrowia wyjechał z matką i siostrami (Ludwiką, Izabelą i Emilią) do Dusznik. ... Tam bowiem, gdy kilkoro dzieci przez śmierć ojca, do wód na kurację przybyłego, sierotami stało się, pan Fryderyk Chopin... dał dwa koncerty na dochód tychże... Sobie przysporzył chwały, a sierotom? - 74 talary. Dużo.');
        $('.text10').text('W lipcu 1829, niezwłocznie po ukończeniu studiów, Fryderyk Chopin wraz z przyjaciółmi wyjechał na wycieczkę do Wiednia. Dzięki Würflowi wszedł w środowisko muzyków. W Theater am Kärntnertor wystąpił dwukrotnie; grał Wariacje B-dur za pierwszym, a oprócz Wariacji także Rondo à la Krakowiak za drugim razem. Odniosły one fenomenalny sukces wśród publiczności. Nawet krytyka mimo zastrzeżeń dotyczących jego gry (zbyt mała siła dźwięku) uznała kompozycje za nowatorskie. Dobre przyjęcie kompozycji na koncertach ułatwiło kontakt z wydawcami: w kwietniu 1830, po raz pierwszy za granicą, wydano drukiem w Austrii, w oficynie Tobiasa Haslingera grane tu już Wariacje op. 2.');
        $('.text11').text('5 listopada 1830 Chopin na zawsze opuścił Polskę: wyjechał z Kalisza i przez Wrocław udał się do Drezna. W Wiedniu usłyszał śpiewaną niegdyś przez Konstancję cavatinę Rossiniego i rozpłakał się. Pojechał do Monachium i w końcu udał się do Paryża. W czasie drogi Chopin napisał dziennik (zwany „Dziennikiem stuttgarckim”), przedstawiający stan jego ducha podczas pobytu w Stuttgarcie, gdzie ogarnęła go rozpacz z powodu upadku powstania listopadowego. Wedle tradycji, powstały wtedy pierwsze szkice do Etiudy „Rewolucyjnej” Utwory tego okresu wypełnione są dramatyzmem, który z wolna zaczyna dominować w twórczości kompozytora.');
        $('.text12').text('Po opuszczeniu Nohant nie skomponował już żadnego znaczącego utworu, jedynie kilka miniatur. Po wybuchu rewolucji w Paryżu w 1848 r. Chopin wyjechał do Anglii i Szkocji na bardzo wyczerpującą jego siły podróż. 16 listopada 1848 w sali Guildhall w Londynie odbył się jego ostatni publiczny koncert. Organizatorką i sponsorką pobytu była jego uczennica, Szkotka Jane Stirling, zwana „wdową po Chopinie”.');
        $('.text13').text('Chopin zmarł w otoczeniu kilkorga bliskich mu osób około 2 w nocy 17 października 1849 w Paryżu, a na świadectwie zgonu jako przyczynę lekarz wpisał gruźlicę.');
        $('.text14').text('"Dom Chopinów był czysto polski. Nie można było sprawić Fryderykowi większej przykrości, jak kwestionując jego tytuł Polaka, z powodu francuzkiego nazwisko".');
        $('.text15').text('Lokalizacja domu Fryderyka Chopina:');
        $('.text16').text('Gatunki:');
        $('.text17').text('Polonezy');
        $('.text18').text('Wczesne polonezy, nawiązujące do popularnych wówczas w Warszawie utworów Ogińskiego, wydane zostały dopiero po śmierci kompozytora (9 utworów dziecięcych i młodzieńczych „op. posth.” = wydane pośmiertnie). W latach dojrzałych Chopin opublikował siedem polonezów, które są już zupełnie inne: bardzo dramatyczne i rozbudowane.');
        $('.text19').text('Mazurki');
        $('.text20').text('Chopin skomponował 57 mazurków, w nieznany wcześniej sposób nawiązując w nich do muzyki ludowej z Mazowsza.');
        $('.text21').text('Nokturny');
        $('.text22').text('Chopin napisał 21 nokturnów. Są to liryczne, melodyjne miniatury. Najwcześniejsze są jeszcze dość sentymentalne, późniejsze są wyrazowo coraz bardziej urozmaicone. Na ich melodię szczególnie wpłynęło bel canto, gdyż Chopin był wielbicielem włoskiej opery, zwłaszcza Belliniego. Kantylenę oplata w nich kunsztowna ornamentacja.');
        $('.text23').text('Scherza');
        $('.text24').text('Chopin napisał w późniejszych latach 4 Scherza. Wbrew tytułowi, są one raczej poważne, a nawet dramatyczne. Najpoważniejsze jest Scherzo h-moll op. 20, napisane podobno w okresie powstania listopadowego, z cytatem kolędy Lulajże, Jezuniu w części środkowej.');
        $('.text25').text('Ballady');
        $('.text26').text('Mówi się, że 4 ballady Chopina: g-moll op. 23, F-dur op. 38, As-dur op. 47 (jedyna z „optymistycznym” zakończeniem) i f-moll op. 52 powstały pod wrażeniem lektury ballad Adama Mickiewicza, lecz nie znaleziono na to dowodów. Ewentualne pokrewieństwo z poezją.');
        $('.text27').text('Etiudy');
        $('.text28').text('Ukończone zostały dwa cykle etiud: op. 10 i op. 25. Zgodnie z nazwą (fr. étude = studium, ćwiczenie) są one utworami pedagogicznymi i mają służyć doskonaleniu techniki pianistycznej. Ale po raz pierwszy w historii tego gatunku nie są to „nudne ćwiczenia”, którymi zamęczano pokolenia początkujących pianistów. Każda etiuda Chopinowska to arcydzieło. Jedną z najbardziej znanych jest, zamykająca opus 10, etiuda c-moll, zwana „rewolucyjną”.');
        $('.text29').text('Preludia');
        $('.text30').text('24 Preludia op. 28 powstały jako symboliczny hołd złożony Janowi Sebastianowi Bachowi, którego muzykę Chopin cenił. Są wyraźnym nawiązaniem do Das Wohltemperierte Klavier, napisanym również we wszystkich 24 tonacjach dur i moll. Zgodnie z zasadą gatunku są krótkie (najdłuższe As-dur nr 17 ma 90 taktów, a najkrótsze E-dur nr 9 ma tylko 12). Harmoniczny porządek cyklu pozwala wykonywać go w całości, lecz sam Chopin grywał tylko po kilka miniatur.');
        $('.text31').text('Sonaty');
        $('.text32').text('Chopin napisał 3 sonaty na fortepian: Sonatę c-moll op. 4, Sonatę b-moll op. 35 i Sonatę h-moll op. 58 oraz Sonatę g-moll op. 65 na fortepian i wiolonczelę. Spośród 3 sonat fortepianowych najpopularniejsza jest Sonata b-moll, której trzecia część, Marsz żałobny, grywany jest dzisiaj podczas pogrzebów, w rozmaitych transkrypcjach.');
        $('.text33').text('Koncerty');
        $('.text34').text('Powstały dwa koncerty na fortepian i orkiestrę: f-moll op. 21 z 1829 r. i e-moll op. 11 z 1830 r. – oba z pierwszego okresu twórczości, pisane jeszcze w Polsce, osadzone w formie klasycznej.');
        $('.text35').text('Inne');
        $('.text36').text('Chopin skomponował 19 pieśni na głos z fortepianem, Trio fortepianowe oraz Sonatę wiolonczelową.');
    } else {
        // ENG -----------------------------------------------------------
        language = true;

        // authors.html
        $(".short_text").text(" We are students of the ZSŁ on the programming profile, and this is our project about the most famous Polish pianist - Fryderyk Chopin");
        $(".chxi24r").text("Authors");

        // index.hmtl
        $('.language_btn').text("PL");
        $('.main_text').text("Chopin's life and composition");
        $('.afterClick1 a').text("Charakter");
        $('.afterClick2 a').text("Biography");
        $('.afterClick3 a').text("Chopin's home");
        $('.afterClick4 a').text("Composition");
        $('.afterClick5 a').text("Songs");
        $('.afterClick6 a').text("Heritage");
        $('.spis_box ol li:nth-child(1) a').text("I. Charakter");
        $('.spis_box ol li:nth-child(2) a').text("II. Biography");
        $('.spis_box ol li:nth-child(3) a').text("III. Chopin's home");
        $('.spis_box ol li:nth-child(4) a').text("IV. Composition");
        $('.spis_box ol li:nth-child(5) a').text("V. Songs");
        $('.spis_box ol li:nth-child(6) a').text("VI. Heritage");
        $('.srodkowy_tekst p:nth-child(1)').text("Frédéric Chopin,");
        $('.srodkowy_tekst p:nth-child(2)').text("the artist who changed the world.");
        $('.postac_main_text').text("Charakter");
        $('.biografia_main_text').text("Biography");
        $('.pochodzenie_main_text').text("PlaceOfBirth");
        $('.tworczosc_main_text').text("Composition");
        $('.utwory_main_text').text("Songs");
        $('.dziedzictwo_main_text').text("Heritage");
        $('footer a').text("Website authors");
        $('.text1').text("?");
        $('.text2').text("?");
        $('.text3').text("?");
        $('.text4').text("?");
        $('.text5').text("?");
        $('.text6').text("?");
        $('.text7').text("?");
        $('.text8').text("?");
        $('.text9').text("?");
        $('.text10').text("?");
        $('.text11').text("?");
        $('.text12').text("?");
        $('.text13').text("?");
        $('.text14').text("?");
        $('.text15').text("?");
        $('.text16').text("?");
        $('.text17').text("?");
        $('.text18').text("?");
        $('.text19').text("?");
        $('.text20').text("?");
        $('.text21').text("?");
        $('.text22').text("?");
        $('.text23').text("?");
        $('.text24').text("?");
        $('.text25').text("?");
        $('.text26').text("?");
        $('.text27').text("?");
        $('.text28').text("?");
        $('.text29').text("?");
        $('.text30').text("?");
        $('.text31').text("?");
        $('.text32').text("?");
        $('.text33').text("?");
        $('.text34').text("?");
        $('.text35').text("?");
        $('.text36').text("?");
    }
});