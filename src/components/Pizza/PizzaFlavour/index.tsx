import { ReactNode } from 'react';
import { numberToMoney, singularOrPlural } from '../../../common/functions';
import { useOrder } from '../../../context';

import { Container } from './styles';

interface PizzaFlavourProps {
  flavour: {
    id: number;
    image: string;
    name: string;
    value: object;
  };
  handleSelectFlavour: (size) => void;
}

function PizzaFlavour({ flavour, handleSelectFlavour }: PizzaFlavourProps) {
  const { pizza } = useOrder();
  return (
    <Container onClick={() => handleSelectFlavour(flavour)}>
      <div className="item-header">
        <img src={flavour.image} alt="Imagem da pizza" />
      </div>
      <div className="item-body">
        <h4>{flavour.name}</h4>
        <p>{numberToMoney(flavour.value[pizza?.size?.id])}</p>
      </div>
    </Container>
  );
}

export default PizzaFlavour;
