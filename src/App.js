import * as React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';
import { toast } from 'react-toastify';

import type { Store } from 'redux';

import 'react-toastify/dist/ReactToastify.css';

import configureStore, { history } from './redux/store/configureStore';
import Routes from './router';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-image: url('https://wallpaperaccess.com/full/200875.jpg'),
    linear-gradient(rgba(237, 30, 36, 0.9), rgba(237, 30, 36, 0.9));
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 50px 300px;
`;

const store: Store = configureStore();
toast.configure();

const App = (): React.Node => (
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
