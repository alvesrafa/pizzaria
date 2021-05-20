import { ReactNode, useState } from 'react';
import { flavours } from '../../../common/config';
import { numberToMoney, singularOrPlural } from '../../../common/functions';
import { useOrder } from '../../../context';
import { Container } from './styles';
import toast from 'react-hot-toast';
interface FlavourProps {}

function Flavour({}: FlavourProps) {
  const [selectedFlavours, setSelectedFlavours] = useState([]);

  const { addFlavour, pizza, changeStep } = useOrder();

  const isSelected = (id: number) => {
    let boolean = false;
    selectedFlavours.forEach((selected) => {
      if (selected.id === id) {
        boolean = true;
      }
    });

    return boolean;
  };

  const handleSelectFlavour = (flavour) => {
    if (isSelected(flavour.id)) {
      let newValues = selectedFlavours.filter(
        (selected) => selected.id !== flavour.id
      );
      return setSelectedFlavours(newValues);
    }

    if (selectedFlavours.length >= pizza.size.flavours) {
      return toast.error(
        `Você só pode selecionar ${singularOrPlural(
          pizza.size.flavours,
          `${pizza.size.flavours} sabor`,
          `${pizza.size.flavours} sabores`
        )}`
      );
    }
    setSelectedFlavours([...selectedFlavours, flavour]);
  };

  return (
    <Container>
      {flavours.map((flavour) => (
        <div
          key={flavour.id}
          className={`flavour-item ${isSelected(flavour.id) ? 'selected' : ''}`}
          onClick={() => handleSelectFlavour(flavour)}
        >
          <div className="item-header">
            <img src={flavour.image} alt="Imagem da pizza" />
          </div>
          <div className="item-body">
            <h4>{flavour.name}</h4>
            <p>{numberToMoney(flavour.value[pizza?.size?.id])}</p>
          </div>
        </div>
      ))}
      <div>
        <button
          onClick={() => {
            addFlavour(selectedFlavours);
            changeStep(3);
          }}
        >
          Continuar
        </button>
      </div>
    </Container>
  );
}

export default Flavour;
