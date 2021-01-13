import { createContext, useCallback, useState, useEffect } from 'react';
import firebase from 'services/firebase';

export const AuthContext = createContext();

function Auth({ children }) {
  const [userInfo, setUserInfo] = useState({ isLogged: false, user: null });

  const loginWithGitHub = useCallback(async () => {
    const provider = new firebase.auth.GithubAuthProvider();

    return await firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(async () => {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        setUserInfo({
          isLogged: false,
          user: null,
        });
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginWithGitHub,
        logout,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
