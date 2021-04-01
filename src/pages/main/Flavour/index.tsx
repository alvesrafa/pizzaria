import { ReactNode } from 'react';
import { flavours } from '../../../common/config';
import { numberToMoney } from '../../../common/functions';
import { useOrder, usePizza } from '../../../context';
import PizzaFlavour from '../../../components/Pizza/PizzaFlavour';
import { Container } from './styles';

interface FlavourProps {}

function Flavour({}: FlavourProps) {
  const { addPizzaInformation } = usePizza();
  const { changeStep } = useOrder();
  const handleSelectFlavour = (flavour) => {
    addPizzaInformation({ flavour });
    changeStep(2);
  };
  return (
    <Container>
      {flavours.map((flavour) => (
        <PizzaFlavour
          handleSelectFlavour={handleSelectFlavour}
          flavour={flavour}
        />
      ))}
    </Container>
  );
}

export default Flavour;
