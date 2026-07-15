export const siteData = {
  name: 'The Boma – Dinner & Drum Show',
  tagline: 'A Legendary African Dining Experience',
  description: "It's fair to say the Boma – Dinner & Drum Show, conveniently located on the estate, is a legendary dining and entertainment experience – over a million people can't be wrong...\n\nThe evening offers an unforgettable fusion of mouth-watering local cuisine, energetic dance performances and interactive drumming.\n\nIt has over the years firmly established itself as a Victoria Falls \"must-do\" experience, providing a unique cultural experience that bombards the senses with the tastes, sights and sounds of Africa.\n\nThe four-course, buffet-style meal includes a delicious platter of nibbles, soup from the campfire, a braai (barbecue) buffet, followed by a selection of desserts.\n\nOne of the Boma's trademark moments is when diners need to decide – do I head to the Mopane Worm station and try one of these apparently delicious tidbits? Decide yes and we'll reward your adventurousness with a certificate!\n\nOutside the purpose-built space are the carvers, crafters and photographers, happy to chat and offer their services. The shop sells a wide range of local products and art, as well as the trademark sarongs guests are invited to wear as they enter the experience.",
  phone: '+263 83 2843232',
  email: 'bomareservations@vfsl.co.zw',
  address: 'Victoria Falls Safari Lodge estate, Victoria Falls, Zimbabwe',
  location: 'Just 3km / 2 miles from Victoria Falls city centre',
  hours: '7:00 PM – 10:00 PM daily',
  currency: 'USD',
  heroVideo: 'https://vfsc-umbraco.live.fireworkx.net/media/q4ont1ql/the-boma-dinner-and-drum-show.mp4',
  logoDark: '/logos/logo-dark.png',
  logoLight: '/logos/logo-light.png',
  bookingUrl: '/booking',
  tripadvisorUrl: 'https://www.tripadvisor.com/Restaurant_Review-g293761-d780177-Reviews-The_Boma_Dinner_Drum_Show-Victoria_Falls_Matabeleland_North_Province.html',
  social: {
    facebook: 'https://www.facebook.com/victoriafallssafarilodge',
    instagram: 'https://www.instagram.com/victoriafallssafarilodge/',
    tripadvisor: 'https://www.tripadvisor.co.za/Hotel_Review-g293761-d305391-Reviews-Victoria_Falls_Safari_Lodge-Victoria_Falls_Matabeleland_North_Province.html',
    youtube: 'https://www.youtube.com/@victoriafallssafarilodge',
  },
  downloads: [
    { title: 'The BOMA Dinner Menu', url: 'https://vfsc-umbraco.live.fireworkx.net/media/hqmlvxdp/boma-dinner-menu-2025.pdf' },
    { title: 'The Boma Timeline of Events', url: 'https://vfsc-umbraco.live.fireworkx.net/media/f41jgpsc/the-boma-timeline-of-events-2025.pdf' },
  ],
  enquiries: {
    heading: 'The Boma enquiries',
    description: 'For show times, menus and other information, feel free to give us a call or send us an email.',
    preferToSpeak: 'Prefer to speak to us?',
  },
}

export const highlights = [
  'Offers a vibrant fusion of local cuisine, dance and drumming',
  'Interactive drumming',
  'Arts and crafts for sale',
  'Mopane worm eating challenge',
  'Traditional carvers on sight',
  'Cultural dance show',
  'Mini face paint – a little Boma flair',
]

export const needToKnow = {
  title: 'Need to know',
  items: [
    'Iconic dining and entertainment experience',
    'Four-course meal includes: a platter of nibbles, campfire soup, braai (barbecue) buffet with a variety of meats and local dishes, selection of desserts',
    'Open daily from 7:00 PM to 10:00 PM',
    'Located on the Victoria Falls Safari Lodge estate, just 3km / 2 miles from Victoria Falls city centre',
    'Reservations strongly recommended – book when planning your Victoria Falls itinerary',
    'Vegetarian and halal options available',
    'We accept American Express, MasterCard and Visa',
  ],
}

export const experiences = [
  {
    id: 1,
    title: 'The Welcome',
    time: '6:45 PM',
    description: 'Traditional dancers welcome you as you enter The Boma. Once seated, you are invited to take part in a hand washing ceremony and to taste the local brew, before beginning your four-course dinner.',
  },
  {
    id: 2,
    title: 'Starters',
    time: '7:00 PM',
    description: 'Your four-course dinner begins with a shared starter platter featuring skewered peppered impala, smoked crocodile tail, corn ciabatta and "indumba" bean fritters.',
  },
  {
    id: 3,
    title: 'Campfire Soup',
    time: '7:15 PM',
    description: 'Make your way to the campfire for the chef\'s freshly made soup of the day served with croutons and homemade bread, plus vegetarian dishes, salad bar with local organic produce.',
  },
  {
    id: 4,
    title: 'The Main Course',
    time: '8:00 PM',
    description: 'Enjoy a barbeque buffet including game meats, beef, borewors, chicken, and spit roast of the day, served with peanut butter rice or sadza. Traditional hunter\'s stews, Zambezi bream and kapenta. Halaal diners catered for.',
  },
  {
    id: 5,
    title: 'The Drumming Show',
    time: '8:45 PM',
    description: 'The highlight of the evening — the renowned energetic interactive drumming show. Guests are each handed a djembe drum and learn rhythms. After the drumming, guests are invited to the dance floor.',
  },
  {
    id: 6,
    title: 'Dessert',
    time: '9:15 PM',
    description: 'Round off the feast with something sweet at the dessert bar: malva pudding, koeksisters, chocolate mousse, fruit skewers, creme caramel, chocolate eclairs and apple crumble.',
  },
  {
    id: 7,
    title: 'The Epilogue',
    time: '9:45 PM',
    description: 'The evening is capped off with a group of acapella singers serenading you at your table.',
  },
]

export const menuItems = {
  starters: {
    title: 'IVULAMPHIMBO – Starters',
    description: 'Allow your waiter to serve you a platter of our Chef\'s appetisers',
    items: [
      { name: 'Ingwenya Yasekhunjini LukaZambezi', description: 'Smoked crocodile tail', dietary: [] },
      { name: 'Salted Groundnuts', description: "And 'Nyimo' Corn Fritters", dietary: ['v', 'n'] },
    ],
  },
  salad: {
    title: 'IMBHIDA YABELUNGU',
    description: 'Salad selection with a variety of breads, dressings and traditional accompaniments',
    items: [
      { name: 'Garden Salad', description: 'Mixed greens with cherry tomatoes, cucumber and red onion', dietary: ['v'] },
      { name: 'Greek Salad', description: 'Tomatoes, cucumber, olives and feta cheese', dietary: ['v'] },
      { name: 'Beetroot Salad', description: 'Roasted beetroot with orange and rocket', dietary: ['v'] },
      { name: 'Coleslaw', description: 'Creamy shredded cabbage and carrot', dietary: ['v'] },
      { name: 'Pasta Salad', description: 'Rotini pasta with mixed vegetables and Italian dressing', dietary: ['v'] },
      { name: 'Traditional Accompaniments', description: 'Breads, dressings and local condiments', dietary: ['v'] },
    ],
    dietary: ['v'],
  },
  soup: {
    title: 'UMHLUZI WALAMHLA',
    description: "Chef's freshly made soup of the day served with croutons and homemade bread",
    items: [
      { name: "Chef's Soup of the Day", description: 'Freshly made at the campfire — ask your waiter for today\'s selection', dietary: ['v'] },
      { name: 'Served with', description: 'Croutons and freshly baked homemade bread', dietary: ['v'] },
    ],
    dietary: ['v'],
  },
  mainCourse: {
    title: 'EMAWOSWENI WEBOMA',
    description: 'From the Boma Braai Cook House and Campfire',
    items: [
      { name: 'Grilled Game Meats', description: 'Marinated pork fillet, beef and marinated chicken and spit roast of the day', dietary: [] },
      { name: "Traditional 'Umzingeli' Hunter's Stews", description: 'Try one of our Potjies', dietary: [] },
      { name: 'Peanut Butter Rice & Sadza', description: 'Thick maize meal served as a starch, potato wedges, home baked garlic and herb bread and a variety of sauces', dietary: ['v'] },
      { name: 'Vegetarian Dishes', description: "Chef's daily vegetable stir-fry, pasta dish and bush vegetables", dietary: ['v'] },
    ],
  },
  desserts: {
    title: 'KWEZINAMBITHAYO',
    description: 'Your choice of desserts from the buffet',
    items: [
      { name: 'Malva Pudding', description: 'Traditional South African dessert', dietary: ['v'] },
      { name: 'Koeksisters', description: 'Traditional dough treat', dietary: ['v'] },
      { name: 'Chocolate Mousse', description: 'Rich chocolate mousse', dietary: ['v'] },
      { name: 'Fruit Skewers', description: 'Fresh seasonal fruit', dietary: ['v'] },
      { name: 'Creme Caramel', description: 'Classic caramel custard', dietary: ['v'] },
      { name: 'Chocolate Eclairs', description: 'Filled chocolate pastry', dietary: ['v'] },
      { name: 'Apple Crumble', description: 'Warm apple crumble', dietary: ['v'] },
    ],
  },
  beverages: {
    title: 'BEVERAGES',
    description: "Zimbabwe's Famous Tanganda Tea, Rooibos Tea and Filter Coffee",
    items: [
      { name: 'Tanganda Tea', description: "Zimbabwe's famous tea brand", dietary: [] },
      { name: 'Rooibos Tea', description: 'South African herbal tea', dietary: ['v'] },
      { name: 'Filter Coffee', description: 'Freshly brewed filter coffee', dietary: [] },
      { name: 'Soft Drinks', description: 'Coca-Cola, Fanta, Sprite and tonic water', dietary: [] },
      { name: 'Local Beers', description: 'Castle Lager, Zambezi Lager and more', dietary: [] },
      { name: 'Wines', description: 'Selection of South African wines', dietary: [] },
    ],
  },
}

