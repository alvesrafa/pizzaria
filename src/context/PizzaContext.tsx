import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { useOrder } from './OrderContext';

interface PizzaProviderProps {
  children: ReactNode;
}
interface PizzaContextProps {
  addQuantity: (values: any) => void;
  addFlavour: (values: any) => void;
  addSize: (values: any) => void;
  pizza: {
    id: number;
    size: object;
  };
}

const PizzaContext = createContext({} as PizzaContextProps);

const usePizza = () => useContext(PizzaContext);

function PizzaProvider({ children }: PizzaProviderProps) {
  const [pizza, setPizza] = useState(null);
  const { changeStep, checkOut } = useOrder();

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
    <PizzaContext.Provider value={{ pizza, addQuantity, addFlavour, addSize }}>
      {children}
    </PizzaContext.Provider>
  );
}

export { usePizza, PizzaProvider, PizzaContext };
