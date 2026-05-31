import type { Locale } from "./translations";

export type HistorySection = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
};

type HistoryContent = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    quote: string;
    quoteAuthor: string;
  };
  intro: {
    text: string;
  };
  sections: HistorySection[];
  back: string;
  source: string;
  archive: {
    eyebrow: string;
    title: string;
    lead: string;
    sourceNote: string;
    readMore: string;
    readLess: string;
  };
  archiveGallery: {
    eyebrow: string;
    title: string;
    lead: string;
    images: { src: string; caption: string }[];
  };
};

export const historyContent: Record<Locale, HistoryContent> = {
  pl: {
    meta: {
      title: "Historia Gryżyny - dawne Griesel, pałac Hohenzollernów, dębowe aleje",
      description:
        "Historia wsi Gryżyna (dawne Griesel) - od średniowiecza, przez pałac myśliwski Hohenzollernów, 16 000 dębów Krausego, młyny i lotnisko, po dziś.",
    },
    hero: {
      eyebrow: "Historia miejsca",
      title: "Historia\nGryżyny",
      subtitle:
        "Mała wioska w sercu Gryżyńskiego Parku Krajobrazowego, dawne Griesel, do której prowadzą wszystkie dębowe aleje świata.",
      quote:
        "Bo tu powietrze jak jedwab, krystaliczna woda, wiekowe bory, dziewicza przyroda. Tu odkryjesz na nowo, co odkryli starzy.",
      quoteAuthor: "Wiersz nieznanego autora, XIX w.",
    },
    intro: {
      text: "Gryżyna jest jedną z najstarszych wsi Ziemi Lubuskiej. Przed 1945 rokiem nosiła nazwę Griesel i należała do dóbr Hohenzollernów - tej samej dynastii, która rządziła Prusami. Pałac myśliwski, do którego przyjeżdżały koronowane głowy Europy, dębowe aleje sadzone w XIX wieku, młyny nad potokiem Gryżynka i lotnisko z czasów drugiej wojny - wszystko to ślady, których szukamy do dziś.",
    },
    sections: [
      {
        eyebrow: "1840 rok",
        title: "16 000 dębów Krausego",
        paragraphs: [
          "W 1840 roku Królewski Radca Rządowy Krause, ówczesny właściciel gryżyńskiego dworu, kazał posadzić wzdłuż wiejskich dróg szesnaście tysięcy dębów. Dziś te drzewa mają niemal dwieście lat, są pod ochroną prawną i pod naszą - mieszkańców.",
          "Bez dębowych alei ciągnących się od wsi do wsi i do jeziora Gryżyna nie byłaby sobą. To one nadają tej okolicy charakter rozpoznawalny z odległości, magiczny zwłaszcza jesienią.",
        ],
        image: "/images/historic/historic-road-palace-1910.webp",
        imageAlt: "Wiejska droga w Griesel, widok na pałac myśliwski, ok. 1910 r.",
      },
      {
        eyebrow: "Lata 1920-1939",
        title: "Margarete i pałac Hohenzollernów",
        paragraphs: [
          "Ostatnimi przedwojennymi mieszkańcami pałacu myśliwskiego była rodzina Friedricha von Hohenzollern i jego żony Margarete - córki Fryderyka Augusta II Saskiego, ostatniego króla Saksonii. Margarete przyjeżdżała do Griesel z mężem i siedmiorgiem dzieci od końca lat dwudziestych aż do wybuchu wojny.",
          "Jej matka, Luise von Sachsen, była postacią owianą skandalem - uciekła od króla z nauczycielem swoich dzieci, wywołując największy skandal w historii saskiego dworu. Margarete miała wtedy zaledwie dwa lata. Mimo dramatów rodzinnych Griesel pozostawał miejscem szczęśliwych wakacji.",
          "Po wojnie pałac został opuszczony. Dziś po dawnej rezydencji zostały ruiny - świadectwa świata, którego już nie ma.",
        ],
        image: "/images/historic/historic-palace.webp",
        imageAlt: "Pałac myśliwski w Griesel (Jagdschloß) - archiwalna pocztówka",
      },
      {
        eyebrow: "Vordermühle",
        title: "Pierwszy Młyn",
        paragraphs: [
          "Vordermühle - czyli Pierwszy Młyn - stał nad potokiem Gryżynką od kilku stuleci. W okolicy działało kilka młynów wodnych, ale ten miał swoją tragiczną historię. Powojenny nauczyciel Kazimierz Berus zapisał ją w opowiadaniu \"Kamienie mówią\", o zabitym młynarzu, którego pamięć żyje w gryżyńskich kamieniach do dziś.",
          "Po młynach pozostały ruiny i fundamenty, które można zobaczyć podczas wędrówki wzdłuż potoku. To jedne z najbardziej klimatycznych miejsc w okolicy.",
        ],
        image: "/images/postcard-griesel.webp",
        imageAlt: "Pocztówka \"Gruß aus Griesel\" - przedwojenne widoki Gryżyny z kościołem, młynem i pałacem",
      },
      {
        eyebrow: "II wojna światowa",
        title: "Lotnisko Griesel",
        paragraphs: [
          "W okolicach Gryżyny znajdowało się w czasie wojny niemieckie lotnisko polowe Griesel. Po wojnie ślady infrastruktury zostały rozebrane, ale opowieści o tym miejscu zachowali starsi mieszkańcy.",
          "Niedaleko Gryżyny rozciąga się też Międzyrzecki Rejon Umocniony - zbudowany przez Trzecią Rzeszę najbardziej zaawansowany technicznie niemiecki system fortyfikacji, jeden z najciekawszych obiektów tego typu na świecie.",
        ],
        image: "/images/historic/historic-blockhaus.webp",
        imageAlt: "Blockhaus am Kalkteich - dawna gospoda nad jeziorem w Grieseltal",
      },
      {
        eyebrow: "Po 1945 roku",
        title: "Nowi mieszkańcy, stara wieś",
        paragraphs: [
          "Po wojnie do Gryżyny przybyli osadnicy - z Wileńszczyzny, z centralnej Polski, z Kresów. Wieś zachowała swój układ architektoniczny: te same drogi, te same ceglane domy z czerwonej cegły, ten sam rytm pór roku. I ani jednego betonowego płotu.",
          "Działała szkoła (klasa z 1947 i 1958 roku do dziś żyje na zdjęciach), bar na Ośrodku, sklep. Dziś Stowarzyszenie Przyjaciół Gryżyny pielęgnuje pamięć przedwojennych mieszkańców i odbudowuje wspólne miejsca - jak stara fontanna pałacowa odsłonięta kilka lat temu.",
        ],
        image: "/images/2.webp",
        imageAlt: "Ceglany Domek w Gryżynie z ogrodem",
      },
      {
        eyebrow: "Dziś",
        title: "Park Krajobrazowy i jego mieszkańcy",
        paragraphs: [
          "Od 1996 roku okolica jest chroniona jako Gryżyński Park Krajobrazowy - najmniejszy w województwie lubuskim, ale uznawany za jeden z najpiękniejszych w Polsce. Jedenaście polodowcowych jezior, bukowe wąwozy, pstrągowa dolina potoku Gryżynki i dwustuletnie dębowe aleje.",
          "Mieszkają tu zagrożone w skali europejskiej ptaki: bielik, bocian czarny, kania rdzawa, sokół wędrowny i zimorodek. W dolinie potoku od 2016 roku pracują bobry, budując własne, naturalne tamy.",
          "Jesienią rozlega się rykowisko jeleni - słychać je z ganków domków w wiosce. Sześć kilometrów dalej, na Dobrosułowskich Łąkach, znajduje się największe rykowisko w Europie.",
        ],
        image: "/images/19.webp",
        imageAlt: "Czyste polodowcowe jezioro w Parku Krajobrazowym",
      },
    ],
    back: "Wróć na stronę główną",
    source:
      "Opracowano na podstawie archiwów Stowarzyszenia Przyjaciół Gryżyny (2013-2018) oraz wspomnień mieszkańców.",
    archive: {
      eyebrow: "Archiwum",
      title: "Głosy mieszkańców",
      lead:
        "Wpisy z dawnego bloga Stowarzyszenia Przyjaciół Gryżyny - wspomnienia, opowieści, listy mieszkańców i opisy znikających już miejsc. Każdy tekst zachowany w oryginale, podpisany przez autora.",
      sourceNote: "Wpis z archiwum",
      readMore: "Rozwiń",
      readLess: "Zwiń",
    },
    archiveGallery: {
      eyebrow: "Pocztówki i fotografie",
      title: "Griesel na archiwalnych zdjęciach",
      lead:
        "Ocalałe pocztówki i fotografie sprzed 1945 roku. Pałac myśliwski, młyn nad Gryżynką, blockhaus przy jeziorze i panorama wsi z czasów, kiedy Gryżyna nazywała się Griesel.",
      images: [
        {
          src: "/images/historic/historic-1922-postcard.webp",
          caption: "Pocztówka \"Gruss aus Griesel\" z 1922 r. - widok ogólny, willa Paulusa, pałac myśliwski i kościół",
        },
        {
          src: "/images/historic/historic-village-color.webp",
          caption: "Kolorowana panorama Griesel z kościołem, początek XX w.",
        },
        {
          src: "/images/historic/historic-palace-interior.webp",
          caption: "Wnętrze pałacu myśliwskiego - sala jadalna z trofeami",
        },
        {
          src: "/images/historic/historic-mill-vordermuhle.webp",
          caption: "Vordermühle - Pierwszy Młyn w dolinie Gryżynki",
        },
        {
          src: "/images/historic/historic-villa-rupnow.webp",
          caption: "Villa Rupnow widziana od strony łąk dworskich",
        },
        {
          src: "/images/historic/historic-arian-pond.webp",
          caption: "Staw Ariański - pocztówka z lat 30. XX w.",
        },
        {
          src: "/images/historic/historic-lakes-kalkteich.webp",
          caption: "Wielki i Mały Staw Kalkteich w dolinie Gryżyńskiej",
        },
      ],
    },
  },
  en: {
    meta: {
      title: "History of Gryżyna - former Griesel, Hohenzollern palace, oak alleys",
      description:
        "History of Gryżyna village (formerly Griesel) - from the Middle Ages through the Hohenzollern hunting palace, Krause's 16,000 oaks, mills and airfield, to today.",
    },
    hero: {
      eyebrow: "History of the place",
      title: "History of\nGryżyna",
      subtitle:
        "A small village in the heart of Gryżyna Landscape Park, formerly Griesel, to which all oak alleys of the world lead.",
      quote:
        "For here the air is like silk, the water crystal-clear, the forests ancient, the nature untouched. Here you will rediscover what the old ones discovered.",
      quoteAuthor: "Anonymous poem, 19th century",
    },
    intro: {
      text: "Gryżyna is one of the oldest villages in the Lubuskie Land. Before 1945 it was called Griesel and belonged to the Hohenzollern estates - the same dynasty that ruled Prussia. The hunting palace, where crowned heads of Europe stayed, oak alleys planted in the 19th century, mills on the Gryżynka stream and an airfield from the Second World War - all traces we still search for today.",
    },
    sections: [
      {
        eyebrow: "Year 1840",
        title: "Krause's 16,000 oaks",
        paragraphs: [
          "In 1840 the Royal Government Councillor Krause, then owner of the Gryżyna manor, ordered sixteen thousand oaks to be planted along the village roads. Today these trees are nearly two hundred years old, legally protected and protected by us, the residents.",
          "Without the oak alleys stretching from village to village and to the lake, Gryżyna would not be itself. They give this area a character recognisable from afar, magical especially in autumn.",
        ],
        image: "/images/historic/historic-road-palace-1910.webp",
        imageAlt: "Village road in Griesel with view of the hunting palace, c. 1910",
      },
      {
        eyebrow: "1920s-1939",
        title: "Margarete and the Hohenzollern palace",
        paragraphs: [
          "The last pre-war residents of the hunting palace were the family of Friedrich von Hohenzollern and his wife Margarete - daughter of Frederick Augustus II of Saxony, the last King of Saxony. Margarete visited Griesel with her husband and seven children from the late 1920s until the outbreak of war.",
          "Her mother, Luise von Sachsen, was a figure surrounded by scandal - she ran away from the king with her children's teacher, causing the greatest scandal in the history of the Saxon court. Margarete was only two years old at the time. Despite family dramas, Griesel remained a place of happy holidays.",
          "After the war the palace was abandoned. Today the ruins remain - testimonies to a world that is gone.",
        ],
        image: "/images/historic/historic-palace.webp",
        imageAlt: "Hunting palace in Griesel (Jagdschloß) - archive postcard",
      },
      {
        eyebrow: "Vordermühle",
        title: "The First Mill",
        paragraphs: [
          "Vordermühle - the First Mill - stood on the Gryżynka stream for several centuries. Several water mills operated in the area, but this one had its own tragic story. Post-war teacher Kazimierz Berus recorded it in his story \"Stones Speak\", about a murdered miller whose memory still lives in the stones of Gryżyna.",
          "Ruins and foundations remain of the mills, visible when walking along the stream. These are some of the most atmospheric places in the area.",
        ],
        image: "/images/postcard-griesel.webp",
        imageAlt: "\"Gruß aus Griesel\" postcard - pre-war views of Gryżyna with the church, mill and palace",
      },
      {
        eyebrow: "World War II",
        title: "The Griesel airfield",
        paragraphs: [
          "Near Gryżyna there was a German field airfield called Griesel during the war. After the war the infrastructure was dismantled, but older residents have preserved stories about the place.",
          "Not far from Gryżyna stretches the Międzyrzecz Fortified Region - the most technologically advanced German fortification system built by the Third Reich, one of the most interesting facilities of this type in the world.",
        ],
        image: "/images/historic/historic-blockhaus.webp",
        imageAlt: "Blockhaus am Kalkteich - the former lakeside inn in Grieseltal",
      },
      {
        eyebrow: "After 1945",
        title: "New residents, old village",
        paragraphs: [
          "After the war settlers came to Gryżyna - from the Vilnius region, from central Poland, from the eastern borderlands. The village kept its architectural layout: the same roads, the same red brick houses, the same rhythm of the seasons. And not a single concrete fence.",
          "There was a school (classes from 1947 and 1958 still live on in photographs), a bar at the resort, a shop. Today the Friends of Gryżyna Association preserves the memory of pre-war residents and rebuilds common places - like the old palace fountain uncovered a few years ago.",
        ],
        image: "/images/2.webp",
        imageAlt: "Brick Cottage in Gryżyna with garden",
      },
      {
        eyebrow: "Today",
        title: "The Landscape Park and its inhabitants",
        paragraphs: [
          "Since 1996 the area has been protected as Gryżyna Landscape Park - the smallest in Lubuskie Voivodeship but considered one of the most beautiful in Poland. Eleven post-glacial lakes, beech ravines, the trout valley of the Gryżynka stream and two-hundred-year-old oak alleys.",
          "Bird species endangered on a European scale nest here: white-tailed eagle, black stork, red kite, peregrine falcon and kingfisher. Since 2016 beavers have been working in the stream valley, building their own natural dams.",
          "In autumn the deer rut echoes through the woods - audible from the porches of cottages in the village. Six kilometres away, at Dobrosułów Meadows, lies the largest rutting ground in Europe.",
        ],
        image: "/images/19.webp",
        imageAlt: "Clean post-glacial lake in the Landscape Park",
      },
    ],
    back: "Back to homepage",
    source:
      "Based on the archives of the Friends of Gryżyna Association (2013-2018) and residents' memoirs.",
    archive: {
      eyebrow: "Archive",
      title: "Voices of the residents",
      lead:
        "Entries from the former blog of the Friends of Gryżyna Association - memoirs, stories, letters from residents and descriptions of places that no longer exist. Each text preserved in the original Polish, signed by its author.",
      sourceNote: "Archive entry",
      readMore: "Read more",
      readLess: "Read less",
    },
    archiveGallery: {
      eyebrow: "Postcards and photographs",
      title: "Griesel in archive photos",
      lead:
        "Surviving postcards and photographs from before 1945. The hunting palace, the mill on the Gryżynka, the blockhouse by the lake and a panorama of the village from the times when Gryżyna was still called Griesel.",
      images: [
        {
          src: "/images/historic/historic-1922-postcard.webp",
          caption: "\"Gruss aus Griesel\" postcard from 1922 - general view, Paula's Villa, hunting palace and church",
        },
        {
          src: "/images/historic/historic-village-color.webp",
          caption: "Coloured panorama of Griesel with the church, early 20th century",
        },
        {
          src: "/images/historic/historic-palace-interior.webp",
          caption: "Interior of the hunting palace - dining room with trophies",
        },
        {
          src: "/images/historic/historic-mill-vordermuhle.webp",
          caption: "Vordermühle - the First Mill in the Gryżynka valley",
        },
        {
          src: "/images/historic/historic-villa-rupnow.webp",
          caption: "Villa Rupnow seen from the manor meadows",
        },
        {
          src: "/images/historic/historic-arian-pond.webp",
          caption: "The Arian Pond - postcard from the 1930s",
        },
        {
          src: "/images/historic/historic-lakes-kalkteich.webp",
          caption: "Great and Small Kalkteich ponds in the Gryżyna Valley",
        },
      ],
    },
  },
};