export const faqs = [
  {
    question: 'Where is The Boma located?',
    answer: 'The BOMA is located on the Victoria Falls Safari Lodge estate just 3km / 2 miles from the Victoria Falls city centre.',
  },
  {
    question: 'What time does The Boma open?',
    answer: 'The Boma is open from 7pm to 10pm.',
  },
  {
    question: 'Is The Boma open for dinner every day?',
    answer: 'Yes, it is.',
  },
  {
    question: 'Do I need to make a booking for dinner?',
    answer: 'Reservations are strongly recommended, and we advise that you book The Boma when booking your Victoria Falls itinerary.',
  },
  {
    question: 'Are vegetarians catered for?',
    answer: 'Yes, they are.',
  },
  {
    question: 'Are halal diners catered for?',
    answer: 'Yes, they are.',
  },
  {
    question: 'What entertainment does The Boma provide?',
    answer: 'Traditional dancing, storytelling, a fortune teller, face painting and interactive drumming.',
  },
  {
    question: 'What is the seating capacity of The Boma?',
    answer: 'The restaurant seats 320 in the dry season (April to October) and 250 in the rainy season (November to March).',
  },
  {
    question: 'Can The Boma be booked for exclusive events?',
    answer: 'Yes, it can, based on a minimum of 250 guests.',
  },
  {
    question: 'Can I use my credit card at The Boma?',
    answer: 'Yes, you can. We accept American Express, MasterCard and Visa.',
  },
  {
    question: 'What currency should I bring?',
    answer: 'The main currency in use in Zimbabwe is US Dollars, however, South African Rand, Euros, British Pounds and Australian dollars are also legal tender. We advise you to travel with smaller denominations such as US$1, US$5, US$10 and US$20 for souvenirs and gratuities.',
  },
  {
    question: 'Is Wi-Fi available?',
    answer: 'Yes, there is complimentary Wi-Fi available.',
  },
  {
    question: 'Is The Boma part of the estate?',
    answer: 'Yes, it is part of the Victoria Falls Safari Collection hospitality group and guests staying at Victoria Falls Safari Lodge, Victoria Falls Safari Club and Victoria Falls Safari Suites can sign their meals at The Boma to their room.',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    location: 'London, UK',
    rating: 5,
    text: 'An absolutely magical evening! The drumming show was incredible and the food was outstanding. A must-do when visiting Victoria Falls.',
  },
  {
    id: 2,
    name: 'James K.',
    location: 'Sydney, Australia',
    rating: 5,
    text: 'We celebrated our anniversary here and it was unforgettable. The cultural experience combined with the delicious food made it a highlight of our trip.',
  },
  {
    id: 3,
    name: 'Maria L.',
    location: 'New York, USA',
    rating: 5,
    text: 'The energy at The Boma is contagious! From the moment you arrive, you are immersed in African culture. The interactive drumming was the highlight.',
  },
  {
    id: 4,
    name: 'Hans W.',
    location: 'Munich, Germany',
    rating: 5,
    text: 'We have travelled extensively and this was one of the best dining experiences we have ever had. The combination of food, culture and entertainment is unmatched.',
  },
  {
    id: 5,
    name: 'Chen Y.',
    location: 'Singapore',
    rating: 5,
    text: 'What a fantastic evening! The performers are incredibly talented and the food is delicious. Highly recommend The Boma to anyone visiting Victoria Falls.',
  },
]

export const timeline = [
  { time: '6:45 PM', event: 'Doors Open & Welcome', description: 'Arrive, dress in chitenge, face painting' },
  { time: '7:00 PM', event: 'Hand Washing Ceremony', description: 'Traditional welcome, local brew tasting' },
  { time: '7:10 PM', event: 'Starters Served', description: 'Chef\'s appetiser platter' },
  { time: '7:25 PM', event: 'Campfire Soup', description: 'Soup of the day at the campfire' },
  { time: '7:45 PM', event: 'Main Course', description: 'Braai buffet & traditional dishes' },
  { time: '8:45 PM', event: 'Drumming Show', description: 'Interactive djembe drumming' },
  { time: '9:15 PM', event: 'Dessert', description: 'Sweet treats from the buffet' },
  { time: '9:45 PM', event: 'Acapella Serenade', description: 'Evening epilogue' },
  { time: '10:00 PM', event: 'Farewell', description: 'Evening concludes' },
]

export const galleryImages = [
  {
    id: 1,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    alt: 'The Boma Dinner & Drum Show venue',
    category: 'venue',
  },
  {
    id: 2,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/ltgcv1ra/the-boma-dinner-drum-show-7.png',
    alt: 'Traditional dancers at The Boma',
    category: 'entertainment',
  },
  {
    id: 3,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/sq1pars5/welcoming-guests-to-the-boma-dinner-drum-show.jpg',
    alt: 'Welcoming guests to The Boma',
    category: 'experience',
  },
  {
    id: 4,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/zhvikcgu/the-boma-dinner-drum-show-8.png',
    alt: 'Guests enjoying dinner at The Boma',
    category: 'dining',
  },
  {
    id: 5,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/gbhinjjq/guests-arriving-at-the-boma-dinner-drum-show.jpg',
    alt: 'Guests arriving at The Boma',
    category: 'experience',
  },
  {
    id: 6,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    alt: 'The Boma interior',
    category: 'venue',
  },
  {
    id: 7,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/4ridlris/victoria-falls-safari-lodge-14.png',
    alt: 'Acapella singers at The Boma',
    category: 'entertainment',
  },
  {
    id: 8,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/vdgah1ka/the-boma-dinner-drum-show-3.png',
    alt: 'Dessert spread at The Boma',
    category: 'dining',
  },
  {
    id: 9,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/fpoebmh2/the-boma-dinner-drum-show-6.png',
    alt: 'Drumming show at The Boma',
    category: 'entertainment',
  },
  {
    id: 10,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/4xibq54b/the-boma-dinner-drum-show-16.png',
    alt: 'The Boma welcome',
    category: 'experience',
  },
  {
    id: 11,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/szwp0utz/the-boma-dinner-drum-show-9.png',
    alt: 'Starters at The Boma',
    category: 'dining',
  },
  {
    id: 12,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/1i2nzih5/victoria-falls-safari-lodge-13.png',
    alt: 'Main course buffet',
    category: 'dining',
  },
  {
    id: 13,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/3buojz0t/victoria-falls-safari-lodge-6.png',
    alt: 'Interactive drumming show',
    category: 'entertainment',
  },
  {
    id: 14,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    alt: 'The Boma experience',
    category: 'experience',
  },
  {
    id: 15,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/jpzfrvfh/the-boma-dinner-drum-show-staff.jpg',
    alt: 'The Boma staff',
    category: 'experience',
  },
  {
    id: 16,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/tnyd4m5n/the-boma-dinner-drum-show.jpg',
    alt: 'The Boma exterior at night',
    category: 'venue',
  },
  {
    id: 17,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/cspnxngk/untitled-design-8.png',
    alt: 'African cultural performance',
    category: 'entertainment',
  },
  {
    id: 18,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/ki4ffqox/untitled-design-2.png',
    alt: 'Traditional Boma cuisine',
    category: 'dining',
  },
  {
    id: 19,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/exrl2vrq/untitled-design-4.png',
    alt: 'Boma drumming circle',
    category: 'entertainment',
  },
  {
    id: 20,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/s5opyul3/untitled-design-6.png',
    alt: 'Guests enjoying the show',
    category: 'experience',
  },
  {
    id: 21,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/unnailka/untitled-design-15.png',
    alt: 'Boma dance performance',
    category: 'entertainment',
  },
  {
    id: 22,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/acaf4oca/victoria-falls-safari-lodge.jpg',
    alt: 'Victoria Falls Safari Lodge',
    category: 'venue',
  },
  {
    id: 23,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/ntljtvug/giraffe-at-victoria-falls-safari-lodge.jpg',
    alt: 'Giraffe at Safari Lodge',
    category: 'experience',
  },
  {
    id: 24,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/lzgdqunb/victoria-falls-safari-collection-aerial-landscape.jpg',
    alt: 'Aerial view of the estate',
    category: 'venue',
  },
  {
    id: 25,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/1einsa52/victoria-falls-safari-lodge-2025-06-11t215349836.png',
    alt: 'Safari Lodge at sunset',
    category: 'venue',
  },
  {
    id: 26,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/merf4mum/victoria-falls-safari-lodge-2025-06-11t213050889.png',
    alt: 'Safari Lodge poolside',
    category: 'venue',
  },
  {
    id: 27,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/oayldy41/victoria-falls-safari-lodge-2025-06-11t214212900.png',
    alt: 'Safari Lodge evening view',
    category: 'venue',
  },
  {
    id: 28,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/nbfdm0ti/victoria-falls-safari-collection-27.png',
    alt: 'Safari wildlife encounter',
    category: 'experience',
  },
  {
    id: 29,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/wfsj3qos/victoria-falls-safari-lodge-blog-1.png',
    alt: 'Safari Lodge bush breakfast',
    category: 'dining',
  },
  {
    id: 30,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/0f2jlpre/vfsl-thumbnail-6.jpg',
    alt: 'Safari Lodge terrace at dusk',
    category: 'venue',
  },
  {
    id: 31,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/a20hdden/guest-at-buffalo-bar-looking-out-at-waterhole.jpg',
    alt: 'Guest at Buffalo Bar overlooking waterhole',
    category: 'experience',
  },
  {
    id: 32,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/iwne5hyq/giraffes-eating-at-victoria-falls-safari-lodge.jpg',
    alt: 'Giraffes feeding at the lodge',
    category: 'experience',
  },
  {
    id: 33,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/m44ntcd5/victoria-falls-safari-lodge-43.png',
    alt: 'Safari Lodge panoramic view',
    category: 'venue',
  },
  {
    id: 34,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/qhul024s/victoria-falls-safari-lodge-42.png',
    alt: 'Safari Lodge dining area',
    category: 'dining',
  },
  {
    id: 35,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/xm4lmdol/victoria-falls-safari-lodge-activities-thumbnail.png',
    alt: 'Safari activities at the lodge',
    category: 'experience',
  },
  {
    id: 36,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/212ckpia/vfsl-website-thumbnail-800x800-12.png',
    alt: 'Evening entertainment at The Boma',
    category: 'entertainment',
  },
  {
    id: 37,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/kveli5pi/vfsl-thumbnail-4.jpg',
    alt: 'Safari Lodge room interior',
    category: 'venue',
  },
  {
    id: 38,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/1pujqfqq/vfsl-website-thumbnail-800x800-2-copy.png',
    alt: 'Wildlife viewing from the lodge',
    category: 'experience',
  },
  {
    id: 39,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/dcshiqy4/vfsl-website-thumbnail-800x800-5.png',
    alt: 'Traditional cultural dance',
    category: 'entertainment',
  },
  {
    id: 40,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/zvsjomv4/vfsl-thumbnail-5.jpg',
    alt: 'Safari Lodge sunset pool',
    category: 'venue',
  },
  {
    id: 41,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/o5hhr4cf/vfsl-thumbnail-7.jpg',
    alt: 'Lodge wildlife encounter',
    category: 'experience',
  },
  {
    id: 42,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/ch1nf4qm/victoria-falls-safari-collection-13.png',
    alt: 'Bush dinner setup',
    category: 'dining',
  },
  {
    id: 43,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/uashzlpa/vfsl-thumbnail-8.jpg',
    alt: 'Safari drive at sunset',
    category: 'experience',
  },
  {
    id: 44,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/gsvhohaq/victoria-falls-safari-collection-6.png',
    alt: 'The Boma drumming circle',
    category: 'entertainment',
  },
  {
    id: 45,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/gg3bezhv/vfsl-website-thumbnail-500x500-3.png',
    alt: 'Cocktails at the bar',
    category: 'dining',
  },
  {
    id: 46,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/qoadytuo/victoria-falls-safari-collection-banners-14.jpg',
    alt: 'Safari Lodge garden setting',
    category: 'venue',
  },
  {
    id: 47,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/xf0la3x3/victoria-falls-safari-collection.png',
    alt: 'Safari Collection panoramic',
    category: 'venue',
  },
  {
    id: 48,
    src: 'https://vfsc-umbraco.live.fireworkx.net/media/k3ahse23/victoria-falls-safari-collection-12.png',
    alt: 'Dining under the stars',
    category: 'dining',
  },
]

