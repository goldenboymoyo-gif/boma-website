// =============================================================================
// VICTORIA FALLS SAFARI COLLECTION - EXTRACTED CONTENT DATA
// CDN Base: https://vfsc-umbraco.live.fireworkx.net
// =============================================================================

const VFSC_DATA = {

  // ===========================================================================
  // GLOBAL / SHARED DATA
  // ===========================================================================
  global: {
    brandName: "Victoria Falls Safari Collection",
    logoDark: "/logo-dark.2e43a556.png",
    logoLight: "/logo-light.145e6902.png",

    // Navigation
    mainNav: [
      { label: "Accommodation", path: "/accommodation" },
      { label: "Wine & Dine", path: "/wine-and-dine" },
      { label: "Functions & Events", path: "/functions-and-events" },
      { label: "Wellness", path: "/wellness" },
      { label: "Activities", path: "/activities" },
    ],
    topNav: [
      { label: "Contact Us", path: "/contact-us" },
      { label: "News & Updates", path: "/news" },
      { label: "Media & Travel Trade", path: "/travel-trade" },
      { label: "About Us", path: "/about-us" },
    ],

    // Sub-navigation
    accommodationSubNav: [
      { label: "Victoria Falls Safari Club", path: "/accommodation/victoria-falls-safari-club" },
      { label: "Victoria Falls Safari Lodge", path: "/accommodation/victoria-falls-safari-lodge" },
      { label: "Victoria Falls Safari Suites", path: "/accommodation/victoria-falls-safari-suites" },
      { label: "Lokuthula Lodges", path: "/accommodation/lokuthula-lodges" },
    ],
    wineAndDineSubNav: [
      { label: "Buffalo Bar", path: "/wine-and-dine/buffalo-bar" },
      { label: "MaKuwa-Kuwa Restaurant", path: "/wine-and-dine/makuwa-kuwa-restaurant" },
      { label: "The Boma Café", path: "/wine-and-dine/the-boma-cafe" },
      { label: "The Boma – Dinner & Drum Show", path: "/wine-and-dine/the-boma-dinner-drum-show" },
    ],
    functionsSubNav: [
      { label: "Conferences", path: "/functions-and-events/conferences" },
      { label: "Weddings", path: "/functions-and-events/weddings" },
      { label: "Incentive Travel", path: "/functions-and-events/incentive-travel" },
      { label: "Queen Nandi Place", path: "/functions-and-events/queen-nandi-place" },
    ],
    wellnessSubNav: [
      { label: "Victoria Falls Safari Spa", path: "/wellness/victoria-falls-safari-spa" },
      { label: "Fitness Centre", path: "/wellness/fitness-centre" },
      { label: "Spa Café", path: "/wellness/spa-cafe" },
    ],

    // Booking URLs
    bookingUrls: {
      safariClub: "https://booking.profitroom.com/en/victoriafallssafariclub/home?no-cache=1&currency=USD",
      safariLodge: "https://booking.profitroom.com/en/victoriafallssafarilodge/home?no-cache=1&currency=USD",
      safariSuites: "https://booking.profitroom.com/en/victoriafallssafarisuites/home?no-cache=1&currency=USD",
      lokuthulaLodges: "https://book.nightsbridge.com/32380",
      spa: "https://online.mysalonbridge.com/bridge/VictoriaFalls-safari-spa",
      bomaDinnerShow: "https://book.theboma.co.zw/",
    },

    // Social Links
    socialLinks: {
      facebook: "https://www.facebook.com/victoriafallssafarilodge",
      instagram: "https://www.instagram.com/victoriafallssafarilodge/",
      tripadvisor: "https://www.tripadvisor.co.za/Hotel_Review-g293761-d305391-Reviews-Victoria_Falls_Safari_Lodge-Victoria_Falls_Matabeleland_North_Province.html",
      youtube: "https://www.youtube.com/@victoriafallssafarilodge",
    },

    // Affiliation Logos (CDN)
    affiliations: [
      { name: "ATTA", image: "https://vfsc-umbraco.live.fireworkx.net/media/lpkdln1f/atta-logo.png" },
      { name: "TripAdvisor Award", image: "https://vfsc-umbraco.live.fireworkx.net/media/2walqtq3/tripadvisor-award.png" },
      { name: "Africa's Eden", image: "https://vfsc-umbraco.live.fireworkx.net/media/nz2ngx1k/africas-eden.png" },
    ],

    // Footer links
    footerLinks: [
      { label: "Frequently Asked Questions", path: "/faqs" },
      { label: "Privacy Policy", path: "/privacy-policy" },
      { label: "Terms & Conditions", path: "/terms-and-conditions" },
    ],
  },

  // ===========================================================================
  // 1. ACCOMMODATION INDEX PAGE
  // ===========================================================================
  accommodation: {
    title: "Accommodation",
    heroImage: "https://vfsc-umbraco.live.fireworkx.net/media/qoadytuo/victoria-falls-safari-collection-banners-14.jpg",
    options: [
      {
        name: "Victoria Falls Safari Club",
        slug: "victoria-falls-safari-club",
        description: "An exclusive boutique experience. Enjoy premium rooms, private butler service, and views of the Zambezi National Park wilderness.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/ch1nf4qm/victoria-falls-safari-collection-13.png",
        bookingUrl: "https://booking.profitroom.com/en/victoriafallssafariclub/home?no-cache=1&currency=USD",
        highlights: [
          "Butler-style concierge service",
          "Afternoon tea",
          "Dedicated dining room and game-viewing deck",
        ],
      },
      {
        name: "Victoria Falls Safari Lodge",
        slug: "victoria-falls-safari-lodge",
        description: "Award-winning luxury with sunset views over a wildlife waterhole. Enjoy eco-friendly rooms just 4km from the Victoria Falls Rainforest.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/k3ahse23/victoria-falls-safari-collection-12.png",
        bookingUrl: "https://booking.profitroom.com/en/victoriafallssafarilodge/home?no-cache=1&currency=USD",
        highlights: [
          "Balcony in Master Gallery Bedroom",
          "Air Conditioning & Ceiling Fan",
          "Complimentary Wi-Fi",
        ],
      },
      {
        name: "Victoria Falls Safari Suites",
        slug: "victoria-falls-safari-suites",
        description: "Spacious 2 and 3-bedroom suites ideal for families and groups. Modern comfort meets the African bush near Victoria Falls' top sights.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/adqhn3ly/victoria-falls-safari-collection-thumbnail-8.png",
        bookingUrl: "https://booking.profitroom.com/en/victoriafallssafarisuites/home?no-cache=1&currency=USD",
        highlights: [
          "Balcony in Master Gallery Bedroom",
          "Air conditioning & ceiling fan in downstairs bedroom/s",
          "Satellite TV in main lounge",
        ],
      },
      {
        name: "Lokuthula Lodges",
        slug: "lokuthula-lodges",
        description: "Tranquil self-catering or B&B lodges in lush gardens. The perfect base for families seeking a peaceful retreat in Victoria Falls.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/o4hfhzjb/victoria-falls-safari-collection-thumbnail-11.png",
        bookingUrl: "https://book.nightsbridge.com/32380",
        highlights: [
          "Family units",
          "Children's swimming pool and playground",
          "Residents' lounge",
        ],
      },
    ],
    faqs: [
      { q: "Are all rooms air-conditioned?", a: "All rooms at Victoria Falls Safari Lodge, Victoria Falls Safari Club and Victoria Falls Safari Suites are air conditioned and they also have ceiling fans." },
      { q: "Is the bottled water in the rooms from the tap?", a: "It is filtered water processed through an onsite filtration plant." },
      { q: "Are there any rooms close to the reception for people with difficulties in walking?", a: "Victoria Falls Safari Lodge has one room in the first block from reception which may be accessed via a ramp. This room has no steps, and the doors are wide enough to accommodate a wheelchair. As Victoria Falls Safari Club rooms do not have steps, we recommend that guests with mobility challenges book here (NB: no children under 10 years)" },
      { q: "Do the rooms on Victoria Falls Safari Collection estate have bathtubs?", a: "Victoria Falls Safari Lodge: Only the 6 Lodge Waterhole Facing Suites have bathtubs. The other 66 rooms have walk-in rainfall showers. Victoria Falls Safari Club: Yes, the rooms at Victoria Falls Safari Club have bathtubs. Victoria Falls Safari Suites: In the 2-bedroom Safari Suite, the downstairs bedroom has a bathtub and separate shower, and in the 3-bedroom Safari Suite one of the 2 downstairs bedrooms has a bathtub and separate shower." },
      { q: "Do the rooms on the Victoria Falls Safari Collection estate have TVs?", a: "Only the Victoria Falls Safari suites have TVs (in the lounge)" },
      { q: "Is breakfast included?", a: "Yes" },
      { q: "Are we allowed to smoke in the rooms?", a: "No, all rooms are non-smoking. Smoking is in designated areas on the estate." },
      { q: "Is there an ATM on the estate?", a: "No, but the shuttle bus can take you to town where you will be able to access the ATM" },
      { q: "Can I withdraw cash from the ATM?", a: "Yes, you can withdraw cash (US$) from the ATM at selected banks, however it is advisable that you bring some cash with you." },
      { q: "What currency should I bring?", a: "The main currency in use in Zimbabwe is US Dollars, however, South African Rand, Euros, British Pounds and Australian dollars are also legal tender. We advise you to travel with smaller denominations such as US$1, US$5, US$10 and US$20." },
      { q: "Are babysitting facilities available?", a: "Babysitting services are available on request at an extra charge of $10 per hour for the first two hours and US$7 from the third hour. Services need to be booked by 10am if a babysitter is required for that evening." },
      { q: "Entry into Zimbabwe", a: "Single and double entry visas are available at port of entry into Zimbabwe. For multiple entry visas it is necessary to apply before travel. The KAZA Uni-Visa (US$50) allows for easy travel between Zambia and Zimbabwe." },
      { q: "Is Wi-Fi available?", a: "Yes, there is complimentary Wi-Fi available" },
      { q: "Is the water safe to drink?", a: "Yes. Water is purified onsite using a three-stage filtration system which removes any impurities to produce top quality, great tasting water, provided to guests in recyclable glass bottles." },
      { q: "Do you provide airport transfers?", a: "Yes, airport transfers can be arranged at an additional cost." },
      { q: "Is there secure parking on the estate?", a: "Yes, free and secure parking is available for guests at all properties on the Victoria Falls Safari Lodge estate." },
      { q: "Do you offer special services for honeymooners or anniversaries?", a: "Yes. Please let us know in advance if you're celebrating a special occasion. We can arrange romantic turndowns, private dinners, or spa packages." },
      { q: "Do you provide mosquito nets in rooms?", a: "Yes, all rooms are equipped with mosquito nets, and insect repellent is also provided." },
      { q: "Do you have power back-up in case of electricity outages?", a: "Yes, the estate is equipped with back-up generators to ensure minimal disruption during power outages." },
    ],
  },

  // ===========================================================================
  // 2. VICTORIA FALLS SAFARI CLUB
  // ===========================================================================
  safariClub: {
    title: "Victoria Falls Safari Club",
    subPages: [
      { label: "The Club Experience", path: "/accommodation/victoria-falls-safari-club/experience" },
      { label: "Visual Tour", path: "/accommodation/victoria-falls-safari-club/gallery" },
      { label: "Rates", path: "/accommodation/victoria-falls-safari-club/rates" },
      { label: "Book Now", path: "https://booking.profitroom.com/en/victoriafallssafariclub/home?no-cache=1&currency=USD", isExternal: true },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/soujerdb/victoria-falls-safari-club-banner.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/4jbdbiex/victoria-falls-safari-lodge-28.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/wq3pymvu/victoria-falls-safari-club-6.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/pyqnoswf/victoria-falls-safari-club-11.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/hxxprqq4/victoria-falls-safari-club-16.png",
    ],
    highlights: [
      "All rooms are equipped with two 3/4 beds that can be converted to a king size bed",
      "Dedicated dining room",
      "Dedicated game-viewing deck",
      "Pillow menu",
      "Balcony in Master Gallery Bedroom",
      "A complimentary minibar (restocked daily with local beer, house wine, soft drinks and bottled water)",
      "Tea and coffee-making station, including a Nespresso machine",
      "Customised toiletries including insect repellent and sunscreen",
      "Air conditioning",
    ],
    facilities: [
      "Two-tiered swimming pool with sundeck",
      "Internet lounge",
      "International multi sockets",
      "Complimentary Wi-Fi",
      "Hairdryers",
      "Visa, American Express and MasterCard accepted",
      "Digital safe",
      "Mosquito nets",
    ],
    enquiryContact: {
      phone: "+263 83 284 3202",
      email: "website@vfsl.co.zw",
      bookingUrl: "https://booking.profitroom.com/en/victoriafallssafariclub/home?no-cache=1&currency=USD",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/lqolcp3o/victoria-falls-safari-club-18.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/a2acamcl/victoria-falls-safari-club-14.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ubahnv15/victoria-falls-safari-lodge-3.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/5ralgsen/victoria-falls-safari-club-15.png",
    ],
    downloads: [
      { label: "Victoria Falls Safari Club Breakfast Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/eldhnya3/safari-club-breakfast-menu-2025.pdf" },
      { label: "Victoria Falls Safari Club Room Service Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/owthn2rx/safari-club-room-service-menu-2025.pdf" },
      { label: "Victoria Falls Safari Club All Day Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/glkpqity/safari-club-all-day-menu-2025.pdf" },
      { label: "Victoria Falls Safari Club Cocktail Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/bq0jkltl/safari-club-cocktail-menu-2025.pdf" },
      { label: "Victoria Falls Safari Club Lunch Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/wulipuyu/vfsc-lunch-menu.pdf" },
      { label: "Victoria Falls Safari Club Dinner Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/1rqe05fw/vfsc-dinner-menu.pdf" },
    ],
    learnMore: [
      { label: "Activities", path: "/activities" },
      { label: "Wellness", path: "/wellness" },
      { label: "Helicopter Rides", path: "/activities?name=helicopter-rides" },
    ],
    nextAccommodation: { label: "Lokuthula Lodges", path: "/accommodation/lokuthula-lodges" },
  },

  // ===========================================================================
  // 3. VICTORIA FALLS SAFARI LODGE
  // ===========================================================================
  safariLodge: {
    title: "Victoria Falls Safari Lodge",
    subPages: [
      { label: "The Lodge Experience", path: "/accommodation/victoria-falls-safari-lodge/experience" },
      { label: "Visual Tour", path: "/accommodation/victoria-falls-safari-lodge/gallery" },
      { label: "Rates", path: "/accommodation/victoria-falls-safari-lodge/rates" },
      { label: "Book Now", path: "https://booking.profitroom.com/en/victoriafallssafarilodge/home?no-cache=1&currency=USD", isExternal: true },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/q3dbite3/victoria-falls-safari-lodge-room-with-view.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/xepdyh51/victoria-falls-safari-lodge-acc-banner.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/cdwfml4w/victoria-falls-safari-collection-banners-4.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/jv0h5uyq/victoria-falls-safari-collection-conferences-23.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ke4bvuog/victoria-falls-safari-lodge-3.png",
    ],
    highlights: [
      "Air Conditioning & Ceiling Fan",
      "Tea & coffee making facilities",
      "Extra length beds with mosquito nets",
      "Complimentary Wi-Fi",
      "Customised toiletries including insect repellent and sunscreen",
      "A complimentary minibar in the Lodge Waterhole Facing Suites re-stocked daily with local beer, house wine, soft drinks and bottled water",
      "All Lodge Waterhole Facing Rooms and Lodge Standard Rooms have 2 three-quarter beds that can be converted to a king size bed",
    ],
    facilities: [
      "Two-tiered swimming pool with sundeck",
      "Internet lounge",
      "Activities booking desk",
      "Scheduled complimentary shuttle bus service to the town centre, craft markets and the Victoria Falls Rainforest",
      "Souvenir shop",
      "Spa on the estate",
      "TV lounge with international channels",
      "MaKuwa-Kuwa Restaurant, Buffalo Bar and The Boma – Dinner & Drum Show",
      "24-hour reception",
      "Guest lounge in the apex of the central building with superb views of the waterhole",
      "Fitness centre",
      "International multi sockets",
      "Babysitting service available (advance notice required)",
      "Telephone",
      "Digital safe",
      "Visa, American Express and MasterCard accepted",
    ],
    enquiryContact: {
      phone: "+263 83 2843211",
      email: "website@vfsl.co.zw",
      bookingUrl: "https://booking.profitroom.com/en/victoriafallssafarilodge/home?no-cache=1&currency=USD",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/zfeljjd5/victoria-falls-safari-lodge-10.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ld5ppou0/victoria-falls-safari-lodge-5.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/1kels5b1/victoria-falls-safari-lodge-3.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/0cunq5iw/victoria-falls-safari-lodge-12.png",
    ],
    downloads: [
      { label: "Victoria Falls Safari Lodge Room Service Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/3r3dgsbi/safari-lodge-room-service-menu-2025.pdf" },
    ],
    learnMore: [
      { label: "Activities", path: "/activities" },
      { label: "Wellness", path: "/wellness" },
      { label: "Vulture Culture", path: "/activities?name=vulture-culture-experience" },
    ],
    nextAccommodation: { label: "Victoria Falls Safari Suites", path: "/accommodation/victoria-falls-safari-suites" },
  },

  // ===========================================================================
  // 4. VICTORIA FALLS SAFARI SUITES
  // ===========================================================================
  safariSuites: {
    title: "Victoria Falls Safari Suites",
    subPages: [
      { label: "The Suites Experience", path: "/accommodation/victoria-falls-safari-suites/experience" },
      { label: "Visual Tour", path: "/accommodation/victoria-falls-safari-suites/gallery" },
      { label: "Rates", path: "/accommodation/victoria-falls-safari-suites/rates" },
      { label: "Book Now", path: "https://booking.profitroom.com/en/victoriafallssafarisuites/home?no-cache=1&currency=USD", isExternal: true },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/20hkfpqv/victoria-falls-safari-collection-banners-5.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ypimdmmf/victoria-falls-safari-lodge-21.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/co1ozeh3/sunset-from-victoria-falls-safari-suits.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/bsiam051/victoria-falls-safari-lodge-17.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/lxxjhip1/victoria-falls-safari-suits-bedroom-with-ensuite-and-balcony-view.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/oc2ok3uw/victoria-falls-safari-collection-21.png",
    ],
    highlights: [
      "Balcony in Master Gallery Bedroom",
      "Air Conditioning & Ceiling Fan",
      "46-inch LCD TV screen with satellite TV in the lounge",
      "Courtesy counter with minibar, tea and coffee making facilities including a Nespresso machine",
      "A separate adjoining study",
      "Mosquito nets",
      "Telephones in the main lounge and in the Master Gallery Bedroom",
      "A complimentary range of customised toiletries, including insect repellent and sunscreen lotion",
      "All bedrooms are equipped with 2 x three-quarter beds that can be converted to king size beds",
      "Separate adjoining study with sofa bed which can sleep one extra person (recommended for a child 12 years and below)",
    ],
    facilities: [
      "Swimming pool",
      "Internet lounge",
      "Complimentary Wi-Fi",
      "Babysitting service available (advance notice required)",
      "Breakfast is served in the MaKuwa-Kuwa Restaurant located at the Victoria Falls Safari Lodge",
      "24-hour reception",
      "Complimentary evening transfers to The Boma – Dinner & Drum Show",
      "Ample, secure and open parking space",
      "Private shower facilities for guests arriving early and checking out late",
      "Access to a fitness centre",
      "Visa, American Express and MasterCard accepted",
      "Digital safe",
    ],
    enquiryContact: {
      phone: "+263 83 284 3211",
      email: "website@vfsl.co.zw",
      bookingUrl: "https://booking.profitroom.com/en/victoriafallssafarisuites/home?no-cache=1&currency=USD",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/pgsgdsly/victoria-falls-safari-lodge-14.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/z3qgtghh/victoria-falls-safari-lodge-15.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/pp1fgf1r/victoria-falls-safari-collection-22.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/faon3s3m/victoria-falls-safari-suites-welcome-sign.jpg",
    ],
    learnMore: [
      { label: "Activities", path: "/activities" },
      { label: "Vulture Culture", path: "/activities?name=vulture-culture-experience" },
      { label: "Wellness", path: "/wellness" },
    ],
    nextAccommodation: { label: "Victoria Falls Safari Club", path: "/accommodation/victoria-falls-safari-club" },
  },

  // ===========================================================================
  // 5. LOKUTHULA LODGES
  // ===========================================================================
  lokuthulaLodges: {
    title: "Lokuthula Lodges",
    subPages: [
      { label: "The Lokuthula Experience", path: "/accommodation/lokuthula-lodges/experience" },
      { label: "Visual Tour", path: "/accommodation/lokuthula-lodges/gallery" },
      { label: "Rates", path: "/accommodation/lokuthula-lodges/rates" },
      { label: "Book Now", path: "https://book.nightsbridge.com/32380", isExternal: true },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/eolpsf12/lokuthula-lodges-porch.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/gmhbqayi/victoria-falls-safari-collection-29.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/nbfdm0ti/victoria-falls-safari-collection-27.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/e0nmxzou/victoria-falls-safari-lodge-7.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/41bdzs2u/victoria-falls-safari-lodge-13.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/142eadel/victoria-falls-safari-collection-30.png",
    ],
    highlights: [
      "A fully equipped kitchen",
      "A lounge, terrace and braai (barbecue) area",
      "Two sofa beds in the lounge, which may be used to accommodate two extra people, recommended for children under 12 years",
      "Air conditioning & ceiling fan in downstairs bedroom/s",
      "Ceiling fans in lounge and loft bedroom",
      "Tea & coffee making facilities",
      "Mosquito nets",
    ],
    facilities: [
      "Guests who book Lokuthula Lodges on a B&B basis enjoy their breakfast at The Boma Café",
      "Swimming pool, children's playground and pickleball court",
      "The Residents' lounge with satellite TV, is situated above The Boma Bar",
      "Complimentary Wi-Fi",
      "Laundry service available",
      "Digital safe",
      "Telephone",
    ],
    enquiryContact: {
      phone: "+263 83 284 3211",
      email: "lokuthula@vfsl.co.zw",
      bookingUrl: "https://book.nightsbridge.com/32380",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/z3tnw5tu/victoria-falls-safari-lodge-12.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ideawmoi/victoria-falls-safari-collection-31.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/qzzbzcvq/victoria-falls-safari-lodge-18.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/2htgczkc/victoria-falls-safari-lodge-10.png",
    ],
    learnMore: [
      { label: "Activities", path: "/activities" },
      { label: "Wellness", path: "/wellness" },
      { label: "News & Updates", path: "/news" },
    ],
    nextAccommodation: { label: "Home", path: "/" },
  },

  // ===========================================================================
  // 6. WINE & DINE INDEX PAGE
  // ===========================================================================
  wineAndDine: {
    title: "Wine & Dine",
    heroImage: "https://vfsc-umbraco.live.fireworkx.net/media/344ptpjd/victoria-falls-safari-collection-banners-20.png",
    options: [
      {
        name: "The Boma – Dinner & Drum Show",
        slug: "the-boma-dinner-drum-show",
        description: "A legendary African dining experience. Enjoy a 4-course feast, traditional performances, and an interactive drumming show.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/aywplhwm/boma-dinner-drum-show.jpg",
        highlights: [
          "Iconic dining and entertainment experience",
          "Offers a vibrant fusion of local cuisine, dance and drumming",
          "Arts and crafts for sale",
        ],
      },
      {
        name: "MaKuwa-Kuwa Restaurant",
        slug: "makuwa-kuwa-restaurant",
        description: "Award-winning fine dining with a view. Savor local flavors while watching wildlife at the floodlit waterhole.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/qt1npxge/makuwa-kuwa-dish.jpg",
        highlights: [
          "Offers a unique opportunity to view wildlife while you dine",
          "À la carte dinner menu features local ingredients with global flair",
          "Extensive continental breakfast buffet, as well as à la carte breakfast",
        ],
      },
      {
        name: "Buffalo Bar",
        slug: "buffalo-bar",
        description: "The best sunset views in Victoria Falls. Relax with a cocktail on our open-air deck overlooking the Zambezi National Park.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/c25pgsbp/cocktail-at-buffalo-bar.jpg",
        highlights: [
          "Open daily for meals from 10:30am to 9:00pm",
          "Extensive drinks menu",
          "Opportunity for wildlife sightings",
        ],
      },
      {
        name: "The Boma Café",
        slug: "the-boma-cafe",
        description: "A casual garden café with alfresco dining, kids' play area, and nearby pool.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/0y4jgjcl/boma-cafe-dish.jpg",
        highlights: [
          "Casual alfresco eatery",
          "Open daily for breakfast, lunch, and light meals",
          "Desserts available to satisfy a sweet tooth",
        ],
      },
    ],
    faqs: [
      { q: "Do you cater for vegetarian guests?", a: "Yes, we have vegetarian options on the menu. For more options, liaise with the chef, who will be able to cater for your needs." },
      { q: "Do you cater for Halaal guests?", a: "Yes" },
      { q: "Can dietary restrictions or food allergies be accommodated?", a: "Yes. Please inform us of any dietary requirements in advance or upon check-in, and our chefs will do their best to accommodate you." },
    ],
  },

  // ===========================================================================
  // 7. BUFFALO BAR
  // ===========================================================================
  buffaloBar: {
    title: "Buffalo Bar",
    subPages: [
      { label: "The Buffalo Experience", path: "/wine-and-dine/buffalo-bar/experience" },
      { label: "Visual Tour", path: "/wine-and-dine/buffalo-bar/gallery" },
      { label: "Our Menu", path: "/wine-and-dine/buffalo-bar/rates" },
      { label: "Enquire Now", path: "/contact-us?topic=wine--dine/buffalo-bar" },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/inbcdnqi/cocktails-at-buffalo-bar.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/rybddg3u/victoria-falls-safari-lodge-27.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/mxbbdcgn/victoria-falls-safari-lodge-2025-06-09t103953747.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/i5lbqtuo/victoria-falls-safari-lodge-2025-06-09t104007596.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/msce2wdw/victoria-falls-safari-lodge-2025-06-09t104012349.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/rfvc0ozi/victoria-falls-safari-lodge-2025-06-09t104000847.png",
    ],
    needToKnow: [
      "Open daily for meals from 10:30am to 9:00pm",
      "Casual alfresco dining on a scenic deck overlooking the waterhole",
      "Extensive drinks menu",
    ],
    highlights: [
      "Popular spot for sundowners with stunning wildlife views",
      "Opportunity for wildlife sightings",
    ],
    enquiryContact: {
      phone: "+263-83-2843211",
      email: "website@vfsl.co.zw",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/c25pgsbp/cocktail-at-buffalo-bar.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/rfvc0ozi/victoria-falls-safari-lodge-2025-06-09t104000847.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ykaf50bq/victoria-falls-safari-lodge-2025-06-09t110109982.png",
    ],
    downloads: [
      { label: "Buffalo Bar's Lunch Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/zhfhu4ns/buffalo-bar-lunch-menu-2025.pdf" },
      { label: "Buffalo Bar's Cocktail Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/kenjotpn/buffalo-bar-cocktail-menu-2025.pdf" },
    ],
    learnMore: [
      { label: "Accommodation", path: "/accommodation" },
      { label: "Activities", path: "/activities" },
      { label: "Functions & Events", path: "/functions-and-events" },
    ],
  },

  // ===========================================================================
  // 8. MAKUWA-KUWA RESTAURANT
  // ===========================================================================
  makuwaKuwa: {
    title: "MaKuwa-Kuwa Restaurant",
    subPages: [
      { label: "The Makuwa-Kuwa Experience", path: "/wine-and-dine/makuwa-kuwa-restaurant/experience" },
      { label: "Visual Tour", path: "/wine-and-dine/makuwa-kuwa-restaurant/gallery" },
      { label: "Menu", path: "/wine-and-dine/makuwa-kuwa-restaurant/rates" },
      { label: "Enquire Now", path: "/contact-us?topic=wine--dine/makuwa-kuwa-restaurant" },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/rzxlohv4/victoria-falls-safari-lodge-2025-06-09t111309912.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ebkn1ywi/victoria-falls-safari-collection-conferences-16.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/4q0gpjut/victoria-falls-safari-lodge-2025-06-09t111254966.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/14ljzold/victoria-falls-safari-lodge-9.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ruxbcp5z/victoria-falls-safari-lodge-8.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/4xplgbfg/victoria-falls-safari-lodge-2025-06-09t111245846.png",
    ],
    needToKnow: [
      "Open-air setting on three sides, overlooking a wildlife-rich waterhole",
      "Opening hours: Breakfast (6:45am – 10:00am), Lunch (12:30pm – 2:00pm) & Dinner (7:00pm – 10:00pm). Bookings essential.",
    ],
    highlights: [
      "Offers a unique opportunity to view wildlife while you dine",
      "Extensive continental breakfast buffet, as well as à la carte breakfast",
      "À la carte hot dishes, including: The 'Livukile' breakfast: poached eggs on toasted brown bread, with honey glazed ham, grilled tomato and hollandaise sauce",
      "Lunch menu ($1 from selected dishes is donated to vulture conservation and education programmes)",
      "À la carte dinner menu features local ingredients with global flair",
    ],
    enquiryContact: {
      phone: "+263-83-2843211",
      email: "website@vfsl.co.zw",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/si0fybbq/victoria-falls-safari-lodge-2025-06-09t111304885.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/jlqp42o3/victoria-falls-safari-lodge-2025-06-09t111308405.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/yzuh413w/victoria-falls-safari-lodge-2025-06-09t111256726.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/ftfivi5r/victoria-falls-safari-lodge-2025-06-09t111236965.png",
    ],
    downloads: [
      { label: "MaKuwa-Kuwa Restaurant's Breakfast Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/stanpfkd/makuwa-kuwa-breakfast-menu-2025.pdf" },
      { label: "MaKuwa-Kuwa Restaurant's Kids' Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/knmpyexy/mkk-kids-menu-online.pdf" },
      { label: "MaKuwa-Kuwa Restaurant's Wine Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/xqkepsbs/vfsl-wine-list.pdf" },
      { label: "MaKuwa-Kuwa Restaurant A La Carte Dinner", url: "https://vfsc-umbraco.live.fireworkx.net/media/bslhoczy/makuwa-kuwa-a-la-carte-dinner-menu2025.pdf" },
    ],
    learnMore: [
      { label: "Accommodation", path: "/accommodation" },
      { label: "Activities", path: "/activities" },
      { label: "Functions & Events", path: "/functions-and-events" },
    ],
  },

  // ===========================================================================
  // 9. THE BOMA CAFÉ
  // ===========================================================================
  bomaCafe: {
    title: "The Boma Café",
    subPages: [
      { label: "The Boma Café Experience", path: "/wine-and-dine/the-boma-cafe/experience" },
      { label: "Visual Tour", path: "/wine-and-dine/the-boma-cafe/gallery" },
      { label: "Menu", path: "/wine-and-dine/the-boma-cafe/rates" },
      { label: "Enquire Now", path: "/contact-us?topic=wine--dine/the-boma-cafe" },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/jg3d2lzc/victoria-falls-safari-lodge-47.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/f0cnjszg/victoria-falls-safari-lodge-51.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/jypjqbub/victoria-falls-safari-lodge-49.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/11jf35i2/victoria-falls-safari-lodge-50.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/z24jyclu/victoria-falls-safari-lodge-52.png",
    ],
    needToKnow: [
      "Casual alfresco eatery",
      "Open daily for breakfast, lunch, and light meals",
      "Breakfast is available from 7am to 10am",
      "Lunch and light meals available until 4pm",
    ],
    highlights: [
      "Desserts available to satisfy a sweet tooth",
      "Set in a peaceful garden with nearby children's play area, swimming pool and pickleball court",
    ],
    enquiryContact: {
      phone: "+263 83 284 3211",
      email: "bomareservations@vfsl.co.zw",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/bcxkp1hv/victoria-falls-safari-lodge-2025-06-09t104025102.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/b4idg54v/victoria-falls-safari-lodge-54.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/2kfnniw3/the-boma-dinner-drum-show-14.png",
    ],
    downloads: [
      { label: "BOMA Café Kids Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/iclluieq/boma-kids-menu-2025.pdf" },
      { label: "BOMA Café Breakfast Menu Ala Carte", url: "https://vfsc-umbraco.live.fireworkx.net/media/z3qplyp1/boma-cafe-breakfast-menu-a-la-carte.pdf" },
      { label: "BOMA Café Lunch Menu", url: "https://vfsc-umbraco.live.fireworkx.net/media/hwmhrg02/boma-lunch-menu-2025.pdf" },
    ],
    learnMore: [
      { label: "Accommodation", path: "/accommodation" },
      { label: "Activities", path: "/activities" },
      { label: "Functions & Events", path: "/functions-and-events" },
    ],
  },

  // ===========================================================================
  // 10. FUNCTIONS & EVENTS INDEX PAGE
  // ===========================================================================
  functionsAndEvents: {
    title: "Functions & Events",
    options: [
      {
        name: "Conferences",
        slug: "conferences",
        description: "Victoria Falls, dubbed the 'Adventure Capital of Africa', also has many activities to choose from, which are excellent for team building exercises for both conference delegates and incentive travel groups.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/yoffwne1/imbizo1-breakaway-room-at-victoria-falls-safari-collection.jpg",
        highlights: [
          "Multiple venue options",
          "Onsite catering",
          "Air-conditioned",
        ],
      },
      {
        name: "Weddings",
        slug: "weddings",
        description: "Victoria Falls is a dream wedding destination. Every detail of your ceremony and reception is tailor-made by our team of professionals to suit your needs – be it beside the Victoria Falls, on the banks of the Zambezi River or at sunset overlooking a wildlife-rich waterhole at Victoria Falls Safari Lodge.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/ydcf5yi5/victoria-falls-safari-collection-thumbnail-7.jpg",
        highlights: [
          "Wedding planning team",
          "Multiple venue options",
          "Onsite catering",
        ],
      },
      {
        name: "Incentive Travel",
        slug: "incentive-travel",
        description: "Victoria Falls is an inspiring destination for incentive travel, offering groups that once-in-a-lifetime opportunity to experience the sheer beauty of one of the Seven Natural Wonders of the World, along with a myriad of activities centred around it.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/vrfh1kvd/victoria-falls-safari-collection-7.png",
        highlights: [
          "Multiple venue options",
          "Onsite entertainment",
          "Complimentary transport to Victoria Falls",
        ],
      },
      {
        name: "Queen Nandi Place",
        slug: "queen-nandi-place",
        description: "State-of-the-art venue for conferences and events. Modern facilities and breakout rooms in a stunning African setting.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/xvyhkl1s/queen-nandi-venue-at-victoria-falls-safari-collection.jpg",
        highlights: [
          "Seating in boardroom, theatre and banquet style",
          "Audio visual equipment",
          "Breakout spaces",
        ],
      },
    ],
    faqs: [
      { q: "What are the facilities on the estate for functions?", a: "Queen Nandi Place is our latest events venue, opened recently. It is a bright, inside-outside configurable space that can accommodate 180 people in a variety of formats, whether for a conference, a wedding or an event. It has its own catering facilities. Additionally there is an amphitheatre outside for concerts, breakaways or special events. Also on the estate is a smaller conference venue catering to more intimate groups. Finally, there is a boardroom in the main lodge that can be hired." },
    ],
  },

  // ===========================================================================
  // 11. CONFERENCES
  // ===========================================================================
  conferences: {
    title: "Conferences",
    subPages: [
      { label: "Conferences Experience", path: "/functions-and-events/conferences/experience" },
      { label: "Visual Tour", path: "/functions-and-events/conferences/gallery" },
      { label: "Rates", path: "/functions-and-events/conferences/rates" },
      { label: "Enquire Now", path: "/contact-us?topic=functions--events/conferences" },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/c5djkedo/victoria-falls-safari-lodge-2025-06-09t110656632.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/qzzhxsxv/elangeni-lounge-at-victoria-falls-safari-collection.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/rvplpqr4/victoria-falls-safari-lodge-2025-06-09t110640613.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/1i4cwwir/victoria-falls-safari-lodge-94.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/uzkgr1wu/victoria-falls-safari-collection-33.png",
    ],
    highlights: [
      "Multiple venue options",
      "Onsite catering",
      "Air-conditioned",
      "Complimentary Wi-Fi",
    ],
    features: [
      "Queen Nandi Place event venue",
      "Adjacent amphitheatre",
      "Indaba Conference Room",
      "Seating in boardroom, theatre and banquet style",
      "Boardroom",
      "Breakout spaces",
      "Audio visual equipment",
      "Business centre facilities",
      "On-site parking",
      "Complimentary Wi-Fi",
    ],
    enquiryContact: {
      contactPerson: "Events Manager Constance Mugadza",
      phone: "+263 832 843 201",
      email: "meetings@vfsl.co.zw",
      whatsapp: "+263 78 540 1420",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/y4mlc5ay/imbizo2-breakaway-room-at-victoria-falls-safari_collection.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/klnjwujq/break-through-conference-room-at-victoria-falls-safari-collection_.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/t1mprvxe/victoria-falls-safari-lodge-98.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/fo5k5ydn/victoria-falls-safari-collection-conferences.png",
    ],
    downloads: [
      { label: "Conferences and Incentives", url: "https://vfsc-umbraco.live.fireworkx.net/media/la4arpuu/conferences-and-incentives-june-2025.pdf" },
    ],
    learnMore: [
      { label: "Media & Travel Trade", path: "/travel-trade" },
      { label: "Wellness", path: "/wellness" },
    ],
  },

  // ===========================================================================
  // 12. WEDDINGS
  // ===========================================================================
  weddings: {
    title: "Weddings",
    subPages: [
      { label: "The Weddings Experience", path: "/functions-and-events/weddings/experience" },
      { label: "Visual Tour", path: "/functions-and-events/weddings/gallery" },
      { label: "Rates", path: "/functions-and-events/weddings/rates" },
      { label: "Enquire Now", path: "/contact-us?topic=functions--events/weddings" },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/ktya045t/just-got-married-at-victoria-falls-safari-collection.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/htbn4sso/victoria-falls-safari-lodge-68.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/s5ofhnnh/bride-groom-on-safari-tour-at-victoria-falls-safari-lodge.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/1erfurfo/bride-groom-at-victoria-falls.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/4wgngdbt/victoria-falls-safari-lodge-63.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/pshnthuu/victoria-falls-safari-lodge-56.png",
    ],
    highlights: [
      "Wedding planning team",
      "Onsite catering",
      "Various venues on the estate are available",
    ],
    features: [
      "On-site parking",
      "Wi-Fi and internet access",
      "Adjacent amphitheatre",
      "Queen Nandi Place event venue",
      "Ample accommodations",
      "Pre and post spa treatments",
    ],
    enquiryContact: {
      contactPerson: "Events Manager Constance Mugadza",
      phone: "+263 8328 43201",
      email: "meetings@vfsl.co.zw",
      whatsapp: "+263 78 540 1420",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/tu5ailh3/victoria-falls-safari-lodge-61.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/fpdhzaod/wedding-bouquet-at-victoria-falls-safari-lodge.jpg",
      "https://vfsc-umbraco.live.fireworkx.net/media/ezjdpnvv/victoria-falls-safari-lodge-67.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/qsdkpkdg/just-got-married-at-victoria-falls-safari-collection.jpg",
    ],
    downloads: [
      { label: "Wedding packages", url: "https://vfsc-umbraco.live.fireworkx.net/media/y4rl5qnj/vfsl-wedding-package-june-2025.pdf" },
      { label: "Wedding fact sheet", url: "https://vfsc-umbraco.live.fireworkx.net/media/ucnk4tqp/vfsl-weddings-june-2025.pdf" },
    ],
    learnMore: [
      { label: "News & Updates", path: "/news" },
      { label: "Media & Travel Trade", path: "/travel-trade" },
      { label: "Wellness", path: "/wellness" },
    ],
  },

  // ===========================================================================
  // 13. INCENTIVE TRAVEL
  // ===========================================================================
  incentiveTravel: {
    title: "Incentive Travel",
    subPages: [
      { label: "The Incentives Experience", path: "/functions-and-events/incentive-travel/experience" },
      { label: "Visual Tour", path: "/functions-and-events/incentive-travel/gallery" },
      { label: "Rates", path: "/functions-and-events/incentive-travel/rates" },
      { label: "Enquire Now", path: "/contact-us?topic=functions--events/incentive-travel" },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/z5xj1bv1/vfsl-website-thumbnail-800x800-11.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/3fpob0l3/victoria-falls-safari-lodge-2025-06-09t121154930.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/kaukkvg5/victoria-falls-safari-lodge-8.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/lqhobleu/victoria-falls-safari-lodge-2025-06-09t122222250.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/gkwlxqra/vfsl-website-thumbnail-800x800-10.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/mguekew3/victoria-falls-safari-lodge-2025-06-26t212214097.png",
    ],
    highlights: [
      "Ample accommodations",
      "Multiple dining options",
      "World-class activities",
    ],
    features: [
      "Business centre facilities",
      "Complimentary evening transfers to The Boma – Dinner & Drum Show",
      "Spa treatments available",
      "Swimming pool with sun deck and loungers",
      "Opportunity for wildlife sightings",
      "Popular spot for sundowners with stunning wildlife views",
      "Option to book a professionally guided sit at Siduli Hide for closer wildlife encounters",
    ],
    enquiryContact: {
      contactPerson: "Events Manager Constance Mugadza",
      phone: "+263 8328 43201",
      email: "meetings@vfsl.co.zw",
      whatsapp: "+263 78 540 1420",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/z3qgtghh/victoria-falls-safari-lodge-15.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/pychoy1a/victoria-falls-safari-club-thumbnail.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/geecrjq2/victoria-falls-safari-lodge-acc-thumbnail.png",
    ],
    downloads: [
      { label: "Conferences and Incentives", url: "https://vfsc-umbraco.live.fireworkx.net/media/n11igtqj/conferences-and-incentives-may-2019.pdf" },
    ],
    learnMore: [
      { label: "News & Updates", path: "/news" },
      { label: "Media & Travel Trade", path: "/travel-trade" },
      { label: "Wellness", path: "/wellness" },
    ],
  },

  // ===========================================================================
  // 14. QUEEN NANDI PLACE
  // ===========================================================================
  queenNandiPlace: {
    title: "Queen Nandi Place",
    subPages: [
      { label: "Queen Nandi Place Experience", path: "/functions-and-events/queen-nandi-place/experience" },
      { label: "Visual Tour", path: "/functions-and-events/queen-nandi-place/gallery" },
      { label: "Rates", path: "/functions-and-events/queen-nandi-place/rates" },
      { label: "Enquire Now", path: "/contact-us?topic=functions--events/queen-nandi-place" },
    ],
    heroImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/my4bdeue/victoria-falls-safari-collection-conferences-17.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/uh0pszxl/victoria-falls-safari-lodge-81.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/b0td4mpk/victoria-falls-safari-lodge-84.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/os0igo10/victoria-falls-safari-lodge-74.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/tlek2xip/victoria-falls-safari-lodge-2025-06-26t212728131.png",
    ],
    highlights: [
      "Business centre facilities",
      "On-site parking",
      "Registration and reception area",
      "Wi-Fi and internet access",
      "Breakout spaces",
      "Onsite catering",
    ],
    features: [
      "Seating in boardroom, theatre and banquet style",
      "Audio visual equipment",
      "Air Conditioning & Ceiling Fan",
      "Adjacent amphitheatre",
    ],
    enquiryContact: {
      contactPerson: "Events Manager Constance Mugadza",
      phone: "+263 8328 43201",
      email: "meetings@vfsl.co.zw",
      whatsapp: "+263 78 540 1420",
    },
    galleryImages: [
      "https://vfsc-umbraco.live.fireworkx.net/media/0cdj3xbd/victoria-falls-safari-lodge-77.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/mudncke2/victoria-falls-safari-collection-conferences-12.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/0xldqdh3/victoria-falls-safari-lodge-85.png",
      "https://vfsc-umbraco.live.fireworkx.net/media/tlek2xip/victoria-falls-safari-lodge-2025-06-26t212728131.png",
    ],
    faqs: [
      { q: "What is Queen Nandi Place?", a: "Queen Nandi Place is an exclusive, multi-purpose venue located on the Victoria Falls Safari Lodge estate, designed to host upmarket conferences and events." },
      { q: "Can I host a private event at Queen Nandi Place?", a: "Yes. Queen Nandi Place is available for private hire and is ideal for celebrations, meetings, and tailored group experiences." },
      { q: "What facilities are available at Queen Nandi Place?", a: "Queen Nandi Place is equipped with indoor seating, presentation equipment, a private deck, and a dedicated kitchen, allowing for seamless event catering." },
      { q: "How many people can Queen Nandi Place accommodate?", a: "Depending on the setup, Queen Nandi Place can host up to 180 guests for a conference cinema style, and up to 200 guests for a cocktail-style function." },
      { q: "Is Queen Nandi Place open to non-resident guests?", a: "Yes. While part of the Victoria Falls Safari Lodge estate, Queen Nandi Place is open to non-residents for events, with prior booking." },
    ],
    learnMore: [
      { label: "News & Updates", path: "/news" },
      { label: "Media & Travel Trade", path: "/travel-trade" },
      { label: "Wellness", path: "/wellness" },
    ],
  },

  // ===========================================================================
  // 15. ACTIVITIES
  // ===========================================================================
  activities: {
    title: "Activities",
    heroImage: "https://vfsc-umbraco.live.fireworkx.net/media/xm4lmdol/victoria-falls-safari-lodge-activities-thumbnail.png",
    filterCategories: ["Adventure", "Air", "Cultural", "Land", "Leisure", "Offsite", "Onsite", "Water", "Wildlife"],
    activities: [
      {
        name: "Game Drives",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/iwne5hyq/giraffes-eating-at-victoria-falls-safari-lodge.jpg",
        description: "Discover the African bush on a guided game drive — morning and afternoon options available.",
        tags: ["Wildlife", "Land", "Adventure"],
      },
      {
        name: "Victoria Falls Tour",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/dcshiqy4/vfsl-website-thumbnail-800x800-5.png",
        description: "Pause at scenic lookout points to marvel at one of the Seven Natural Wonders of the World.",
        tags: ["Leisure", "Offsite"],
      },
      {
        name: "Onsite Waterhole",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/a20hdden/guest-at-buffalo-bar-looking-out-at-waterhole.jpg",
        description: "The Victoria Falls Safari Lodge has what many others in the area only dream about – a large waterhole which attracts a variety of wildlife including elephant, buffalo, kudu, waterbuck, impala as well as a large number of bird species.",
        tags: ["Wildlife", "Onsite"],
      },
      {
        name: "Sunset Cruise",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/2b5fn04p/victoria-falls-safari-collection-thumbnail.jpg",
        description: "Drift along the Zambezi with a G&T in hand, spotting wildlife as the sky glows in shades of red, orange and pink.",
        tags: ["Water", "Leisure", "Offsite"],
      },
      {
        name: "Helicopter Rides",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/yjel24vu/victoria-falls-safari-collection-thumbnail-5.jpg",
        description: "Take to the skies for a breathtaking helicopter flight over the majestic Victoria Falls and the Zambezi River.",
        tags: ["Air", "Adventure", "Offsite"],
      },
      {
        name: "Village Tour",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/lqgbc1cp/victoria-falls-safari-collection-42.png",
        description: "Journey to a local village and spend time learning about daily life, traditional food, stories and Zimbabwe's proud cultural heritage.",
        tags: ["Cultural", "Offsite"],
      },
      {
        name: "White Water Rafting",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/hikmions/victoria-falls-safari-collection-thumbnail-6.jpg",
        description: "Raft the wild Grade 5 Zambezi rapids from 7am, then enjoy a cold drink and lunch after a thrilling morning adventure.",
        tags: ["Water", "Adventure", "Offsite"],
      },
      {
        name: "Adrenaline Highwire",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/wvfmjob4/victoria-falls-safari-collection-thumbnail-4.jpg",
        description: "Thrill on Batoka Gorge cliffs with swings, zip lines, flying fox and a family-friendly canopy tour from age six.",
        tags: ["Adventure", "Offsite"],
      },
      {
        name: "Vulture Culture",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/212ckpia/vfsl-website-thumbnail-800x800-12.png",
        description: "Learn about vulture conservation and witness these vital birds feeding in their natural habitat. A must-see daily activity.",
        tags: ["Wildlife", "Onsite", "Leisure"],
      },
      {
        name: "Siduli Hide",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/b1vphdkx/vfsl-website-thumbnail-800x800.png",
        description: "The Siduli Hide at Victoria Falls Safari Lodge for the closest wild elephant, buffalo interactions imaginable.",
        tags: ["Wildlife", "Onsite"],
      },
      {
        name: "Bird Hide",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/qhul024s/victoria-falls-safari-lodge-42.png",
        description: "Enjoy birdwatching at Victoria Falls Safari Lodge. Bring binoculars!",
        tags: ["Wildlife", "Onsite"],
      },
      {
        name: "Victoria Falls Safari Spa",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/gsvhohaq/victoria-falls-safari-collection-6.png",
        description: "A world-class full-service spa offering massages, pool, cafe, terrace, hair and nail bar.",
        tags: ["Leisure", "Onsite"],
      },
      {
        name: "On-site Gift Shop",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/gg3bezhv/vfsl-website-thumbnail-500x500-3.png",
        description: "The Victoria Falls Safari Collection features an on-site gift/curio shop located in the lobby area, which offers a range of merchandise and operates daily from 08:00 to 20:00.",
        tags: ["Leisure", "Onsite"],
      },
      {
        name: "The Boma – Dinner & Drum Show",
        image: "https://vfsc-umbraco.live.fireworkx.net/media/xf0la3x3/victoria-falls-safari-collection.png",
        description: "The energy and vibe will captivate you before you even set foot inside.",
        tags: ["Cultural", "Leisure", "Onsite"],
      },
    ],
    downloads: [
      { label: "Our 2026 activities' price list", url: "https://vfsc-umbraco.live.fireworkx.net/media/0c5myjdt/final-activities-price-list-2026.pdf" },
    ],
    faqs: [
      { q: "Where can I book activities?", a: "Activities may be booked at the Victoria Falls Safari Lodge's Activities Desk which is open daily from 7am to 7pm." },
      { q: "What are must-do activities in Victoria Falls?", a: "The three must-do activities are: a) The tour of the Victoria Falls b) The sunset cruise c) The Helicopter flight over the Falls d) The Boma – Dinner & Drum Show" },
      { q: "Is it safe to walk in Victoria Falls town?", a: "Yes. The Victoria Falls Tourism Police unit are available to assist, advise, guide, and where necessary to prevent any street salesmen from becoming an irritation." },
      { q: "When is the best time to see the Victoria Falls?", a: "Victoria Falls is a year-round destination. However, the water levels vary throughout the year, being at their highest between April and June, and their lowest from October to December." },
      { q: "Do I pay for the Vulture Culture Experience?", a: "No, this is a complimentary activity. It takes place daily at 1pm and lasts for approximately 30 minutes." },
      { q: "Can you walk to town?", a: "No, the road goes through the national park, and one may encounter dangerous wild animals." },
      { q: "What is the climate of Victoria Falls?", a: "Zimbabwe has a temperate climate. The summer months (September to March) are hot and humid, while the winter months (May to August) are generally mild and dry." },
    ],
  },

  // ===========================================================================
  // 16. ABOUT US
  // ===========================================================================
  aboutUs: {
    title: "About Us",
    heroImage: "https://vfsc-umbraco.live.fireworkx.net/media/zkebcjev/victoria-falls-safari-collection-banners-12.jpg",
    exploreFurtherImage: "https://vfsc-umbraco.live.fireworkx.net/media/gw5dxxun/victoria-falls-safari-lodge-1.png",
    exploreFurther: [
      {
        name: "Our Awards",
        description: "We've earned multiple prestigious awards for excellence in hospitality and sustainable tourism.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/eotnzln5/victoria-falls-safari-collection-awards.jpg",
        path: "/about-us/awards",
      },
      {
        name: "Community & Environment",
        description: "We're committed to sustainable tourism, supporting local communities and preserving the environment.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/3rkngwi4/victoria-falls-safari-lodge-2025-06-10t135056751.png",
        path: "/about-us/community-and-environment",
      },
      {
        name: "Meet The Team",
        description: "Meet the passionate people behind our world-class hospitality, from our rangers to our executive chefs.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/vp4h3lgc/vfsl-meet-the-team-thumbnail.png",
        path: "/about-us/meet-the-team",
      },
      {
        name: "Global & Local Partners",
        description: "Our commitment to excellence extends far beyond the perimeter of our estate.",
        thumbnail: "https://vfsc-umbraco.live.fireworkx.net/media/fccnpdqq/victoria-falls-safari-collection-thumbnail-9.jpg",
        path: "/about-us/affiliations",
      },
    ],
    faqs: [
      { q: "How can I help the local community?", a: "We are members of Pack for a Purpose, a global initiative that allows travellers like yourself to make an impact on the community at your destination. Save a few kilos of space in your suitcase and bring supplies for local schools or medical clinics. Alternatively, you could make a donation to Victoria Falls Anti-Poaching Unit, which strives to conserve the wildlife and its natural environment in the region." },
    ],
  },

  // ===========================================================================
  // 17. NEWS & UPDATES
  // ===========================================================================
  news: {
    title: "News & Updates",
    filterCategories: [
      "Activities", "Art", "Community & Responsibility", "Conservation",
      "Corporate Social Responsibility", "Events", "Food", "Game Viewing",
      "Green Season", "Home Bars Restaurants", "Homepage Lodges", "Itinerary",
    ],
    newsletterSignup: {
      fields: ["Full Name", "Country of Residence", "Email Address"],
    },
  },
};

export default VFSC_DATA;
