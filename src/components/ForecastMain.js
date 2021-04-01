import React from 'react';
import styled from 'styled-components';

import { getEveryThreeHours } from '../utils/helpers';
import ForecastWind from './ForecastWind';
import ForecastWeather from './ForecastWeather';
import ForecastWave from './ForecastWave';
import ForecastTide from './ForecastTide';

const ForecastMain = ({ dayData }) => {
  // Every 3 hours
  const { hourly } = dayData;
  //   console.log(dayData);

  return (
    <Wrapper>
      {hourly.map((eachTime, index) => {
        console.log(eachTime);
        const {
          winddirDegree: windDirDegree,
          windspeedMiles: windSpeedMiles,
          weatherDesc,
          tempC,
        } = eachTime;

        return (
          <div key={index} className='data-container'>
            {/* Time */}
            <span className='hours'>{getEveryThreeHours(index)}</span>
            <ForecastWind props={{ windDirDegree, windSpeedMiles }} />
            <ForecastWeather props={{ weatherDesc, tempC }} />
            <div>icon&waves</div>
            <div>icon&tides</div>
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
    padding: 1rem 0;
    /* padding-left: 3rem; */
    border-bottom: 1px solid var(--color-grey-light-4);
  }

  .hours {
    letter-spacing: 0.5px;
  }

  .icon {
    margin-right: 1rem;

    svg {
      font-size: 2rem;
    }
  }
`;

export default ForecastMain;
