import { useEffect, useState } from 'react';
import { useOrder } from '../../../context';

import { Container } from './styles';

interface StartingProps {}

function Starting() {
  const [hasPizzas, setHasPizzas] = useState(false);
  const { order, changeStep, step } = useOrder();
  const { pizzas } = order;

  useEffect(() => {
    console.log('pizzas', pizzas);
    if (pizzas.length > 0) {
      setHasPizzas(true);
    } else {
      setHasPizzas(false);
    }
  }, [pizzas]);

  const startAssembly = () => {
    changeStep(1);
  };

  if (hasPizzas) {
    return (
      <Container>
        <h1>Opa bora </h1>
        <button onClick={startAssembly}>Adicionar nova pizza</button>
        <button>Finalizar pedido</button>
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
