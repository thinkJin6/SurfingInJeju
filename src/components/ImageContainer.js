import React from 'react';
import styled from 'styled-components';
import { useSpotContext } from '../contexts/spot_context';

const ImageContainer = () => {
  const { spots_data, pathId } = useSpotContext();
  console.log(pathId);
  return (
    <Wrapper>
      {spots_data.map((spot) => {
        const { img, name, location, id } = spot;
        // Guard clause
        if (pathId !== id) return;

        return (
          <div className='container' key={id}>
            <img src={img} alt={name} />
            <div className='title'>
              <h3>{location}</h3>
              <h1>{name}</h1>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 30rem;

  .container {
    height: 100%;
    position: relative;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 0.6rem;
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 0;
    /* transform: translate(30%, -30%); */
    margin-left: 6rem;
    margin-bottom: 3rem;
    color: var(--color-white);
    line-height: 1.2;
    text-align: start;

    h1 {
      font-size: 5rem;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }

    h3 {
      font-size: 1.7rem;
      font-weight: 300;
      text-transform: uppercase;
      color: var(--color-grey-light-3);
      letter-spacing: 0.2rem;
      margin-left: 0.2rem;
    }
  }
`;

export default ImageContainer;
