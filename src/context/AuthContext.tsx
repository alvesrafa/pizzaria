import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

import Cookie from 'js-cookie';

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextProps {
  login: () => any;
  logout: () => any;
  isLogged: boolean;
}

const AuthContext = createContext({} as AuthContextProps);

const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(null);

  useEffect(() => {
    const token = Cookie.get('token');

    if (!token) {
      setIsLogged(false);
    }
    setIsLogged(true);
  }, []);

  const login = () => {
    Cookie.set('token', 'any-token');
    setIsLogged(true);
  };
  const logout = () => {
    Cookie.remove('token');
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth, AuthProvider, AuthContext };
