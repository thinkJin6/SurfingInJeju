import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { getStarsRating, getStarsLength } from '../utils/helpers';

const Stars = ({ prop }) => {
  const { waveHeight, windSpeedMile } = prop;
  const waveRating = getStarsRating(waveHeight, windSpeedMile);
  const starsLength = getStarsLength(waveRating);

  // if waveRating is 3.5 return 3 blue stars 1 light blue star(half) and 1 whiteblue star(nothing just for design)
  const tempStars = Array.from({ length: starsLength }, (_, index) => {
    const starIndex = index + 1;
    const starHalf = starIndex - 0.5;

    return (
      <span key={index}>
        {
          // prettier-ignore
          waveRating >= starIndex ? <BsStarFill /> : waveRating >= starHalf ? <BsStarFill className='star-half'/> : <BsStarFill className='star-empty'/>
        }
      </span>
    );
  });

  return (
    <Wrapper>
      <div className='stars'>{tempStars}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-self: start;
  grid-column-start: main;
  grid-column-end: main;

  display: flex;

  span {
    color: var(--color-primary-dark);
    font-size: 1.25rem;
    margin-right: 0.3rem;
  }

  .star-half {
    color: var(--color-primary-light-2);
  }

  .star-empty {
    color: var(--color-primary-light-3);
  }
`;

export default Stars;
