import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useHistory, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { singularOrPlural, numberToMoney } from 'utils/functions';
import { CHOOSE_QNT } from 'utils/routes';
import { Container, PizzaFlavour as ItemFlavour } from './styles';
import Footer from 'components/Footer';
import { useOrders } from 'services';

const ChooseFlavours = () => {
  const history = useHistory();
  const [selectedFlavours, setSelectedFlavours] = useState([]);
  const { pizza, addData } = useOrders();

  const themeContext = useContext(ThemeContext);

  useEffect(() => {
    setSelectedFlavours([]);
  }, []);

  const PizzaFlavour = ({ flavour, className }) => (
    <ItemFlavour className={className} onClick={() => onSelectFlavour(flavour)}>
      <div className="item-header">
        <img src={flavour.image} alt="Imagem da pizza" />
      </div>
      <div className="item-body">
        <h4>{flavour.name}</h4>
        <p>{numberToMoney(flavour.value[pizza.id])}</p>
      </div>
    </ItemFlavour>
  );
  const isSelected = (id) => {
    let boolean = false;
    selectedFlavours.forEach((selected) => {
      if (selected.id === id) {
        boolean = true;
      }
    });

    return boolean;
  };
  const onSelectFlavour = (flavour) => {
    if (isSelected(flavour.id)) {
      let newValues = selectedFlavours.filter(
        (selected) => selected.id !== flavour.id
      );

      return setSelectedFlavours(newValues);
    }
    if (selectedFlavours.length >= pizza.flavours) {
      return toast.dark(
        `Você só pode selecionar ${singularOrPlural(
          pizza.flavours,
          `${pizza.flavours} sabor`,
          `${pizza.flavours} sabores`
        )}`
      );
    }
    setSelectedFlavours([...selectedFlavours, flavour]);
  };
  const handleNextPage = () => {
    if (selectedFlavours.length < 1) {
      return toast.dark('Informe pelo menos 1 sabor');
    }
    addData({
      selectedFlavours,
    });
    return history.push(CHOOSE_QNT);
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

  if (!pizza) return <Redirect to="/" />;

  return (
    <>
      <Container>
        <div className="header-main">
          <h3>
            {' '}
            Escolha até{` `}
            {singularOrPlural(
              pizza.flavours,
              `${pizza.flavours} sabor`,
              `${pizza.flavours} sabores`
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
      <Footer
        buttons={[
          {
            name: 'Voltar',
            background: themeContext.secondary,
            onClick: () => history.goBack(),
          },
          {
            name: 'Continuar',
            background: themeContext.primary,
            onClick: handleNextPage,
          },
        ]}
      />
    </>
  );
};

export default ChooseFlavours;
