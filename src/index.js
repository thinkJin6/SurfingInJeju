import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

import { SpotProvider } from './contexts/spot_context';
import App from './App';

ReactDom.render(
  <SpotProvider>
    <App />
  </SpotProvider>,
  document.getElementById('root')
);
