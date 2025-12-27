export const destinations = [
    {
        id: "srinagar",
        title: "Srinagar",
        subtitle: "The Venetian Experience",
        description: "The summer capital of Jammu & Kashmir, famous for its gardens, lakes, and houseboats. It is also known for traditional Kashmiri handicrafts and dried fruits.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200",
        stats: {
            altitude: "1,585 m",
            bestTime: "Apr - Oct",
            distance: "0 km (Base)"
        },
        attractions: [
            { title: "Dal Lake", desc: "The jewel of Srinagar, famous for houseboats and Shikara rides." },
            { title: "Mughal Gardens", desc: "Nishat, Shalimar, and Chashme Shahi terraced gardens." },
            { title: "Shankaracharya Temple", desc: "Ancient temple overlooking the entire city." }
        ]
    },
    {
        id: "gulmarg",
        title: "Gulmarg",
        subtitle: "Meadow of Flowers",
        description: "A premier hill station and skiing destination. Known for having one of the world's highest gondolas.",
        image: "/images/gulmarg-featured.jpg",
        stats: {
            altitude: "2,650 m",
            bestTime: "Dec - Mar (Skiing)",
            distance: "51 km from Srinagar"
        },
        attractions: [
            { title: "Gulmarg Gondola", desc: "World's second highest operating cable car." },
            { title: "Golf Course", desc: "Highest green golf course in the world." },
            { title: "Strawberry Valley", desc: "Hidden gem perfect for picnics." }
        ]
    },
    {
        id: "pahalgam",
        title: "Pahalgam",
        subtitle: "Valley of Shepherds",
        description: "Famous for its scenic beauty, health resorts, and as the base camp for the Amarnath Yatra.",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200",
        stats: {
            altitude: "2,740 m",
            bestTime: "Mar - Nov",
            distance: "90 km from Srinagar"
        },
        attractions: [
            { title: "Betaab Valley", desc: "Famous location from the Bollywood movie Betaab." },
            { title: "Aru Valley", desc: "Scenic meadow and starting point for treks." },
            { title: "Lidder River", desc: "White water rafting and trout fishing." }
        ]
    }
];

export interface ItineraryItem {
    day: number;
    title: string;
    desc: string;
    highlights?: string[];
    meals?: string;
    accommodation?: string;
    distance?: string;
}

export interface Package {
    id: string;
    title: string;
    tagline: string;
    price: number;
    originalPrice?: number;
    days: number;
    nights: number;
    rating: number;
    reviews: number;
    image: string;
    gallery?: string[];
    category: string;
    groupSize: string;
    difficulty: string;
    overview: string;
    highlights: string[];
    inclusions: string[];
    exclusions: string[];
    route: string[];
    itinerary: ItineraryItem[];
}

