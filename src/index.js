import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import ErrorBoundary from 'components/ErrorBoundary';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary hasError={false}>
      <Root />
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
