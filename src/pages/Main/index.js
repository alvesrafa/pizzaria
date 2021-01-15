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

      {/* <Suspense fallback={'espere um teco ai'}>
        <Switch>
          <Route path="/" component={ChooseSize} />
        </Switch>
      </Suspense>

      <Footer /> */}
    </Container>
  );
};

export default Main;
