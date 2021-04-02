import React from 'react';
import styled from 'styled-components';
import { WiSunrise, WiSunset } from 'react-icons/wi';

const ForecastHeader = ({ formatDate, astronomy }) => {
  const { sunrise, sunset } = astronomy[0];

  return (
    <Wrapper>
      <div className='title'>
        <span className='date'>{formatDate}</span>
        <div className='astronomy'>
          <span>
            <WiSunrise className='sunrise' />
            <p>{sunrise}</p>
          </span>
          <span>
            <WiSunset className='sunset' />
            <p>{sunset}</p>
          </span>
        </div>
      </div>
      <div className='type'>
        <span>Time</span>
        <span>Wind</span>
        <span>Weather</span>
        <span>Waves</span>
        <span>Tides</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .title {
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid var(--color-grey-light-4);
  }

  .type {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    align-items: center;
    font-size: 1.2rem;
    padding: 1rem 0;
    /* padding-left: 4rem; */
    border-bottom: 1px solid var(--color-grey-light-4);
  }

  .date {
    text-transform: capitalize;
    font-weight: 500;
    font-size: 1.7rem;
    letter-spacing: 1px;
  }

  .astronomy {
    display: flex;

    span {
      display: flex;
      align-items: center;
      margin-left: 1rem;
    }

    svg {
      font-size: 3rem;
      margin-right: 3px;
    }

    p {
      font-size: 1.3rem;
      font-weight: 300;
      color: var(--color-grey-dark-1);
    }

    .sunrise {
      color: var(--color-sunrise-yellow);
    }

    .sunset {
      color: var(--color-sunset-orange);
    }
  }
`;

export default ForecastHeader;
