import { useState, useCallback, useContext } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';
import Footer from 'components/Footer';
import { useOrders } from 'services';

import { AiOutlinePlus, AiOutlineLine } from 'react-icons/ai';

import { toast } from 'react-toastify';

export default function ChooseQuantity() {
  const [quantidade, setQuantidade] = useState(1);
  const [loading, setLoading] = useState(false);
  const oneMore = () => {
    setLoading(true);
    setQuantidade(quantidade + 1);
    setTimeout(() => setLoading(false), 1);
  };
  const oneLess = () => {
    if (quantidade <= 1) return;
    setLoading(true);
    setQuantidade(quantidade - 1);
    setTimeout(() => setLoading(false), 1);
  };

  const history = useHistory();
  const themeContext = useContext(ThemeContext);
  const { pizza, addPizza } = useOrders();

  const handleNextPage = () => {
    if (quantidade < 1) return toast.error('Quantidade selecionada inválida');

    console.log('A quantidade q to mandando', quantidade);

    addPizza(quantidade);
    history.push('/');
  };

  if (!pizza) return <Redirect to="/" />;

  return (
    <>
      <Container>
        <div className="item-header">
          <h3>Quantas pizzas você gostaria com esses sabores</h3>
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
      {!loading ? (
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
      ) : (
        <div />
      )}
    </>
  );
}
