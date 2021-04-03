export const BASE_URL = `https://api.worldweatheronline.com/premium/v1/marine.ashx?key=${process.env.REACT_APP_API_KEY}&format=json&tide=yes&q=`;

export const ERROR_MSG = 'Failed to fetch API, please check your api again';

// For Adjusting default degree, icon default dir degree is 225 So 135 + 225 = 360;
export const ADJUSTED_DEGREE = 135;

export const MAP_ZOOM_LEVEL = 5;
export const SCROLL_WHEEL_ZOOM = true;
export const TILE_LAYER_STYLE =
  'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png';

export const SPOTS_LOCAL_DATA = [
  {
    name: 'Jungmun',
    id: 0,
    lat: 33.244017,
    lng: 126.4084972,
    location: 'Jeju Island',
    img:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    info:
      'Jungmun Beach (Jeju Island) is a beach and reef break. Summer offers the best conditions for surfing. Ideal winds are from the north. The best swell direction is from the south southwest. The beach breaks offer lefts and rights together with both left and right hand reef breaks offshore. Around low tide tide offers the best conditions for surfing. Unlikely to be too crowded, even when the surf is up. Hazards include - Rips / undertow - Rocks.Consistent clean waves (rideable swell with light / offshore winds) is during Summer and most often the month of June. Clean surfable waves are typically found 22% of the time in June while 43% of the time it tends to be blown out. For the remaining 35% of the time it is considered too small by most surfers but may still be OK for beginners and groms at times.',
  },
  {
    name: 'Songjeong',
    id: 1,
    lat: 35.1586967,
    lng: 129.1516294,
    location: 'Busan',
    img:
      'https://images.unsplash.com/photo-1502933691298-84fc14542831?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN1cmZ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    info:
      'Songjeong beach is the most famous surf spot and town in Busan city. Mostly crowded and beginners friendly spot. Beach breaks offer lefts and rights together. The only place can surf for a year (get south swell in summer east swell in winter) but that means, wave condition is little worse than the other locations and mostly small & close out waves. Tide does not matter for this point. Ideal winds are from the west westnorth. The best swell direction is from the east eastnorth.',
  },
  {
    name: 'Jukdo',
    id: 2,
    lat: 37.975033,
    lng: 128.7575397,
    location: 'YangYang',
    img:
      'https://images.unsplash.com/photo-1505459668311-8dfac7952bf0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    info:
      'Jukdo beach is a sand break point and the most popular surf town in Korea (2hours far away from Seoul by driving). Mostly crowded and beginners friendly spot. Beach breaks offer lefts and rights together. Consistent clean waves (rideable swell with light / offshore winds) is during Winter and most often between Nov to Mar, this season offers the best conditions for surfing (off shore). Tide does not matter for this point. Ideal winds are from the west. The best swell direction is from the east eastnorth.',
  },

  {
    name: 'Mallipo',
    id: 3,
    lat: 36.7871185,
    lng: 126.1397788,
    location: 'Taean-gun',
    img:
      'https://images.unsplash.com/photo-1515541324332-7dd0c37426e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cmZ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    info:
      'Mallipo beach is a sand break point(2hours far away from Seoul by driving). Mostly crowded and beginners friendly spot. Beach breaks offer lefts and rights together. Ridable waves come mostly between Sep to May, around hide tide offers the best conditions for surfing. Mostly waves are small and messy Ideal winds are from the east. The best swell direction is from the west westnorth westsouth.',
  },
  {
    name: 'Sinhangman',
    id: 4,
    lat: 36.1117544,
    lng: 129.4127111,
    location: 'Pohang',
    img:
      'https://images.unsplash.com/photo-1513569143478-b38b2c0ef97f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c3VyZnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    info:
      'Sinhangman beach is a reef and sand break point. Between Sep to May offers the best conditions for surfing. Tide does not matter for this point. Ideal winds are from the west. Consistent clean waves (rideable swell with light / offshore winds) is during Winter and most often between Nov to Mar, this season offers the best conditions for surfing (off shore). The best swell direction is from the east eastnorth. The reef break offers decent right hand waves. Hazards include - Rips / undertow - Rocks.',
  },
  {
    name: 'Moseulpo',
    id: 5,
    lat: 33.229595,
    lng: 126.2348083,
    location: 'Jeju Island',
    img:
      'https://ec2-im-1.msw.ms/md/image.php?id=367434&type=PHOTOLAB&resize_type=STREAM_MEDIUM_SQUARE&fromS3',
    info:
      'Moseulpo is a reef break point. Normally Moseulpo is not the place for surfing but when typhoon swell comes up, You can see the Best waves in South Korea. Mid tide offers the best conditions for surfing. When Epic swell comes it reminds waves of Bali. Ideal winds are from the north. The best swell direction is from the south southwest. The reef break offers lefts hand. Respect local surfers and ask them about the spot before jump into the water. Hazards include - Rips / undertow - Rocks.',
  },
];
