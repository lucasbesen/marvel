import * as React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

import type { History } from 'history';

import { Content } from '../../components/common';

const MARVEL_IMAGE_URL: string = 'https://upload.wikimedia.org/wikipedia/commons/0/04/MarvelLogo.svg';

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

const Text = styled.p`
  text-align: center;
  margin: 0px 20px 20px 20px;
`;

const Home = ({ history }: History): React.Node => (
  <Content>
    <Wrapper>
      <Image src={MARVEL_IMAGE_URL} />
      <Text>Simple app using React + Redux + Styled Components + Jest</Text>
      <Button variant="contained" color="primary" onClick={() => history.push('/heroes')}>
        Check the Heroes
      </Button>
      <p>
        Made by <a href="https://www.github.com/lucasbesen">@lucasbesen</a>
      </p>
    </Wrapper>
  </Content>
);

export default Home;
