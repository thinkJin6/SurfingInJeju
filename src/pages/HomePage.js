import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Wrapper className='main'>
      <h1>
        <span className='heading-main'>JeJu Island</span>
        <span className='heading-sub'>is where life happens</span>
      </h1>
      <Link className='btn btn--white btn--animated' to='/main'>
        Explore surf spots
      </Link>
    </Wrapper>
  );
};

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }

  80% {
    transform: translateX(1.5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }

  80% {
    transform: translateX(-1.5rem);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const moveInBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(3rem);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.main`
  flex-direction: column;

  h1 {
    text-align: center;
    margin-top: -10rem;
    margin-bottom: 10rem;

    .heading-main {
      display: block;
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 3.5rem;
      animation: ${moveInLeft} 1s ease-out;
    }

    .heading-sub {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 1.75rem;
      text-transform: uppercase;
      animation: ${moveInRight} 1s ease-out;
    }
  }

  .btn--animated {
    animation: ${moveInBottom} 0.5s ease 0.75s;
    animation-fill-mode: backwards;
  }
`;

export default HomePage;
