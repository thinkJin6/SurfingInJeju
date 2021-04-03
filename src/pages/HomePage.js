import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Wrapper className='main'>
      <h1>
        <span className='heading-main'>Surfing in Korea</span>
        <span className='heading-sub'>is not as bad as you think</span>
      </h1>
      <Link className='btn btn--white btn--animated' to='/main/0'>
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
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin-top: -10rem;
    margin-bottom: 10rem;

    .heading-main {
      display: block;
      font-size: 6rem;
      font-weight: 400;
      letter-spacing: 2.2rem;
      animation: ${moveInLeft} 1s ease-out;
    }

    .heading-sub {
      display: block;
      font-size: 2.25rem;
      font-weight: 500;
      letter-spacing: 1.5rem;
      text-transform: uppercase;
      animation: ${moveInRight} 1s ease-out;
    }
  }

  .btn--animated {
    animation: ${moveInBottom} 0.5s ease 0.75s;
    animation-fill-mode: backwards;
  }

  /* 1200px */
  @media only screen and (max-width: 75em) {
    h1 {
      .heading-main {
        letter-spacing: 2rem;
      }

      .heading-sub {
        letter-spacing: 1rem;
      }
    }
  }

  /* 650px */
  @media only screen and (max-width: 40.625em) {
    justify-content: center;

    h1 {
      .heading-main {
        letter-spacing: 1.5rem;
      }

      .heading-sub {
        letter-spacing: 0.6rem;
      }
    }
  }

  /* 600px */
  @media only screen and (max-width: 37.5em) {
    h1 {
      margin-bottom: 3rem;
      margin-top: -15rem;

      .heading-main {
        letter-spacing: 1rem;
        line-height: 1.2;
        margin-bottom: 3rem;
      }

      .heading-sub {
        letter-spacing: 0.3rem;
      }
    }
  }
`;

export default HomePage;
