import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from 'pages/Main';
import Login from 'pages/Login';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={Register} /> */}
        <Route component={Main} />
      </Switch>
    </BrowserRouter>
  );
}
