import { ReactNode } from 'react';
import { flavours } from '../../../common/config';
import { numberToMoney } from '../../../common/functions';
import { useOrder, usePizza } from '../../../context';
import PizzaFlavour from '../../../components/Pizza/PizzaFlavour';
import { Container } from './styles';

interface FlavourProps {}

function Flavour({}: FlavourProps) {
  const { addFlavour } = usePizza();

  return (
    <Container>
      {flavours.map((flavour) => (
        <PizzaFlavour
          key={flavour.id}
          handleSelectFlavour={() => addFlavour(flavour)}
          flavour={flavour}
        />
      ))}
    </Container>
  );
}

export default Flavour;
