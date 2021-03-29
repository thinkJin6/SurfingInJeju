import React from 'react';
import styled from 'styled-components';

import SpotDescription from './SpotDescription';
import ImageContainer from './ImageContainer';

const SpotInfo = () => {
  return (
    <Wrapper>
      <ImageContainer />
      <SpotDescription />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

export default SpotInfo;
