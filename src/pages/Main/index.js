import { useMemo } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './styles';

import Header from 'components/Header';

const Main = () => {
  const routes = useMemo(() => {
    let test = [
      { path: '/rota1', content: 'Rota 1' },
      { path: '/rota2', content: 'Rota 2' },
      { path: '/rota3', content: 'Rota 3' },
    ];
    return test.map((route) => (
      <Route
        key={route.path}
        path={route.path}
        render={() => <h2>{route.content}</h2>}
      />
    ));
  }, []);

  return (
    <Container>
      <Header />
      <Switch>{routes}</Switch>
    </Container>
  );
};

export default Main;
