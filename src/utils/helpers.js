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

export const getEveryThreeHours = (index) => {
  if (index <= 3) return `0${index * 3}AM`; // e.g. 03AM
  if (index === 4) return `${index * 3}PM`; // e.g. 12PM
  if (index >= 5) return `0${(index - 4) * 3}PM`; // e.g. 06PM
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
