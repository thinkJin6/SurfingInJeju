export const getCurrentHour = () => {
  return Math.floor(new Date().getHours() / 3);
};

export const formatWaveHeight = (waveHeight) => {
  const minHeight = Math.floor(waveHeight);
  const maxHeight = Math.ceil(waveHeight);

  // if wave height is not decimal return wave height
  // e.g. wave height(3) return 3ft
  if (minHeight === maxHeight) return `${minHeight}ft`;
  // e.g. wave height(3.5) return 3-4ft
  return `${minHeight}-${maxHeight}ft`;
};

// Get wave rating by wind and wave swell height
export const getStarsRating = (waveHeight, windSpeedMile) => {
  const goodWind = windSpeedMile <= 10;
  const microWave = waveHeight <= 3;
  const smallWave = waveHeight > 3 && waveHeight < 4;
  const regularWave = waveHeight > 4 && waveHeight < 5;
  const goodWave = waveHeight > 5;

  if (microWave && !goodWind) return 1.5;
  if ((microWave && goodWind) || (smallWave && !goodWind)) return 2.5;
  if ((smallWave && goodWind) || (regularWave && !goodWind)) return 3.5;
  if ((regularWave && goodWind) || (goodWave && !goodWind)) return 4.5;
  if (goodWave && goodWind) return 5;
};

export const getStarsLength = (waveRating) => {
  if (waveRating === 5) return waveRating;
  if (waveRating > 4) return Math.floor(waveRating + 1);
  if (waveRating < 4) return Math.floor(waveRating + 2);
};