export const topBarLinks = [
  { label: 'Contact Us', path: '/contact' },
  { label: 'News & Updates', path: '/news' },
  { label: 'Media & Travel Trade', path: '/travel-trade' },
  { label: 'About Us', path: '/about-us' },
]

export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Accommodation',
    path: '/accommodation',
    children: [
      { label: 'Victoria Falls Safari Club', path: '/accommodation/victoria-falls-safari-club' },
      { label: 'Victoria Falls Safari Lodge', path: '/accommodation/victoria-falls-safari-lodge' },
      { label: 'Victoria Falls Safari Suites', path: '/accommodation/victoria-falls-safari-suites' },
      { label: 'Lokuthula Lodges', path: '/accommodation/lokuthula-lodges' },
    ],
  },
  {
    label: 'Wine & Dine',
    path: '/wine-and-dine',
    children: [
      { label: 'Buffalo Bar', path: '/wine-and-dine/buffalo-bar' },
      { label: 'MaKuwa-Kuwa Restaurant', path: '/wine-and-dine/makuwa-kuwa-restaurant' },
      { label: 'The Boma Café', path: '/wine-and-dine/the-boma-cafe' },
      { label: 'The Boma – Dinner & Drum Show', path: '/experience' },
    ],
  },
  {
    label: 'Functions & Events',
    path: '/functions-and-events',
    children: [
      { label: 'Conferences', path: '/functions-and-events/conferences' },
      { label: 'Weddings', path: '/functions-and-events/weddings' },
      { label: 'Incentive Travel', path: '/functions-and-events/incentive-travel' },
      { label: 'Queen Nandi Place', path: '/functions-and-events/queen-nandi-place' },
    ],
  },
  { label: 'Activities', path: '/activities' },
  { label: 'The Boma', path: '/experience', highlight: true },
]

export const awards = [
  { name: 'ATTA Member', image: '/logos/atta.png', url: 'https://theboma.co.zw/about-us/affiliations' },
  { name: 'TripAdvisor Certificate of Excellence', image: '/logos/tripadvisor-award.png', url: 'https://theboma.co.zw/about-us/affiliations' },
  { name: "Africa's Eden", image: '/logos/africas-eden.png', url: 'https://theboma.co.zw/about-us/affiliations' },
]

