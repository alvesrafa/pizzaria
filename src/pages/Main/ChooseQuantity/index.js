import { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import Footer from 'components/Footer';
import { useOrders } from 'services';

export default function ChooseQuantity() {
  const [quantidade, setQuantidade] = useState(1);

  const oneMore = () => {
    setQuantidade((prev) => prev + 1);
  };
  const oneLess = () => {
    if (quantidade <= 1) return;

    setQuantidade((prev) => prev - 1);
  };

  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { order } = useOrders();

  const handleNextPage = () => {};

  return (
    <>
      <Container>
        <div className="item-header">
          <h3>Quantas pizzas você gostaria com esses sabores</h3>
        </div>
        <div className="item-body">
          <h3>{quantidade}</h3>
          <button onClick={oneMore}>mais</button>
          <button onClick={oneLess}>menos</button>
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
            onClick: () => handleNextPage(),
          },
        ]}
      />
    </>
  );
}
