import { ReactNode } from 'react';
import { useOrder, usePizza } from '../../../context';

import { Container } from './styles';

interface QuantityProps {}

function Quantity({}: QuantityProps) {
  const { addPizzaInformation } = usePizza();
  const { changeStep } = useOrder();

  const handleSelectSize = (quantity) => {
    addPizzaInformation({ quantity });
    changeStep(3);
  };

  return (
    <Container>
      <h1>Quantity</h1>
    </Container>
  );
}

export default Quantity;
