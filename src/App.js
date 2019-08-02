import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import configureStore, { history } from './redux/store/configureStore';
import Routes from './router';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: red;
  padding: 2% 25%;
`;

const store = configureStore();

const App = () => (
  <Wrapper>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Routes />
        </Switch>
      </ConnectedRouter>
    </Provider>
  </Wrapper>
);

export default App;
