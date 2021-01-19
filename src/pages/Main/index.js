import { useMemo, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './styles';

import Header from 'components/Header';
import Footer from 'components/Footer';

const ChooseSize = lazy(() => import('./ChooseSize'));

const Main = () => {
  return (
    <Container>
      <Header />
      <main>
        <Switch>
          <Route path="/size" component={ChooseSize} />
        </Switch>
      </main>

      <Footer />
    </Container>
  );
};

export default Main;
