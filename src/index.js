import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ErrorBoundary from 'components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary hasError={false}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
