import { ReactNode, useState } from 'react';
import { useOrder } from '../../../context';

import { Container } from './styles';

interface QuantityProps {}

function Quantity({}: QuantityProps) {
  const { addQuantity } = useOrder();
  const [quantity, setQuantity] = useState(0);

  return (
    <Container>
      <h1>Informe a quantidade de pizzas dese sabor</h1>

      <div>
        <input
          placeholder="Selecione a quantidade?"
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <button onClick={() => addQuantity(quantity)}>Finalizar</button>
      </div>
    </Container>
  );
}

export default Quantity;
