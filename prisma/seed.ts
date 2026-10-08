import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function img(seed: string, w = 900, h = 650) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

const packages = [
  {
    slug: "mahakal-darshan-day-trip",
    title: "Mahakal Darshan — Day Trip",
    category: "Day Tour",
    summary:
      "A perfectly paced single-day darshan covering Mahakaleshwar Jyotirlinga, Ram Ghat aarti and Kal Bhairav temple.",
    description:
      "Ideal for travelers short on time, this day trip covers Ujjain's most sacred sites with a knowledgeable local guide who handles queue management, prasad arrangements and temple etiquette briefing so you can focus on your darshan.",
    duration: "1 Day",
    price: 1499,
    originalPrice: 1899,
    rating: 4.9,
    reviewCount: 214,
    image: img("mahakal-day-trip"),
    gallery: JSON.stringify([img("mahakal-day-1"), img("mahakal-day-2"), img("mahakal-day-3")]),
    highlights: JSON.stringify([
      "Mahakaleshwar Jyotirlinga darshan with skip-the-line assistance",
      "Evening aarti at Ram Ghat on the Shipra river",
      "Kal Bhairav Temple visit",
      "English/Hindi speaking certified local guide",
    ]),
    itinerary: JSON.stringify([
      { day: 1, title: "Full Day Ujjain Darshan", activities: [
        "07:00 AM — Pickup from hotel/railway station",
        "07:45 AM — Mahakaleshwar Temple darshan",
        "10:00 AM — Chintaman Ganesh Temple",
        "12:00 PM — Lunch at a local satvik restaurant",
        "02:00 PM — Kal Bhairav Temple & Sandipani Ashram",
        "05:30 PM — Ram Ghat evening aarti",
        "07:00 PM — Drop back to hotel/station",
      ]},
    ]),
    inclusions: JSON.stringify([
      "AC vehicle for local transfers",
      "Certified local guide",
      "Bottled water",
      "Temple entry assistance",
    ]),
    popular: true,
    maxGroup: 15,
  },
  {
    slug: "bhasma-aarti-special",
    title: "Bhasma Aarti Special",
    category: "Spiritual Experience",
    summary:
      "Witness the world-famous pre-dawn Bhasma Aarti at Mahakaleshwar with pre-arranged special entry permits.",
    description:
      "The Bhasma Aarti is a once-in-a-lifetime spiritual experience. We handle the permit booking process in advance (subject to temple availability) and guide you through the early morning ritual, dress code and darshan flow.",
    duration: "1 Day (Early Morning)",
    price: 2499,
    originalPrice: 2999,
    rating: 5.0,
    reviewCount: 168,
    image: img("bhasma-aarti"),
    gallery: JSON.stringify([img("bhasma-1"), img("bhasma-2"), img("bhasma-3")]),
    highlights: JSON.stringify([
      "Bhasma Aarti permit assistance (2:30 AM entry)",
      "Dedicated guide for ritual explanation",
      "Post-aarti breakfast included",
      "Optional Ram Ghat sunrise walk",
    ]),
    itinerary: JSON.stringify([
      { day: 1, title: "Pre-Dawn Darshan", activities: [
        "02:00 AM — Assemble near Mahakaleshwar Temple",
        "02:30 AM — Bhasma Aarti begins",
        "04:30 AM — Aarti concludes, prasad distribution",
        "05:30 AM — Sunrise walk at Ram Ghat",
        "07:00 AM — Breakfast & drop back to hotel",
      ]},
    ]),
    inclusions: JSON.stringify([
      "Permit coordination support",
      "Guide accompaniment",
      "Breakfast",
      "Pickup & drop",
    ]),
    popular: true,
    maxGroup: 10,
  },
  {
    slug: "complete-ujjain-heritage-yatra",
    title: "Complete Ujjain Heritage Yatra",
    category: "2D/1N Tour",
    summary:
      "A relaxed two-day journey through every major temple, ghat and heritage site Ujjain has to offer.",
    description:
      "Go beyond the headline temples — this package includes Mangalnath, Harsiddhi, Bhartrihari Caves, the ancient Vedh Shala observatory and a leisurely Shipra river boat ride, with a comfortable hotel stay included.",
    duration: "2 Days / 1 Night",
    price: 4999,
    originalPrice: 5999,
    rating: 4.8,
    reviewCount: 132,
    image: img("heritage-yatra"),
    gallery: JSON.stringify([img("heritage-1"), img("heritage-2"), img("heritage-3")]),
    highlights: JSON.stringify([
      "1 night stay in a heritage-style hotel",
      "Mangalnath & Harsiddhi Temple visits",
      "Bhartrihari Caves and Vedh Shala observatory",
      "Shipra river boat ride",
    ]),
    itinerary: JSON.stringify([
      { day: 1, title: "Temples & Ghats", activities: [
        "09:00 AM — Arrival & hotel check-in",
        "11:00 AM — Mahakaleshwar & Chintaman Ganesh",
        "02:00 PM — Harsiddhi Temple & Vedh Shala",
        "05:00 PM — Ram Ghat aarti + boat ride",
      ]},
      { day: 2, title: "Heritage Exploration", activities: [
        "08:00 AM — Mangalnath Temple",
        "10:00 AM — Bhartrihari Caves",
        "12:00 PM — Kal Bhairav Temple",
        "02:00 PM — Local market & shopping",
        "04:00 PM — Departure",
      ]},
    ]),
    inclusions: JSON.stringify([
      "1 night hotel stay (double occupancy)",
      "AC vehicle throughout",
      "Guide for both days",
      "Daily breakfast",
    ]),
    popular: false,
    maxGroup: 20,
  },
  {
    slug: "family-spiritual-retreat",
    title: "Family Spiritual Retreat",
    category: "3D/2N Tour",
    summary:
      "A comfortably paced 3-day plan for families and elders, blending darshan with rest and good food.",
    description:
      "Designed with senior citizens and young children in mind — shorter walking segments, wheelchair-friendly routes where possible, mid-day rest breaks and a curated satvik food trail alongside the essential darshan circuit.",
    duration: "3 Days / 2 Nights",
    price: 7999,
    originalPrice: 9499,
    rating: 4.9,
    reviewCount: 97,
    image: img("family-retreat"),
    gallery: JSON.stringify([img("family-1"), img("family-2"), img("family-3")]),
    highlights: JSON.stringify([
      "2 nights comfortable hotel stay",
      "Elder & child-friendly pace",
      "Private AC car throughout",
      "Curated local food trail",
    ]),
    itinerary: JSON.stringify([
      { day: 1, title: "Arrival & Mahakal Darshan", activities: ["Check-in", "Mahakaleshwar darshan", "Evening aarti at Ram Ghat"] },
      { day: 2, title: "Heritage Circuit", activities: ["Kal Bhairav", "Sandipani Ashram", "Local food trail", "Leisure evening"] },
      { day: 3, title: "Leisure & Departure", activities: ["Mangalnath Temple", "Shopping at local bazaar", "Departure"] },
    ]),
    inclusions: JSON.stringify([
      "2 nights hotel stay",
      "Private AC vehicle",
      "Breakfast & dinner",
      "Dedicated family guide",
    ]),
    popular: true,
    maxGroup: 12,
  },
  {
    slug: "ujjain-omkareshwar-combo",
    title: "Ujjain + Omkareshwar Jyotirlinga Combo",
    category: "3D/2N Tour",
    summary: "Cover two of the twelve Jyotirlingas in one seamless trip — Mahakaleshwar and Omkareshwar.",
    description:
      "A pilgrim favorite: darshan at Mahakaleshwar in Ujjain followed by a scenic drive to the island temple of Omkareshwar on the Narmada river, with comfortable overnight stays at both locations.",
    duration: "3 Days / 2 Nights",
    price: 8999,
    originalPrice: 10499,
    rating: 4.8,
    reviewCount: 89,
    image: img("omkareshwar-combo"),
    gallery: JSON.stringify([img("omkar-1"), img("omkar-2"), img("omkar-3")]),
    highlights: JSON.stringify([
      "Two Jyotirlinga darshans in one trip",
      "Scenic Narmada riverside stay",
      "Inter-city AC transfers included",
      "Boat ride around Omkareshwar island",
    ]),
    itinerary: JSON.stringify([
      { day: 1, title: "Ujjain Darshan", activities: ["Mahakaleshwar darshan", "Ram Ghat aarti", "Overnight in Ujjain"] },
      { day: 2, title: "Drive to Omkareshwar", activities: ["Scenic drive (~3.5 hrs)", "Omkareshwar Jyotirlinga darshan", "Narmada boat ride", "Overnight in Omkareshwar"] },
      { day: 3, title: "Return", activities: ["Morning aarti", "Drive back to Ujjain/Indore", "Departure"] },
    ]),
    inclusions: JSON.stringify([
      "2 nights hotel stay",
      "Inter-city AC transfers",
      "Boat ride",
      "Daily breakfast",
    ]),
    popular: false,
    maxGroup: 15,
  },
  {
    slug: "premium-vip-yatra",
    title: "Premium VIP Yatra",
    category: "Luxury Experience",
    summary:
      "Our most exclusive offering — private luxury vehicle, 5-star stay, VIP darshan passes and a personal photographer.",
    description:
      "For travelers who want a seamless, elevated pilgrimage experience: private chauffeur-driven luxury car, priority darshan wherever available, a premium hotel stay and a personal photographer to capture your journey.",
    duration: "2 Days / 1 Night",
    price: 15999,
    originalPrice: 18999,
    rating: 5.0,
    reviewCount: 41,
    image: img("premium-vip"),
    gallery: JSON.stringify([img("vip-1"), img("vip-2"), img("vip-3")]),
    highlights: JSON.stringify([
      "5-star hotel stay",
      "Private luxury sedan with chauffeur",
      "VIP darshan pass assistance",
      "Personal photographer for the trip",
    ]),
    itinerary: JSON.stringify([
      { day: 1, title: "VIP Darshan Day", activities: ["Luxury airport/station pickup", "5-star check-in", "VIP Mahakaleshwar darshan", "Private aarti viewing at Ram Ghat"] },
      { day: 2, title: "Leisure & Departure", activities: ["Curated breakfast experience", "Photo walk through heritage lanes", "Luxury drop to airport/station"] },
    ]),
    inclusions: JSON.stringify([
      "5-star hotel stay",
      "Private luxury vehicle",
      "Personal photographer",
      "All meals included",
    ]),
    popular: false,
    maxGroup: 6,
  },
];

