import { createContext, useContext, ReactNode, useState } from 'react';
import { PizzaProvider } from './PizzaContext';
import { usePizza } from './PizzaContext';

interface OrderProviderProps {
  children: ReactNode;
}
interface OrderContextProps {
  step: number;
}

const OrderContext = createContext({} as OrderContextProps);

const useOrder = () => useContext(OrderContext);

function OrderProvider({ children }: OrderProviderProps) {
  const [step, setStep] = useState(1);
  const { pizza } = usePizza();
  const [order, setOrder] = useState({
    pizzas: [],
    address: {},
    phone: '',
  });

  const addPizza = (quantity) => {
    let pizzas = order.pizzas;
    pizzas.push({ ...pizza, quantity });
    // setPizza(null);

    setOrder({ ...order, pizzas });
    // toast(`Pizza adicionada ao pedido`);
  };

  return (
    <OrderContext.Provider value={{ step }}>
      <PizzaProvider>{children}</PizzaProvider>
    </OrderContext.Provider>
  );
}

export { useOrder, OrderProvider, OrderContext };