export const newsArticles = [
  {
    id: 1,
    title: 'The Boma – Dinner & Drum Show Celebrates Record-Breaking Year',
    slug: 'the-boma-celebrates-record-breaking-year',
    date: '2026-01-21',
    category: 'Food',
    tags: ['The Boma – Dinner & Drum Show', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/2rhjwbjw/victoria-falls-safari-collection-banners-2.jpg',
    excerpt: 'The Boma – Dinner & Drum Show is celebrating a landmark achievement after recording its highest-ever dinner covers in 2025.',
    content: `The Boma – Dinner & Drum Show, one of Victoria Falls' most iconic dining and entertainment experiences, is celebrating a landmark achievement after recording its highest-ever dinner covers in 2025, the strongest run of months since the restaurant first opened in 1992.

This exceptional performance marks a historic milestone for The Boma, reflecting over 30 years of resilience, innovation, and an unwavering commitment to delivering an authentic and memorable Zimbabwean cultural experience. While previous record months were achieved in 2023 and 2024, the numbers in 2025 were unprecedented in the restaurant's history. In total, The Boma hosted over 80,404 dinner guests during the year — a remarkable average of 220 covers every night for 365 days.

The record year was driven by the collective effort and passion of The Boma team, supported by strong leadership and a renewed energy underpinned by several enhancements introduced in 2024 and 2025. These include striking new staff uniforms, enhanced entertainment elements that further elevate the experience, and thoughtful additions to the menu, all of which have resonated strongly with guests and reinforced The Boma's status as a Victoria Falls "must-do" experience for both first-time and repeat visitors to the destination.`,
  },
  {
    id: 2,
    title: 'Victoria Falls Safari Collection Unveils New Intimate Boutique Lodge Opening September 2026',
    slug: 'victoria-falls-safari-collection-unveils-new-boutique-retreat',
    date: '2026-03-15',
    category: 'Homepage Lodges',
    tags: ['Victoria Falls Safari Collection', 'Africa Albida Tourism', 'Albida – Victoria Falls'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Victoria Falls Safari Collection has announced the opening of a new all-inclusive boutique retreat, Albida – Victoria Falls, set to open its doors on 1 September 2026.',
    content: `Victoria Falls Safari Collection has announced the opening of a new all-inclusive boutique retreat, Albida – Victoria Falls, set to open its doors on 1 September 2026.

The new property represents an exciting expansion for the Victoria Falls Safari Collection hospitality group, which already encompasses Victoria Falls Safari Lodge, Victoria Falls Safari Club, Victoria Falls Safari Suites, and Lokuthula Lodges, all located on the Victoria Falls Safari Lodge estate.

Albida – Victoria Falls will offer an intimate and exclusive experience, adding a new dimension to the collection's accommodation portfolio.`,
  },
  {
    id: 3,
    title: 'New Boma Bites Menu Launches at The Boma Café',
    slug: 'new-boma-bites-menu',
    date: '2025-09-10',
    category: 'Food',
    tags: ['The Boma Café', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/vdgah1ka/the-boma-dinner-drum-show-3.png',
    excerpt: 'The Boma Café has introduced a new Boma Bites menu, offering guests a selection of light meals and refreshments.',
    content: `The Boma Café has introduced a new Boma Bites menu, offering guests a selection of light meals and refreshments in a relaxed setting throughout the day.

The new menu complements the café's existing offerings and provides visitors with more dining options on the Victoria Falls Safari Lodge estate. The Boma Café is open for breakfast, lunch, and light meals, making it a convenient stop for guests between activities.

Located within the Victoria Falls Safari Lodge estate, just 3km from Victoria Falls city centre, The Boma Café offers a casual dining experience with views of the surrounding bush.`,
  },
  {
    id: 4,
    title: 'Unwind and Switch Off at the Victoria Falls Safari Spa Sauna',
    slug: 'unwind-and-switch-off-at-the-victoria-falls-safari-spa-sauna',
    date: '2025-08-20',
    category: 'Activities',
    tags: ['Victoria Falls Safari Spa', 'sauna', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/fv0fsspi/victoria-falls-safari-spa-sauna-4.jpg',
    excerpt: 'Our Victoria Falls Safari Spa sauna offers the perfect escape, whether you are staying with us or simply popping in for some well-deserved downtime.',
    content: `Our Victoria Falls Safari Spa sauna offers the perfect escape, whether you are staying with us or simply popping in for some well-deserved downtime.

The Victoria Falls Safari Spa is located on the Victoria Falls Safari Lodge estate and provides a range of wellness treatments designed to rejuvenate body and mind. The spa facilities include a sauna, treatment rooms, and a relaxation area overlooking the African bush.

Guests can choose from a variety of treatments including massages, facials, and body wraps, all using quality products. The Spa Café is also available for light refreshments before or after treatments.`,
  },
  {
    id: 5,
    title: 'Celebrating 30 Years of Loyalty',
    slug: 'celebrating-30-years-of-loyalty',
    date: '2025-04-05',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/bkzfgfj3/victoria-falls-safari-collection-banners-7.jpg',
    excerpt: 'We celebrated incredible team members who have each been part of our journey for an amazing 30 years.',
    content: `We celebrated incredible team members who have each been part of our journey for an amazing 30 years, a testament to the dedication and passion within our team.

These loyal staff members have been integral to the success of Victoria Falls Safari Collection and The Boma – Dinner & Drum Show, contributing their skills and commitment to delivering exceptional guest experiences over three decades.

Their longevity reflects the culture of appreciation and growth that defines our hospitality group, and we are grateful for their unwavering dedication to our guests and our mission.`,
  },
  {
    id: 6,
    title: 'VAT Update – Your Questions Answered',
    slug: 'vat-update-your-questions-answered',
    date: '2025-03-10',
    category: 'Corporate Social Responsibility',
    tags: ['Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'We answer your frequently asked questions about the recent VAT changes and how they affect your dining experience at The Boma.',
    content: `We answer your frequently asked questions about the recent VAT changes and how they affect your dining experience at The Boma.

Understanding the impact of VAT on hospitality services is important for our guests. We have compiled answers to the most commonly asked questions to ensure transparency and clarity.

Our team is always available to discuss any concerns you may have regarding pricing and charges during your visit.`,
  },
  {
    id: 7,
    title: 'Must-Try Adventure Activities in Victoria Falls',
    slug: 'must-try-adventure-activities-in-victoria-falls',
    date: '2025-02-15',
    category: 'Activities',
    tags: ['Victoria Falls', 'Activities', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/yf4jczn2/victoria-falls-activities.jpg',
    excerpt: 'Whether you are a thrill seeker or more of a "nervous but excited" kind of explorer, Victoria Falls serves up experiences that get your heart racing.',
    content: `Whether you are a thrill seeker or more of a "nervous but excited" kind of explorer, Victoria Falls serves up experiences that get your heart racing and your camera working overtime.

From bungee jumping off the Victoria Falls Bridge to white-water rafting on the Zambezi River, the destination offers an incredible range of adventure activities. Other popular experiences include helicopter flights over the Falls, game drives in nearby national parks, and walking safaris with experienced guides.

Victoria Falls Safari Collection can help arrange any of these activities as part of your stay.`,
  },
  {
    id: 8,
    title: 'Traveller Review Awards 2026 by Booking.com',
    slug: 'traveller-review-awards-2026-by-booking-com',
    date: '2026-02-01',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Booking.com'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/nbfdm0ti/victoria-falls-safari-collection-27.png',
    excerpt: 'This recognition celebrates outstanding hospitality and the people behind every exceptional guest experience.',
    content: `This recognition celebrates outstanding hospitality and the people behind every exceptional guest experience.

The Traveller Review Awards by Booking.com honour accommodation providers who consistently deliver outstanding guest experiences. Receiving this award reflects the dedication of our entire team across the Victoria Falls Safari Collection properties.

We are grateful to our guests for their kind reviews and continued support, which inspire us to maintain the highest standards of hospitality.`,
  },
  {
    id: 9,
    title: 'Our Commitment to a Cleaner Environment',
    slug: 'our-commitment-to-a-cleaner-environment',
    date: '2025-07-20',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Conservation'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/uqomc111/monthly-cleanup-at-victoria-falls-safari-collection-5.jpg',
    excerpt: 'Our team recently took part in a litter clean-up, collecting 12 bags of litter with the support of 12 staff members.',
    content: `Our team recently took part in a litter clean-up, collecting 12 bags of litter with the support of 12 staff members.

Environmental stewardship is a core value at Victoria Falls Safari Collection. Our regular clean-up initiatives help maintain the natural beauty of the Victoria Falls area and contribute to the broader conservation efforts in the region.

We encourage our guests and community members to join us in keeping Victoria Falls clean and pristine for future generations.`,
  },
  {
    id: 10,
    title: 'Recognising the Partners Behind Our Success',
    slug: 'recognising-the-partners-behind-our-success',
    date: '2025-06-01',
    category: 'Events',
    tags: ['Victoria Falls Safari Collection', 'Partners'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'We take a moment to recognise and celebrate the partners whose support and collaboration have been instrumental in our journey.',
    content: `We take a moment to recognise and celebrate the partners whose support and collaboration have been instrumental in our journey.

From travel trade partners who bring guests from around the world, to local suppliers who provide the finest ingredients for our kitchens, each partner plays a vital role in the Victoria Falls Safari Collection experience.

Strong partnerships are the foundation of exceptional hospitality, and we are proud to work with organisations that share our commitment to excellence.`,
  },
  {
    id: 11,
    title: 'SmileStar Dental Outreach Returns to Zimbabwe',
    slug: 'smilestar-dental-outreach-returns-to-zimbabwe',
    date: '2025-05-15',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Community'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/qslmrc1y/vfsl-thumbnail-13.jpg',
    excerpt: 'An international team from SmileStar returns to Zimbabwe for another life-changing dental outreach programme.',
    content: `An international team from SmileStar returns to Zimbabwe for another life-changing dental outreach programme.

SmileStar provides free dental care to communities in need, and Victoria Falls Safari Collection is proud to support this initiative. The outreach programme brings together dental professionals who volunteer their time and expertise to provide essential oral healthcare services.

This partnership reflects our ongoing commitment to making a positive impact in the communities surrounding our properties.`,
  },
  {
    id: 12,
    title: 'Zimbabwe Shines at ITB Berlin with International Tourism Awards',
    slug: 'zimbabwe-shines-at-itb-berlin',
    date: '2025-03-20',
    category: 'Corporate Social Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Zimbabwe', 'ITB Berlin'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Zimbabwe received recognition at the prestigious ITB Berlin travel trade show, highlighting the country\'s growing tourism sector.',
    content: `Zimbabwe received recognition at the prestigious ITB Berlin travel trade show, highlighting the country's growing tourism sector.

The awards celebrate destinations and organisations that demonstrate excellence in tourism, and Zimbabwe's recognition on this international stage underscores the country's appeal as a world-class travel destination.

Victoria Falls Safari Collection is proud to be part of Zimbabwe's tourism success story, welcoming guests from around the globe to experience the magic of Victoria Falls.`,
  },
  {
    id: 13,
    title: 'Victoria Falls Safari Collection Backs Youth Tennis Initiative',
    slug: 'vfsc-backs-youth-tennis-initiative',
    date: '2025-02-28',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Community', 'Youth'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/gqbbvxmd/vfsl-thumbnail-20.jpg',
    excerpt: 'Victoria Falls Safari Collection is supporting a youth tennis initiative to promote sport and development among young people in the area.',
    content: `Victoria Falls Safari Collection is supporting a youth tennis initiative to promote sport and development among young people in the area.

Sport plays an important role in youth development, teaching valuable life skills such as discipline, teamwork, and perseverance. Our support for this initiative reflects our commitment to investing in the future of the Victoria Falls community.

We believe that nurturing young talent contributes to the long-term wellbeing and prosperity of the communities where we operate.`,
  },
  {
    id: 14,
    title: 'Victoria Falls Safari Spa Connecting with Industry Partners',
    slug: 'vfsc-spa-connecting-with-industry-partners',
    date: '2025-04-10',
    category: 'Activities',
    tags: ['Victoria Falls Safari Spa', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/xquontkp/victoria-falls-safari-spa-sauna-3.jpg',
    excerpt: 'The Victoria Falls Safari Spa is building relationships with industry partners to enhance wellness offerings for guests.',
    content: `The Victoria Falls Safari Spa is building relationships with industry partners to enhance wellness offerings for guests.

By collaborating with leading wellness brands and professionals, the spa continues to expand its range of treatments and services. These partnerships ensure that guests receive the highest quality wellness experiences during their stay.

The spa's commitment to excellence has made it a sought-after destination for relaxation and rejuvenation in Victoria Falls.`,
  },
  {
    id: 15,
    title: 'Victoria Falls – The Smoke is Thundering Right Now',
    slug: 'victoria-falls-the-smoke-is-thundering',
    date: '2025-05-01',
    category: 'Conservation',
    tags: ['Victoria Falls', 'Conservation', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'The Victoria Falls is at its most spectacular right now, with water levels at their peak during the rainy season.',
    content: `The Victoria Falls is at its most spectacular right now, with water levels at their peak during the rainy season.

Known locally as "Mosi-oa-Tunya" — The Smoke That Thunders — the Falls are one of the Seven Natural Wonders of the World. During peak flow, the spray can be seen from kilometres away, creating a dramatic and unforgettable sight.

Visiting Victoria Falls during this time offers a truly awe-inspiring experience that showcases the raw power of nature.`,
  },
  {
    id: 16,
    title: 'Lokuthula Lodges Earns RCI Gold Crown Status',
    slug: 'lokuthula-lodges-earns-rci-gold-crown',
    date: '2025-01-15',
    category: 'Homepage Lodges',
    tags: ['Lokuthula Lodges', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    excerpt: 'Lokuthula Lodges has been awarded the prestigious RCI Gold Crown designation, recognising its exceptional holiday experience.',
    content: `Lokuthula Lodges has been awarded the prestigious RCI Gold Crown designation, recognising its exceptional holiday experience.

The RCI Gold Crown is one of the most prestigious awards in the vacation ownership industry, awarded to resorts that consistently deliver exceptional guest experiences and maintain the highest standards of quality.

This achievement reflects the dedication of the Lokuthula team and the unique self-catering accommodation experience offered on the Victoria Falls Safari Lodge estate.`,
  },
  {
    id: 17,
    title: 'A Winter Initiative Backed by Community',
    slug: 'a-winter-initiative-backed-by-community',
    date: '2025-06-15',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Community'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/gqbbvxmd/vfsl-thumbnail-20.jpg',
    excerpt: 'Our community came together for a winter initiative to support those in need during the colder months.',
    content: `Our community came together for a winter initiative to support those in need during the colder months.

Victoria Falls Safari Collection believes in giving back to the community that supports our business. This winter initiative provided warmth and essential items to vulnerable members of the local community.

We are grateful to our staff, guests, and partners who contributed to making this initiative a success.`,
  },
  {
    id: 18,
    title: 'Africa Albida Tourism Announces New Directors',
    slug: 'africa-albida-tourism-announces-new-directors',
    date: '2025-03-01',
    category: 'Events',
    tags: ['Africa Albida Tourism', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Africa Albida Tourism, the hospitality group behind Victoria Falls Safari Collection, has announced the appointment of new directors.',
    content: `Africa Albida Tourism, the hospitality group behind Victoria Falls Safari Collection, has announced the appointment of new directors.

The new appointments reflect the company's growth and strategic vision for the future. These experienced leaders bring a wealth of knowledge and expertise that will help drive the continued success of the Victoria Falls Safari Collection properties.

We look forward to the exciting developments that lie ahead under this strengthened leadership team.`,
  },
  {
    id: 19,
    title: 'Victoria Falls Safari Collection Celebrates Marathon Champions',
    slug: 'vfsc-celebrates-marathon-champions',
    date: '2025-04-20',
    category: 'Events',
    tags: ['Victoria Falls Safari Collection', 'Events'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'We celebrated the achievements of marathon champions at a special event recognising sporting excellence in the region.',
    content: `We celebrated the achievements of marathon champions at a special event recognising sporting excellence in the region.

Sport and community go hand in hand at Victoria Falls Safari Collection. We are proud to support local athletes and celebrate their achievements, which inspire others in the community to pursue excellence.

These celebrations reinforce our commitment to being an active and supportive member of the Victoria Falls community.`,
  },
  {
    id: 20,
    title: 'Queen Nandi Place Officially Launched in Victoria Falls',
    slug: 'queen-nandi-place-officially-launched',
    date: '2025-02-10',
    category: 'Events',
    tags: ['Queen Nandi Place', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/fpoebmh2/the-boma-dinner-drum-show-6.png',
    excerpt: 'Queen Nandi Place, a state-of-the-art MICE facility, has been officially launched at the Victoria Falls Safari Lodge estate.',
    content: `Queen Nandi Place, a state-of-the-art MICE facility, has been officially launched at the Victoria Falls Safari Lodge estate.

The versatile event space caters to conferences, weddings, incentive travel, and private celebrations. With modern facilities and a stunning bush setting, Queen Nandi Place offers a unique venue for any occasion.

The facility is named after Queen Nandi, mother of King Shaka Zulu, reflecting the rich cultural heritage of the region.`,
  },
  {
    id: 21,
    title: '3 Night Super Deal Special',
    slug: '3-night-super-deal-special',
    date: '2025-01-20',
    category: 'Activities',
    tags: ['Victoria Falls Safari Collection', 'Specials'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Take advantage of our 3-night super deal special and experience the best of Victoria Falls at an exceptional value.',
    content: `Take advantage of our 3-night super deal special and experience the best of Victoria Falls at an exceptional value.

This package includes accommodation at one of our Victoria Falls Safari Collection properties, daily breakfast, and a curated selection of experiences designed to showcase the best of the destination.

Contact our reservations team to book this limited-time offer and start planning your Victoria Falls adventure.`,
  },
  {
    id: 22,
    title: '10 Experiences We Love at Victoria Falls Safari Lodge',
    slug: '10-experiences-we-love-at-victoria-falls-safari-lodge',
    date: '2025-06-01',
    category: 'Itinerary',
    tags: ['Victoria Falls Safari Lodge', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/ki4ffqox/untitled-design-2.png',
    excerpt: 'From thrilling wildlife encounters to relaxing spa treatments, here are our top 10 unforgettable experiences.',
    content: `From thrilling wildlife encounters to relaxing spa treatments, here are our top 10 unforgettable experiences at Victoria Falls Safari Lodge.

1. Watching elephants from the lodge deck
2. The Boma – Dinner & Drum Show
3. Sunset drinks at Buffalo Bar
4. Spa treatments at Victoria Falls Safari Spa
5. Game drives in the surrounding area
6. Helicopter flights over Victoria Falls
7. Walking safaris with experienced guides
8. Cultural village visits
9. Fishing on the Zambezi River
10. Stargazing from the lodge

Each experience is designed to immerse guests in the magic of Victoria Falls and the African bush.`,
  },
  {
    id: 23,
    title: '4-Night Super Deal Special',
    slug: '4-night-super-deal-special',
    date: '2025-02-05',
    category: 'Activities',
    tags: ['Victoria Falls Safari Collection', 'Specials'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'Extend your stay with our 4-night super deal special and enjoy even more of what Victoria Falls has to offer.',
    content: `Extend your stay with our 4-night super deal special and enjoy even more of what Victoria Falls has to offer.

This package provides additional time to explore the destination at your own pace, with curated experiences and comfortable accommodation at one of our properties.

Whether you are seeking adventure, relaxation, or cultural immersion, this extended stay package offers exceptional value.`,
  },
  {
    id: 24,
    title: 'Victoria Falls Safari Collection: Celebrating 30 Years',
    slug: 'vfsc-celebrating-30-years',
    date: '2025-01-01',
    category: 'Events',
    tags: ['Victoria Falls Safari Collection', 'Anniversary'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Victoria Falls Safari Collection marks three decades of hospitality excellence in one of Africa\'s most iconic destinations.',
    content: `Victoria Falls Safari Collection marks three decades of hospitality excellence in one of Africa's most iconic destinations.

Since opening our doors, we have welcomed millions of guests and established ourselves as a leading hospitality group in Victoria Falls. Our properties — Victoria Falls Safari Lodge, Victoria Falls Safari Club, Victoria Falls Safari Suites, and Lokuthula Lodges — each offer a unique perspective on African hospitality.

As we celebrate this milestone, we look forward to many more years of creating unforgettable memories for our guests.`,
  },
  {
    id: 25,
    title: 'Where There\'s Smoke – The Story of the Victoria Falls Safari Lodge',
    slug: 'where-theres-smoke-vfsl-story',
    date: '2024-11-15',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Lodge', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'The story of how Victoria Falls Safari Lodge came to be, from its visionary beginnings to its current status as an award-winning property.',
    content: `The story of how Victoria Falls Safari Lodge came to be, from its visionary beginnings to its current status as an award-winning property.

Built on the principles of conservation and community, the lodge was designed to harmonise with its natural surroundings while providing world-class accommodation and experiences.

Over the years, the property has evolved and expanded, but its core values remain the same: to deliver exceptional hospitality while protecting and preserving the environment.`,
  },
  {
    id: 26,
    title: 'A Victoria Falls 3-Night Itinerary',
    slug: 'a-victoria-falls-3-night-itinerary',
    date: '2024-10-20',
    category: 'Itinerary',
    tags: ['Victoria Falls', 'Itinerary', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/ki4ffqox/untitled-design-2.png',
    excerpt: 'Make the most of your time in Victoria Falls with this carefully curated 3-night itinerary.',
    content: `Make the most of your time in Victoria Falls with this carefully curated 3-night itinerary.

Day 1: Arrive and settle in at Victoria Falls Safari Lodge. Enjoy sundowners at Buffalo Bar while watching wildlife at the watering hole.

Day 2: Morning helicopter flight over Victoria Falls, afternoon game drive, and evening at The Boma – Dinner & Drum Show.

Day 3: Walking safari, spa treatment at Victoria Falls Safari Spa, and sunset cruise on the Zambezi River.

Day 4: Morning cultural village visit before departure.

This itinerary combines adventure, relaxation, and cultural immersion for the ultimate Victoria Falls experience.`,
  },
  {
    id: 27,
    title: 'Extend Your Stay and Get Free Nights',
    slug: 'extend-your-stay-free-nights',
    date: '2024-12-01',
    category: 'Green Season',
    tags: ['Victoria Falls Safari Collection', 'Specials'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Stay longer and save with our green season offer — extend your stay and receive complimentary additional nights.',
    content: `Stay longer and save with our green season offer — extend your stay and receive complimentary additional nights.

The green season in Victoria Falls offers a unique perspective on the destination, with lush vegetation, fewer crowds, and exceptional birdwatching. It is also a wonderful time to enjoy the Victoria Falls at their most dramatic.

Take advantage of this special offer to experience the beauty of Victoria Falls during the green season.`,
  },
  {
    id: 28,
    title: '5 Reasons to Choose Victoria Falls Safari Collection',
    slug: '5-reasons-to-choose-victoria-falls-safari-collection',
    date: '2024-09-15',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/z5xj1bv1/vfsl-website-thumbnail-800x800-11.png',
    excerpt: 'As if the bush, village visits, spa indulgence, wildlife, and adventures were not enough — here are five more reasons to choose us.',
    content: `As if the bush, village visits, spa indulgence, wildlife, and adventures were not enough — here are five more reasons to make your Victoria Falls experience truly unforgettable.

1. Unmatched location on the Victoria Falls Safari Lodge estate
2. The legendary Boma – Dinner & Drum Show
3. Award-winning hospitality across all properties
4. Comprehensive range of accommodation options
5. Deep commitment to conservation and community

Victoria Falls Safari Collection offers a holistic Victoria Falls experience that goes beyond accommodation.`,
  },
  {
    id: 29,
    title: 'Ele-Collection Tackles Victoria Falls\' Plastic Waste',
    slug: 'ele-collection-tackles-plastic-waste',
    date: '2024-08-10',
    category: 'Corporate Social Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Conservation', 'Community'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'The Ele-Collection initiative is addressing plastic waste in Victoria Falls through innovative recycling and community engagement.',
    content: `The Ele-Collection initiative is addressing plastic waste in Victoria Falls through innovative recycling and community engagement.

Plastic pollution is a significant environmental challenge, and Ele-Collection is working to create sustainable solutions that reduce waste and protect the natural environment.

Victoria Falls Safari Collection supports this initiative as part of our broader commitment to environmental sustainability and responsible tourism.`,
  },
  {
    id: 30,
    title: 'We\'re Hosting Africa\'s Eden Global Travel Show',
    slug: 'hosting-africas-eden-global-travel-show',
    date: '2024-07-15',
    category: 'Events',
    tags: ['Africa\'s Eden', 'Victoria Falls Safari Collection', 'Events'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Victoria Falls Safari Collection is proud to host the Africa\'s Eden Global Travel Show, bringing together travel industry professionals.',
    content: `Victoria Falls Safari Collection is proud to host the Africa's Eden Global Travel Show, bringing together travel industry professionals from around the world.

The event showcases the best of southern African tourism and provides a platform for networking, collaboration, and business development.

Hosting this prestigious event underscores Victoria Falls' status as a world-class destination and our commitment to promoting tourism in the region.`,
  },
  {
    id: 31,
    title: 'Unpacking Africa\'s Eden Global Travel Show',
    slug: 'unpacking-africas-eden-global-travel-show',
    date: '2024-08-01',
    category: 'Events',
    tags: ['Africa\'s Eden', 'Victoria Falls Safari Collection', 'Events'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'A look back at the highlights and outcomes of the Africa\'s Eden Global Travel Show hosted at Victoria Falls Safari Lodge.',
    content: `A look back at the highlights and outcomes of the Africa's Eden Global Travel Show hosted at Victoria Falls Safari Lodge.

The event brought together tour operators, travel agents, media, and tourism stakeholders from across the globe. Key highlights included networking sessions, destination presentations, and familiarisation tours of Victoria Falls.

The success of the event has led to increased interest in Victoria Falls as a destination and strengthened partnerships within the travel industry.`,
  },
  {
    id: 32,
    title: 'Stay Where Wildlife Comes to You',
    slug: 'stay-where-wildlife-comes-to-you',
    date: '2024-06-15',
    category: 'Game Viewing',
    tags: ['Victoria Falls Safari Lodge', 'Wildlife', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    excerpt: 'One of the unique features of staying at Victoria Falls Safari Lodge is the wildlife that visits the watering hole right at your doorstep.',
    content: `One of the unique features of staying at Victoria Falls Safari Lodge is the wildlife that visits the watering hole right at your doorstep.

Elephants, buffalo, and a variety of other animals are regularly spotted from the lodge's public areas and rooms. This intimate wildlife experience sets Victoria Falls Safari Lodge apart from other accommodation options in the area.

The lodge's elevated position provides panoramic views of the watering hole, making every moment a potential wildlife encounter.`,
  },
  {
    id: 33,
    title: 'A Fly-on-the-Wall View of Wildlife at VFSC',
    slug: 'fly-on-the-wall-view-of-wildlife',
    date: '2024-05-10',
    category: 'Game Viewing',
    tags: ['Victoria Falls Safari Collection', 'Wildlife', 'Game Viewing'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    excerpt: 'Our wildlife cameras capture incredible moments as animals visit the watering hole at Victoria Falls Safari Lodge.',
    content: `Our wildlife cameras capture incredible moments as animals visit the watering hole at Victoria Falls Safari Lodge.

From elephants bathing at dawn to buffalo herds passing through at dusk, these candid moments showcase the rich biodiversity of the area surrounding our properties.

Guests at Victoria Falls Safari Lodge can enjoy these wildlife encounters in real time, adding an extraordinary dimension to their stay.`,
  },
  {
    id: 34,
    title: 'Lokuthula Lodges Undergo Refurbishment',
    slug: 'lokuthula-lodges-refurbishment',
    date: '2024-04-05',
    category: 'Homepage Lodges',
    tags: ['Lokuthula Lodges', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    excerpt: 'Lokuthula Lodges has undergone a comprehensive refurbishment to enhance the guest experience.',
    content: `Lokuthula Lodges has undergone a comprehensive refurbishment to enhance the guest experience.

The upgrades include refreshed interiors, modernised kitchen facilities, and improved outdoor areas. These enhancements maintain the lodges' character while providing guests with contemporary comforts.

Lokuthula Lodges continues to offer self-catering accommodation in a tranquil bush setting, with full access to the Victoria Falls Safari Lodge estate facilities.`,
  },
  {
    id: 35,
    title: 'Victoria Falls Safari Lodge Livestream Delivers Incredible Sightings',
    slug: 'vfsl-livestream-incredible-sightings',
    date: '2024-03-15',
    category: 'Game Viewing',
    tags: ['Victoria Falls Safari Lodge', 'Wildlife', 'Game Viewing'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    excerpt: 'Our wildlife livestream has captured some incredible animal sightings at the Victoria Falls Safari Lodge watering hole.',
    content: `Our wildlife livestream has captured some incredible animal sightings at the Victoria Falls Safari Lodge watering hole.

Viewers from around the world have watched elephants, buffalo, and other wildlife visit the watering hole in real time. The livestream has become a popular way for past guests to reconnect with the lodge and for prospective visitors to glimpse what awaits them.

Tune in to experience the magic of African wildlife from anywhere in the world.`,
  },
  {
    id: 36,
    title: 'Rising Stars of VFSL Running Legacy',
    slug: 'rising-stars-of-vfsl-running-legacy',
    date: '2024-02-20',
    category: 'Events',
    tags: ['Victoria Falls Safari Lodge', 'Events', 'Community'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/gqbbvxmd/vfsl-thumbnail-20.jpg',
    excerpt: 'The VFSL Running Legacy event showcased emerging talent in the local running community.',
    content: `The VFSL Running Legacy event showcased emerging talent in the local running community.

Running events bring the community together and promote healthy lifestyles. Victoria Falls Safari Collection is proud to support athletics in the region and celebrate the achievements of local runners.

These events reflect our commitment to being an active and supportive member of the Victoria Falls community.`,
  },
  {
    id: 37,
    title: 'Rose of Charity Children\'s Home Winter Warmer',
    slug: 'rose-of-charity-childrens-home-winter-warmer',
    date: '2024-01-25',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls Safari Collection', 'Community'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/gqbbvxmd/vfsl-thumbnail-20.jpg',
    excerpt: 'Victoria Falls Safari Collection supported the Rose of Charity Children\'s Home with a winter warmer initiative.',
    content: `Victoria Falls Safari Collection supported the Rose of Charity Children's Home with a winter warmer initiative.

Providing warmth and care to vulnerable children during the cold winter months is a cause close to our hearts. Our team contributed clothing, blankets, and essential items to support the children's home.

This initiative is part of our ongoing commitment to making a positive difference in the lives of those in our community.`,
  },
  {
    id: 38,
    title: 'Experience Traditional Zimbabwean Cuisine',
    slug: 'experience-traditional-zimbabwean-cuisine',
    date: '2024-03-01',
    category: 'Food',
    tags: ['The Boma – Dinner & Drum Show', 'Food', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/zhvikcgu/the-boma-dinner-drum-show-8.png',
    excerpt: 'Discover the rich flavours of traditional Zimbabwean cuisine at The Boma – Dinner & Drum Show.',
    content: `Discover the rich flavours of traditional Zimbabwean cuisine at The Boma – Dinner & Drum Show.

Our menu features a four-course buffet that celebrates the best of local cuisine, from the campfire soup to the braai buffet and selection of desserts. Each dish is prepared with care using locally sourced ingredients.

The dining experience is complemented by interactive drumming, traditional dancing, and cultural entertainment that brings Zimbabwean heritage to life.`,
  },
  {
    id: 39,
    title: 'A Long Stay in Victoria Falls at Lokuthula Lodges',
    slug: 'a-long-stay-at-lokuthula-lodges',
    date: '2024-02-10',
    category: 'Events',
    tags: ['Lokuthula Lodges', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    excerpt: 'Extended stays at Lokuthula Lodges offer a unique opportunity to fully immerse yourself in the Victoria Falls lifestyle.',
    content: `Extended stays at Lokuthula Lodges offer a unique opportunity to fully immerse yourself in the Victoria Falls lifestyle.

With self-catering facilities, multiple bedrooms, and a private braai area, Lokuthula Lodges provides the perfect base for an extended holiday. Guests have full access to all Victoria Falls Safari Lodge estate facilities.

Long-stay guests often discover hidden gems and develop a deeper connection with the destination that short-term visitors may miss.`,
  },
  {
    id: 40,
    title: 'Tich Ncube – The Victoria Falls Artist Giving Back to Wildlife',
    slug: 'tich-ncube-artist-giving-back',
    date: '2024-01-10',
    category: 'Community & Responsibility',
    tags: ['Victoria Falls', 'Community', 'Conservation'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    excerpt: 'Local artist Tich Ncube combines his passion for art with wildlife conservation, creating beautiful works that support conservation efforts.',
    content: `Local artist Tich Ncube combines his passion for art with wildlife conservation, creating beautiful works that support conservation efforts.

Through his art, Tich raises awareness about the importance of wildlife protection and the challenges facing animals in the region. A portion of his proceeds goes directly to conservation initiatives.

Victoria Falls Safari Collection is proud to support local artists who use their talent to make a positive impact on conservation and community development.`,
  },
  {
    id: 41,
    title: 'One Hundred Days of Victoria Falls Safari Spa',
    slug: 'one-hundred-days-of-vfsc-spa',
    date: '2024-04-15',
    category: 'Activities',
    tags: ['Victoria Falls Safari Spa', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/xquontkp/victoria-falls-safari-spa-sauna-3.jpg',
    excerpt: 'Celebrating 100 days of the Victoria Falls Safari Spa, offering guests a tranquil wellness retreat.',
    content: `Celebrating 100 days of the Victoria Falls Safari Spa, offering guests a tranquil wellness retreat.

Since opening, the spa has welcomed guests seeking relaxation and rejuvenation in a stunning bush setting. The spa's range of treatments, from massages to facials, has been well received by guests.

This milestone reflects the growing demand for wellness experiences in Victoria Falls and our commitment to providing holistic hospitality.`,
  },
  {
    id: 42,
    title: 'A Road Trip to Victoria Falls with Kids',
    slug: 'a-road-trip-to-victoria-falls-with-kids',
    date: '2024-05-01',
    category: 'Homepage Lodges',
    tags: ['Victoria Falls Safari Collection', 'Family'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    excerpt: 'Planning a family road trip to Victoria Falls? Here are our tips for making the journey enjoyable for everyone.',
    content: `Planning a family road trip to Victoria Falls? Here are our tips for making the journey enjoyable for everyone.

Victoria Falls is a fantastic family destination, offering activities for all ages. From wildlife viewing to cultural experiences, there is something to capture the imagination of every family member.

Lokuthula Lodges and Victoria Falls Safari Suites are particularly well-suited for families, offering spacious self-catering accommodation with room for everyone.`,
  },
  {
    id: 43,
    title: 'Tips for Travelling to Victoria Falls',
    slug: 'tips-for-travelling-to-victoria-falls',
    date: '2024-06-01',
    category: 'Activities',
    tags: ['Victoria Falls', 'Travel Tips', 'Victoria Falls Safari Collection'],
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    excerpt: 'Essential tips for planning your trip to Victoria Falls, from best times to visit to what to pack.',
    content: `Essential tips for planning your trip to Victoria Falls, from best times to visit to what to pack.

Best time to visit: The dry season (April to October) offers excellent wildlife viewing and pleasant weather. The rainy season (November to March) sees the Falls at their most dramatic.

What to pack: Light, neutral-coloured clothing, comfortable walking shoes, sunscreen, a hat, and a camera. For game drives, bring binoculars and a light jacket.

Visa requirements: Check the latest visa requirements for Zimbabwe before travelling. Many nationalities can obtain a visa on arrival.

Victoria Falls Safari Collection's reservations team can assist with planning your trip and arranging activities.`,
  },
]

export const newsFilterCategories = [
  'Activities',
  'Art',
  'Community & Responsibility',
  'Conservation',
  'Corporate Social Responsibility',
  'Events',
  'Food',
  'Game Viewing',
  'Green Season',
  'Home Bars Restaurants',
  'Homepage Lodges',
  'Itinerary',
]

export const newsletterSignup = {
  heading: 'Get News & Updates',
  description: 'Stay informed with the latest news, events, and special offers from Victoria Falls Safari Collection.',
  fields: [
    { name: 'fullName', label: 'Full Name', type: 'text', required: true },
    { name: 'country', label: 'Country of Residence', type: 'text', required: true },
    { name: 'email', label: 'Email Address', type: 'email', required: true },
  ],
  buttonText: 'Subscribe',
}

export const dietaryIcons = {
  v: { label: 'Vegetarian', color: 'text-green-600' },
  n: { label: 'Contains Nuts', color: 'text-amber-600' },
  h: { label: 'Halal', color: 'text-blue-600' },
}

export const vfscAccommodation = [
  {
    slug: 'victoria-falls-safari-club',
    title: 'Victoria Falls Safari Club',
    tagline: 'Exclusive elegance in the heart of the bush',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
  },
  {
    slug: 'victoria-falls-safari-lodge',
    title: 'Victoria Falls Safari Lodge',
    tagline: 'Award-winning lodge with stunning views',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
  },
  {
    slug: 'victoria-falls-safari-suites',
    title: 'Victoria Falls Safari Suites',
    tagline: 'Spacious luxury for families and groups',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/3buojz0t/victoria-falls-safari-lodge-6.png',
  },
  {
    slug: 'lokuthula-lodges',
    title: 'Lokuthula Lodges',
    tagline: 'Self-catering lodges in a tranquil setting',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
  },
]

export const vfscWineAndDine = [
  {
    slug: 'buffalo-bar',
    title: 'Buffalo Bar',
    tagline: 'Relaxed drinks and sundowners',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/4ridlris/victoria-falls-safari-lodge-14.png',
  },
  {
    slug: 'makuwa-kuwa-restaurant',
    title: 'MaKuwa-Kuwa Restaurant',
    tagline: 'Fine dining with a view',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/zhvikcgu/the-boma-dinner-drum-show-8.png',
  },
  {
    slug: 'the-boma-cafe',
    title: 'The Boma Café',
    tagline: 'Casual dining and refreshments',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/vdgah1ka/the-boma-dinner-drum-show-3.png',
  },
]

export const vfscFunctions = [
  {
    slug: 'conferences',
    title: 'Conferences',
    tagline: 'Professional venues for your events',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/szwp0utz/the-boma-dinner-drum-show-9.png',
  },
  {
    slug: 'weddings',
    title: 'Weddings',
    tagline: 'Dream weddings in an African paradise',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/1i2nzih5/victoria-falls-safari-lodge-13.png',
  },
  {
    slug: 'incentive-travel',
    title: 'Incentive Travel',
    tagline: 'Reward your team with an unforgettable experience',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/4xibq54b/the-boma-dinner-drum-show-16.png',
  },
  {
    slug: 'queen-nandi-place',
    title: 'Queen Nandi Place',
    tagline: 'Versatile event space for any occasion',
    image: 'https://vfsc-umbraco.live.fireworkx.net/media/fpoebmh2/the-boma-dinner-drum-show-6.png',
  },
]

export const vfscData = {
  safariClub: {
    title: 'Victoria Falls Safari Club',
    subtitle: 'Exclusive elegance in the heart of the bush',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/b5vlmnje/victoria-falls-safari-lodge-22.png',
    description: `The Victoria Falls Safari Club offers an exclusive and intimate accommodation experience on the Victoria Falls Safari Lodge estate. With just 16 rooms, the Club provides personalised service and attention to detail that discerning travellers expect.

Each room is beautifully appointed with modern amenities while maintaining an authentic African aesthetic. The Club features a private swimming pool, dedicated concierge service, and complimentary minibar.

Guests at the Club have full access to all facilities across the Victoria Falls Safari Lodge estate, including The Boma – Dinner & Drum Show, MaKuwa-Kuwa Restaurant, and Buffalo Bar.`,
    features: [
      '16 beautifully appointed rooms',
      'Private swimming pool',
      'Complimentary minibar',
      'Dedicated concierge service',
      'Full access to estate facilities',
      'Complimentary Wi-Fi',
      'Airport transfers included',
      'Daily breakfast included',
    ],
    backLink: '/accommodation',
    backLabel: 'Back to Accommodation',
  },
  safariLodge: {
    title: 'Victoria Falls Safari Lodge',
    subtitle: 'Award-winning lodge with stunning views',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/rjwlojgi/victoria-falls-safari-lodge-11.png',
    description: `Victoria Falls Safari Lodge is an award-winning property offering comfortable accommodation with breathtaking views of the African bush. The lodge features 72 rooms designed to complement the natural surroundings.

The lodge is home to The Boma – Dinner & Drum Show, one of Victoria Falls' most iconic dining experiences. Guests can also enjoy the MaKuwa-Kuwa Restaurant and Buffalo Bar.

The property's elevated position provides panoramic views of the watering hole, where elephants and other wildlife frequently visit.`,
    features: [
      '72 comfortable rooms',
      'Panoramic bush views',
      'Wildlife viewing from lodge',
      'Home to The Boma experience',
      'Swimming pool',
      'Restaurant and bar facilities',
      'Conference and event spaces',
      'Complimentary Wi-Fi',
    ],
    backLink: '/accommodation',
    backLabel: 'Back to Accommodation',
  },
  safariSuites: {
    title: 'Victoria Falls Safari Suites',
    subtitle: 'Spacious luxury for families and groups',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/3buojz0t/victoria-falls-safari-lodge-6.png',
    description: `Victoria Falls Safari Suites offer spacious and luxurious self-catering accommodation perfect for families and groups. Each suite features a fully equipped kitchen, separate living area, and private bedroom.

The suites are located within the Victoria Falls Safari Lodge estate, providing guests with access to all estate facilities while maintaining privacy and independence.

With modern amenities and stunning bush views, the Suites offer the perfect balance of comfort and adventure.`,
    features: [
      'Spacious self-catering suites',
      'Fully equipped kitchen',
      'Separate living area',
      'Private bedroom',
      'Bush views',
      'Access to estate facilities',
      'Swimming pool access',
      'Complimentary Wi-Fi',
    ],
    backLink: '/accommodation',
    backLabel: 'Back to Accommodation',
  },
  lokuthulaLodges: {
    title: 'Lokuthula Lodges',
    subtitle: 'Self-catering lodges in a tranquil setting',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png',
    description: `Lokuthula Lodges offer comfortable self-catering accommodation in a peaceful bush setting. The lodges are ideal for guests seeking independence and privacy while still being close to Victoria Falls.

Each lodge features multiple bedrooms, a fully equipped kitchen, and a private braai (barbecue) area. The lodges are surrounded by natural bush, providing a authentic African experience.

Guests at Lokuthula Lodges have access to the Victoria Falls Safari Lodge estate facilities.`,
    features: [
      'Self-catering accommodation',
      'Multiple bedrooms',
      'Fully equipped kitchen',
      'Private braai area',
      'Tranquil bush setting',
      'Access to estate facilities',
      'Secure parking',
      'Complimentary Wi-Fi',
    ],
    backLink: '/accommodation',
    backLabel: 'Back to Accommodation',
  },
  buffaloBar: {
    title: 'Buffalo Bar',
    subtitle: 'Relaxed drinks and sundowners',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/4ridlris/victoria-falls-safari-lodge-14.png',
    description: `Buffalo Bar is the perfect spot for relaxed drinks and sundowners while taking in the stunning views of the African bush. The bar offers a wide selection of cocktails, wines, beers, and spirits.

Located within the Victoria Falls Safari Lodge estate, Buffalo Bar provides a casual and comfortable atmosphere for guests to unwind after a day of activities.

The bar features both indoor and outdoor seating, with the outdoor area offering prime views of the watering hole where elephants and other wildlife visit.`,
    features: [
      'Extensive cocktail menu',
      'Wine and beer selection',
      'Indoor and outdoor seating',
      'Wildlife viewing opportunities',
      'Sundowner specials',
      'Light snacks available',
      'Live music on select evenings',
    ],
    backLink: '/wine-and-dine',
    backLabel: 'Back to Wine & Dine',
  },
  makuwaKuwa: {
    title: 'MaKuwa-Kuwa Restaurant',
    subtitle: 'Fine dining with a view',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/zhvikcgu/the-boma-dinner-drum-show-8.png',
    description: `MaKuwa-Kuwa Restaurant offers an exquisite fine dining experience with panoramic views of the African bush. The restaurant serves a menu featuring the finest local and international cuisine.

The restaurant's elevated position provides breathtaking sunset views, making it an ideal choice for special occasions and romantic dinners.

With its elegant setting and impeccable service, MaKuwa-Kuwa has established itself as one of Victoria Falls' premier dining destinations.`,
    features: [
      'Fine dining experience',
      'Panoramic bush views',
      'Sunset dining',
      'Extensive wine list',
      'Private dining options',
      'Open for dinner nightly',
      'Reservations recommended',
    ],
    backLink: '/wine-and-dine',
    backLabel: 'Back to Wine & Dine',
  },
  theBomaCafe: {
    title: 'The Boma Café',
    subtitle: 'Casual dining and refreshments',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/vdgah1ka/the-boma-dinner-drum-show-3.png',
    description: `The Boma Café offers casual dining and refreshments in a relaxed setting. Perfect for breakfast, lunch, or a light meal between activities.

The café serves a variety of dishes including breakfast options, sandwiches, salads, and light meals. Freshly brewed coffee and teas are available throughout the day.

Located within the Victoria Falls Safari Lodge estate, the café provides a convenient dining option for guests.`,
    features: [
      'Breakfast, lunch, and light meals',
      'Freshly brewed coffee',
      'Casual dining atmosphere',
      'Outdoor seating available',
      'Convenient location on estate',
      'Takeaway options',
    ],
    backLink: '/wine-and-dine',
    backLabel: 'Back to Wine & Dine',
  },
  conferences: {
    title: 'Conferences',
    subtitle: 'Professional venues for your events',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/szwp0utz/the-boma-dinner-drum-show-9.png',
    description: `The Victoria Falls Safari Lodge estate offers versatile conference and event spaces suitable for meetings, workshops, and corporate events.

Our venues are equipped with modern audio-visual equipment and can accommodate groups of various sizes. The unique bush setting provides an inspiring backdrop for productive meetings.

Our events team will assist with planning and coordination to ensure your event is a success.`,
    features: [
      'Multiple venue options',
      'Modern AV equipment',
      'Bush backdrop',
      'Catering services',
      'Accommodation packages',
      'Team building activities',
      'Event coordination support',
    ],
    backLink: '/functions-and-events',
    backLabel: 'Back to Functions & Events',
  },
  weddings: {
    title: 'Weddings',
    subtitle: 'Dream weddings in an African paradise',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/1i2nzih5/victoria-falls-safari-lodge-13.png',
    description: `Say "I do" in one of Africa's most stunning settings. The Victoria Falls Safari Lodge estate offers magical wedding venues surrounded by the beauty of the African bush.

From intimate ceremonies to grand celebrations, our events team will help create the wedding of your dreams. Imagine exchanging vows with the sounds of Africa as your soundtrack.

We offer comprehensive wedding packages including accommodation, catering, and coordination services.`,
    features: [
      'Stunning bush settings',
      'Indoor and outdoor venues',
      'Comprehensive wedding packages',
      'Professional coordination',
      'Accommodation for guests',
      'Catering and bar services',
      'Photography opportunities',
      'Honeymoon suites available',
    ],
    backLink: '/functions-and-events',
    backLabel: 'Back to Functions & Events',
  },
  incentiveTravel: {
    title: 'Incentive Travel',
    subtitle: 'Reward your team with an unforgettable experience',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/4xibq54b/the-boma-dinner-drum-show-16.png',
    description: `Reward your top performers with an unforgettable African experience. The Victoria Falls Safari Lodge estate offers unique incentive travel programs that combine luxury accommodation with adventure and wildlife.

From game drives and helicopter flights to The Boma – Dinner & Drum Show, we can create bespoke programs that will inspire and motivate your team.

Our dedicated team will work with you to design an itinerary that exceeds expectations.`,
    features: [
      'Bespoke itineraries',
      'Luxury accommodation',
      'Adventure activities',
      'Wildlife experiences',
      'Team building programs',
      'The Boma – Dinner & Drum Show',
      'Conference facilities',
      'Full event support',
    ],
    backLink: '/functions-and-events',
    backLabel: 'Back to Functions & Events',
  },
  queenNandiPlace: {
    title: 'Queen Nandi Place',
    subtitle: 'Versatile event space for any occasion',
    heroImage: 'https://vfsc-umbraco.live.fireworkx.net/media/fpoebmh2/the-boma-dinner-drum-show-6.png',
    description: `Queen Nandi Place is a versatile event space suitable for a variety of functions, from corporate events to private celebrations.

The venue can be configured to suit your specific requirements and accommodates both intimate gatherings and larger celebrations.

With its elegant setting and professional event support, Queen Nandi Place is the perfect choice for your next event.`,
    features: [
      'Versatile event space',
      'Flexible configuration',
      'Professional event support',
      'Catering services',
      'Audio-visual equipment',
      'Private bar options',
      'Accommodation packages',
    ],
    backLink: '/functions-and-events',
    backLabel: 'Back to Functions & Events',
  },
}
