import React, { PureComponent } from 'react';
import ErrorPage from '../ErrorPage';
class ErrorBoundary extends PureComponent {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    console.log('Erro ao gerar build ----->', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <ErrorPage />;

    return this.props.children;
  }
}
export default ErrorBoundary;
