import { ElementType } from 'react';
import { useAuth } from '../../context/AuthContext';

function WithAuth(WrappedComponent: ElementType) {
  const Wrapper = (props) => {
    return <WrappedComponent {...props} />;
  };
  return Wrapper;
}

export default WithAuth;
