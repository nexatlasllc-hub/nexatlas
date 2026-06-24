import type {
  Country,
  Destination,
  Tour,
  Testimonial,
  Post,
} from './types';

// ─────────────────────────────────────────────────────────────────────────
// REAL seed content for Nexatlas.uz. The site renders entirely from this
// data until a Sanity project is connected (see src/lib/content.ts), at which
// point the same shapes are served from the CMS. No placeholders anywhere.
// ─────────────────────────────────────────────────────────────────────────

// Unsplash CDN photography (auto-optimized). SmartImage degrades gracefully
// to a branded treatment if a photo is ever unavailable.
const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1740&q=80`;

export const countries: Country[] = [
  {
    slug: 'uzbekistan',
    name: { en: 'Uzbekistan', ru: 'Узбекистан', uz: "O'zbekiston" },
    status: 'live',
    tagline: {
      en: 'The beating heart of the Silk Road',
      ru: 'Бьющееся сердце Шёлкового пути',
      uz: "Ipak yo'lining tirik yuragi",
    },
  },
  { slug: 'kazakhstan', name: { en: 'Kazakhstan', ru: 'Казахстан', uz: "Qozog'iston" }, status: 'coming-soon' },
  { slug: 'kyrgyzstan', name: { en: 'Kyrgyzstan', ru: 'Кыргызстан', uz: "Qirg'iziston" }, status: 'coming-soon' },
  { slug: 'tajikistan', name: { en: 'Tajikistan', ru: 'Таджикистан', uz: 'Tojikiston' }, status: 'coming-soon' },
  { slug: 'turkmenistan', name: { en: 'Turkmenistan', ru: 'Туркменистан', uz: 'Turkmaniston' }, status: 'coming-soon' },
  { slug: 'azerbaijan', name: { en: 'Azerbaijan', ru: 'Азербайджан', uz: 'Ozarbayjon' }, status: 'coming-soon' },
  { slug: 'georgia', name: { en: 'Georgia', ru: 'Грузия', uz: 'Gruziya' }, status: 'coming-soon' },
];

export const destinations: Destination[] = [
  {
    slug: 'samarkand',
    countrySlug: 'uzbekistan',
    name: { en: 'Samarkand', ru: 'Самарканд', uz: 'Samarqand' },
    tagline: {
      en: 'The crossroads of cultures',
      ru: 'Перекрёсток культур',
      uz: 'Madaniyatlar chorrahasi',
    },
    excerpt: {
      en: 'Home to the dazzling Registan and the resting place of Timur, Samarkand is the most legendary city on the entire Silk Road.',
      ru: 'Сердце Шёлкового пути: ослепительный Регистан и усыпальница Тимура.',
      uz: "Ipak yo'lining eng afsonaviy shahri — ko'zni qamashtiruvchi Registon va Amir Temur maqbarasi.",
    },
    body: {
      en: 'For more than two and a half thousand years Samarkand has stood at the crossroads of civilizations, growing rich on the caravan trade between China and the Mediterranean. Under Amir Timur in the 14th century it became one of the most magnificent capitals on earth, and that golden age still glows from every tiled facade. The Registan — three colossal madrasahs facing a single square — is among the most breathtaking architectural ensembles humanity has ever built. Add the soaring Bibi-Khanym Mosque, the ribbon of turquoise mausoleums at Shah-i-Zinda, and Timur’s own tomb at Gur-e-Amir, and Samarkand becomes a city that genuinely rewards every minute you give it.',
      ru: 'Более двух с половиной тысяч лет Самарканд стоял на перекрёстке цивилизаций. При Амире Тимуре он стал одной из великолепнейших столиц мира, и это золотое сияние видно в каждом изразце — от ансамбля Регистан до мавзолеев Шахи-Зинда и усыпальницы Гур-Эмир.',
      uz: "Ikki yarim ming yildan ortiq Samarqand sivilizatsiyalar chorrahasida turgan. Amir Temur davrida u dunyoning eng go'zal poytaxtlaridan biriga aylandi — Registon ansamblidan Shohi Zinda maqbaralarigacha har bir koshinda o'sha oltin davr porlaydi.",
    },
    image: '/images/samarkand.jpg',
    highlights: [
      { en: 'Registan Square', ru: 'Площадь Регистан', uz: 'Registon maydoni' },
      { en: 'Shah-i-Zinda necropolis', ru: 'Некрополь Шахи-Зинда', uz: 'Shohi Zinda' },
      { en: 'Gur-e-Amir Mausoleum', ru: 'Мавзолей Гур-Эмир', uz: 'Go‘ri Amir maqbarasi' },
      { en: 'Bibi-Khanym Mosque', ru: 'Мечеть Биби-Ханым', uz: 'Bibixonim masjidi' },
    ],
    bestTime: { en: 'April–June & September–October', ru: 'Апрель–июнь и сентябрь–октябрь', uz: 'Aprel–iyun va sentyabr–oktyabr' },
    featured: true,
  },
  {
    slug: 'bukhara',
    countrySlug: 'uzbekistan',
    name: { en: 'Bukhara', ru: 'Бухара', uz: 'Buxoro' },
    tagline: { en: 'A living medieval city', ru: 'Живой средневековый город', uz: "Tirik o'rta asr shahri" },
    excerpt: {
      en: 'With over 140 protected monuments in its old town, Bukhara is the most complete example of a medieval city in Central Asia.',
      ru: 'Более 140 памятников старого города делают Бухару самым целостным средневековым городом Центральной Азии.',
      uz: "Eski shaharda 140 dan ortiq yodgorlik bilan Buxoro Markaziy Osiyodagi eng yaxlit o'rta asr shahri.",
    },
    body: {
      en: 'Bukhara wears its history lightly. Where Samarkand overwhelms, Bukhara invites you to wander — through domed trading bazaars where artisans still hammer copper, past the serene Lyab-i Hauz pool shaded by ancient mulberry trees, beneath the Kalon Minaret that so impressed Genghis Khan he ordered it spared. For two thousand years this was a holy city of scholars and merchants, and its sandy-gold ensemble of mosques, madrasahs and caravanserais remains remarkably intact. Few places on earth let you walk so completely into the medieval world.',
      ru: 'Бухара носит свою историю легко. Купольные торговые базары, тенистый Ляби-Хауз, минарет Калян, который пощадил сам Чингисхан — две тысячи лет это был священный город учёных и купцов, и его песчано-золотой ансамбль сохранился почти нетронутым.',
      uz: "Buxoro tarixini yengil ko'taradi. Gumbazli savdo bozorlari, soya beruvchi Labi Hovuz, Chingizxonni ham hayratga solgan Kalon minorasi — ikki ming yil davomida bu olimlar va savdogarlarning muqaddas shahri bo'lgan.",
    },
    image: '/images/bukhara.jpg',
    highlights: [
      { en: 'Po-i-Kalon complex & minaret', ru: 'Комплекс Пои-Калян', uz: 'Poi Kalon majmuasi' },
      { en: 'Ark Fortress', ru: 'Крепость Арк', uz: 'Ark qal‘asi' },
      { en: 'Lyab-i Hauz', ru: 'Ляби-Хауз', uz: 'Labi Hovuz' },
      { en: 'Trading domes (Toki)', ru: 'Торговые купола (Токи)', uz: 'Savdo gumbazlari (Toqi)' },
    ],
    bestTime: { en: 'April–June & September–October', ru: 'Апрель–июнь и сентябрь–октябрь', uz: 'Aprel–iyun va sentyabr–oktyabr' },
    featured: true,
  },
  {
    slug: 'khiva',
    countrySlug: 'uzbekistan',
    name: { en: 'Khiva', ru: 'Хива', uz: 'Xiva' },
    tagline: { en: 'An open-air museum', ru: 'Музей под открытым небом', uz: 'Ochiq osmon ostidagi muzey' },
    excerpt: {
      en: 'The walled inner city of Itchan Kala feels frozen in time — a perfectly preserved oasis town at the edge of the Kyzylkum desert.',
      ru: 'Обнесённый стеной Ичан-Кала словно застыл во времени — идеально сохранившийся оазисный город у пустыни Кызылкум.',
      uz: "Devor bilan o'ralgan Ichan Qal'a vaqt ichida muzlab qolganga o'xshaydi — Qizilqum cheti­dagi mukammal saqlangan voha shahri.",
    },
    body: {
      en: 'Step through the western gate of Itchan Kala and the modern world disappears. Khiva’s inner city is a UNESCO-listed maze of minarets, madrasahs and merchant houses packed within mud-brick walls, all glowing amber at sunset. Climb the Islam Khoja minaret for rooftops stretching to the desert horizon, admire the unfinished turquoise stump of the Kalta Minor, and wander lanes once walked by slave-traders and khans. Compact enough to explore on foot yet endlessly photogenic, Khiva is the Silk Road at its most atmospheric.',
      ru: 'Пройдя западные ворота Ичан-Калы, вы покидаете современный мир. Это внесённый в список ЮНЕСКО лабиринт минаретов и медресе в глинобитных стенах, золотящихся на закате. Хива — самый атмосферный город Шёлкового пути.',
      uz: "Ichan Qal'aning g'arbiy darvozasidan o'tsangiz, zamonaviy dunyo g'oyib bo'ladi. YuNESKO ro'yxatidagi minoralar va madrasalar labirinti — Xiva Ipak yo'lining eng sehrli shahri.",
    },
    image: '/images/khiva.jpg',
    highlights: [
      { en: 'Itchan Kala (UNESCO)', ru: 'Ичан-Кала (ЮНЕСКО)', uz: 'Ichan Qal‘a (YuNESKO)' },
      { en: 'Kalta Minor minaret', ru: 'Минарет Кальта-Минор', uz: 'Kalta Minor minorasi' },
      { en: 'Islam Khoja complex', ru: 'Комплекс Ислам-Ходжа', uz: 'Islomxo‘ja majmuasi' },
      { en: 'Kunya Ark', ru: 'Куня-Арк', uz: 'Ko‘hna Ark' },
    ],
    bestTime: { en: 'April–May & September–October', ru: 'Апрель–май и сентябрь–октябрь', uz: 'Aprel–may va sentyabr–oktyabr' },
    featured: true,
  },
  {
    slug: 'tashkent',
    countrySlug: 'uzbekistan',
    name: { en: 'Tashkent', ru: 'Ташкент', uz: 'Toshkent' },
    tagline: { en: 'Where old meets new', ru: 'Где старое встречает новое', uz: 'Eski va yangi uchrashadigan joy' },
    excerpt: {
      en: 'Central Asia’s largest city blends Soviet grandeur, leafy boulevards, vibrant bazaars and a metro famed for its palatial stations.',
      ru: 'Крупнейший город Центральной Азии: советский размах, зелёные бульвары, шумные базары и дворцовое метро.',
      uz: "Markaziy Osiyoning eng katta shahri — sovet ko'lami, yashil xiyobonlar, jonli bozorlar va saroydek metro.",
    },
    body: {
      en: 'Most journeys begin in Tashkent, and it deserves more than a transit stop. The capital pairs the chaotic colour of Chorsu Bazaar and the old Hast Imam religious complex — home to one of the world’s oldest Qurans — with wide modern avenues, contemporary art, and one of the most beautiful metro systems ever built, each station a marble-and-mosaic gallery. It is the easiest landing point for international travelers and the natural gateway to the high-speed Afrosiyob train that whisks you to Samarkand in just over two hours.',
      ru: 'Большинство путешествий начинается в Ташкенте. Базар Чорсу, комплекс Хаст-Имам с одним из древнейших Коранов, дворцовое метро и широкие проспекты — и отсюда скоростной поезд «Афросиёб» домчит вас до Самарканда за два часа.',
      uz: "Aksariyat sayohatlar Toshkentdan boshlanadi. Chorsu bozori, dunyodagi eng qadimgi Qur'onlardan birini saqlovchi Hazrati Imom majmuasi va saroydek metro — bu yerdan «Afrosiyob» tezyurar poyezdi sizni ikki soatda Samarqandga olib boradi.",
    },
    image: '/images/tashkent-2.jpg',
    highlights: [
      { en: 'Chorsu Bazaar', ru: 'Базар Чорсу', uz: 'Chorsu bozori' },
      { en: 'Hast Imam complex', ru: 'Комплекс Хаст-Имам', uz: 'Hazrati Imom majmuasi' },
      { en: 'Tashkent Metro', ru: 'Ташкентское метро', uz: 'Toshkent metrosi' },
      { en: 'Amir Timur Square', ru: 'Площадь Амира Темура', uz: 'Amir Temur xiyoboni' },
    ],
    bestTime: { en: 'Year-round', ru: 'Круглый год', uz: 'Yil bo‘yi' },
    featured: false,
  },
  {
    slug: 'fergana-valley',
    countrySlug: 'uzbekistan',
    name: { en: 'Fergana Valley', ru: 'Ферганская долина', uz: "Farg'ona vodiysi" },
    tagline: { en: 'The cradle of craft', ru: 'Колыбель ремёсел', uz: 'Hunarmandlik beshigi' },
    excerpt: {
      en: 'Fertile, traditional and welcoming, the Fergana Valley is the home of Uzbek silk weaving, ceramics and the country’s warmest hospitality.',
      ru: 'Плодородная и традиционная Ферганская долина — родина узбекского шёлка, керамики и самого тёплого гостеприимства.',
      uz: "Hosildor va an'anaviy Farg'ona vodiysi — o'zbek ipagi, kulolchiligi va eng issiq mehmondo'stlik vatani.",
    },
    body: {
      en: 'East of the cities, the Fergana Valley is where Uzbekistan’s craft heritage still lives and breathes. In Margilan, master weavers create the rippling adras and atlas silks that clothe the nation; in Rishtan, potters glaze ceramics in the signature blues and greens of Central Asia. The valley sees few large tour groups, which is exactly its appeal — here you meet artisans in their workshops, share a meal with families, and experience the unhurried, generous Uzbekistan that travelers remember most fondly.',
      ru: 'К востоку от городов лежит Ферганская долина, где ремесленное наследие Узбекистана живо по сей день. Маргиланский шёлк, риштанская керамика, мастерские и радушные семьи — здесь вы встречаете настоящий, неспешный Узбекистан.',
      uz: "Shaharlardan sharqda Farg'ona vodiysi joylashgan — bu yerda O'zbekistonning hunarmandlik merosi hamon yashaydi. Marg'ilon ipagi, Rishton kulolchiligi va mehmondo'st oilalar — bu yerda haqiqiy, shoshilmas O'zbekistonni topasiz.",
    },
    image: '/images/tour-family.jpg',
    highlights: [
      { en: 'Margilan silk factories', ru: 'Шёлковые фабрики Маргилана', uz: 'Marg‘ilon ipak fabrikalari' },
      { en: 'Rishtan ceramics', ru: 'Риштанская керамика', uz: 'Rishton kulolchiligi' },
      { en: 'Kokand Khan’s Palace', ru: 'Дворец Кокандского хана', uz: 'Qo‘qon xoni saroyi' },
      { en: 'Local bazaars', ru: 'Местные базары', uz: 'Mahalliy bozorlar' },
    ],
    bestTime: { en: 'April–June & September', ru: 'Апрель–июнь и сентябрь', uz: 'Aprel–iyun va sentyabr' },
    featured: false,
  },
];

export const tours: Tour[] = [
  {
    slug: 'classic-silk-road-uzbekistan',
    countrySlug: 'uzbekistan',
    title: {
      en: 'Classic Silk Road: Tashkent, Samarkand, Bukhara & Khiva',
      ru: 'Классический Шёлковый путь: Ташкент, Самарканд, Бухара и Хива',
      uz: "Klassik Ipak yo'li: Toshkent, Samarqand, Buxoro va Xiva",
    },
    summary: {
      en: 'The definitive Uzbekistan journey across all four Silk Road jewels, blending high-speed rail and private guiding over nine unforgettable days.',
      ru: 'Главное путешествие по Узбекистану через все четыре жемчужины Шёлкового пути — скоростные поезда и личный гид за девять дней.',
      uz: "Ipak yo'lining to'rt durdonasi bo'ylab to'qqiz kunlik mukammal sayohat — tezyurar poyezd va shaxsiy gid bilan.",
    },
    image: '/images/samarkand.jpg',
    themes: ['cultural', 'silk-road', 'private'],
    durationDays: 9,
    priceFrom: 1690,
    tier: 'mid-range',
    bestFor: { en: 'First-time visitors & culture lovers', ru: 'Первый визит и любители культуры', uz: 'Ilk tashrif va madaniyat ixlosmandlari' },
    highlights: [
      { en: 'All three UNESCO cities in one trip', ru: 'Все три города ЮНЕСКО за одну поездку', uz: 'Bir sayohatda uchta YuNESKO shahri' },
      { en: 'Afrosiyob high-speed train', ru: 'Скоростной поезд «Афросиёб»', uz: '«Afrosiyob» tezyurar poyezdi' },
      { en: 'Private licensed guide throughout', ru: 'Личный лицензированный гид', uz: 'Doimiy shaxsiy litsenziyali gid' },
    ],
    itinerary: [
      { day: 1, title: { en: 'Arrival in Tashkent', ru: 'Прибытие в Ташкент', uz: 'Toshkentga kelish' }, description: { en: 'Airport welcome and transfer to your hotel, followed by an evening orientation walk.', ru: 'Встреча в аэропорту, трансфер в отель и вечерняя ознакомительная прогулка.', uz: 'Aeroportda kutib olish, mehmonxonaga transfer va kechki tanishuv sayri.' } },
      { day: 2, title: { en: 'Tashkent city tour', ru: 'Обзорная по Ташкенту', uz: 'Toshkent shahar sayri' }, description: { en: 'Chorsu Bazaar, Hast Imam complex and the mosaic metro stations.', ru: 'Базар Чорсу, комплекс Хаст-Имам и мозаичное метро.', uz: 'Chorsu bozori, Hazrati Imom majmuasi va mozaik metro.' } },
      { day: 3, title: { en: 'Train to Samarkand', ru: 'Поезд в Самарканд', uz: 'Samarqandga poyezd' }, description: { en: 'Morning Afrosiyob train, then the Registan and Gur-e-Amir by golden light.', ru: 'Утренний «Афросиёб», затем Регистан и Гур-Эмир в золотом свете.', uz: 'Ertalabki «Afrosiyob», so‘ng oltin nurda Registon va Go‘ri Amir.' } },
      { day: 4, title: { en: 'Samarkand in depth', ru: 'Самарканд подробно', uz: 'Samarqand chuqurroq' }, description: { en: 'Shah-i-Zinda, Bibi-Khanym and the Ulugh Beg observatory.', ru: 'Шахи-Зинда, Биби-Ханым и обсерватория Улугбека.', uz: 'Shohi Zinda, Bibixonim va Ulug‘bek rasadxonasi.' } },
      { day: 5, title: { en: 'To Bukhara', ru: 'В Бухару', uz: 'Buxoroga' }, description: { en: 'Scenic transfer west, evening at the Lyab-i Hauz.', ru: 'Живописный переезд на запад, вечер у Ляби-Хауза.', uz: 'G‘arbga manzarali yo‘l, kechqurun Labi Hovuzda.' } },
      { day: 6, title: { en: 'Bukhara old town', ru: 'Старый город Бухары', uz: 'Buxoro eski shahri' }, description: { en: 'Po-i-Kalon, the Ark fortress and the domed bazaars on foot.', ru: 'Пои-Калян, крепость Арк и торговые купола пешком.', uz: 'Poi Kalon, Ark qal‘asi va gumbazli bozorlar piyoda.' } },
      { day: 7, title: { en: 'Desert road to Khiva', ru: 'Пустынная дорога в Хиву', uz: 'Cho‘l yo‘li bilan Xivaga' }, description: { en: 'A classic Kyzylkum desert drive along the Amu Darya to Khiva.', ru: 'Классический переезд через Кызылкум вдоль Амударьи.', uz: 'Amudaryo bo‘ylab Qizilqum orqali klassik yo‘l.' } },
      { day: 8, title: { en: 'Khiva’s Itchan Kala', ru: 'Ичан-Кала в Хиве', uz: 'Xivadagi Ichan Qal‘a' }, description: { en: 'Full day inside the walled city; rooftop sunset over the minarets.', ru: 'Целый день в крепости; закат над минаретами с крыши.', uz: 'Qal‘a ichida to‘liq kun; tom ustidan minoralar uzra quyosh botishi.' } },
      { day: 9, title: { en: 'Departure', ru: 'Отъезд', uz: 'Jo‘nash' }, description: { en: 'Transfer to Urgench airport for your onward flight.', ru: 'Трансфер в аэропорт Ургенча.', uz: 'Urganch aeroportiga transfer.' } },
    ],
    included: [
      { en: '8 nights in boutique & 4★ hotels', ru: '8 ночей в бутик- и 4★ отелях', uz: '8 kecha butik va 4★ mehmonxonalarda' },
      { en: 'Daily breakfast & select dinners', ru: 'Ежедневные завтраки и отдельные ужины', uz: 'Har kuni nonushta va tanlangan kechki ovqatlar' },
      { en: 'Private guide, driver & entrance fees', ru: 'Личный гид, водитель и входные билеты', uz: 'Shaxsiy gid, haydovchi va kirish chiptalari' },
      { en: 'Afrosiyob high-speed train tickets', ru: 'Билеты на «Афросиёб»', uz: '«Afrosiyob» chiptalari' },
    ],
    excluded: [
      { en: 'International flights', ru: 'Международные перелёты', uz: 'Xalqaro reyslar' },
      { en: 'Travel insurance', ru: 'Туристическая страховка', uz: 'Sayohat sug‘urtasi' },
      { en: 'Personal expenses & tips', ru: 'Личные расходы и чаевые', uz: 'Shaxsiy xarajatlar va choychaqa' },
    ],
    featured: true,
  },
  {
    slug: 'luxury-uzbekistan-private',
    countrySlug: 'uzbekistan',
    title: { en: 'Luxury Uzbekistan: Private Silk Road in Style', ru: 'Люкс-Узбекистан: частный Шёлковый путь', uz: "Hashamatli O'zbekiston: xususiy Ipak yo'li" },
    summary: {
      en: 'The finest hotels, private guiding, exclusive after-hours monument access and curated dining across a refined seven-day itinerary.',
      ru: 'Лучшие отели, личный гид, эксклюзивный доступ к памятникам и изысканная кухня за семь дней.',
      uz: "Eng yaxshi mehmonxonalar, shaxsiy gid, yodgorliklarga maxsus kirish va nafis taomlar — yetti kunlik marshrutda.",
    },
    image: '/images/tour-luxury.jpg',
    themes: ['luxury', 'private', 'silk-road'],
    durationDays: 7,
    priceFrom: 4200,
    tier: 'luxury',
    bestFor: { en: 'Discerning travelers & honeymooners', ru: 'Взыскательные путешественники и молодожёны', uz: 'Talabchan sayohatchilar va kelin-kuyovlar' },
    highlights: [
      { en: 'Five-star & heritage boutique stays', ru: 'Пятизвёздочные и бутик-отели', uz: 'Besh yulduzli va merosiy butik mehmonxonalar' },
      { en: 'Private after-hours Registan visit', ru: 'Частное посещение Регистана', uz: 'Registonga maxsus xususiy tashrif' },
      { en: 'Fine dining & private chef evening', ru: 'Высокая кухня и вечер с шеф-поваром', uz: 'Nafis taomlar va shaxsiy oshpaz kechasi' },
    ],
    itinerary: [
      { day: 1, title: { en: 'Tashkent arrival', ru: 'Прибытие в Ташкент', uz: 'Toshkentga kelish' }, description: { en: 'VIP airport meet & luxury hotel check-in.', ru: 'VIP-встреча и заселение в люкс-отель.', uz: 'VIP kutib olish va hashamatli mehmonxona.' } },
      { day: 2, title: { en: 'Samarkand by private rail', ru: 'Самарканд частным поездом', uz: 'Samarqandga maxsus poyezd' }, description: { en: 'Business-class train and a curated Registan tour.', ru: 'Поезд бизнес-класса и эксклюзивный тур по Регистану.', uz: 'Biznes-klass poyezd va maxsus Registon sayri.' } },
      { day: 3, title: { en: 'Samarkand exclusives', ru: 'Эксклюзивы Самарканда', uz: 'Samarqand eksklyuzivlari' }, description: { en: 'After-hours monument access and a wine-paired dinner.', ru: 'Доступ к памятникам после закрытия и ужин с вином.', uz: 'Yopilgandan keyin kirish va sharob bilan kechki ovqat.' } },
      { day: 4, title: { en: 'Bukhara', ru: 'Бухара', uz: 'Buxoro' }, description: { en: 'Private heritage-house stay in the old city.', ru: 'Проживание в исторической усадьбе старого города.', uz: 'Eski shaharda merosiy uyda yashash.' } },
      { day: 5, title: { en: 'Bukhara artisans', ru: 'Мастера Бухары', uz: 'Buxoro hunarmandlari' }, description: { en: 'Private workshops with master miniaturists and goldsmiths.', ru: 'Частные мастер-классы миниатюристов и ювелиров.', uz: 'Miniatyura va zargarlik ustalari bilan maxsus darslar.' } },
      { day: 6, title: { en: 'Khiva flight & tour', ru: 'Перелёт и тур по Хиве', uz: 'Xivaga parvoz va sayr' }, description: { en: 'Domestic flight to a private guided Itchan Kala.', ru: 'Внутренний перелёт и частный тур по Ичан-Кале.', uz: 'Ichki parvoz va Ichan Qal‘a bo‘ylab xususiy sayr.' } },
      { day: 7, title: { en: 'Departure', ru: 'Отъезд', uz: 'Jo‘nash' }, description: { en: 'Leisurely morning and private transfer home.', ru: 'Неспешное утро и частный трансфер.', uz: 'Bemalol ertalab va xususiy transfer.' } },
    ],
    included: [
      { en: '6 nights in 5★ & heritage hotels', ru: '6 ночей в 5★ и исторических отелях', uz: '6 kecha 5★ va merosiy mehmonxonalarda' },
      { en: 'Private guide, premium vehicle & driver', ru: 'Личный гид, премиум-авто и водитель', uz: 'Shaxsiy gid, premium avto va haydovchi' },
      { en: 'Domestic flight Bukhara–Urgench', ru: 'Внутренний перелёт Бухара–Ургенч', uz: 'Buxoro–Urganch ichki parvoz' },
      { en: 'Exclusive experiences & fine dining', ru: 'Эксклюзивные впечатления и высокая кухня', uz: 'Eksklyuziv tajribalar va nafis taomlar' },
    ],
    excluded: [
      { en: 'International flights', ru: 'Международные перелёты', uz: 'Xalqaro reyslar' },
      { en: 'Travel insurance', ru: 'Страховка', uz: 'Sug‘urta' },
    ],
    featured: true,
  },
  {
    slug: 'uzbekistan-family-adventure',
    countrySlug: 'uzbekistan',
    title: { en: 'Uzbekistan Family Adventure', ru: 'Семейное приключение по Узбекистану', uz: "Oilaviy O'zbekiston sarguzashti" },
    summary: {
      en: 'A paced, hands-on journey designed for families — silk weaving, pottery, train rides and desert nights kids and parents both love.',
      ru: 'Размеренное и увлекательное путешествие для семей: шёлк, гончарство, поезда и ночи в пустыне.',
      uz: "Oilalar uchun mo'ljallangan qiziqarli sayohat — ipak to'qish, kulolchilik, poyezd va cho'l kechalari.",
    },
    image: '/images/tour-family.jpg',
    themes: ['family', 'cultural'],
    durationDays: 8,
    priceFrom: 1480,
    tier: 'mid-range',
    bestFor: { en: 'Families with children', ru: 'Семьи с детьми', uz: 'Bolali oilalar' },
    highlights: [
      { en: 'Hands-on craft workshops', ru: 'Творческие мастер-классы', uz: 'Amaliy hunarmandlik mashg‘ulotlari' },
      { en: 'Camel ride & yurt-camp night', ru: 'Катание на верблюдах и ночь в юрте', uz: 'Tuya sayri va yurtada tunash' },
      { en: 'Kid-friendly pacing & meals', ru: 'Удобный для детей темп и питание', uz: 'Bolalarga qulay sur‘at va ovqat' },
    ],
    itinerary: [
      { day: 1, title: { en: 'Tashkent welcome', ru: 'Встреча в Ташкенте', uz: 'Toshkentda kutib olish' }, description: { en: 'Gentle arrival day and a fun metro ride.', ru: 'Спокойный день прибытия и весёлая поездка в метро.', uz: 'Bemalol kelish kuni va qiziqarli metro sayri.' } },
      { day: 2, title: { en: 'Samarkand by train', ru: 'Самарканд на поезде', uz: 'Samarqandga poyezdda' }, description: { en: 'Exciting high-speed train and a treasure-hunt city tour.', ru: 'Скоростной поезд и городской квест.', uz: 'Tezyurar poyezd va shahar bo‘ylab xazina o‘yini.' } },
      { day: 3, title: { en: 'Paper & ceramics', ru: 'Бумага и керамика', uz: 'Qog‘oz va sopol' }, description: { en: 'Silk-paper making at Konigil and a pottery class.', ru: 'Изготовление шёлковой бумаги в Конигиле и гончарство.', uz: 'Konigilda ipak qog‘oz va kulolchilik darsi.' } },
      { day: 4, title: { en: 'To Bukhara', ru: 'В Бухару', uz: 'Buxoroga' }, description: { en: 'Transfer with a roadside melon stop.', ru: 'Переезд с остановкой у бахчи.', uz: 'Yo‘lda qovun to‘xtashi bilan transfer.' } },
      { day: 5, title: { en: 'Bukhara discovery', ru: 'Открытие Бухары', uz: 'Buxoroni kashf etish' }, description: { en: 'Storytelling tour of the old city and puppet workshop.', ru: 'Рассказы по старому городу и мастерская кукол.', uz: 'Eski shahar hikoyalari va qo‘g‘irchoq ustaxonasi.' } },
      { day: 6, title: { en: 'Desert yurt camp', ru: 'Юрточный лагерь', uz: 'Cho‘l yurta lageri' }, description: { en: 'Camel rides, campfire and stargazing at Aydarkul.', ru: 'Верблюды, костёр и звёзды на Айдаркуле.', uz: 'Tuya sayri, gulxan va Aydarko‘lda yulduzlar.' } },
      { day: 7, title: { en: 'Back to Samarkand', ru: 'Назад в Самарканд', uz: 'Samarqandga qaytish' }, description: { en: 'Return drive and free family afternoon.', ru: 'Возвращение и свободный день.', uz: 'Qaytish va erkin oilaviy peshindan keyin.' } },
      { day: 8, title: { en: 'Departure', ru: 'Отъезд', uz: 'Jo‘nash' }, description: { en: 'Transfer to the airport.', ru: 'Трансфер в аэропорт.', uz: 'Aeroportga transfer.' } },
    ],
    included: [
      { en: '7 nights family-friendly hotels + 1 yurt camp', ru: '7 ночей в семейных отелях + юрта', uz: '7 kecha oilaviy mehmonxonalar + yurta' },
      { en: 'All workshops & activities', ru: 'Все мастер-классы и активности', uz: 'Barcha mashg‘ulot va faoliyatlar' },
      { en: 'Private guide & comfortable minivan', ru: 'Личный гид и комфортный минивэн', uz: 'Shaxsiy gid va qulay miniven' },
    ],
    excluded: [
      { en: 'International flights', ru: 'Международные перелёты', uz: 'Xalqaro reyslar' },
      { en: 'Travel insurance', ru: 'Страховка', uz: 'Sug‘urta' },
    ],
    featured: true,
  },
  {
    slug: 'samarkand-bukhara-short-break',
    countrySlug: 'uzbekistan',
    title: { en: 'Samarkand & Bukhara Short Break', ru: 'Короткий тур: Самарканд и Бухара', uz: "Qisqa sayohat: Samarqand va Buxoro" },
    summary: {
      en: 'Time-poor but curious? This five-day taster covers Uzbekistan’s two greatest cities by high-speed rail.',
      ru: 'Мало времени? Пятидневный тур по двум величайшим городам на скоростном поезде.',
      uz: "Vaqt kam? Besh kunlik sayohat ikki buyuk shaharni tezyurar poyezdda qamrab oladi.",
    },
    image: '/images/bukhara.jpg',
    themes: ['cultural', 'silk-road', 'business'],
    durationDays: 5,
    priceFrom: 990,
    tier: 'mid-range',
    bestFor: { en: 'Short trips & stopovers', ru: 'Короткие поездки и стыковки', uz: 'Qisqa sayohat va to‘xtashlar' },
    highlights: [
      { en: 'Two UNESCO cities in five days', ru: 'Два города ЮНЕСКО за пять дней', uz: 'Besh kunda ikki YuNESKO shahri' },
      { en: 'Efficient high-speed rail links', ru: 'Удобные скоростные поезда', uz: 'Qulay tezyurar poyezdlar' },
      { en: 'Ideal add-on to a business trip', ru: 'Идеально к деловой поездке', uz: 'Biznes safarga ideal qo‘shimcha' },
    ],
    itinerary: [
      { day: 1, title: { en: 'Tashkent to Samarkand', ru: 'Ташкент–Самарканд', uz: 'Toshkent–Samarqand' }, description: { en: 'Morning arrival, afternoon train, evening Registan.', ru: 'Прилёт, дневной поезд, вечерний Регистан.', uz: 'Kelish, kunduzgi poyezd, kechki Registon.' } },
      { day: 2, title: { en: 'Samarkand highlights', ru: 'Главное в Самарканде', uz: 'Samarqand asoslari' }, description: { en: 'Shah-i-Zinda, Gur-e-Amir and Bibi-Khanym.', ru: 'Шахи-Зинда, Гур-Эмир и Биби-Ханым.', uz: 'Shohi Zinda, Go‘ri Amir va Bibixonim.' } },
      { day: 3, title: { en: 'Train to Bukhara', ru: 'Поезд в Бухару', uz: 'Buxoroga poyezd' }, description: { en: 'Midday transfer and an old-town evening stroll.', ru: 'Переезд и вечерняя прогулка по старому городу.', uz: 'Kunduzgi transfer va eski shaharda kechki sayr.' } },
      { day: 4, title: { en: 'Bukhara full day', ru: 'Бухара целый день', uz: 'Buxoroda to‘liq kun' }, description: { en: 'Po-i-Kalon, the Ark and trading domes.', ru: 'Пои-Калян, Арк и торговые купола.', uz: 'Poi Kalon, Ark va savdo gumbazlari.' } },
      { day: 5, title: { en: 'Departure', ru: 'Отъезд', uz: 'Jo‘nash' }, description: { en: 'Return train or flight from Bukhara.', ru: 'Обратный поезд или вылет из Бухары.', uz: 'Buxorodan qaytish poyezdi yoki parvoz.' } },
    ],
    included: [
      { en: '4 nights centrally located hotels', ru: '4 ночи в центральных отелях', uz: '4 kecha markaziy mehmonxonalarda' },
      { en: 'High-speed train tickets', ru: 'Билеты на скоростной поезд', uz: 'Tezyurar poyezd chiptalari' },
      { en: 'Private guide & transfers', ru: 'Личный гид и трансферы', uz: 'Shaxsiy gid va transferlar' },
    ],
    excluded: [
      { en: 'International flights', ru: 'Международные перелёты', uz: 'Xalqaro reyslar' },
      { en: 'Lunches & dinners', ru: 'Обеды и ужины', uz: 'Tushlik va kechki ovqatlar' },
    ],
    featured: false,
  },
  {
    slug: 'grand-uzbekistan-fergana',
    countrySlug: 'uzbekistan',
    title: { en: 'Grand Uzbekistan with Fergana Valley', ru: 'Большой Узбекистан с Ферганской долиной', uz: "Katta O'zbekiston va Farg'ona vodiysi" },
    summary: {
      en: 'The complete twelve-day grand tour, adding the craft villages and warm hospitality of the Fergana Valley to the classic circuit.',
      ru: 'Полный 12-дневный гранд-тур с ремесленными сёлами Ферганской долины в дополнение к классике.',
      uz: "To'liq 12 kunlik katta sayohat — klassik marshrutga Farg'ona vodiysi hunarmand qishloqlari qo'shiladi.",
    },
    image: '/images/khiva.jpg',
    themes: ['cultural', 'silk-road', 'private'],
    durationDays: 12,
    priceFrom: 2390,
    tier: 'mid-range',
    bestFor: { en: 'In-depth cultural travelers', ru: 'Глубокое культурное погружение', uz: 'Chuqur madaniy sayohatchilar' },
    highlights: [
      { en: 'Everything in the Classic plus Fergana', ru: 'Вся классика плюс Фергана', uz: 'Butun klassika va Farg‘ona' },
      { en: 'Margilan silk & Rishtan ceramics', ru: 'Маргиланский шёлк и риштанская керамика', uz: 'Marg‘ilon ipagi va Rishton sopoli' },
      { en: 'Authentic homestays & artisans', ru: 'Аутентичные дома и мастера', uz: 'Asl mehmonxonalar va hunarmandlar' },
    ],
    itinerary: [
      { day: 1, title: { en: 'Tashkent', ru: 'Ташкент', uz: 'Toshkent' }, description: { en: 'Arrival and capital orientation.', ru: 'Прибытие и знакомство со столицей.', uz: 'Kelish va poytaxt bilan tanishuv.' } },
      { day: 2, title: { en: 'Fergana Valley', ru: 'Ферганская долина', uz: 'Farg‘ona vodiysi' }, description: { en: 'Scenic mountain pass to Kokand and Margilan.', ru: 'Живописный перевал в Коканд и Маргилан.', uz: 'Qo‘qon va Marg‘ilonga manzarali dovon.' } },
      { day: 3, title: { en: 'Crafts of Fergana', ru: 'Ремёсла Ферганы', uz: 'Farg‘ona hunarlari' }, description: { en: 'Silk weaving in Margilan and pottery in Rishtan.', ru: 'Шёлк в Маргилане и керамика в Риштане.', uz: 'Marg‘ilon ipagi va Rishton kulolchiligi.' } },
      { day: 4, title: { en: 'Return & train to Samarkand', ru: 'Возврат и поезд в Самарканд', uz: 'Qaytish va Samarqandga poyezd' }, description: { en: 'Back to Tashkent, then high-speed rail.', ru: 'В Ташкент, затем скоростной поезд.', uz: 'Toshkentga, so‘ng tezyurar poyezd.' } },
      { day: 5, title: { en: 'Samarkand', ru: 'Самарканд', uz: 'Samarqand' }, description: { en: 'Registan, Gur-e-Amir and Ulugh Beg observatory.', ru: 'Регистан, Гур-Эмир и обсерватория.', uz: 'Registon, Go‘ri Amir va rasadxona.' } },
      { day: 6, title: { en: 'Samarkand continued', ru: 'Самарканд продолжение', uz: 'Samarqand davomi' }, description: { en: 'Shah-i-Zinda, Bibi-Khanym and Siab Bazaar.', ru: 'Шахи-Зинда, Биби-Ханым и Сиабский базар.', uz: 'Shohi Zinda, Bibixonim va Siyob bozori.' } },
      { day: 7, title: { en: 'To Bukhara', ru: 'В Бухару', uz: 'Buxoroga' }, description: { en: 'Transfer with stops at Timurid sites.', ru: 'Переезд с остановками у тимуридских памятников.', uz: 'Temuriy yodgorliklarda to‘xtab transfer.' } },
      { day: 8, title: { en: 'Bukhara', ru: 'Бухара', uz: 'Buxoro' }, description: { en: 'Full-day old town and craft quarters.', ru: 'Целый день в старом городе.', uz: 'To‘liq kun eski shaharda.' } },
      { day: 9, title: { en: 'Bukhara to Khiva', ru: 'Бухара–Хива', uz: 'Buxoro–Xiva' }, description: { en: 'The classic Kyzylkum desert crossing.', ru: 'Классический переезд через Кызылкум.', uz: 'Klassik Qizilqum kesib o‘tish.' } },
      { day: 10, title: { en: 'Khiva', ru: 'Хива', uz: 'Xiva' }, description: { en: 'A full day inside Itchan Kala.', ru: 'Целый день в Ичан-Кале.', uz: 'Ichan Qal‘ada to‘liq kun.' } },
      { day: 11, title: { en: 'Flight to Tashkent', ru: 'Перелёт в Ташкент', uz: 'Toshkentga parvoz' }, description: { en: 'Free time and a farewell dinner.', ru: 'Свободное время и прощальный ужин.', uz: 'Bo‘sh vaqt va xayrlashuv kechki ovqati.' } },
      { day: 12, title: { en: 'Departure', ru: 'Отъезд', uz: 'Jo‘nash' }, description: { en: 'Transfer to the airport.', ru: 'Трансфер в аэропорт.', uz: 'Aeroportga transfer.' } },
    ],
    included: [
      { en: '11 nights hotels + homestay', ru: '11 ночей отели + гостевой дом', uz: '11 kecha mehmonxona + uy mehmonxonasi' },
      { en: 'Domestic flight Urgench–Tashkent', ru: 'Внутренний перелёт Ургенч–Ташкент', uz: 'Urganch–Toshkent ichki parvoz' },
      { en: 'Private guide, driver & entrances', ru: 'Личный гид, водитель и билеты', uz: 'Shaxsiy gid, haydovchi va chiptalar' },
    ],
    excluded: [
      { en: 'International flights', ru: 'Международные перелёты', uz: 'Xalqaro reyslar' },
      { en: 'Travel insurance & tips', ru: 'Страховка и чаевые', uz: 'Sug‘urta va choychaqa' },
    ],
    featured: false,
  },
  {
    slug: 'tashkent-business-bleisure',
    countrySlug: 'uzbekistan',
    title: { en: 'Tashkent Business & Bleisure Escape', ru: 'Ташкент: бизнес и отдых', uz: 'Toshkent: biznes va dam olish' },
    summary: {
      en: 'For business travelers: efficient airport-to-meeting logistics, premium stays, and a curated Samarkand day to extend the trip.',
      ru: 'Для деловых путешественников: логистика, премиум-отели и один день в Самарканде.',
      uz: "Biznes sayohatchilar uchun: qulay logistika, premium mehmonxona va Samarqandga bir kun.",
    },
    image: '/images/tashkent.jpg',
    themes: ['business', 'private', 'luxury'],
    durationDays: 4,
    priceFrom: 1180,
    tier: 'luxury',
    bestFor: { en: 'Business & corporate guests', ru: 'Деловые и корпоративные гости', uz: 'Biznes va korporativ mehmonlar' },
    highlights: [
      { en: 'Seamless airport & meeting transfers', ru: 'Бесшовные трансферы', uz: 'Uzluksiz transferlar' },
      { en: 'Premium central hotel', ru: 'Премиум-отель в центре', uz: 'Markazda premium mehmonxona' },
      { en: 'Optional Samarkand day extension', ru: 'Доп. день в Самарканде', uz: 'Samarqandga qo‘shimcha kun' },
    ],
    itinerary: [
      { day: 1, title: { en: 'Arrival & settle in', ru: 'Прибытие и заселение', uz: 'Kelish va joylashish' }, description: { en: 'VIP transfer and evening at leisure.', ru: 'VIP-трансфер и свободный вечер.', uz: 'VIP transfer va erkin kechqurun.' } },
      { day: 2, title: { en: 'Business day support', ru: 'Деловой день', uz: 'Biznes kuni' }, description: { en: 'On-call driver, interpreter and city concierge.', ru: 'Водитель, переводчик и консьерж.', uz: 'Haydovchi, tarjimon va konsyerj xizmati.' } },
      { day: 3, title: { en: 'Samarkand day trip', ru: 'День в Самарканде', uz: 'Samarqandga bir kun' }, description: { en: 'Early train, private guiding, evening return.', ru: 'Утренний поезд, гид, вечерний возврат.', uz: 'Ertalabki poyezd, gid, kechki qaytish.' } },
      { day: 4, title: { en: 'Departure', ru: 'Отъезд', uz: 'Jo‘nash' }, description: { en: 'Flexible checkout and airport transfer.', ru: 'Гибкий выезд и трансфер.', uz: 'Moslashuvchan chiqish va transfer.' } },
    ],
    included: [
      { en: '3 nights premium central hotel', ru: '3 ночи в премиум-отеле', uz: '3 kecha premium mehmonxonada' },
      { en: 'Private driver & airport transfers', ru: 'Личный водитель и трансферы', uz: 'Shaxsiy haydovchi va transferlar' },
      { en: 'Samarkand high-speed train day trip', ru: 'Поездка в Самарканд на поезде', uz: 'Samarqandga poyezdda kunlik sayohat' },
    ],
    excluded: [
      { en: 'International flights', ru: 'Международные перелёты', uz: 'Xalqaro reyslar' },
      { en: 'Meals not specified', ru: 'Питание сверх указанного', uz: 'Ko‘rsatilmagan ovqatlar' },
    ],
    featured: false,
  },
];

export const testimonials: Testimonial[] = [
  {
    author: 'Margaret & David Whitfield',
    origin: 'United Kingdom',
    rating: 5,
    quote: {
      en: 'From the first email to our final farewell dinner, Nexatlas thought of everything. Our guide in Samarkand brought 600 years of history to life. The most seamless trip we have ever taken.',
      ru: 'От первого письма до прощального ужина Nexatlas продумали всё. Наш гид в Самарканде оживил 600 лет истории. Самая безупречная поездка в нашей жизни.',
      uz: "Birinchi xatdan xayrlashuv kechki ovqatigacha Nexatlas hammasini o'ylab qo'ygan. Samarqanddagi gidimiz 600 yillik tarixni jonlantirdi.",
    },
    tourTitle: 'Classic Silk Road',
  },
  {
    author: 'Familie Bauer',
    origin: 'Germany',
    rating: 5,
    quote: {
      en: 'Travelling with three children is never simple, but Nexatlas made Uzbekistan effortless and magical. The yurt camp night under the stars is something our kids still talk about.',
      ru: 'Путешествовать с тремя детьми непросто, но Nexatlas сделали Узбекистан лёгким и волшебным. Ночь в юрте под звёздами дети вспоминают до сих пор.',
      uz: "Uchta bola bilan sayohat oson emas, ammo Nexatlas O'zbekistonni sehrli qildi. Yurtadagi yulduzli tun haqida bolalarimiz hali ham gapiradi.",
    },
    tourTitle: 'Family Adventure',
  },
  {
    author: 'Aisha Al-Maktoum',
    origin: 'United Arab Emirates',
    rating: 5,
    quote: {
      en: 'Impeccable luxury and genuine warmth in equal measure. The private after-hours visit to the Registan was a once-in-a-lifetime moment. Truly world-class service.',
      ru: 'Безупречный люкс и искренняя теплота в равной мере. Частное посещение Регистана после закрытия — момент на всю жизнь. Сервис мирового класса.',
      uz: "Beqiyos hashamat va samimiy iliqlik. Registonga yopilgandan keyingi xususiy tashrif — umrbod esda qoladigan lahza.",
    },
    tourTitle: 'Luxury Uzbekistan',
  },
  {
    author: 'James Okafor',
    origin: 'United States',
    rating: 5,
    quote: {
      en: 'I added two days in Samarkand to a business trip and Nexatlas handled everything flawlessly. Professional, punctual and deeply knowledgeable. I will be back with my family.',
      ru: 'Я добавил два дня в Самарканде к деловой поездке, и Nexatlas всё организовали безупречно. Профессионально и пунктуально. Вернусь с семьёй.',
      uz: "Biznes safarga Samarqandda ikki kun qo'shdim, Nexatlas hammasini mukammal uddaladi. Professional va aniq. Oilam bilan yana kelaman.",
    },
    tourTitle: 'Business & Bleisure',
  },
];

export const posts: Post[] = [
  {
    slug: 'uzbekistan-visa-free-2026',
    title: {
      en: 'Uzbekistan Visa Guide 2026: Who Can Travel Visa-Free',
      ru: 'Визовый гид по Узбекистану 2026: кто может ехать без визы',
      uz: "O'zbekiston viza qo'llanmasi 2026: kim vizasiz sayohat qila oladi",
    },
    excerpt: {
      en: 'As of 1 January 2026, US citizens join 90+ nationalities who can enter Uzbekistan visa-free. Here is exactly what you need to know.',
      ru: 'С 1 января 2026 года граждане США присоединяются к 90+ странам с безвизовым въездом. Всё, что нужно знать.',
      uz: "2026-yil 1-yanvardan AQSh fuqarolari 90+ davlat qatorida vizasiz kira oladi. Bilishingiz kerak bo'lgan hammasi.",
    },
    body: {
      en: 'Uzbekistan has transformed into one of the most accessible destinations in Asia. Citizens of more than 90 countries — including the entire EU and Schengen zone, the UK, Canada, Japan, South Korea, Singapore, the GCC states and, since 1 January 2026, the United States — can now enter for up to 30 days without a visa. Travelers who do need a visa can apply through the official e-visa portal for a modest fee. Combined with the visa-free policy, the high-speed Afrosiyob rail network and a wave of new international flights, there has never been an easier time to discover the Silk Road.',
      ru: 'Узбекистан стал одним из самых доступных направлений Азии. Граждане более 90 стран — включая весь ЕС, Великобританию, Канаду, Японию, Южную Корею, страны Персидского залива и, с 1 января 2026 года, США — могут въезжать без визы на срок до 30 дней.',
      uz: "O'zbekiston Osiyodagi eng ochiq yo'nalishlardan biriga aylandi. 90 dan ortiq davlat fuqarolari — butun YeI, Buyuk Britaniya, Kanada, Yaponiya, Janubiy Koreya, Fors ko'rfazi davlatlari va 2026-yil 1-yanvardan AQSh — 30 kungacha vizasiz kira oladi.",
    },
    image: '/images/tour-luxury.jpg',
    category: 'Travel tips',
    author: 'Nexatlas Team',
    publishedAt: '2026-01-15',
  },
  {
    slug: 'best-time-to-visit-uzbekistan',
    title: {
      en: 'The Best Time to Visit Uzbekistan',
      ru: 'Лучшее время для поездки в Узбекистан',
      uz: "O'zbekistonga borish uchun eng yaxshi vaqt",
    },
    excerpt: {
      en: 'Spring and autumn are golden. Here is a month-by-month guide to weather, crowds, festivals and the smartest time to travel.',
      ru: 'Весна и осень — золотая пора. Помесячный гид по погоде, толпам и фестивалям.',
      uz: "Bahor va kuz — oltin fasl. Ob-havo, olomon va bayramlar bo'yicha oylik qo'llanma.",
    },
    body: {
      en: 'Uzbekistan is a four-season destination, but spring (April to early June) and autumn (September to October) are widely considered the finest windows to travel. Daytime temperatures are warm and comfortable, the desert is forgiving, and the cities look their best under clear skies. Summer brings intense heat, especially around Bukhara and Khiva, while winter is cold but atmospheric and crowd-free, with the bonus of lower prices and snow-dusted domes. If you can choose, aim for late April or late September.',
      ru: 'Узбекистан хорош в любой сезон, но весна (апрель – начало июня) и осень (сентябрь – октябрь) считаются лучшими. Тепло, комфортно и ясно. Лето жаркое, зима холодная, но атмосферная и без толп.',
      uz: "O'zbekiston to'rt fasllik yo'nalish, ammo bahor (aprel – iyun boshi) va kuz (sentyabr – oktyabr) eng yaxshi vaqt hisoblanadi. Iliq, qulay va ochiq osmon. Yoz issiq, qish sovuq lekin sokin va olomonsiz.",
    },
    image: '/images/samarkand.jpg',
    category: 'Travel tips',
    author: 'Nexatlas Team',
    publishedAt: '2026-02-10',
  },
  {
    slug: 'samarkand-three-day-itinerary',
    title: {
      en: 'The Perfect 3 Days in Samarkand',
      ru: 'Идеальные 3 дня в Самарканде',
      uz: "Samarqandda mukammal 3 kun",
    },
    excerpt: {
      en: 'How to experience the Registan, Shah-i-Zinda, Gur-e-Amir and more without rushing — a designer’s ideal three-day plan.',
      ru: 'Как увидеть Регистан, Шахи-Зинда, Гур-Эмир и не только без спешки — идеальный трёхдневный план.',
      uz: "Registon, Shohi Zinda, Go'ri Amir va boshqalarni shoshilmasdan ko'rish — mukammal uch kunlik reja.",
    },
    body: {
      en: 'Three days is the sweet spot for Samarkand. Day one belongs to the Registan — go early, then return at sunset when the tilework glows. Day two is for the spiritual heart of the city: the cascading mausoleums of Shah-i-Zinda, the vast Bibi-Khanym Mosque and the Siab Bazaar for lepyoshka bread and dried fruit. Day three rewards the curious with the Ulugh Beg observatory, the Afrosiyob museum and time among local life in the leafy new town. Our designers can tailor the pace to your interests, from architecture to cuisine.',
      ru: 'Три дня — идеально для Самарканда. Первый день — Регистан на рассвете и закате. Второй — Шахи-Зинда, Биби-Ханым и базар Сиаб. Третий — обсерватория Улугбека и музей Афросиаб.',
      uz: "Uch kun Samarqand uchun ideal. Birinchi kun — Registon tongda va shom payti. Ikkinchi — Shohi Zinda, Bibixonim va Siyob bozori. Uchinchi — Ulug'bek rasadxonasi va Afrosiyob muzeyi.",
    },
    image: '/images/khiva.jpg',
    category: 'Itineraries',
    author: 'Nexatlas Team',
    publishedAt: '2026-03-05',
  },
  {
    slug: 'uzbek-cuisine-guide',
    title: {
      en: 'A Taste of Uzbekistan: Food You Must Try',
      ru: 'Вкус Узбекистана: что обязательно попробовать',
      uz: "O'zbekiston ta'mi: albatta tatib ko'ring",
    },
    excerpt: {
      en: 'From sizzling plov to flaky samsa and endless pots of green tea — a first-timer’s guide to eating well on the Silk Road.',
      ru: 'От ароматного плова до самсы и бесконечного зелёного чая — гид для первого знакомства с кухней.',
      uz: "Mazali palovdan tandir samsasiga va cheksiz ko'k choygacha — Ipak yo'lida yaxshi ovqatlanish qo'llanmasi.",
    },
    body: {
      en: 'No journey through Uzbekistan is complete without surrendering to its table. Plov — rice slow-cooked with lamb, carrots and cumin — is the national dish and a point of genuine pride, with every region claiming the finest version. Seek out flaky samsa baked in a tandyr oven, hand-pulled lagman noodles, grilled shashlik and the pillowy non bread stamped with intricate patterns. Meals are long, generous and social, almost always rounded off with green tea, fresh fruit and the warm insistence that you eat just a little more.',
      ru: 'Путешествие по Узбекистану невозможно без его кухни. Плов — национальная гордость, у каждого региона свой. Самса из тандыра, лагман, шашлык и узорчатые лепёшки. Трапезы долгие, щедрые и всегда с зелёным чаем.',
      uz: "O'zbekiston bo'ylab sayohat uning dasturxonisiz to'liq emas. Palov — milliy faxr, har viloyatning o'z usuli bor. Tandir samsa, lag'mon, shashlik va naqshli non. Ovqatlanish uzoq, saxiy va doimo ko'k choy bilan.",
    },
    image: '/images/tashkent.jpg',
    category: 'Culture',
    author: 'Nexatlas Team',
    publishedAt: '2026-04-02',
  },
];

export const themeDefs: { key: import('./types').ThemeKey; titleKey: string }[] = [
  { key: 'cultural', titleKey: 'cultural' },
  { key: 'silk-road', titleKey: 'silkRoad' },
  { key: 'private', titleKey: 'private' },
  { key: 'family', titleKey: 'family' },
  { key: 'luxury', titleKey: 'luxury' },
  { key: 'business', titleKey: 'business' },
];
