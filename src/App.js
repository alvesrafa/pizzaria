import { lazy, useEffect, useContext, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import { AuthContext } from 'services/context/auth';
import firebase from 'services/firebase';

import LoadingPage from 'components/LoadingPage';
import { LOGIN } from 'utils/routes';

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
        user: !!user && {
          ...user,
          firstName: user.displayName.split(' ')[0],
        },
      });
      setDidCheckUserIn(true);
    });
  }, []);

  if (!didCheckUserIn) return <LoadingPage />;

  if (isLogged && location.pathname === LOGIN) return <Redirect to="/" />;

  if (!isLogged && location.pathname !== LOGIN) return <Redirect to={LOGIN} />;

  return (
    <Switch>
      <Route path={LOGIN} component={Login} />
      {/* <Route path="/register" component={Register} /> */}
      <Route component={Main} />
    </Switch>
  );
}
