export type Locale = "pl" | "en";

export const locales: Locale[] = ["pl", "en"];
export const defaultLocale: Locale = "pl";

export const BOOKING_URL =
  "https://slowhop.com/pl/miejsca/ceglany-domek.html?adults=2&start_date=2026-06-01&end_date=2026-06-03";

export const CONTACT = {
  phone: "+48 600 000 000",
  phoneHref: "tel:+48600000000",
  email: "kontakt@ceglany-domek.pl",
  address: "Gryżyna 21, 66-630 Gryżyna, Lubuskie, Polska",
  host: "Andrzej",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Gry%C5%BCyna+21%2C+Lubuskie",
};

export const translations = {
  pl: {
    meta: {
      title: "Ceglany Domek w Gryżynie - stuletni dom z duszą w Parku Krajobrazowym",
      description:
        "Odrestaurowany, stuletni ceglany dom dla 6-8 osób w sercu Gryżyńskiego Parku Krajobrazowego. Las, jeziora, dębowe aleje, cisza i detoks cyfrowy.",
      ogAlt: "Ceglany Domek w Gryżynie",
    },
    nav: {
      about: "O domku",
      surroundings: "Otoczenie",
      amenities: "Udogodnienia",
      gallery: "Galeria",
      reviews: "Opinie",
      rules: "Zasady",
      faq: "FAQ",
      history: "Historia",
      contact: "Kontakt",
      book: "Zarezerwuj",
      menuOpen: "Otwórz menu",
      menuClose: "Zamknij menu",
    },
    hero: {
      eyebrow: "Gryżyński Park Krajobrazowy",
      title: "Zwolnij.\nWróć do natury.",
      subtitle:
        "Stuletni, ceglany dom z duszą - wśród lasów, jezior i dębowych alei. Miejsce, w którym można wszystko. I nic.",
      cta: "Zarezerwuj pobyt",
      ctaSecondary: "Poznaj domek",
      scroll: "Przewiń",
    },
    about: {
      eyebrow: "Serce domu",
      title: "Stuletni dom, odrestaurowany własnymi rękami",
      lead:
        "Ceglany Domek stał pusty przez kilkanaście lat. Dziś jego ponad stuletnie serce bije mocno - wyremontowaliśmy go z miłością, jaką mamy do starych domów, zachowując każdą deskę w podłodze i każdy kafel w piecu.",
      paragraphs: [
        "Wygodnie zmieści się w nim 6-8 osób w trzech osobnych sypialniach z szerokimi łóżkami i wygodnymi materacami. Na poddaszu otwarta przestrzeń z dwoma materacami futon, na których w razie potrzeby śpią kolejne osoby.",
        "Cechą charakterystyczną są zachowane stare piece kaflowe (choć całość ogrzewana jest centralnie) i w pełni wyposażona kuchnia na oszklonej werandzie z panoramicznym widokiem na stare dęby.",
        "Dwie łazienki, drewniane łóżeczko dziecięce, pościel, ręczniki, pralka i żelazko. Wszystko, czego potrzeba, by zatrzymać się na dłużej.",
      ],
      stats: [
        { value: "6-8", label: "gości" },
        { value: "3", label: "sypialnie" },
        { value: "2", label: "łazienki" },
        { value: "160 m²", label: "powierzchni" },
      ],
    },
    surroundings: {
      eyebrow: "Sielskie otoczenie",
      title: "W sercu najmniejszego parku krajobrazowego w Polsce",
      lead:
        "Mamy to szczęście, że Ceglany Domek leży na skraju wsi, w sercu Gryżyńskiego Parku Krajobrazowego - uznawanego za jeden z najpiękniejszych w Polsce.",
      features: [
        {
          title: "11 polodowcowych jezior",
          text: "Czyste, głębokie, rybne. Najbliższe - ok. 1,5 km od domu. Pierwsza klasa czystości. Można wypożyczyć rower wodny lub kajak.",
        },
        {
          title: "Dwustuletnie dębowe aleje",
          text: "W 1840 roku posadzono tu 16 000 dębów wzdłuż wiejskich dróg. Dziś pod ochroną prawną - i naszą.",
        },
        {
          title: "Detoks cyfrowy",
          text: "Brak zasięgu GSM w domku. Wystarczy wejść na pobliską górkę, by go złapać. Albo nie. Cisza i bukowe wąwozy zostaną z Wami.",
        },
        {
          title: "Rykowisko jeleni",
          text: "Wystarczy nocą wyjść na ganek, by usłyszeć jak ryczą jelenie. 6 km dalej - Dobrosułowskie Łąki, największe rykowisko w Europie.",
        },
      ],
    },
    amenities: {
      eyebrow: "Co znajdę na miejscu",
      title: "Wszystko, czego trzeba - i nic, czego nie trzeba",
      groups: [
        {
          title: "Dom i wygoda",
          items: [
            "W pełni wyposażona kuchnia",
            "Zmywarka, piekarnik, ekspres",
            "Pralka i suszarka",
            "Stare piece kaflowe i kominek",
            "Pościel i ręczniki",
            "Średnie Wi-Fi",
          ],
        },
        {
          title: "Dla rodzin",
          items: [
            "Łóżeczko dziecięce",
            "Gry planszowe i puzzle",
            "Biblioteczka z książkami",
            "Książki, DVD i muzyka dla dzieci",
            "Pokoje rodzinne",
            "Bezpieczna, cicha okolica",
          ],
        },
        {
          title: "Na zewnątrz",
          items: [
            "Ogród z grządkami warzywnymi",
            "Taras słoneczny i meble ogrodowe",
            "Miejsce na piknik",
            "Bezpłatny prywatny parking",
            "Rowery do dyspozycji",
            "Trasy piesze, rowerowe i kajakowe",
          ],
        },
        {
          title: "Zwierzęta i goście",
          items: [
            "Psy i koty mile widziane",
            "Bez dodatkowych opłat",
            "Uwaga: posesja nie jest ogrodzona od strony lasu",
            "Pokoje dla niepalących",
            "Zakaz organizacji imprez",
            "Język: polski, angielski",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Galeria",
      title: "Zobacz, jak tu jest",
      lead: "Każde zdjęcie zrobione na miejscu. Bez filtra, bez upiększeń.",
    },
    reviews: {
      eyebrow: "Opinie gości",
      title: "Miejsce, które wciąga",
      lead: "Ocena 5.0 z 26 opinii na Slowhop oraz 9.6 na Booking. Oto, co mówią goście:",
      navPrev: "Poprzednia opinia",
      navNext: "Następna opinia",
      items: [
        {
          text:
            "Wspaniały dom i miejsce do odpoczynku. Byliśmy po raz kolejny i zapewne nie ostatni.",
          author: "Paulina",
          date: "grudzień 2025",
          source: "Slowhop",
        },
        {
          text:
            "Miejsce wyjątkowe, okolica urokliwa, mnóstwo miejsc do odwiedzenia. Domek bardzo wygodny. Spędziliśmy cudownie czas. Bardzo dziękujemy gospodarzom, a właściwie Mamie gospodyni za ciepłe przyjęcie. Mamy nadzieję jeszcze kiedyś wrócić.",
          author: "Ludmiła",
          date: "wrzesień 2025",
          source: "Slowhop",
        },
        {
          text:
            "To miejsce jest przepiękne! Cudownie spędzony weekend, miejsce jest tak ciche i spokojne, że aż głupio było burzyć go swoją obecnością. Podziw dla właścicieli za odrestaurowanie domu i klimatu, jaki stworzyli. Wymarzone miejsce by odciąć się od świata, napalić w piecu i czytać książki z biblioteczki na schodach.",
          author: "Agnieszka",
          date: "kwiecień 2025",
          source: "Slowhop",
        },
        {
          text:
            "Absolutnie cudowne miejsce! Miejsce, które wciąga i uzależnia. Można czytać książki w ogrodzie (nie trzeba brać swoich, bo właściciele mają świetnie wyposażoną biblioteczkę), można kąpać się w krystalicznie czystej wodzie, można chodzić na spacery do lasu i odkrywać kolejne ścieżki - aleje dębowe są niesamowite!",
          author: "Katarzyna",
          date: "sierpień 2024",
          source: "Slowhop",
        },
        {
          text:
            "Ceglany Domek w Gryżynie to miejsce, w którym można odpocząć, wyciszyć się, naładować baterie. Razem z przyjaciółmi mieliśmy przyjemność odpoczywać w nim kilka dni, ciesząc się brakiem zasięgu w naszych telefonach. Dookoła Gryżyny znajdują się piękne lasy, które eksplorowaliśmy, spacerując z psiakiem. On też nie chciał wracać do domu, bo pokochał ogród obok domku. Bardzo spodobał nam się też kącik na górze z filmami i książkami - super miejsce na relaks.",
          author: "Anna",
          date: "marzec 2024",
          source: "Slowhop",
        },
        {
          text:
            "Odwiedzam to miejsce niezmiennie od 3 lat o różnych porach roku. Za każdym razem wyjeżdżam z wielkim uśmiechem na twarzy. Miejsce bardzo urokliwe i z niepowtarzalnym klimatem. Cisza, spokój, natura. Love it!",
          author: "Marcin",
          date: "czerwiec 2023",
          source: "Slowhop",
        },
        {
          text:
            "Fantastyczny, klimatyczny, wygodny, wcale nie taki mały domek. Weranda idealna do gier w tysiąca i planszówki. Kuchnia dała radę ryżottom i szarlotce pod kruszonką. Do kompletu sala kinowa (odtwarzacz DVD + kolekcja filmów). A wioseczka bajkowa, w lesie, blisko do jeziora i wąwozów z bobrowymi tamami. Cisza, spokój i pełen chill.",
          author: "Olena",
          date: "luty 2023",
          source: "Slowhop",
        },
        {
          text:
            "6 lat temu mapy Google pokierowały mnie przez Gryżynę, jechałam bardzo powoli, bo piękne widoki same namówiły do zwolnienia. Wtem pojawił się on - Ceglany Domek, który mnie oczarował. 6 lat później znalazłam go na Slowhop i wiedziałam, że muszę tam być. Razem z grupą przyjaciół spędziliśmy cudowny jesienny weekend. Był czas na długie rozmowy przy stole z widokiem na ogród, czas na spacery i totalny reset. Brak zasięgu bardzo nam pomógł!",
          author: "Ola",
          date: "październik 2022",
          source: "Slowhop",
        },
        {
          text:
            "Właściciele Ceglanego Domku zadbali o zachowanie przedwojennego charakteru domu, ale również o komfort wypoczywających, adaptując poddasze i aranżując tam ciekawe wnętrza. Parter urzeka zabytkowymi meblami, które budzą zachwyt i szacunek dla minionych czasów. Cisza i spokój, rozgwieżdżone niebo i buszująca w leszczynie wiewiórka, całkowity brak zasięgu telefonii komórkowej, ale za to świetnie działające Wi-Fi.",
          author: "Marzena",
          date: "sierpień 2020",
          source: "Slowhop",
        },
      ],
    },
    rules: {
      eyebrow: "Zasady pobytu",
      title: "Kilka rzeczy, o których warto wiedzieć",
      checkIn: { label: "Zameldowanie", value: "16:00 - 23:30" },
      checkOut: { label: "Wymeldowanie", value: "07:00 - 11:00" },
      items: [
        {
          title: "Zwierzęta mile widziane",
          text: "Bez dodatkowych opłat - psy i koty czują się tu jak w domu.",
        },
        {
          title: "Całkowity zakaz palenia",
          text: "Stary dom, drewniane podłogi i kafle - szanujmy to, co przetrwało sto lat.",
        },
        {
          title: "Bez imprez",
          text: "To miejsce do odpoczynku, nie do hucznych spotkań. Cisza jest tu luksusem.",
        },
        {
          title: "Dzieci w każdym wieku",
          text: "Bez ograniczeń - łóżeczko dostępne na życzenie, bezpłatnie.",
        },
      ],
    },
    faq: {
      eyebrow: "Najczęstsze pytania",
      title: "Wszystko, co warto wiedzieć przed przyjazdem",
      lead: "Krótkie odpowiedzi na pytania, które goście zadają najczęściej.",
      items: [
        {
          q: "Ile osób mieści Ceglany Domek?",
          a: "Domek wygodnie pomieści 6-8 osób. Mamy 3 osobne sypialnie z podwójnymi łóżkami oraz otwarte poddasze z dwoma materacami futon, na których w razie potrzeby śpią kolejne dwie osoby. Dostępne jest też drewniane łóżeczko dziecięce na życzenie.",
        },
        {
          q: "Czy mogę przyjechać z psem lub kotem?",
          a: "Tak, zwierzęta są mile widziane bez dodatkowych opłat. Akceptujemy duże, średnie i małe psy oraz koty. Uwaga: posesja nie jest ogrodzona od strony lasu, więc trzeba mieć oko na pieska.",
        },
        {
          q: "Czy w domku jest zasięg telefoniczny?",
          a: "W samym domku nie ma zasięgu GSM - traktujemy to jako jeden z atutów (detoks cyfrowy!). Wystarczy wspiąć się na pobliską górkę, by złapać sygnał. Wi-Fi w domu działa średnio, więc na pilne maile sobie poradzicie.",
        },
        {
          q: "Jak daleko jest do jeziora?",
          a: "Najbliższe czyste jezioro znajduje się około 1,5 km od domku - to spacerek przez las. Woda ma pierwszą klasę czystości. Można na miejscu wypożyczyć rower wodny lub kajak. W Gryżyńskim Parku Krajobrazowym jest łącznie 11 polodowcowych jezior.",
        },
        {
          q: "Czy domek jest dostępny przez cały rok?",
          a: "Tak, domek jest dostępny we wszystkich porach roku. Każdy sezon ma swój urok - wiosną kwitnące ogrody i dębowe aleje, latem kąpiele w jeziorze, jesienią grzybobranie i rykowisko jeleni, zimą piec kaflowy i kominek. Całość ogrzewana centralnie.",
        },
        {
          q: "Czy w okolicy są sklepy i restauracje?",
          a: "W samej Gryżynie nie ma sklepu, ale w pobliskich miejscowościach zrobicie zakupy. W okolicy jest też kilka dobrych restauracji oraz Winnica pod Lubuskim Słońcem (9 km). Sąsiedzi chętnie przygotują też posiłki z lokalnych produktów.",
        },
        {
          q: "Czy są dostępne rowery?",
          a: "Tak, na miejscu mamy rowery do dyspozycji gości. Okolica jest stworzona pod wycieczki rowerowe - dębowe aleje, leśne ścieżki, malownicze trasy wzdłuż jezior i potoku Gryżynki.",
        },
        {
          q: "Kiedy najlepiej przyjechać na rykowisko jeleni?",
          a: "Sezon rykowiska to wrzesień i pierwsza połowa października. Wystarczy nocą wyjść na ganek domku, by usłyszeć ryczące jelenie. 6 km dalej, na Dobrosułowskich Łąkach, znajduje się największe rykowisko w Europie.",
        },
        {
          q: "Jakie są zasady dotyczące palenia i imprez?",
          a: "Całkowity zakaz palenia w domku - to stary dom z drewnianymi podłogami i kaflami. Organizacja imprez i głośnych przyjęć jest również zabroniona. To miejsce do odpoczynku w ciszy.",
        },
        {
          q: "O której można się zameldować i wymeldować?",
          a: "Zameldowanie od 16:00 do 23:30, wymeldowanie od 07:00 do 11:00. Prosimy o wcześniejsze poinformowanie nas o planowanej godzinie przyjazdu.",
        },
      ],
    },
    contact: {
      eyebrow: "Kontakt i rezerwacja",
      title: "Zapraszamy do Gryżyny",
      lead: "Najszybciej zarezerwujesz pobyt przez Slowhop. Możesz też zadzwonić - odpowiadamy w języku polskim i angielskim.",
      addressLabel: "Adres",
      phoneLabel: "Telefon",
      bookLabel: "Rezerwacja",
      hostLabel: "Gospodarz",
      languagesLabel: "Języki",
      languages: "polski, angielski",
      directions: "Pokaż dojazd",
    },
    footer: {
      tagline: "Stuletni ceglany dom z duszą",
      rights: "Wszystkie prawa zastrzeżone.",
      madeWith: "Zaprojektowane z miłością do starych domów.",
    },
    common: {
      readMore: "Czytaj więcej",
      switchLang: "EN",
    },
  },
  en: {
    meta: {
      title: "Brick Cottage in Gryżyna - a hundred-year-old home in a nature park",
      description:
        "A restored, hundred-year-old brick cottage for 6-8 guests in the heart of Gryżyna Landscape Park. Forests, lakes, oak alleys, silence and digital detox.",
      ogAlt: "Brick Cottage in Gryżyna",
    },
    nav: {
      about: "The house",
      surroundings: "Surroundings",
      amenities: "Amenities",
      gallery: "Gallery",
      reviews: "Reviews",
      rules: "House rules",
      faq: "FAQ",
      history: "History",
      contact: "Contact",
      book: "Book now",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      eyebrow: "Gryżyna Landscape Park",
      title: "Slow down.\nReturn to nature.",
      subtitle:
        "A hundred-year-old brick cottage with a soul - among forests, lakes and oak alleys. A place to do everything. Or nothing.",
      cta: "Book your stay",
      ctaSecondary: "Explore the cottage",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "The heart of the house",
      title: "A century-old home, restored by our own hands",
      lead:
        "The Brick Cottage stood empty for over a decade. Today its hundred-year-old heart beats strong - we renovated it with love for old houses, keeping every floorboard and every tile in the stove.",
      paragraphs: [
        "It comfortably hosts 6-8 guests in three separate bedrooms with wide beds and comfortable mattresses. The attic offers an open space with two futon mattresses where additional guests can sleep.",
        "The character comes from the preserved tiled stoves (though central heating runs throughout) and a fully equipped kitchen on a glazed veranda with a panoramic view of old oak trees.",
        "Two bathrooms, a wooden baby cot, bed linen, towels, washing machine and iron. Everything you need to stay a little longer.",
      ],
      stats: [
        { value: "6-8", label: "guests" },
        { value: "3", label: "bedrooms" },
        { value: "2", label: "bathrooms" },
        { value: "160 m²", label: "of space" },
      ],
    },
    surroundings: {
      eyebrow: "Pastoral surroundings",
      title: "In the heart of Poland's smallest landscape park",
      lead:
        "We are lucky that the Brick Cottage sits on the edge of the village, in the heart of Gryżyna Landscape Park - considered one of the most beautiful in Poland.",
      features: [
        {
          title: "11 post-glacial lakes",
          text: "Clean, deep, full of fish. The nearest is about 1.5 km from the house. First-class water quality. Pedal boats and kayaks available nearby.",
        },
        {
          title: "Two-hundred-year-old oak alleys",
          text: "In 1840, 16,000 oaks were planted along village roads. Today they are legally protected - and protected by us, the residents.",
        },
        {
          title: "Digital detox",
          text: "No mobile signal at the cottage. Walk up the nearby hill to catch it. Or don't. The silence and beech ravines will keep you company.",
        },
        {
          title: "The deer rut",
          text: "Step onto the porch at night to hear the deer roar. Six kilometres away - Dobrosułów Meadows, the largest rutting ground in Europe.",
        },
      ],
    },
    amenities: {
      eyebrow: "What you'll find",
      title: "Everything you need - and nothing you don't",
      groups: [
        {
          title: "Home & comfort",
          items: [
            "Fully equipped kitchen",
            "Dishwasher, oven, coffee maker",
            "Washing machine and dryer",
            "Old tiled stoves & fireplace",
            "Bed linen and towels",
            "Mid-speed Wi-Fi",
          ],
        },
        {
          title: "For families",
          items: [
            "Baby cot available",
            "Board games and puzzles",
            "A small library of books",
            "Children's books, DVDs, music",
            "Family rooms",
            "Safe, quiet surroundings",
          ],
        },
        {
          title: "Outdoors",
          items: [
            "Garden with vegetable beds",
            "Sunny terrace and garden furniture",
            "Picnic area",
            "Free private parking",
            "Bikes available on-site",
            "Walking, cycling, kayaking routes",
          ],
        },
        {
          title: "Pets & house rules",
          items: [
            "Dogs and cats are welcome",
            "No additional fees",
            "Note: the property is not fenced from the forest side",
            "Non-smoking rooms",
            "No parties allowed",
            "Languages: Polish, English",
          ],
        },
      ],
    },
    gallery: {
      eyebrow: "Gallery",
      title: "See it for yourself",
      lead: "Every photo taken on-site. No filters, no embellishments.",
    },
    reviews: {
      eyebrow: "Guest reviews",
      title: "A place that draws you in",
      lead: "Rated 5.0 from 26 reviews on Slowhop and 9.6 on Booking. Here's what guests say:",
      navPrev: "Previous review",
      navNext: "Next review",
      items: [
        {
          text:
            "A wonderful house and a place to truly rest. We've been here again, and certainly not for the last time.",
          author: "Paulina",
          date: "December 2025",
          source: "Slowhop",
        },
        {
          text:
            "An exceptional place, charming surroundings, plenty of places to visit. The cottage is very comfortable. We had a wonderful time. Many thanks to the hosts - especially the host's mother for the warm welcome. We hope to come back one day.",
          author: "Ludmiła",
          date: "September 2025",
          source: "Slowhop",
        },
        {
          text:
            "This place is beautiful! A wonderful weekend - the place is so quiet and peaceful that we almost felt guilty disturbing it. Admiration for the owners for restoring the house and the atmosphere they've created. A dream place to cut off from the world, light the stove and read books from the library on the stairs.",
          author: "Agnieszka",
          date: "April 2025",
          source: "Slowhop",
        },
        {
          text:
            "Absolutely wonderful place! A place that pulls you in and becomes addictive. You can read books in the garden (no need to bring your own - the owners have a beautifully stocked library), swim in crystal-clear water, walk through the forest discovering new paths - the oak alleys are incredible!",
          author: "Katarzyna",
          date: "August 2024",
          source: "Slowhop",
        },
        {
          text:
            "The Brick Cottage in Gryżyna is a place to rest, calm down and recharge. With friends we had the pleasure of staying for a few days, enjoying the lack of mobile signal. Around Gryżyna there are beautiful forests we explored while walking our dog - he didn't want to go home either, because he fell in love with the garden. We also loved the cosy corner upstairs with films and books - a perfect spot to relax.",
          author: "Anna",
          date: "March 2024",
          source: "Slowhop",
        },
        {
          text:
            "I've been visiting this place for 3 years now, in different seasons. Every time I leave with a big smile on my face. A very charming spot with a unique atmosphere. Silence, peace, nature. Love it!",
          author: "Marcin",
          date: "June 2023",
          source: "Slowhop",
        },
        {
          text:
            "A fantastic, atmospheric, comfortable cottage - not as small as it might seem. The veranda is perfect for card and board games. The kitchen handled risottos and apple crumble. To top it off, a cinema room (DVD player + a collection of films). And the village like from a fairy-tale - in the forest, close to the lake and ravines with beaver dams. Silence, peace and total chill.",
          author: "Olena",
          date: "February 2023",
          source: "Slowhop",
        },
        {
          text:
            "Six years ago Google Maps led me through Gryżyna. I drove slowly because the views themselves persuaded me to slow down. And then it appeared - the Brick Cottage, which enchanted me. Six years later I found it on Slowhop and knew I had to be there. With a group of friends we spent a wonderful autumn weekend. There was time for long conversations at the table overlooking the garden, time for walks and a total reset. The lack of signal really helped us!",
          author: "Ola",
          date: "October 2022",
          source: "Slowhop",
        },
        {
          text:
            "The owners of the Brick Cottage have preserved the pre-war character of the house while caring for the comfort of guests, adapting the attic and arranging beautiful interiors there. The ground floor enchants with antique furniture that evokes admiration and respect for bygone times. Silence and peace, a starry sky and a squirrel rustling in the hazel tree, no mobile signal at all - but excellent Wi-Fi.",
          author: "Marzena",
          date: "August 2020",
          source: "Slowhop",
        },
      ],
    },
    rules: {
      eyebrow: "House rules",
      title: "A few things to know",
      checkIn: { label: "Check-in", value: "16:00 - 23:30" },
      checkOut: { label: "Check-out", value: "07:00 - 11:00" },
      items: [
        {
          title: "Pets welcome",
          text: "No additional fees - dogs and cats feel at home here.",
        },
        {
          title: "Strictly non-smoking",
          text: "Old house, wooden floors and tiles - let's respect what has survived a century.",
        },
        {
          title: "No parties",
          text: "This is a place to rest, not to host loud gatherings. Silence is the real luxury.",
        },
        {
          title: "Children of all ages",
          text: "No restrictions - baby cot available on request, free of charge.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked",
      title: "Everything worth knowing before you arrive",
      lead: "Quick answers to the questions our guests ask most often.",
      items: [
        {
          q: "How many people can stay at the Brick Cottage?",
          a: "The cottage comfortably hosts 6-8 guests. There are 3 separate bedrooms with double beds and an open attic with two futon mattresses where up to two more people can sleep. A wooden baby cot is available on request.",
        },
        {
          q: "Can I bring my dog or cat?",
          a: "Yes, pets are welcome at no extra charge. We accept large, medium and small dogs as well as cats. Note: the property is not fenced from the forest side, so keep an eye on your dog.",
        },
        {
          q: "Is there mobile signal at the cottage?",
          a: "There is no GSM signal inside the cottage - we treat this as one of its assets (digital detox!). Walk up the nearby hill to catch a signal. The Wi-Fi at the house is mid-speed, enough for urgent emails.",
        },
        {
          q: "How far is the nearest lake?",
          a: "The nearest clean lake is about 1.5 km from the cottage - a short walk through the forest. The water has first-class purity. Pedal boats and kayaks can be rented on-site. Gryżyna Landscape Park has 11 post-glacial lakes in total.",
        },
        {
          q: "Is the cottage available year-round?",
          a: "Yes, the cottage is available in every season. Each has its own charm - blooming gardens and oak alleys in spring, lake swims in summer, mushroom picking and the deer rut in autumn, the tiled stove and fireplace in winter. The whole house has central heating.",
        },
        {
          q: "Are there shops and restaurants nearby?",
          a: "There is no shop in Gryżyna itself, but you can do your shopping in nearby towns. There are several good restaurants in the area, plus the Winnica pod Lubuskim Słońcem winery (9 km). Neighbours can also prepare meals from local produce.",
        },
        {
          q: "Are bikes available?",
          a: "Yes, we have bikes on-site for our guests. The area is made for cycling - oak alleys, forest paths, scenic trails along lakes and the Gryżynka stream.",
        },
        {
          q: "When is the best time for the deer rut?",
          a: "The rutting season runs through September and the first half of October. Just step onto the porch at night to hear the deer roar. Six kilometres away, at Dobrosułów Meadows, you'll find the largest rutting ground in Europe.",
        },
        {
          q: "What are the rules on smoking and parties?",
          a: "Smoking is strictly forbidden inside the cottage - this is an old house with wooden floors and tiles. Parties and loud gatherings are also not allowed. This is a place for quiet rest.",
        },
        {
          q: "What are the check-in and check-out times?",
          a: "Check-in from 16:00 to 23:30, check-out from 07:00 to 11:00. Please let us know your planned arrival time in advance.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact & booking",
      title: "Welcome to Gryżyna",
      lead: "The fastest way to book is through Slowhop. You can also call - we reply in Polish and English.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      bookLabel: "Booking",
      hostLabel: "Host",
      languagesLabel: "Languages",
      languages: "Polish, English",
      directions: "Get directions",
    },
    footer: {
      tagline: "A hundred-year-old brick cottage with a soul",
      rights: "All rights reserved.",
      madeWith: "Designed with love for old houses.",
    },
    common: {
      readMore: "Read more",
      switchLang: "PL",
    },
  },
} as const;

export type Dictionary = (typeof translations)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return translations[locale];
}
