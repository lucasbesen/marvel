import React from 'react';
import styled from 'styled-components';

import { Content } from '.';

const Text = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

const NoData = () => (
  <Content>
    <Text>No Data</Text>
  </Content>
);

export default NoData;
