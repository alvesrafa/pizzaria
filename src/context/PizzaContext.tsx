import { createContext, useContext, ReactNode, useState } from 'react';

interface PizzaProviderProps {
  children: ReactNode;
}
interface PizzaContextProps {
  addPizzaInformation: (values: any) => void;
  pizza: object;
}

const PizzaContext = createContext({} as PizzaContextProps);

const usePizza = () => useContext(PizzaContext);

function PizzaProvider({ children }: PizzaProviderProps) {
  const [pizza, setPizza] = useState(null);

  const addPizzaInformation = (values) => {
    setPizza({ ...pizza, ...values });
  };

  return (
    <PizzaContext.Provider value={{ addPizzaInformation, pizza }}>
      {children}
    </PizzaContext.Provider>
  );
}

export { usePizza, PizzaProvider, PizzaContext };
