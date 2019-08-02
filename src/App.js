import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import configureStore, { history } from './redux/store/configureStore';
import Routes from './router';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ed161f;
  padding: 50px 300px;
`;

const store = configureStore();
toast.configure();

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
