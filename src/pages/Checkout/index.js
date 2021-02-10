import { useState, useEffect } from 'react';

import { Container, Title, Box } from './styles';
import { useOrders } from 'services';
import { singularOrPlural } from 'utils/functions';

import InputMask from 'react-input-mask';

const Checkout = () => {
  const { order } = useOrders();

  const [phoneMask, setPhoneMask] = useState('(99) 9999-99999'); // '(99) 9 9999-9999'
  const [phone, setPhone] = useState('');
  // phone.replace(/[^\d]/g, '')

  useEffect(() => {
    const unmask = phone.replace(/[^\d]/g, '');

    if (unmask.length > 10) {
      setPhoneMask('(99) 9 9999-9999');
    } else {
      setPhoneMask('(99) 9999-99999');
    }
  }, [phone]);

  return (
    <Container>
      <div className="content">
        <Box>
          <Title>Qual endereço para entrega?</Title>
          <label>
            <input type="radio" />
            Esse
          </label>
        </Box>
        <Box>
          <Title>Qual seu telefone?</Title>
          <InputMask
            type="text"
            mask={phoneMask}
            maskPlaceholder={null}
            alwaysShowMask={true}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
      </div>
      <div className="content">
        <Box>
          <Title>Informações sobre o pedido</Title>
          {order.pizzas.map((pizza) => (
            <div className="pizza">
              <p>
                {singularOrPlural(
                  pizza.quantity,
                  `${pizza.quantity} pizza`,
                  `${pizza.quantity} pizzas`
                )}{' '}
                {pizza.name} de
              </p>

              {pizza.selectedFlavours.map((flavour) => (
                <span>{flavour.name}</span>
              ))}
            </div>
          ))}
        </Box>
      </div>
    </Container>
  );
};

export default Checkout;
