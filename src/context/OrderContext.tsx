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
interface PizzaProps {
  id: number;
  size: object;
}
interface OrderProps {
  pizzas: PizzaProps[];
  address: {};
  phone: string;
}
interface OrderContextProps {
  step: number;
  changeStep: (number: number) => void;
  checkOut: () => void;
  order: OrderProps;
}

const OrderContext = createContext({} as OrderContextProps);

const useOrder = () => useContext(OrderContext);

function OrderProvider({ children }: OrderProviderProps) {
  const [step, setStep] = useState(0);
  const { pizza } = usePizza();

  useEffect(() => {
    console.log('pizza', pizza);
  }, [pizza]);

  const [order, setOrder] = useState<OrderProps>({
    pizzas: [],
    address: {},
    phone: '',
  });

  const changeStep = (number) => {
    if (step >= number) return;

    setStep(number);
  };

  const checkOut = async () => {
    console.log('a pizza', pizza);
    let aaaa = [...order.pizzas, pizza];
    console.log('Como fica o order', aaaa);
    // await setOrder();

    alert('Opa pizza adicionada');
    setStep(0);
  };

  return (
    <OrderContext.Provider value={{ step, changeStep, order, checkOut }}>
      <PizzaProvider>{children}</PizzaProvider>
    </OrderContext.Provider>
  );
}

export { useOrder, OrderProvider, OrderContext };
