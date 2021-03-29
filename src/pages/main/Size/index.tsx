import { ReactNode } from 'react';
import { pizzaSizes } from '../../../common/config';
import PizzaSize from '../../../components/Pizza/PizzaSize';

import { Container } from './styles';

interface SizeProps {}

function Size({}: SizeProps) {
  return (
    <Container>
      <h3>Opa opa, bora começar?</h3>
      <h4>Escolha o tamanho da sua pizza</h4>
      {pizzaSizes.map((size) => (
        <PizzaSize size={size} />
      ))}
    </Container>
  );
}

export default Size;
