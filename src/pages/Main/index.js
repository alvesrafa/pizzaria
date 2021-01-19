import { useMemo, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './styles';

import Header from 'components/Header';
import Footer from 'components/Footer';

import routes from 'utils/routes';

const ChooseSize = lazy(() => import('./ChooseSize'));
const ChooseFlavours = lazy(() => import('./ChooseFlavours'));

const Main = () => {
  return (
    <Container>
      <Header />

      <Switch>
        <Route path={routes.CHOOSE_SIZE} exact component={ChooseSize} />
        <Route path={routes.CHOOSE_FLAVOUR} component={ChooseFlavours} />
      </Switch>
    </Container>
  );
};

export default Main;
