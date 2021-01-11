import { lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = lazy(() => import('pages/Main'));
const Login = lazy(() => import('pages/Login'));

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Route path="/register" component={Register} /> */}
      <Route component={Main} />
    </Switch>
  );
}
