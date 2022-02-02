import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {GlobalProvider} from './context/Context'

ReactDOM.render(
  <BrowserRouter>
  <GlobalProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