const hotels = [
  {
    slug: "shipra-riverside-residency",
    name: "Shipra Riverside Residency",
    category: "Deluxe",
    location: "500m from Ram Ghat",
    description: "A calm riverside stay with balcony rooms overlooking the Shipra, walking distance to Ram Ghat aarti.",
    pricePerNight: 2499,
    rating: 4.6,
    reviewCount: 312,
    image: img("hotel-shipra"),
    gallery: JSON.stringify([img("hotel-shipra-1"), img("hotel-shipra-2"), img("hotel-shipra-3")]),
    amenities: JSON.stringify(["Free WiFi", "AC Rooms", "River View", "Breakfast Included", "24hr Front Desk"]),
    distanceFromTemple: "1.2 km from Mahakaleshwar",
  },
  {
    slug: "mahakal-heritage-inn",
    name: "Mahakal Heritage Inn",
    category: "Budget",
    location: "Near Mahakaleshwar Temple",
    description: "Clean, no-frills rooms just steps from the temple, perfect for pilgrims prioritizing proximity.",
    pricePerNight: 1199,
    rating: 4.3,
    reviewCount: 456,
    image: img("hotel-heritage-inn"),
    gallery: JSON.stringify([img("hotel-inn-1"), img("hotel-inn-2"), img("hotel-inn-3")]),
    amenities: JSON.stringify(["Free WiFi", "AC Rooms", "Locker Facility", "Veg Restaurant"]),
    distanceFromTemple: "300m from Mahakaleshwar",
  },
  {
    slug: "royal-avantika-palace",
    name: "Royal Avantika Palace",
    category: "Luxury",
    location: "Freeganj, Ujjain",
    description: "Ujjain's premier 5-star stay, blending royal Malwa architecture with modern comfort and spa facilities.",
    pricePerNight: 6999,
    rating: 4.9,
    reviewCount: 187,
    image: img("hotel-royal-palace"),
    gallery: JSON.stringify([img("hotel-royal-1"), img("hotel-royal-2"), img("hotel-royal-3")]),
    amenities: JSON.stringify(["Spa & Wellness", "Rooftop Restaurant", "Swimming Pool", "Airport Transfer", "Free WiFi", "Valet Parking"]),
    distanceFromTemple: "2.5 km from Mahakaleshwar",
  },
  {
    slug: "yatri-comfort-stay",
    name: "Yatri Comfort Stay",
    category: "Budget",
    location: "Dewas Gate, Ujjain",
    description: "Family-friendly budget hotel with spacious rooms, ideal for group pilgrimages.",
    pricePerNight: 1499,
    rating: 4.2,
    reviewCount: 298,
    image: img("hotel-yatri-comfort"),
    gallery: JSON.stringify([img("hotel-yatri-1"), img("hotel-yatri-2"), img("hotel-yatri-3")]),
    amenities: JSON.stringify(["Free WiFi", "Family Rooms", "Parking", "Travel Desk"]),
    distanceFromTemple: "1.8 km from Mahakaleshwar",
  },
  {
    slug: "ganga-kaveri-suites",
    name: "Ganga Kaveri Suites",
    category: "Deluxe",
    location: "University Road, Ujjain",
    description: "Modern business-friendly suites with spacious interiors, popular with families and small groups.",
    pricePerNight: 2899,
    rating: 4.5,
    reviewCount: 203,
    image: img("hotel-ganga-kaveri"),
    gallery: JSON.stringify([img("hotel-gk-1"), img("hotel-gk-2"), img("hotel-gk-3")]),
    amenities: JSON.stringify(["Free WiFi", "AC Rooms", "In-house Restaurant", "Banquet Hall", "Parking"]),
    distanceFromTemple: "3 km from Mahakaleshwar",
  },
  {
    slug: "shivam-grand",
    name: "Shivam Grand",
    category: "Deluxe",
    location: "Nanakheda, Ujjain",
    description: "Contemporary hotel near the bus stand, with easy access to both the old city and highway.",
    pricePerNight: 2199,
    rating: 4.4,
    reviewCount: 176,
    image: img("hotel-shivam-grand"),
    gallery: JSON.stringify([img("hotel-sg-1"), img("hotel-sg-2"), img("hotel-sg-3")]),
    amenities: JSON.stringify(["Free WiFi", "AC Rooms", "Restaurant", "Room Service", "Parking"]),
    distanceFromTemple: "4 km from Mahakaleshwar",
  },
];

