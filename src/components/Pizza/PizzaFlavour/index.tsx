import { ReactNode } from 'react';
import { numberToMoney, singularOrPlural } from '../../../common/functions';
import { useOrder } from '../../../context';

import { Container } from './styles';

interface PizzaFlavourProps {
  isSelected: boolean;
  flavour: {
    id: number;
    image: string;
    name: string;
    value: object;
  };
  handleSelectFlavour: (flavour) => void;
}

function PizzaFlavour({
  flavour,
  handleSelectFlavour,
  isSelected,
}: PizzaFlavourProps) {
  const { pizza } = useOrder();
  return <Container onClick={() => handleSelectFlavour(flavour)}></Container>;
}

export default PizzaFlavour;
