import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';

import Cookie from 'js-cookie';
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
  addQuantity: (values: any) => void;
  addFlavour: (values: any) => void;
  addSize: (values: any) => void;
  pizza: {
    id: number;
    size: object;
  };
}

const OrderContext = createContext({} as OrderContextProps);

const useOrder = () => useContext(OrderContext);

function OrderProvider({ children }: OrderProviderProps) {
  const [step, setStep] = useState(0);
  const [pizza, setPizza] = useState(null);

  const [order, setOrder] = useState<OrderProps>({
    pizzas: [],
    address: {},
    phone: '',
  });
  useEffect(() => {
    const orderCookie = JSON.stringify(order);
    Cookie.set('order', orderCookie);
  }, [order]);

  const changeStep = (number) => {
    if (step >= number) return;

    setStep(number);
  };

  const checkOut = async () => {
    let pizzas = [...order.pizzas, pizza];
    setOrder({
      ...order,
      pizzas,
    });

    alert('Opa pizza adicionada');
    setStep(0);
  };

  const addSize = (size) => {
    setPizza({
      ...pizza,
      size: size,
    });
    changeStep(2);
  };

  const addFlavour = (flavour) => {
    setPizza({
      ...pizza,
      flavour: flavour,
    });
    changeStep(3);
  };

  const addQuantity = (quantity) => {
    const data = {
      ...pizza,
      quantity: quantity,
    };
    setPizza(data);

    checkOut();
  };

  return (
    <OrderContext.Provider
      value={{
        step,
        changeStep,
        order,
        checkOut,
        pizza,
        addQuantity,
        addFlavour,
        addSize,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export { useOrder, OrderProvider, OrderContext };
