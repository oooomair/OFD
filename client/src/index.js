import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import {GlobalProvider} from './context/Context'

ReactDOM.render(
  <BrowserRouter>
  <GlobalProvider>
  <React.StrictMode>
    <ScrollToTop/>
    <App />
  </React.StrictMode>
  </GlobalProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
