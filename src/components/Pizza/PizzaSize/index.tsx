import { ReactNode } from 'react';
import { singularOrPlural } from '../../../common/functions';

import { Container, Pizza } from './styles';

interface PizzaSizeProps {
  size: {
    id: number;
    name: string;
    size: number;
    slices: number;
    flavours: number;
  };
  handleSelectSize: (size) => void;
}

function PizzaSize({ size, handleSelectSize }: PizzaSizeProps) {
  return (
    <Container onClick={() => handleSelectSize(size)}>
      <div className="item-header"></div>
      <div className="item-body">
        <h4>{size.name}</h4>

        <p>
          {singularOrPlural(
            size.slices,
            `${size.slices} fatia`,
            `${size.slices} fatias`
          )}
          ,{' '}
          {singularOrPlural(
            size.flavours,
            `${size.flavours} sabor`,
            `${size.flavours} sabores`
          )}
        </p>
      </div>
    </Container>
  );
}

export default PizzaSize;
