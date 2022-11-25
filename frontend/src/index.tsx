import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { App } from './App';
import { configure } from 'mobx';

configure({ enforceActions: 'observed' });

//Render
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
