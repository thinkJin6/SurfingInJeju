import moment from 'moment';
import {
  FaCloud,
  FaSun,
  FaRegSnowflake,
  FaCloudRain,
  FaMoon,
  FaPooStorm,
} from 'react-icons/fa';

export const getCurrentHour = () => {
  return Math.floor(new Date().getHours() / 3);
};

// Change provided time to new time for using moment js
// e.g. provided time = 0 || 300, 600... || 1200, 1500... to 00, 03, 12
export const generateNewTime = (time) => {
  let newTime;

  if (time.length === 1) newTime = `00`;
  if (time.length === 3) newTime = `0${time.slice(0, 1)}`;
  if (time.length === 4) newTime = `${time.slice(0, 2)}`;

  // return is 03AM, 12PM ...
  return moment(newTime, 'hh').format('hh A').split(' ').join('');
};

// e.g. input = 6:12 PM , return = 18:12
export const get24Hours = (time) => {
  return moment(time, 'hh:mm A').format('HH:mm');
};

// Format inputs to make same format of time and find same value
// To render forecast components to correct position of every 3 hour
export const formatAndFindSameTime = (tideTime, time) => {
  // e.g. Input tideTime = "6:26 PM";
  // Changing input time to "18"
  const tempTime = moment(tideTime, 'hh:mm A').format('HHmm').slice(0, 2);

  // ["1700", "1800", "1900"] Rendering like this to find closest hours(divided by 3) of 24 hours
  const tempTimes = [
    `${+tempTime - 1}00`,
    `${tempTime}00`,
    `${+tempTime + 1}00`,
  ];

  return tempTimes.find(
    (tempT) => generateNewTime(tempT) === generateNewTime(time)
  );
};

export const formatWaveHeight = (waveHeight) => {
  const minHeight = Math.floor(waveHeight);
  const maxHeight = Math.ceil(waveHeight);

  if (minHeight < 0 || maxHeight < 0) return 'Error';

  // if wave height is not decimal return wave height
  // e.g. wave height(3) return 3ft
  if (minHeight === maxHeight) return `${minHeight}ft`;

  if (waveHeight <= 0.5) return 'Flat';

  // e.g. wave height(3.5) return 3-4ft
  return `${minHeight}-${maxHeight}ft`;
};

// Get wave rating by wind and wave swell height
export const getStarsRating = (waveHeight, windSpeedMile) => {
  const goodWind = windSpeedMile <= 10;
  const microWave = waveHeight <= 2;
  const smallWave = waveHeight > 2 && waveHeight <= 3;
  const regularWave = waveHeight > 3 && waveHeight <= 5;
  const goodWave = waveHeight > 5;

  if (microWave && !goodWind) return 0.5;
  if ((microWave && goodWind) || (smallWave && !goodWind)) return 1.5;
  if ((smallWave && goodWind) || (regularWave && !goodWind)) return 2.5;
  if ((regularWave && goodWind) || (goodWave && !goodWind)) return 3.5;
  if (goodWave && goodWind) return 4.5;
};

export const getStarsLength = (waveRating) => {
  if (waveRating === 5) return waveRating;
  if (waveRating > 4) return Math.floor(waveRating + 1);
  if (waveRating < 4) return Math.floor(waveRating + 2);
};

export const formatWindDescription = (windSpeedMile, windDirection) => {
  if (windSpeedMile <= 5) {
    return `${windSpeedMile}mph breeze, ${windDirection}`;
  }
  if (windSpeedMile <= 10) {
    return `${windSpeedMile}mph gentle, ${windDirection}`;
  }
  if (windSpeedMile <= 17) {
    return `${windSpeedMile}mph little strong, ${windDirection}`;
  }
  if (windSpeedMile <= 23) {
    return `${windSpeedMile}mph strong messy, ${windDirection}`;
  }
  if (windSpeedMile <= 30) {
    return `${windSpeedMile}mph gale, ${windDirection}`;
  }

  return `${windSpeedMile}mph typhoon, ${windDirection}`;
};

export const convertToWeatherIcon = (weatherDesc) => {
  const weather = weatherDesc.toLowerCase();

  if (weather.includes('cloud')) return <FaCloud />;
  if (weather.includes('fog')) return <FaCloud />;
  if (weather.includes('overcast')) return <FaCloud />;

  if (weather.includes('sun')) return <FaSun />;
  if (weather.includes('clear')) return <FaSun />;

  if (weather.includes('drizzle')) return <FaCloudRain />;
  if (weather.includes('rain')) return <FaCloudRain />;
  if (weather.includes('mist')) return <FaCloudRain />;

  if (weather.includes('snow')) return <FaRegSnowflake />;
  if (weather.includes('sleet')) return <FaRegSnowflake />;
  if (weather.includes('blizzard')) return <FaRegSnowflake />;

  if (weather.includes('thunder')) return <FaPooStorm />;

  return <FaMoon />;
};
