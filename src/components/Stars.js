import React from 'react';
import styled from 'styled-components';
import { BsStarFill } from 'react-icons/bs';
import { getStarsRating, getStarsLength } from '../utils/helpers';

const Stars = ({ prop }) => {
  const { waveHeight, windSpeedMile, small } = prop;

  const waveRating = getStarsRating(waveHeight, windSpeedMile);
  const starsLength = getStarsLength(waveRating);

  // if waveRating is 3.5 return 3 blue stars 1 light blue star(half) and 1 whiteblue star(nothing just for design)
  const tempStars = Array.from({ length: starsLength }, (_, index) => {
    const starIndex = index + 1;
    const starHalf = starIndex - 0.5;

    return (
      <span
        key={index}
        style={small ? { fontSize: '1.25rem' } : { fontSize: '1.8rem' }}
      >
        {
          // prettier-ignore
          waveRating >= starIndex ? <BsStarFill /> : waveRating >= starHalf ? <BsStarFill className='star-half'/> : <BsStarFill className='star-empty'/>
        }
      </span>
    );
  });

  // If small is true return small stars (SpotList)
  // Else(big) return big stars (SingleTitle)
  return (
    <Wrapper
      style={
        small
          ? {
              alignSelf: 'start',
              gridColumnStart: 'main',
              gridColumnEnd: 'main',
            }
          : {
              gridColumnStart: 'stars-start',
              gridColumnEnd: 'stars-end',
              marginTop: '3px',
            }
      }
    >
      <div className='stars'>{tempStars}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  span {
    color: var(--color-primary-dark);
    margin-right: 0.3rem;
    font-size: 1.25rem;
  }

  .star-half {
    color: var(--color-primary-light-2);
  }

  .star-empty {
    color: var(--color-primary-light-3);
  }
`;

export default Stars;
