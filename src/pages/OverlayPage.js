import React from 'react';
import styled from 'styled-components';

import { useSpotContext } from '../contexts/spot_context';
import { Forecast } from '../components';

const OverlayPage = () => {
  const {
    isModalOpen,
    closeModal,
    single_spot,
    setSingleSpot,
  } = useSpotContext();

  return (
    <Wrapper>
      <div
        className={`overlay ${!isModalOpen && 'hidden'}`}
        onClick={() => {
          closeModal();
          // Protecting from rerendering
          setSingleSpot(null);
        }}
      ></div>
      <div className={`modal ${!isModalOpen && 'hidden'}`}>
        {single_spot && <Forecast />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    transition: all 0.4s;
  }

  .modal {
    height: 90vh;
    width: 50rem;
    background-color: var(--color-grey-light-1);
    border-radius: 0.3rem;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 30000;
    transition: all 0.4s;
  }

  .hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

export default OverlayPage;
