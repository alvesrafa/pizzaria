import { useMemo } from 'react';
import { withRouter, useHistory, Redirect } from 'react-router-dom';

import Button from 'components/Button';
import { Container } from './styles';
import { useAuth, useOrders } from 'services';

import { singularOrPlural } from 'utils/functions';

const Footer = ({ buttons, loading }) => {
  const { order, pizza } = useOrders();
  const { userInfo } = useAuth();

  const history = useHistory();

  const { user } = userInfo;

  const render = useMemo(() => {
    if (!pizza) {
      const { pizzas } = order;

      return (
        <Container>
          <div className="column">
            <h3>
              Você tem{' '}
              {singularOrPlural(
                pizzas.length,
                `${pizzas.length} pizza`,
                `${pizzas.length} pizzas`
              )}{' '}
              no seu pedido
            </h3>
            {pizzas.length > 0 && <Button>Finalizar pedido</Button>}
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
  }, [pizza]);

  if (loading) return <p>Opaaa</p>;

  return render;
};

export default withRouter(Footer);
