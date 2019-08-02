import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import { Content } from '../../components/common';

const MARVEL_IMAGE_URL = 'https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Image = styled.img`
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Home = ({ history }) => (
  <Content>
    <Wrapper>
      <Image src={MARVEL_IMAGE_URL} />
      <p>Simple app using React + Redux + Styled Components + Jest</p>
      <Button variant="contained" color="primary" onClick={() => history.push('/heroes')}>
        Check the Heroes
      </Button>
      <h3>Made by @lucasbesen</h3>
    </Wrapper>
  </Content>
);

export default Home;
