import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';
import Link from 'next/link';

import { useOrder } from '../../../context';
import { Container } from './styles';

function Starting() {
  const [loading, setLoading] = useState(true);
  const [hasPizzas, setHasPizzas] = useState(false);
  const { changeStep, step } = useOrder();

  useEffect(() => {
    const order = Cookie.get('order');
    const orderCookie = JSON.parse(order);
    const { pizzas } = orderCookie;
    if (pizzas.length > 0) {
      setHasPizzas(true);
    } else {
      setHasPizzas(false);
    }

    setLoading(false);
  }, []);

  const startAssembly = () => {
    changeStep(1);
  };

  if (loading) return <p>loading</p>;

  if (hasPizzas) {
    return (
      <Container>
        <h1>Opa bora </h1>
        <button onClick={startAssembly}>Adicionar nova pizza</button>
        <Link href="/main/checkout">
          <button>Finalizar pedido</button>
        </Link>
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
