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
}

function PizzaSize({ size }: PizzaSizeProps) {
  return (
    <Container>
      <div className="item-header">
        <Pizza>
          <span>{size.size}cm</span>
        </Pizza>
      </div>
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
