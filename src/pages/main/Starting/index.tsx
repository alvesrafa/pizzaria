import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';

import { useOrder } from '../../../context';
import { Container } from './styles';
import { singularOrPlural } from '../../../common/functions';

function Starting() {
  const [loading, setLoading] = useState(true);
  const [hasPizzas, setHasPizzas] = useState(false);
  const { changeStep, order } = useOrder();

  useEffect(() => {
    if (order) {
      // orderCookie = JSON.parse(order);
      const { pizzas } = order;
      if (pizzas.length > 0) {
        setHasPizzas(true);
      } else {
        setHasPizzas(false);
      }
    } else {
      setHasPizzas(false);
    }

    setLoading(false);
  }, []);

  const startAssembly = () => {
    changeStep(1);
  };

  if (loading) return <p>loading</p>;
  console.log('order.pizzas', order.pizzas);
  if (hasPizzas) {
    return (
      <Container>
        <h1>
          Você já possui{' '}
          {singularOrPlural(order.pizzas.length, 'pizza', 'pizzas')}, deseja
          adicionar mais alguma?
        </h1>
        <div>
          <p>Suas pizzas:</p>
          {order.pizzas.map((pizza) => {
            console.log('pizza', pizza);
            return (
              <p>
                {singularOrPlural(
                  pizza.quantity,
                  '1 pizza',
                  `${pizza.quantity} pizzas`
                )}{' '}
                de
              </p>
            );
          })}
        </div>
        <button onClick={startAssembly}>Adicionar nova pizza</button>
        <button onClick={() => changeStep(4)}>Finalizar pedido</button>
      </Container>
    );
  }
  return (
    <Container>
      <h1>Opa, bora montar seu pedido?</h1>
      <button onClick={startAssembly}>Montar pedido</button>
    </Container>
  );
}

export default Starting;
