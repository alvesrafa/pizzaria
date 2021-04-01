import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { PizzaProvider } from './PizzaContext';
import { usePizza } from './PizzaContext';

interface OrderProviderProps {
  children: ReactNode;
}
interface OrderContextProps {
  step: number;
  changeStep: (number: number) => void;
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

  const changeStep = (number) => {
    setStep(number);
  };

  const addPizza = (quantity) => {
    let pizzas = order.pizzas;
    pizzas.push({ ...pizza, quantity });
    // setPizza(null);

    setOrder({ ...order, pizzas });
    // toast(`Pizza adicionada ao pedido`);
  };

  return (
    <OrderContext.Provider value={{ step, changeStep }}>
      <PizzaProvider>{children}</PizzaProvider>
    </OrderContext.Provider>
  );
}

export { useOrder, OrderProvider, OrderContext };
