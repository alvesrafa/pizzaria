import { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container } from './styles';

import Header from 'components/Header';

import routes from 'utils/routes';

const ChooseSize = lazy(() => import('./ChooseSize'));
const ChooseFlavours = lazy(() => import('./ChooseFlavours'));
const ChooseQuantity = lazy(() => import('./ChooseQuantity'));
const Starting = lazy(() => import('./Starting'));

const Main = () => {
  return (
    <Container>
      <Header />

      <Switch>
        <Route path={routes.STARTING} exact component={Starting} />
        <Route path={routes.CHOOSE_SIZE} exact component={ChooseSize} />
        <Route path={routes.CHOOSE_FLAVOUR} component={ChooseFlavours} />
        <Route path={routes.CHOOSE_QNT} component={ChooseQuantity} />
      </Switch>
    </Container>
  );
};

export default Main;
