import { useMemo } from 'react';
import { withRouter, useHistory, Redirect } from 'react-router-dom';

import Button from 'components/Button';
import { Container } from './styles';
import { useAuth, useOrders } from 'services';

import { singularOrPlural } from 'utils/functions';

const Footer = ({ location }) => {
  const { goBack, order } = useOrders();
  console.log('order', order);
  const { userInfo } = useAuth();
  const history = useHistory();
  const { user } = userInfo;

  const render = useMemo(() => {
    if (!order) return <Redirect to="/" />;

    const { name, slices, flavours, selectedFlavours } = order;

    return (
      <Container>
        <div className="content">
          <div className="pedido">
            <p>{user.firstName} seu pedido é: </p>
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
            <Button onClick={history.goBack}>Voltar</Button>
            <Button background="red" onClick={goBack}>
              Selecionar quantidade
            </Button>
          </div>
        </div>
      </Container>
    );
  }, [order]);

  return render;
};

export default withRouter(Footer);
