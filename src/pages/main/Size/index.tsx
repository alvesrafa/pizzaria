import { ReactNode } from 'react';
import { pizzaSizes } from '../../../common/config';
import PizzaSize from '../../../components/Pizza/PizzaSize';
import { useOrder, usePizza } from '../../../context';

import { Container } from './styles';

interface SizeProps {}

function Size({}: SizeProps) {
  const { addPizzaInformation } = usePizza();
  const { changeStep } = useOrder();

  const handleSelectSize = (size) => {
    addPizzaInformation({ size });
    changeStep(2);
  };

  return (
    <Container>
      <h3>Opa opa, bora começar?</h3>
      <h4>Escolha o tamanho da sua pizza</h4>
      <div className="content">
        {pizzaSizes.map((size) => (
          <PizzaSize
            key={size.id}
            handleSelectSize={handleSelectSize}
            size={size}
          />
        ))}
      </div>
    </Container>
  );
}

export default Size;
