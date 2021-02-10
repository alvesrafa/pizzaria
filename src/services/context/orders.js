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
    let pizzas = order.pizzas;
    pizzas.push({ ...pizza, quantity });
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
