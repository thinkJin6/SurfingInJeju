import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpotContext } from '../contexts/spot_context';
import { formatWaveHeight } from '../utils/helpers';
import Loading from './Loading';
import Stars from './Stars';

const SpotLists = () => {
  const { spots_data, sortSpotsById, currentHour } = useSpotContext();

  useEffect(() => {
    sortSpotsById();
  }, []);

  return (
    <Wrapper>
      <ul className='container'>
        {spots_data.map((spot) => {
          const { id, name, data, img } = spot;
          const {
            swellHeight_ft: waveHeight,
            windspeedMiles: windSpeedMile,
          } = data[0].hourly[currentHour];

          return (
            <li key={id}>
              <div>
                <img src={img} alt={name} />
              </div>
              <article>
                <h3>{name}</h3>
                <h5>{formatWaveHeight(waveHeight)}</h5>
                <Stars prop={{ waveHeight, windSpeedMile }} />
              </article>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-grey-light-2);
  padding: 3rem;
  height: 100%;
  overflow-y: scroll;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  li {
    width: 100%;
    height: 10rem;
    background-color: var(--color-white);
    margin-top: 2.3rem;
    border-radius: 3px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);

    display: flex;
  }

  img {
    width: 10rem;
    height: 10rem;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  article {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr [main] 3fr 3fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 0.1rem;
    justify-items: start;
    align-items: end;

    h3 {
      grid-column-start: main;
      grid-column-end: main;
      font-size: 1.7rem;
    }

    h5 {
      justify-self: end;
      font-size: 1.5rem;
    }
  }
`;

export default SpotLists;
