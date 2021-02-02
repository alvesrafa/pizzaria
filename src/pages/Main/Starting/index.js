import { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';

import { Container } from './styles';

import { useOrders } from 'services';

import Button from 'components/Button';
import Footer from 'components/Footer';

export default function Starting() {
  const { pizza, order } = useOrders();
  const history = useHistory();
  const [hasPizzas, setHasPizzas] = useState(false);
  useEffect(() => {
    if (order.pizzas.length > 0) {
      setHasPizzas(true);
    }
  }, []);
  return (
    <>
      <Container>
        <div className="content-main">
          <Button
            onClick={() => {
              history.push('/sizes');
            }}
          >
            {hasPizzas ? `MONTAR MAIS UMA PIZZA` : `MONTAR MINHA PIZZA`}
          </Button>
        </div>
      </Container>
      <Footer />
    </>
  );
}
