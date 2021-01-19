import { createContext, useCallback, useState, useContext } from 'react';

const OrdersContext = createContext();

export const useOrders = () => useContext(OrdersContext);

export default function OrdersProvider({ children }) {
  const [orders, setOrders] = useState([]);

  const [order, setOrder] = useState(null);

  const addData = (values) => {
    setOrder({ ...order, ...values });
  };
  const addOrder = () => {
    setOrders([...orders, order]);
  };

  return (
    <OrdersContext.Provider value={{ addData, addOrder, orders, order }}>
      {children}
    </OrdersContext.Provider>
  );
}
