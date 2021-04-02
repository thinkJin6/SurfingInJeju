import React from 'react';
import styled from 'styled-components';

import ForecastWind from './ForecastWind';
import ForecastWeather from './ForecastWeather';
import ForecastWave from './ForecastWave';
import ForecastTide from './ForecastTide';
import { generateNewTime, formatAndFindSameTime } from '../utils/helpers';

const ForecastMain = ({ dayData }) => {
  // Every 3 hours
  const { hourly, tides } = dayData;
  const tideDay = tides[0].tide_data;

  return (
    <Wrapper>
      {hourly.map((eachTime, index) => {
        const {
          winddirDegree: windDirDegree,
          windspeedMiles: windSpeedMiles,
          swellPeriod_secs: swellPeriod,
          swellHeight_ft: swellHeight,
          swellDir,
          weatherDesc,
          tempC,
          time,
        } = eachTime;

        const tide = tideDay.find((hour) => {
          const { tideTime } = hour;

          return formatAndFindSameTime(tideTime, time);
        });

        return (
          <div
            key={index}
            className={`data-container ${tide && 'data-container-tide'}`}
          >
            <span className='hours'>{generateNewTime(time)}</span>
            <ForecastWind props={{ windDirDegree, windSpeedMiles }} />
            <ForecastWeather props={{ weatherDesc, tempC }} />
            <ForecastWave props={{ swellPeriod, swellDir, swellHeight }} />
            <ForecastTide tide={tide} />
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .data-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid var(--color-grey-light-4);
  }

  .data-container-tide {
    padding: 0.3rem 0;
  }

  .hours {
    letter-spacing: 0.5px;
  }

  .icon {
    margin-right: 1rem;

    svg {
      font-size: 2.2rem;
    }
  }
`;

export default ForecastMain;
