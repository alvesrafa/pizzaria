import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import toast from 'react-hot-toast';
import Cookie from 'js-cookie';
interface OrderProviderProps {
  children: ReactNode;
}
interface PizzaProps {
  id: number;
  size: {
    id: number;
    flavours: number;
  };
  flavours: number;
  quantity: number;
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
  pizza: PizzaProps;
}

const OrderContext = createContext({} as OrderContextProps);

const useOrder = () => useContext(OrderContext);

function OrderProvider({ children }: OrderProviderProps) {
  const [step, setStep] = useState(0);
  const [pizza, setPizza] = useState<PizzaProps>(null);

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
    console.log('pizza', pizza);
    setTimeout(() => {
      let pizzas = [...order.pizzas, pizza];
      setOrder({
        ...order,
        pizzas,
      });
      toast.success('Pizza adicionada');

      setStep(0);
    }, 1500);
  };

  const addSize = (size) => {
    console.log('Adicionando tamanho: ', size);
    setPizza({
      ...pizza,
      size: size,
    });
    changeStep(2);
  };

  const addFlavour = (flavours) => {
    console.log('Adicionando sabores: ', flavours);
    setPizza({
      ...pizza,
      flavours: flavours,
    });
    changeStep(3);
  };

  const addQuantity = (quantity) => {
    setPizza({
      ...pizza,
      quantity: quantity,
    });
    console.log('Addicionou quantidade');

    // checkOut();
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
