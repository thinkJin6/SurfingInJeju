const baseUrl = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${process.env.REACT_APP_API_KEY}&format=json&tide=yes&q=`;

const errorMsg = 'Failed to fetch API, please check your api again';

const spots = [
  {
    name: 'Jungmun Beach',
    id: 0,
    lat: 33.244017,
    lng: 126.4084972,
    info:
      'Jungmun Beach (Jeju Island) is a beach and reef break. Summer offers the best conditions for surfing. Ideal winds are from the north. The best swell direction is from the south southwest. The beach breaks offer lefts and rights together with both left and right hand reef breaks offshore. Unlikely to be too crowded, even when the surf is up. Hazards include - Rips / undertow - Rocks.Consistent clean waves (rideable swell with light / offshore winds) is during Summer and most often the month of June. Clean surfable waves are typically found 22% of the time in June while 43% of the time it tends to be blown out. For the remaining 35% of the time it is considered too small by most surfers but may still be OK for beginners and groms at times.',
  },
  {
    name: 'Iho Tewoo Beach',
    id: 1,
    lat: 33.498831,
    lng: 126.4502083,
    info:
      'Iho Tewoo Beach is a beach break. Usually a bit gusty wind, fall and spring are the best seasons for wind surfers with wind 15-30 knots. In summer wind is usually lighter 10-20 knots. For usual surfers, Winter offers the best conditions for surfing. Ideal winds are from the south. Unfortunately, swell often comes with strong north wind. The best swell direction is from the north northwest.',
  },
  {
    name: 'Wolgeongri Beach',
    id: 2,
    lat: 33.556397,
    lng: 126.7956143,
    info:
      'Wolgeongri is a beach break. Another popular place for winter surfing with Iho Tewoo beach in Jeju, mostly both spot conditions are almost even. Great place to learn surfing and beginners friendly place. Mid tide offers the best conditions for surfing. Wave period is quite short, normally around 5 seconds',
  },
  {
    name: 'Moseulpo',
    id: 3,
    lat: 33.229595,
    lng: 126.2348083,
    info:
      'Moseulpo is a reef break point. Normally Moseulpo is not the place for surfing but when typhoon swell comes up, You can see the Best waves in South Korea. Mid tide offers the best conditions for surfing. When Epic swell comes it remins waves of Bali. Ideal winds are from the north. The best swell direction is from the south southwest. The reef break offers lefts hand. Respect local surfers and ask them about the spot before go into the water. Hazards include - Rips / undertow - Rocks.',
  },
  {
    name: 'Gwakji beach',
    id: 4,
    lat: 33.450954,
    lng: 126.3029729,
    info:
      'Gwakji beach is a beach break. Between Oct to Mar offers the best conditions for surfing. Great place to learn surfing in summer and beginners friendly place. Mid tide offers the best conditions for surfing. Wave period is quite short. Another popular place for winter surfing with Iho Tewoo and Wolgeong beach in Jeju, Condition is mostly even with Iho Tewoo beach.',
  },
];

export { baseUrl, spots, errorMsg };
