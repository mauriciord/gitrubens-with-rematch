import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
// @ts-ignore
import { PersistGate } from 'redux-persist/es/integration/react';
import 'antd/dist/antd.css';

import Routes from './routes/Routes';
import { store } from './state/store';
import * as serviceWorker from './serviceWorker';

const persistor = getPersistor();

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  input[type="text"] {
    text-transform: lowercase;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <GlobalStyle />
          <Routes />
        </>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
