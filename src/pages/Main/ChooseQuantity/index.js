import { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import Footer from 'components/Footer';
import { useOrders } from 'services';

import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';

import { singularOrPlural } from 'utils/functions';

import { toast } from 'react-toastify';

export default function ChooseQuantity() {
  const [quantidade, setQuantidade] = useState(1);

  const oneMore = () => {
    setQuantidade(quantidade + 1);
  };
  const oneLess = () => {
    if (quantidade <= 1) return;

    setQuantidade(quantidade - 1);
  };

  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { pizza, addPizza } = useOrders();

  const handleNextPage = () => {
    if (quantidade < 1) return toast.error('Quantidade selecionada inválida');

    addPizza(quantidade);
    history.push('/');
  };
  if (!pizza) return <Redirect to="/" />;

  return (
    <>
      <Container>
        <div className="item-header">
          <h3>
            Quantas pizzas você gostaria com{' '}
            {singularOrPlural(
              pizza.selectedFlavours.length,
              'esse sabor',
              'esses sabores'
            )}
          </h3>
        </div>
        <div className="item-body">
          <h3>{quantidade}</h3>

          <div className="actions">
            <button onClick={oneMore}>
              <AiOutlinePlus />
            </button>
            <button onClick={oneLess}>
              <AiOutlineLine />
            </button>
          </div>
        </div>
      </Container>

      <Footer
        buttons={[
          {
            name: 'Voltar',
            background: themeContext.secondary,
            onClick: history.goBack,
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
}
