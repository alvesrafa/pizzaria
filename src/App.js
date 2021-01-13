import { lazy, useEffect, useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import { AuthContext } from 'services/context/auth';
import firebase from 'services/firebase';

import LoadingPage from 'components/LoadingPage';

const Main = lazy(() => import('pages/Main'));
const Login = lazy(() => import('pages/Login'));

export default function App({ location }) {
  const { setUserInfo, userInfo } = useContext(AuthContext);
  const { isLogged } = userInfo;

  const [didCheckUserIn, setDidCheckUserIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('E ai, Beleza?! 🧡');
      setUserInfo({
        isLogged: !!user,
        user,
      });
      setDidCheckUserIn(true);
    });
  }, []);

  if (!didCheckUserIn) {
    console.log('ainda não checkou');
    return <LoadingPage />;
  }

  if (isLogged && location.pathname === '/login') return <Redirect to="/" />;

  if (!isLogged && location.pathname !== '/login')
    return <Redirect to="/login" />;

  return (
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Route path="/register" component={Register} /> */}
      <Route component={Main} />
    </Switch>
  );
}