export const packages: Package[] = [
    {
        id: "romantic-kashmir-honeymoon",
        title: "Romantic Kashmir Honeymoon",
        tagline: "The Perfect Honeymoon Getaway in Paradise",
        price: 35999,
        originalPrice: 45999,
        days: 6,
        nights: 5,
        rating: 4.9,
        reviews: 156,
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=1200",
        gallery: [
            "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800",
            "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800",
            "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800"
        ],
        category: "Honeymoon",
        groupSize: "2 People (Private)",
        difficulty: "Easy",
        overview: "Experience the romance of Kashmir with your beloved. This carefully curated honeymoon package takes you through the most romantic destinations of the valley - from the serene Dal Lake houseboats to the snow-capped mountains of Gulmarg. Enjoy candlelight dinners, private Shikara rides, and create memories that will last a lifetime.",
        highlights: ["Luxury Houseboat Stay", "Private Shikara Ride", "Gulmarg Gondola", "Mughal Gardens Tour", "Candlelight Dinner", "Couples Spa Session"],
        inclusions: [
            "5 Nights accommodation (2N Houseboat + 2N Gulmarg + 1N Pahalgam)",
            "Daily breakfast and dinner",
            "All transfers in private sedan",
            "Private Shikara ride on Dal Lake",
            "Gulmarg Gondola tickets (Phase 1 & 2)",
            "Candlelight dinner with flower decoration",
            "All applicable taxes and permits"
        ],
        exclusions: [
            "Airfare / Train tickets",
            "Personal expenses and tips",
            "Adventure activities not mentioned",
            "Travel insurance",
            "Anything not mentioned in inclusions"
        ],
        route: ["Srinagar", "Gulmarg", "Pahalgam", "Srinagar"],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Srinagar - Welcome to Paradise",
                desc: "Upon arrival at Sheikh ul-Alam International Airport, our representative will greet you with a traditional Kashmiri welcome. Transfer to your luxury houseboat on Dal Lake. After freshening up, enjoy a romantic sunset Shikara ride through the floating gardens and lotus patches. Watch as the sun paints the Zabarwan mountains in shades of gold and purple. Return to your houseboat for a traditional Kashmiri Wazwan dinner under the stars.",
                highlights: ["Airport pickup with flower bouquet", "Luxury houseboat check-in", "1-hour sunset Shikara ride", "Welcome drink & traditional dinner"],
                meals: "Dinner",
                accommodation: "Deluxe Houseboat, Dal Lake",
                distance: "12 km from Airport"
            },
            {
                day: 2,
                title: "Srinagar - Mughal Gardens & Local Delights",
                desc: "Wake up to the melodious sounds of kingfishers and the gentle ripples of Dal Lake. After a lavish breakfast, embark on a tour of the world-famous Mughal Gardens. Visit Nishat Bagh (Garden of Pleasure), Shalimar Bagh (Abode of Love), and Chashme Shahi (Royal Spring). Each garden tells a story of royal romance. In the evening, stroll through the local bazaars to shop for authentic Kashmiri handicrafts - Pashmina shawls, walnut wood carvings, and pure saffron.",
                highlights: ["Three Mughal Gardens visit", "Photo session at each garden", "Shopping at local markets", "Pashmina & saffron shopping"],
                meals: "Breakfast & Dinner",
                accommodation: "Deluxe Houseboat, Dal Lake"
            },
            {
                day: 3,
                title: "Srinagar to Gulmarg - The Meadow of Flowers",
                desc: "After breakfast, drive to Gulmarg, the 'Meadow of Flowers'. The 51 km journey takes you through picturesque villages and apple orchards. Upon arrival, check into your resort and enjoy the breathtaking views of snow-capped peaks. Take the famous Gulmarg Gondola to Kongdoori (Phase 1) and Apharwat Peak (Phase 2) at 13,780 ft. Enjoy snow activities like sledging and skiing (seasonal). The evening is free for a romantic walk through the meadows.",
                highlights: ["Scenic drive through pine forests", "Gondola Phase 1 & 2", "Snow activities (seasonal)", "Romantic evening walk"],
                meals: "Breakfast & Dinner",
                accommodation: "Premium Resort, Gulmarg",
                distance: "51 km (2 hours)"
            },
            {
                day: 4,
                title: "Gulmarg - A Day of Adventure & Romance",
                desc: "Start your day with a leisurely breakfast overlooking the mountains. Today is yours to explore at your own pace. Optional activities include horse riding to Khilanmarg, golf at the world's highest golf course, or simply relaxing at the spa. For adventure seekers, try ATV rides or mountain biking. In the evening, enjoy a special couples spa session followed by a candlelight dinner arranged by the resort.",
                highlights: ["Optional horse riding to Khilanmarg", "Couples spa session", "Candlelight dinner", "Leisure & bonding time"],
                meals: "Breakfast & Dinner",
                accommodation: "Premium Resort, Gulmarg"
            },
            {
                day: 5,
                title: "Gulmarg to Pahalgam via Saffron Fields",
                desc: "After breakfast, bid farewell to Gulmarg and drive to Pahalgam, the 'Valley of Shepherds'. En route, stop at Pampore to witness the saffron fields (seasonal). The 140 km journey offers stunning views of the Lidder Valley. Upon arrival, check into your riverside resort. Visit the famous Betaab Valley (filming location of the movie 'Betaab'), Aru Valley, and Chandanwari. The sound of the Lidder River makes for a perfect romantic backdrop.",
                highlights: ["Saffron fields visit (seasonal)", "Betaab Valley exploration", "Aru Valley excursion", "Riverside dinner"],
                meals: "Breakfast & Dinner",
                accommodation: "Riverside Resort, Pahalgam",
                distance: "140 km (4.5 hours)"
            },
            {
                day: 6,
                title: "Pahalgam to Srinagar - Departure with Sweet Memories",
                desc: "Enjoy a peaceful morning breakfast by the river. If time permits, take a short walk along the Lidder River or visit the local market for last-minute souvenirs. Drive back to Srinagar Airport for your onward journey. Take with you memories of snow-capped mountains, serene lakes, romantic sunsets, and the warmth of Kashmiri hospitality. We hope to see you again soon!",
                highlights: ["Morning by Lidder River", "Last-minute shopping", "Airport transfer", "Fond farewell"],
                meals: "Breakfast",
                distance: "90 km (2.5 hours)"
            }
        ]
    },
    {
        id: "kashmir-family-adventure",
        title: "Kashmir Family Adventure",
        tagline: "Create Unforgettable Family Memories",
        price: 28999,
        originalPrice: 36999,
        days: 7,
        nights: 6,
        rating: 4.8,
        reviews: 234,
        image: "/images/gulmarg-featured.jpg",
        category: "Family",
        groupSize: "2-8 People",
        difficulty: "Easy",
        overview: "A perfect family vacation that combines adventure, culture, and relaxation. From Shikara rides and snow play to discovering Bollywood filming locations, this package has something for everyone in the family - from grandparents to kids!",
        highlights: ["Family Houseboat Experience", "Snow Activities in Gulmarg", "Bollywood Film Locations", "Pony Rides", "Traditional Wazwan Feast", "Cultural Shows"],
        inclusions: [
            "6 Nights accommodation (2N Srinagar + 2N Gulmarg + 2N Pahalgam)",
            "Daily breakfast and dinner",
            "All transfers in private Tempo Traveller / Innova",
            "Shikara ride on Dal Lake",
            "Gulmarg Gondola tickets (Phase 1)",
            "Pony ride in Pahalgam",
            "All sightseeing as per itinerary"
        ],
        exclusions: [
            "Airfare / Train tickets",
            "Personal expenses and tips",
            "Additional adventure activities",
            "Travel insurance",
            "Gondola Phase 2 (optional)"
        ],
        route: ["Srinagar", "Gulmarg", "Pahalgam", "Srinagar"],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Kashmir - Welcome to the Valley",
                desc: "Arrive at Srinagar Airport where our team welcomes you with traditional Kahwa (Kashmiri tea). Transfer to your houseboat on the iconic Dal Lake. Settle in and let the kids explore the unique houseboat while you enjoy the serene views. Evening Shikara ride where the whole family can enjoy floating through the lake's colorful gardens. End the day with a delicious Kashmiri dinner on the houseboat deck.",
                highlights: ["Traditional Kahwa welcome", "Houseboat exploration for kids", "Family Shikara ride", "Dinner on houseboat deck"],
                meals: "Dinner",
                accommodation: "Family Houseboat, Dal Lake"
            },
            {
                day: 2,
                title: "Srinagar Exploration - Gardens & Culture",
                desc: "After breakfast, take the family to explore the magnificent Mughal Gardens. Kids will love running through the terraced lawns while adults appreciate the historical architecture. Visit Shankaracharya Temple for panoramic city views (optional, involves 243 steps). Post lunch, visit the Hazratbal Shrine and Floating Vegetable Market. Evening is free for shopping - let kids pick Kashmiri souvenirs while you hunt for Pashmina and saffron.",
                highlights: ["Mughal Gardens with family photo ops", "Panoramic views from Shankaracharya", "Floating Vegetable Market", "Shopping for family souvenirs"],
                meals: "Breakfast & Dinner",
                accommodation: "Family Houseboat, Dal Lake"
            },
            {
                day: 3,
                title: "Gulmarg Adventure - Snow Paradise for Kids",
                desc: "Drive to Gulmarg through apple orchards and pine forests - kids will love spotting ponies and sheep along the way. Upon arrival, take the Gulmarg Gondola to Kongdoori (Phase 1). This is where the real fun begins - snow play, sledging, and snowball fights! The whole family can enjoy the snow together. For older kids and adults, optional skiing lessons are available. Return to the resort for hot chocolate and bonding time.",
                highlights: ["Scenic drive - spot animals!", "Gondola cable car experience", "Snow play and sledging", "Family hot chocolate time"],
                meals: "Breakfast & Dinner",
                accommodation: "Family Resort, Gulmarg",
                distance: "51 km (2 hours)"
            },
            {
                day: 4,
                title: "Gulmarg - Leisure & Local Experiences",
                desc: "Today is a relaxed day for family bonding. Choose your own adventure - take a horse ride to Khilanmarg meadow, try ATV rides (for teens and adults), or simply build snowmen and have snowball fights. Visit the historic St. Mary's Church and the golf course. Kids can enjoy the playground areas while parents relax with views of the Himalayan peaks. Evening cultural show at the resort featuring local Kashmiri music and dance.",
                highlights: ["Horse riding to Khilanmarg", "ATV rides (optional)", "St. Mary's Church visit", "Cultural show in evening"],
                meals: "Breakfast & Dinner",
                accommodation: "Family Resort, Gulmarg"
            },
            {
                day: 5,
                title: "Pahalgam - Valley of Bollywood",
                desc: "Journey towards Pahalgam, passing through saffron town Pampore and historical Avantipur ruins. Check into your riverside family resort. Post lunch, visit the famous Betaab Valley - filming location of many Bollywood movies! Kids and teens will love posing at movie-famous spots. Continue to Chandanwari where kids can enjoy pony/sledge rides. The gurgling Lidder River creates a magical atmosphere as you return for dinner.",
                highlights: ["Saffron fields & ancient ruins", "Betaab Valley - Bollywood spots", "Pony rides in Chandanwari", "Riverside family time"],
                meals: "Breakfast & Dinner",
                accommodation: "Riverside Resort, Pahalgam",
                distance: "140 km (4.5 hours)"
            },
            {
                day: 6,
                title: "Pahalgam Adventure - Aru Valley Expedition",
                desc: "Today explore the pristine Aru Valley by pony or on foot. The meadows are perfect for family picnics - we'll arrange a packed lunch for you. Kids can collect wildflowers while adults enjoy the snow-capped Himalayan views. Stop for trout fishing at the river (catch and cook experience available). Return to Pahalgam for some local market exploration. Farewell dinner with traditional Wazwan feast - a 36-course Kashmiri meal!",
                highlights: ["Aru Valley picnic", "Pony riding for kids", "Trout fishing experience", "Traditional Wazwan feast"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Riverside Resort, Pahalgam"
            },
            {
                day: 7,
                title: "Departure - Until We Meet Again",
                desc: "After a leisurely breakfast, drive back to Srinagar through the scenic countryside. If time permits, stop at the Apple Town of Shopian for fresh fruits. Arrive at Srinagar Airport for your flight home. Your family takes back not just photos, but stories of snow play, Shikara rides, and the incredible hospitality of Kashmir. We hope to welcome you back soon!",
                highlights: ["Leisure morning", "Apple town visit (seasonal)", "Photo stop at scenic points", "Warm farewell"],
                meals: "Breakfast",
                distance: "90 km (2.5 hours)"
            }
        ]
    },
    {
        id: "ladakh-adventure-expedition",
        title: "Ladakh Adventure Expedition",
        tagline: "Conquer the Highest Passes on Earth",
        price: 54999,
        originalPrice: 69999,
        days: 10,
        nights: 9,
        rating: 5.0,
        reviews: 89,
        image: "https://images.unsplash.com/photo-1626621341120-20d08bbb0797?q=80&w=1200",
        category: "Adventure",
        groupSize: "4-12 People",
        difficulty: "Challenging",
        overview: "The ultimate adventure expedition through the roof of the world. Ride through world's highest motorable passes, camp beside the magical Pangong Lake, explore ancient monasteries, and witness landscapes that seem like they belong to another planet. This is not just a trip - it's a life-changing experience.",
        highlights: ["Khardung La Pass (18,380 ft)", "Pangong Lake Camping", "Nubra Valley & Sand Dunes", "Ancient Monasteries", "Magnetic Hill Mystery", "Double-Humped Camels"],
        inclusions: [
            "9 Nights accommodation (Hotels + Camps)",
            "All meals during the trip",
            "Royal Enfield 500cc / Tempo Traveller",
            "Fuel and mechanic support",
            "Inner Line Permits",
            "Oxygen cylinder backup",
            "First aid and emergency support",
            "Local sightseeing guide"
        ],
        exclusions: [
            "Flights to/from Leh",
            "Personal riding gear",
            "Travel insurance (mandatory)",
            "Alcoholic beverages",
            "Personal medical kit",
            "Tips and porterage"
        ],
        route: ["Leh", "Khardung La", "Nubra Valley", "Turtuk", "Pangong Lake", "Chang La", "Leh"],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Leh - Gateway to Ladakh",
                desc: "Fly into Kushok Bakula Rimpochee Airport, one of the highest commercial airports in the world. The views during landing are absolutely spectacular! Transfer to your hotel and spend the day acclimatizing to the high altitude. This is crucial - do not exert yourself. Walk slowly around Leh Market, visit Shanti Stupa for sunset views. Stay hydrated and get a good night's sleep.",
                highlights: ["Scenic flight landing", "High altitude acclimatization", "Leh Market exploration", "Shanti Stupa sunset"],
                meals: "Lunch & Dinner",
                accommodation: "Hotel in Leh",
                distance: "4 km from Airport"
            },
            {
                day: 2,
                title: "Leh Local Sightseeing - Cultural Immersion",
                desc: "After breakfast, continue acclimatization with gentle sightseeing. Visit the 17th-century Leh Palace overlooking the town. Explore Namgyal Tsemo Monastery and its ancient manuscripts. Post lunch, visit the Hall of Fame (Army Museum) and Zorawar Fort. The slow pace today prepares your body for the adventures ahead. Evening briefing about the expedition route and safety protocols.",
                highlights: ["Leh Palace exploration", "Namgyal Tsemo Monastery", "Hall of Fame Army Museum", "Expedition briefing"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Hotel in Leh"
            },
            {
                day: 3,
                title: "Leh to Nubra Valley via Khardung La",
                desc: "Today's the day! After an early breakfast, begin the legendary ride to Khardung La, one of the world's highest motorable passes at 18,380 feet. The air is thin, the views are infinite. Stop for photos at the pass and hot chai served by the roadside vendors. Descend into the mystical Nubra Valley and check into your camp at Hunder. Take a camel ride on the cold desert sand dunes with double-humped Bactrian camels!",
                highlights: ["Khardung La Pass conquest", "World's highest motorable road", "Nubra Valley entry", "Bactrian camel safari"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Camp in Hunder, Nubra",
                distance: "120 km (5-6 hours)"
            },
            {
                day: 4,
                title: "Nubra Valley Exploration - Turtuk Village",
                desc: "Drive to Turtuk, India's northernmost village and a hidden gem of Ladakh. This Balti village was part of Pakistan until 1971 and offers a unique cultural experience. Walk through apricot orchards, interact with friendly locals, and taste authentic Balti cuisine. Visit the 16th-century Turtuk palace. Return to Hunder for camping under a sky filled with millions of stars - the Milky Way is clearly visible here!",
                highlights: ["Turtuk village expedition", "Balti culture experience", "Ancient palace visit", "Million-star camping"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Camp in Hunder, Nubra",
                distance: "90 km (3 hours each way)"
            },
            {
                day: 5,
                title: "Nubra to Pangong Lake via Shyok",
                desc: "Begin the breathtaking journey to Pangong Lake via the adventurous Shyok River route. This less-traveled road offers raw, dramatic landscapes. Cross multiple river streams and navigate through rugged terrain. As you approach Pangong, the first glimpse of the legendary blue lake takes your breath away. Camp right on the lakeshore and watch the lake change colors with the setting sun.",
                highlights: ["Shyok River route adventure", "River crossing experience", "First view of Pangong", "Lakeshore camping"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Camp at Pangong Lake",
                distance: "160 km (7-8 hours)"
            },
            {
                day: 6,
                title: "Pangong Lake - Day of Wonder",
                desc: "Wake up inside your tent to the most surreal views - Pangong Lake stretching into the horizon, with mountains reflecting in its crystal-clear waters. Spend the day exploring different viewpoints, visiting the famous '3 Idiots' filming point, and simply absorbing the magic. The lake changes from blue to green to red through the day. Optional kayaking for the adventurous. Another night of camping beside the enchanting lake.",
                highlights: ["Sunrise at Pangong", "3 Idiots movie point", "Lake photography session", "Optional kayaking"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Camp at Pangong Lake"
            },
            {
                day: 7,
                title: "Pangong to Leh via Chang La",
                desc: "Bid farewell to Pangong and begin the journey back to Leh via Chang La pass (17,590 ft), the third highest motorable pass. Stop at the Chang La cafeteria for chai and maggi - a Ladakh tradition! Visit Hemis Monastery, the largest and wealthiest monastery in Ladakh, home to a stunning collection of golden Buddhas and ancient manuscripts. Reach Leh by evening for a well-deserved rest.",
                highlights: ["Chang La Pass crossing", "Hemis Monastery visit", "Golden Buddha statues", "Return to Leh"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Hotel in Leh",
                distance: "160 km (6-7 hours)"
            },
            {
                day: 8,
                title: "Leh - Monastery Circuit & Mysteries",
                desc: "Explore Ladakh's spiritual heritage today. Start with Thiksey Monastery, often called 'Mini Potala' for its resemblance to the Potala Palace in Tibet. Visit Shey Palace and its giant Buddha statue. Head to Sangam - the confluence of Indus and Zanskar rivers. Experience the mysterious Magnetic Hill where vehicles appear to defy gravity. End with Gurudwara Pathar Sahib before returning to Leh for a farewell dinner.",
                highlights: ["Thiksey Monastery sunrise", "Sangam confluence", "Magnetic Hill mystery", "Farewell Ladakhi dinner"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Hotel in Leh"
            },
            {
                day: 9,
                title: "Leh - Rest & Exploration",
                desc: "A buffer day built into the itinerary for flexibility. Use it to rest and recover, revisit favorite spots, shop for Ladakhi souvenirs (pashmina, thangka paintings, silver jewelry), or explore areas you might have missed. Optional activities include river rafting on the Indus or a cooking class to learn Ladakhi cuisine. Evening celebration with your expedition group.",
                highlights: ["Free exploration day", "Souvenir shopping", "Optional river rafting", "Group celebration dinner"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Hotel in Leh"
            },
            {
                day: 10,
                title: "Departure - Julley Ladakh! (Goodbye Ladakh!)",
                desc: "After breakfast, transfer to the airport for your onward flight. As you ascend and look down at the brown mountains and winding rivers one last time, you'll realize that Ladakh has changed something within you. You've conquered some of the highest passes on Earth, seen stars like never before, and experienced a land that's truly unlike anywhere else. Julley!",
                highlights: ["Scenic departure flight", "Himalayan aerial views", "Memories for a lifetime", "Until next time!"],
                meals: "Breakfast",
                distance: "4 km to Airport"
            }
        ]
    },
    {
        id: "spiritual-kashmir-pilgrimage",
        title: "Spiritual Kashmir Pilgrimage",
        tagline: "A Journey of Faith & Inner Peace",
        price: 24999,
        originalPrice: 32999,
        days: 5,
        nights: 4,
        rating: 4.7,
        reviews: 112,
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1200",
        category: "Spiritual",
        groupSize: "2-15 People",
        difficulty: "Moderate",
        overview: "Discover the spiritual heart of Kashmir through its ancient temples, sacred shrines, and peaceful monasteries. From the revered Shankaracharya Temple to the holy Amarnath Cave (seasonal), this pilgrimage covers the most sacred sites of the valley, combining spirituality with the natural beauty of the Himalayas.",
        highlights: ["Shankaracharya Temple", "Hazratbal Shrine", "Kheer Bhawani Temple", "Martand Sun Temple", "Anantnag Sulphur Springs", "Meditation Sessions"],
        inclusions: [
            "4 Nights accommodation in quality hotels",
            "Vegetarian meals (breakfast, lunch, dinner)",
            "All transfers in private AC vehicle",
            "All temple/shrine entry fees",
            "Local pilgrimage guide",
            "Morning and evening prayer arrangements",
            "All applicable taxes"
        ],
        exclusions: [
            "Airfare / Train tickets",
            "Personal pooja items",
            "Donations and offerings",
            "Travel insurance",
            "Personal expenses"
        ],
        route: ["Srinagar", "Pulwama", "Anantnag", "Pahalgam", "Srinagar"],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Srinagar - Blessings Begin",
                desc: "Arrive at Srinagar Airport and transfer to your hotel. After freshening up, visit the revered Shankaracharya Temple, situated at 1,000 feet above the valley. The 243 ancient steps lead you to the 9th century temple dedicated to Lord Shiva. Enjoy panoramic views of Dal Lake and the city while seeking blessings. Evening visit to Hazratbal Shrine on Dal Lake's shore, housing a holy relic believed to be Prophet Muhammad's (PBUH) hair. Return for vegetarian dinner and early night.",
                highlights: ["Shankaracharya Temple darshan", "Panoramic valley views", "Hazratbal Shrine visit", "Evening prayers"],
                meals: "Dinner",
                accommodation: "Hotel in Srinagar"
            },
            {
                day: 2,
                title: "Sacred Shrines of Srinagar",
                desc: "Early morning, visit the famous Kheer Bhawani Temple in Tulmul dedicated to Goddess Ragnya Devi. The unique feature is the sacred spring whose water changes color. This is one of Kashmir's holiest Hindu shrines. Post breakfast, visit Shalimar and Nishat Mughal Gardens - testimony to the spiritual connection between man and nature. Afternoon visit to Makhdoom Sahib Shrine on Hari Parbat, followed by a peaceful Shikara ride on Dal Lake during sunset.",
                highlights: ["Kheer Bhawani Temple darshan", "Color-changing sacred spring", "Mughal Gardens meditation", "Sunset Shikara ride"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Hotel in Srinagar"
            },
            {
                day: 3,
                title: "Journey to Martand & Anantnag",
                desc: "After prayers and breakfast, drive towards the ancient Martand Sun Temple, a magnificent 8th-century architectural marvel. Though in ruins, the temple's grandeur is still overwhelming. Continue to Anantnag (Islamabad) and visit the famous Sulphur Springs believed to have healing properties. Visit the revered shrine of Baba Reshi. Experience the afternoon at the peaceful Achabal Gardens, often called 'Paradise of Kashmir' by Mughal emperors.",
                highlights: ["Martand Sun Temple", "Healing sulphur springs", "Baba Reshi Shrine", "Achabal Gardens peace"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Hotel in Pahalgam",
                distance: "100 km (3 hours)"
            },
            {
                day: 4,
                title: "Pahalgam - Gateway to Amarnath",
                desc: "Begin with morning meditation by the Lidder River. Visit the ancient Mamaleshwara Temple, one of the oldest Shiva temples in Kashmir. For those who wish, take a pony ride to Chandanwari, the starting point for the holy Amarnath Yatra (pilgrimage open during July-August). The Sheshnag Lake en route is believed to be guarded by divine snakes. Spend the afternoon in peaceful contemplation at Betaab Valley. Evening satsang and bhajan session at the hotel.",
                highlights: ["Riverside meditation", "Mamaleshwara Temple", "Chandanwari pilgrimage point", "Evening satsang & bhajans"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Hotel in Pahalgam"
            },
            {
                day: 5,
                title: "Departure - Carrying Blessings Home",
                desc: "After morning prayers and breakfast, drive back to Srinagar. En route, stop at the revered Charar-e-Sharief shrine, one of the most important Muslim sites in Kashmir. Arrive in Srinagar and visit the Jamia Masjid, the largest mosque in Kashmir, known for its 370 wooden pillars. Transfer to the airport with blessed memories, holy prasad, and a heart filled with the spiritual vibrations of Kashmir. Om Namah Shivaya!",
                highlights: ["Morning prayers", "Charar-e-Sharief shrine", "Jamia Masjid visit", "Blessed departure"],
                meals: "Breakfast",
                distance: "90 km to Airport"
            }
        ]
    },
    {
        id: "kashmir-great-lakes-trek",
        title: "Kashmir Great Lakes Trek",
        tagline: "Alpine Lakes & Himalayan Meadows",
        price: 18999,
        originalPrice: 24999,
        days: 8,
        nights: 7,
        rating: 4.9,
        reviews: 67,
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200",
        category: "Adventure",
        groupSize: "6-12 People",
        difficulty: "Challenging",
        overview: "One of India's most beautiful high-altitude treks, the Kashmir Great Lakes trail takes you through 7 stunning alpine lakes, vast meadows, and breathtaking mountain passes. Trek through a landscape of emerald green meadows dotted with wildflowers, camp beside crystal-clear lakes that reflect snow-capped peaks, and experience the raw, untouched beauty of the Kashmir Himalayas.",
        highlights: ["7 Alpine Lakes", "13,750 ft Gadsar Pass", "Meadows of Sonmarg", "Shepherds' Trails", "Wildlife Spotting", "Stargazing at High Camps"],
        inclusions: [
            "7 Nights accommodation (1N Sonmarg + 6N Camping)",
            "All meals during trek (vegetarian & non-veg options)",
            "Professional trek leader and local guides",
            "All camping equipment (tents, sleeping bags, mats)",
            "Safety equipment and first aid",
            "Forest permits and camping fees",
            "Srinagar to Sonmarg transfers"
        ],
        exclusions: [
            "Flights to Srinagar",
            "Personal trekking gear",
            "Travel insurance (mandatory)",
            "Personal medication",
            "Tips for trek staff",
            "Emergency evacuation costs"
        ],
        route: ["Sonmarg", "Nichnai", "Vishansar Lake", "Gadsar", "Satsar", "Gangabal Lake", "Naranag"],
        itinerary: [
            {
                day: 1,
                title: "Srinagar to Sonmarg - Basecamp Setup",
                desc: "Meet the trek team in Srinagar for briefing and gear check. Drive to Sonmarg, the 'Meadow of Gold'. The 80 km journey through the scenic Sindh Valley builds anticipation for what lies ahead. Check into the campsite at Sonmarg, surrounded by glaciers and wildflower meadows. Afternoon acclimatization walk to Thajiwas Glacier. Evening briefing about the trek, safety protocols, and what to expect in the coming days.",
                highlights: ["Team meeting & gear check", "Scenic drive to Sonmarg", "Thajiwas Glacier walk", "Trek briefing"],
                meals: "Lunch & Dinner",
                accommodation: "Tents at Sonmarg",
                distance: "80 km drive"
            },
            {
                day: 2,
                title: "Sonmarg to Nichnai - Trek Begins",
                desc: "The adventure begins! Trek from Sonmarg (9,186 ft) to Nichnai (11,500 ft) through pine forests and shepherd trails. The first half of the trek is a gentle climb through woods, while the second half opens into vast meadows. Your first glimpse of snow-capped peaks marks the moment you truly enter the wilderness. Camp is set beside a pristine stream with a clear view of the Nichnai Pass you'll cross tomorrow.",
                highlights: ["First day of trekking", "Pine forest trails", "Shepherd encounters", "Mountain stream camping"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Tents at Nichnai",
                distance: "12 km (6-7 hours)"
            },
            {
                day: 3,
                title: "Nichnai to Vishansar Lake via Nichnai Pass",
                desc: "Cross the Nichnai Pass (13,387 ft) - your first major pass of this trek! The climb is steep but rewarding. On the other side, descend to one of Kashmir's most beautiful sights - the twin lakes of Vishansar and Krishansar. The emerald green Vishansar Lake, surrounded by rocky mountains and patches of snow, serves as tonight's campsite. Take an evening walk to Krishansar Lake, named after Lord Krishna.",
                highlights: ["Nichnai Pass conquest", "Twin lakes discovery", "Vishansar camping", "Krishansar exploration"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Tents at Vishansar Lake",
                distance: "13 km (7-8 hours)"
            },
            {
                day: 4,
                title: "Vishansar to Gadsar via Gadsar Pass",
                desc: "Today's highlight is Gadsar Pass (13,750 ft), the highest point of the trek! From the pass, you can see the entire valley ahead and the lakes you've left behind. The descent to Gadsar Lake, also called 'Lake of Fish', is steep but stunning. The lake's turquoise waters and the surrounding meadows make it one of the most picturesque camping spots. Watch for Himalayan wildlife - marmots, pikas, and if lucky, the blue sheep.",
                highlights: ["Highest pass of trek", "Gadsar Lake camping", "Wildlife spotting", "Panoramic Himalayan views"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Tents at Gadsar",
                distance: "14 km (8-9 hours)"
            },
            {
                day: 5,
                title: "Gadsar to Satsar Lake",
                desc: "A relatively easier day as you trek from Gadsar to the beautiful Satsar Lakes. 'Satsar' means 'Seven Lakes' - and true to its name, you'll find a series of seven small lakes in this area. The trail winds through meadows carpeted with wildflowers (in season). This is ideal shepherd territory, and you may encounter Gujjar families with their flocks. Camp beside one of the Satsar lakes for a magical evening under the stars.",
                highlights: ["Seven lakes discovery", "Wildflower meadows", "Gujjar shepherd meeting", "Stargazing night"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Tents at Satsar",
                distance: "9 km (5-6 hours)"
            },
            {
                day: 6,
                title: "Satsar to Gangabal Lake",
                desc: "Trek towards the majestic Gangabal Lake, considered the most beautiful of all Kashmir lakes. At 11,500 ft, this massive glacial lake is fed by the Haramukh Glacier and is of great religious significance to Kashmiri Pandits. The turquoise waters reflecting Mount Haramukh create a view you'll never forget. Set up camp beside the lake and spend the evening in quiet contemplation of nature's masterpiece.",
                highlights: ["Gangabal Lake arrival", "Mount Haramukh views", "Sacred lake significance", "Sunset at Gangabal"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Tents at Gangabal",
                distance: "10 km (6-7 hours)"
            },
            {
                day: 7,
                title: "Gangabal to Naranag - Trek End",
                desc: "The final day of trekking takes you on a long but beautiful descent to Naranag through dense forests and meadows. As you descend, the landscape slowly transforms from alpine to temperate. Arrive at Naranag village, home to the 8th-century Naranag Temple complex dedicated to Lord Shiva. Celebrate the completion of the trek with your team! Transfer to a nearby guesthouse for your last night in the mountains.",
                highlights: ["Final descent", "Forest trails", "Naranag Temple visit", "Trek celebration"],
                meals: "Breakfast, Lunch & Dinner",
                accommodation: "Guesthouse at Naranag",
                distance: "16 km (8-9 hours)"
            },
            {
                day: 8,
                title: "Naranag to Srinagar - Farewell",
                desc: "After a leisurely breakfast and goodbyes to the local team, drive back to Srinagar (75 km). If time permits, stop at Wular Lake, one of Asia's largest freshwater lakes. Arrive in Srinagar with memories of seven magnificent lakes, endless meadows, and a sense of accomplishment that only the mountains can give. Transfer to airport or option to extend your stay. You're now a member of the Kashmir Great Lakes alumni!",
                highlights: ["Leisure breakfast", "Wular Lake stop", "Return to Srinagar", "Trek completion certificate"],
                meals: "Breakfast",
                distance: "75 km drive"
            }
        ]
    },
    {
        id: "winter-white-kashmir",
        title: "Winter White Kashmir",
        tagline: "Snow, Skiing & Cozy Firesides",
        price: 32999,
        originalPrice: 42999,
        days: 6,
        nights: 5,
        rating: 4.8,
        reviews: 98,
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200",
        category: "Winter Special",
        groupSize: "2-8 People",
        difficulty: "Easy",
        overview: "Experience the magical transformation of Kashmir into a winter wonderland. From skiing on pristine slopes to enjoying hot Kahwa by the fireplace in a houseboat, this winter special package captures the snowy charm of the valley. Perfect for those who want to experience the 'real' Kashmir that inspired poets and emperors.",
        highlights: ["Skiing in Gulmarg", "Frozen Dal Lake", "Snow Treks", "Hot Kahwa by Fireplace", "Snowman Building", "Winter Wazwan Feast"],
        inclusions: [
            "5 Nights accommodation (2N Srinagar + 3N Gulmarg)",
            "Daily breakfast and dinner",
            "All transfers in 4x4 SUV (snow-equipped)",
            "Gondola tickets (Phase 1 & 2)",
            "Skiing equipment rental for 1 day",
            "Professional ski instructor (1 session)",
            "All applicable taxes"
        ],
        exclusions: [
            "Flights to Srinagar",
            "Personal winter gear",
            "Additional ski lessons",
            "Travel insurance",
            "Personal expenses and tips"
        ],
        route: ["Srinagar", "Gulmarg", "Srinagar"],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Winter Wonderland",
                desc: "Fly into Srinagar - if you're lucky, you'll see the snow-covered mountains from your window! The valley wears a completely different look in winter - serene, quiet, and magical. Transfer to your houseboat on Dal Lake. In peak winter, parts of the lake may be frozen - a rare and beautiful sight! Warm up with traditional Kashmiri Kahwa (saffron tea) and an authentic Kashmiri kangri (fire pot). Evening at leisure exploring the frozen landscape.",
                highlights: ["Snowy arrival", "Frozen Dal Lake views", "Hot Kahwa welcome", "Traditional Kangri experience"],
                meals: "Dinner",
                accommodation: "Heated Houseboat, Dal Lake"
            },
            {
                day: 2,
                title: "Snowy Srinagar Exploration",
                desc: "After a warm breakfast, explore Srinagar dressed in white. Visit the Mughal Gardens - Nishat and Shalimar look absolutely ethereal covered in snow. The Chinar trees, now bare, create beautiful silhouettes against the white landscape. Take a Shikara ride through the quiet, mist-covered lake - an experience unique to winter. Evening shopping for Pashmina shawls - the warmest and finest in the world, perfect for this weather!",
                highlights: ["Snow-covered Mughal Gardens", "Winter Shikara ride", "Misty lake photography", "Pashmina shopping"],
                meals: "Breakfast & Dinner",
                accommodation: "Heated Houseboat, Dal Lake"
            },
            {
                day: 3,
                title: "Srinagar to Gulmarg - Ski Paradise",
                desc: "Drive to Gulmarg through some of the most beautiful snow-covered scenery you'll ever see! The 51 km journey takes longer in winter due to snow, but every moment is picture-perfect. Check into your resort with heating and fireplace. After settling in, take the Gulmarg Gondola to Kongdoori and Apharwat Peak. The snow here can be up to 20 feet deep! Spend the afternoon enjoying snow activities - sledging, snowball fights, and building snowmen.",
                highlights: ["Snow drive to Gulmarg", "Gondola over snow canyon", "Apharwat Peak (14,000 ft)", "Snow play and sledging"],
                meals: "Breakfast & Dinner",
                accommodation: "Premium Resort with Fireplace, Gulmarg",
                distance: "51 km (3-4 hours)"
            },
            {
                day: 4,
                title: "Skiing Day - Conquer the Slopes!",
                desc: "Today you become a skier! After breakfast, head to the ski slopes with your equipment and instructor. Begin with basic lessons on the baby slopes before gradually moving to intermediate trails. Gulmarg is known as Asia's best skiing destination, with powder snow that rivals the Alps. Those who don't wish to ski can opt for snowboarding lessons or simply enjoy the snow. Evening by the fireplace with hot chocolate and stories of the day's adventures.",
                highlights: ["Professional ski lesson", "Skiing on powder snow", "Optional snowboarding", "Fireplace evening"],
                meals: "Breakfast & Dinner",
                accommodation: "Premium Resort with Fireplace, Gulmarg"
            },
            {
                day: 5,
                title: "Gulmarg Leisure - Winter Activities",
                desc: "A day to enjoy Gulmarg at your own pace. Options include more skiing, a snow trek to Khilanmarg (for stunning views), ice skating, or just playing in the snow. Visit the famous St. Mary's Church, looking like something out of a European Christmas postcard covered in snow. For photography enthusiasts, the golden hour light on the snow-covered peaks is absolutely magical. Farewell dinner featuring the traditional Wazwan feast.",
                highlights: ["Optional snow trek", "St. Mary's Church visit", "Golden hour photography", "Traditional Wazwan feast"],
                meals: "Breakfast & Dinner",
                accommodation: "Premium Resort with Fireplace, Gulmarg"
            },
            {
                day: 6,
                title: "Departure - Until Next Winter",
                desc: "After breakfast and checkout, take one last look at the snowy paradise before driving back to Srinagar. The return journey offers new perspectives of the winter landscape. Arrive at Srinagar Airport with your heart full of winter memories, photos of snow-capped peaks, and perhaps some new skiing skills. Kashmir in winter is magic - and now you've experienced it firsthand!",
                highlights: ["Leisure morning", "Scenic return drive", "Airport transfer", "Winter memories to cherish"],
                meals: "Breakfast",
                distance: "51 km (3-4 hours)"
            }
        ]
    }
];

export const experiences = [
    {
        id: "shikara-ride",
        title: "Sunset Shikara Ride",
        description: "Drift through the calm waters of Dal Lake as the sun sets over the Zabarwan mountains, painting the sky in hues of orange and purple.",
        image: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=800",
        icon: "Boat"
    },
    {
        id: "houseboat-stay",
        title: "Luxury Houseboat Stay",
        description: "Experience the unique heritage of Kashmir by staying in a intricately carved cedar wood houseboat floating on the lake.",
        image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=800",
        icon: "Home"
    },
    {
        id: "gondola-ride",
        title: "Gulmarg Gondola",
        description: "Ride the world's second highest operating cable car to Apharwat Peak for breathtaking panoramic views of the Himalayas.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
        icon: "Mountain"
    },
    {
        id: "wazwan-feast",
        title: "Traditional Wazwan",
        description: "Indulge in the royal multi-course meal of Kashmir, a culinary art form passed down through generations of Wazas.",
        image: "https://images.unsplash.com/photo-1626621341120-20d08bbb0797?q=80&w=800",
        icon: "Utensils"
    },
    {
        id: "pashmina-shopping",
        title: "Pashmina & Saffron",
        description: "Visit authentic workshops to see how the world-famous Pashmina shawls are hand-woven and buy pure saffron from the source.",
        image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=800",
        icon: "ShoppingBag"
    },
    {
        id: "trekking",
        title: "Alpine Trekking",
        description: "For the adventurous souls, trek to the Great Lakes of Kashmir or the hidden valleys of Tarsar Marsar.",
        image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=800",
        icon: "Footprints"
    }
];