const cars = [
  {
    slug: "swift-dzire-sedan",
    name: "Swift Dzire (or equivalent)",
    type: "Sedan",
    seats: 4,
    pricePerDay: 1799,
    withDriver: true,
    ac: true,
    image: img("car-sedan"),
    gallery: JSON.stringify([img("car-sedan-1"), img("car-sedan-2")]),
    features: JSON.stringify(["AC", "Driver Included", "Fuel Included (local)", "GPS Tracking"]),
    rating: 4.7,
  },
  {
    slug: "ertiga-suv",
    name: "Maruti Ertiga",
    type: "SUV / MPV",
    seats: 6,
    pricePerDay: 2499,
    withDriver: true,
    ac: true,
    image: img("car-ertiga"),
    gallery: JSON.stringify([img("car-ertiga-1"), img("car-ertiga-2")]),
    features: JSON.stringify(["AC", "Driver Included", "Extra Luggage Space", "Ideal for Families"]),
    rating: 4.6,
  },
  {
    slug: "innova-crysta",
    name: "Toyota Innova Crysta",
    type: "Premium SUV",
    seats: 7,
    pricePerDay: 3499,
    withDriver: true,
    ac: true,
    image: img("car-innova"),
    gallery: JSON.stringify([img("car-innova-1"), img("car-innova-2")]),
    features: JSON.stringify(["AC", "Driver Included", "Premium Comfort", "Best for Long Distance"]),
    rating: 4.9,
  },
  {
    slug: "tempo-traveller-12",
    name: "Tempo Traveller (12-seater)",
    type: "Group Van",
    seats: 12,
    pricePerDay: 4999,
    withDriver: true,
    ac: true,
    image: img("car-tempo"),
    gallery: JSON.stringify([img("car-tempo-1"), img("car-tempo-2")]),
    features: JSON.stringify(["AC", "Driver Included", "Ideal for Groups", "Push-back Seating"]),
    rating: 4.5,
  },
  {
    slug: "luxury-sedan-vip",
    name: "Luxury Sedan (VIP)",
    type: "Luxury",
    seats: 4,
    pricePerDay: 5999,
    withDriver: true,
    ac: true,
    image: img("car-luxury"),
    gallery: JSON.stringify([img("car-luxury-1"), img("car-luxury-2")]),
    features: JSON.stringify(["AC", "Chauffeur in Uniform", "Bottled Water", "Premium Interiors"]),
    rating: 5.0,
  },
];

