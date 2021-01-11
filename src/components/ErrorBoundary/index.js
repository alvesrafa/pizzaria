import { useMemo } from 'react-native';

import ErrorPage from '../ErrorPage';

const ErrorBoundary = ({ hasError, children }) => {
  const errorComponent = useMemo(() => {
    if (hasError) return <ErrorPage />;

    return children;
  }, [hasError]);

  return errorComponent;
};

export default ErrorBoundary;
