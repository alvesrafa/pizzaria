import { lazy, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import { AuthContext } from 'services/context/auth';
import firebase from 'services/firebase';

const Main = lazy(() => import('pages/Main'));
const Login = lazy(() => import('pages/Login'));

export default function Routes() {
  const { setUserInfo, userInfo } = useContext(AuthContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('E ai, Beleza?! 🧡');
      setUserInfo({
        isLogged: !!user,
        user,
      });
    });
  }, []);

  return (
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Route path="/register" component={Register} /> */}
      <Route component={Main} />
    </Switch>
  );
}