const reviews = [
  { name: "Ananya Sharma", location: "Delhi", rating: 5, tourType: "Bhasma Aarti Special", comment: "The Bhasma Aarti coordination was seamless — permits sorted, and our guide explained every ritual step. An unforgettable spiritual morning." },
  { name: "Rohit Verma", location: "Mumbai", rating: 5, tourType: "Family Spiritual Retreat", comment: "Took my parents and kids, and the pace was perfect for both. The guide was patient with my elderly father and great with the kids too." },
  { name: "Priya Nair", location: "Bangalore", rating: 4, tourType: "Complete Ujjain Heritage Yatra", comment: "Loved discovering Bhartrihari Caves and Vedh Shala — places I wouldn't have found on my own. Hotel could've been slightly better but overall great trip." },
  { name: "Karthik Iyer", location: "Chennai", rating: 5, tourType: "Mahakal Darshan Day Trip", comment: "Efficient, respectful, and well organized. We covered everything in a single day without feeling rushed. Highly recommend for short visits." },
  { name: "Sneha Joshi", location: "Pune", rating: 5, tourType: "Premium VIP Yatra", comment: "Worth every rupee. The private car, the photographer, the VIP darshan — everything felt effortless. Our photos turned out beautiful." },
  { name: "Vikram Singh", location: "Jaipur", rating: 4, tourType: "Ujjain + Omkareshwar Combo", comment: "Covering two Jyotirlingas in one trip was fantastic value. The Narmada boat ride was a highlight for the whole family." },
  { name: "Meera Pillai", location: "Hyderabad", rating: 5, tourType: "Car Rental — Innova Crysta", comment: "Rented just the car with driver for 3 days — punctual, courteous, and the car was spotless. Made our self-planned trip so much easier." },
  { name: "Arjun Malhotra", location: "Chandigarh", rating: 5, tourType: "Hotel Booking — Royal Avantika Palace", comment: "Booked the hotel through them and got a great rate. The property itself was stunning, right out of a royal Malwa postcard." },
  { name: "Divya Reddy", location: "Kochi", rating: 4, tourType: "Mahakal Darshan Day Trip", comment: "Guide was very knowledgeable about the mythology behind each temple. Made the trip educational as well as spiritual." },
  { name: "Suresh Kulkarni", location: "Nagpur", rating: 5, tourType: "Family Spiritual Retreat", comment: "Third time using their services across different family trips — consistently reliable and warm hospitality every time." },
];

async function main() {
  await prisma.review.deleteMany();
  await prisma.car.deleteMany();
  await prisma.hotel.deleteMany();
  await prisma.package.deleteMany();

  for (const p of packages) {
    await prisma.package.create({ data: p });
  }
  for (const h of hotels) {
    await prisma.hotel.create({ data: h });
  }
  for (const c of cars) {
    await prisma.car.create({ data: c });
  }
  for (const r of reviews) {
    await prisma.review.create({ data: r });
  }

  console.log(`Seeded ${packages.length} packages, ${hotels.length} hotels, ${cars.length} cars, ${reviews.length} reviews.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
