import { useMemo, useEffect } from 'react';
import { withRouter, useHistory, Redirect } from 'react-router-dom';

import Button from 'components/Button';
import { Container } from './styles';
import { useAuth, useOrders } from 'services';

import { singularOrPlural } from 'utils/functions';

import routes from 'utils/routes';

const Footer = ({ buttons }) => {
  const history = useHistory();
  const { order, pizza } = useOrders();
  const { userInfo } = useAuth();

  const { user } = userInfo;

  const goToCheckout = () => {
    return history.push(routes.CHECKOUT);
  };

  const render = useMemo(() => {
    if (!pizza) {
      const { pizzas } = order;

      console.log('Pizaas', pizzas);

      const number = (value) => (Number.isInteger(value) ? value : 0);

      const quantity = pizzas.reduce((a, b) => a + number(b.quantity), 0);

      return (
        <Container>
          <div className="column">
            <h3>
              Você tem{' '}
              {singularOrPlural(
                quantity,
                `${quantity} pizza`,
                `${quantity} pizzas`
              )}{' '}
              no seu pedido
            </h3>
            {pizzas.length > 0 && (
              <Button onClick={goToCheckout}>Finalizar pedido</Button>
            )}
          </div>
        </Container>
      );
    }

    const { name, slices, flavours, selectedFlavours } = pizza;

    return (
      <Container>
        <div className="content">
          <div className="pedido">
            <p>{user.firstName} pizza sendo montada: </p>
            <p>
              Pizza <strong>{name.toUpperCase()}</strong> - ({' '}
              {singularOrPlural(
                slices,
                `${slices} pedaço`,
                `${slices} pedaços`
              )}{' '}
              ,{' '}
              {singularOrPlural(
                flavours,
                `${flavours} sabor`,
                `${flavours} sabores`
              )}
              )
            </p>
            <p>
              {selectedFlavours &&
                selectedFlavours.map((selecteds) => `${selecteds.name}, `)}
            </p>
          </div>
          <div className="actions">
            {buttons.map((button, i) => (
              <Button
                key={i}
                background={button.background}
                onClick={button.onClick}
              >
                {button.name}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    );
  }, [pizza, buttons]);

  return render;
};

export default withRouter(Footer);
