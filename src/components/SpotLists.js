import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useSpotContext } from '../contexts/spot_context';
import { formatWaveHeight } from '../utils/helpers';
import Stars from './Stars';

const SpotLists = () => {
  const {
    spots_data,
    sortSpotsById,
    currentHour,
    pathId,
    setPathId,
  } = useSpotContext();

  useEffect(() => {
    sortSpotsById();
  }, [sortSpotsById]);

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
            <Link
              key={id}
              className={`list ${pathId === id && 'selected'}`}
              to={`/main/${id}`}
              onClick={() => setPathId(id)}
            >
              <div>
                <img src={img} alt={name} />
              </div>
              <article>
                <h3>{name}</h3>
                <h5>{formatWaveHeight(waveHeight)}</h5>
                <Stars prop={{ waveHeight, windSpeedMile, small: true }} />
              </article>
            </Link>
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--color-grey-light-2);
  padding: 5rem;
  height: 100%;
  overflow-y: auto;

  ul {
    list-style: none;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .list {
    width: 100%;
    height: 10rem;
    background-color: var(--color-white);
    margin-top: 2.3rem;
    border-radius: 3px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    text-decoration: none;
    color: var(--color-dark);
    transition: all 0.3s ease;

    display: flex;
  }

  .list:hover {
    transform: translateY(-3px) scale(1.05);
  }

  .list:focus {
    outline: none;
  }

  .list:last-child {
    margin-bottom: 5rem;
  }

  .selected {
    transform: translateY(-3px) scale(1.05);
    filter: contrast(130%);
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
