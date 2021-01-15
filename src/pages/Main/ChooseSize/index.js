import { useContext } from 'react';

import { singularOrPlural } from 'utils/functions';
import { Container, Pizza, PizzaSize as ItemSize } from './styles';

import { AuthContext } from 'services/context/auth';

const ChooseSize = () => {
  const { userInfo } = useContext(AuthContext);
  const { user } = userInfo;

  const PizzaSize = ({ size }) => (
    <ItemSize>
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
    </ItemSize>
  );
  const pizzaSizes = [
    {
      id: 0,
      name: 'Pequena',
      size: 28,
      slices: 2,
      flavours: 1,
    },
    {
      id: 1,
      name: 'Média',
      size: 30,
      slices: 6,
      flavours: 2,
    },
    {
      id: 2,
      name: 'Grande',
      size: 32,
      slices: 8,
      flavours: 3,
    },
  ];
  return (
    <Container>
      <div className="header-main">
        <h3>E ai? qual vai ser {user.firstName}?</h3>
        <h4>Escolha o sabor da sua pizza</h4>
      </div>

      <div className="content-main">
        {pizzaSizes.map((size) => (
          <PizzaSize key={size.id} size={size} />
        ))}
      </div>
    </Container>
  );
};

export default ChooseSize;
