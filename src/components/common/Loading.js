import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const Loading = () => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export default Loading;
