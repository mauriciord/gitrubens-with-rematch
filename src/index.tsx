import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
// @ts-ignore
import { PersistGate } from 'redux-persist/es/integration/react';
import 'antd/dist/antd.css';

import App from './App';
import { store } from './state/store';
import * as serviceWorker from './serviceWorker';

// TODO: Add Redux Persist Plugin as Gate
const persistor = getPersistor();

const GlobalStyle = createGlobalStyle`${normalize()}`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <GlobalStyle />
          <App />
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
