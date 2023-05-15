import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClickProvider from './components/pages/context/clickContext';
//import {Click}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ClickProvider>
  <App />
  </ClickProvider>
);


