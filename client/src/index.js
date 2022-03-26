import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import ScrollToTop from './components/other/ScrollToTop';
import {GlobalProvider} from './context/GlobalContext'

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
