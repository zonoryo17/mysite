import {StrictMode} from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const rootElement = document.getElementById('root');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);