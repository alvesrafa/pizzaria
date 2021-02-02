import { createContext, useCallback, useState, useContext } from 'react';
import { toast } from 'react-toastify';

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export default function OrdersProvider({ children }) {
  const [order, setOrder] = useState({
    pizzas: [],
    address: {},
    phone: '',
  });

  const [pizza, setPizza] = useState(null);

  const addData = (values) => {
    setPizza({ ...pizza, ...values });
  };
  const addPizza = (quantity) => {
    // pizzas
    // address
    // phone
    let pizzas = order.pizzas;
    console.log('PIZZAS ANTIGAS', order.pizzas);
    console.log('QUANTIAT', quantity);
    for (let i = 0; i < quantity; i++) {
      console.log('Adicionando', pizza);
      pizzas.push(pizza);
    }
    setPizza(null);

    setOrder({ ...order, pizzas });
    toast(`Pizza adicionada ao pedido`);
  };

  return (
    <OrdersContext.Provider value={{ addData, addPizza, order, pizza }}>
      {children}
    </OrdersContext.Provider>
  );
}
