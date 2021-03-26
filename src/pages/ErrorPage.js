import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <Wrapper className='main'>
      <section>
        <h1>404</h1>
        <h3>Sorry, the page you tried can not be found</h3>
        <Link to='/main' className='btn btn--white'>
          back home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  section {
    margin-top: -10rem;
  }

  h1 {
    margin-top: -5rem;
    font-size: 13rem;
  }

  h3 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
`;

export default ErrorPage;
