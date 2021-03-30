import React from 'react';
import styled from 'styled-components';

import SpotDescription from './SpotDescription';
import SpotImageContainer from './SpotImageContainer';

const SpotInfo = () => {
  return (
    <Wrapper>
      <SpotImageContainer />
      <SpotDescription />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`;

export default SpotInfo;
