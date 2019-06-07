import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StoreProvider } from './store';
import './index.css';
import HomePage from './HomePage';
import { Router } from '@reach/router';
import FavPage from './FavPage';

ReactDOM.render(
 <StoreProvider>
  <Router>
   <App path='/'>
    <HomePage path='/' />
    <FavPage path='/FavPage' />
   </App>
  </Router>
 </StoreProvider>, 
 document.getElementById('root')
 );
