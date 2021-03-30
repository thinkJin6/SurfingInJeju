import React from 'react';
import styled from 'styled-components';
import { ImArrowUp } from 'react-icons/im';
import { convertToWeatherIcon } from '../utils/helpers';

const SingleSpotWeather = ({ prop }) => {
  const { windSpeedMile, tempC, windDirDegree, weatherDesc } = prop;

  return (
    <Wrapper>
      <div>
        <h2>{windSpeedMile}</h2>
        <h3>mph</h3>
        <span>
          <ImArrowUp
            style={{
              transform: `rotate(${windDirDegree}deg)`,
            }}
          />
        </span>
      </div>
      <div className='margin'>
        <h2>{tempC}</h2>
        <h3 className='celsius'>&#8451;</h3>
        <span>{convertToWeatherIcon(weatherDesc[0].value)}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  align-self: center;
  justify-self: center;

  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
    line-height: 1;
  }

  .margin {
    margin-left: 3rem;
  }

  h2 {
    font-size: 2.3rem;
  }

  h3 {
    margin-top: 0.5rem;
    margin-left: 2px;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }

  svg {
    color: var(--color-primary-dark);
    font-size: 1.5rem;
    margin-left: 0.7rem;
    margin-bottom: 0.5rem;
  }

  img {
    height: 1.5rem;
    background: #fff;
  }

  .celsius {
    margin-top: 1px;
    margin-left: 0;
    align-self: flex-start;
    font-size: 1.2rem;
  }
`;

export default SingleSpotWeather;
