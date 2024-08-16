import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ExampleProvider } from './components/context/ExampleContext';

ReactDOM.render(
  <BrowserRouter>
   <ExampleProvider>

    <App />
   </ExampleProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
