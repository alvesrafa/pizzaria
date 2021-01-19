import { useContext, useState } from 'react';

import { singularOrPlural, numberToMoney } from 'utils/functions';
import { Container, PizzaFlavour as ItemFlavour } from './styles';

import { AuthContext } from 'services/context/auth';
import { toast } from 'react-toastify';

const ChooseFlavours = ({ location }) => {
  const { flavours, id } = location?.state;
  const [selectedFlavors, setSelectedFlavours] = useState([]);
  const { userInfo } = useContext(AuthContext);
  const { user } = userInfo;

  const PizzaFlavour = ({ flavour, className }) => (
    <ItemFlavour className={className} onClick={() => onSelectFlavour(flavour)}>
      <div className="item-header">
        <img src={flavour.image} />
      </div>
      <div className="item-body">
        <h4>{flavour.name}</h4>
        <p>{numberToMoney(flavour.value[id])}</p>
      </div>
    </ItemFlavour>
  );
  const isSelected = (id) => {
    let boolean = false;
    selectedFlavors.forEach((selected) => {
      if (selected.id === id) {
        boolean = true;
      }
    });

    return boolean;
  };
  const onSelectFlavour = (flavour) => {
    if (isSelected(flavour.id)) {
      let newValues = selectedFlavors.filter(
        (selected) => selected.id !== flavour.id
      );

      return setSelectedFlavours(newValues);
    }
    if (selectedFlavors.length >= flavours) {
      return toast.dark(
        `Você só pode selecionar ${singularOrPlural(
          flavours,
          `${flavours} sabor`,
          `${flavours} sabores`
        )}`
      );
    }

    setSelectedFlavours([...selectedFlavors, flavour]);
  };

  const sabores = [
    {
      id: 0,
      image:
        'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      name: 'Calabresa',
      value: {
        0: 20,
        1: 30,
        2: 40,
      },
    },
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1355&q=80',
      name: 'Frango',
      value: {
        0: 22,
        1: 32,
        2: 42,
      },
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
      name: 'Brocolis',
      value: {
        0: 24,
        1: 34,
        2: 44,
      },
    },
  ];

  return (
    <Container>
      <div className="header-main">
        <h3>
          {' '}
          Escolha até{` `}
          {singularOrPlural(
            flavours,
            `${flavours} sabor`,
            `${flavours} sabores`
          )}
        </h3>
      </div>
      <div className="content-main">
        {sabores.map((flavour) => (
          <PizzaFlavour
            className={isSelected(flavour.id) ? 'active' : ''}
            key={flavour.id}
            flavour={flavour}
          />
        ))}
      </div>
    </Container>
  );
};

export default ChooseFlavours;
