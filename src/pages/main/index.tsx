import SideBar from '../../components/SideBar';
import styled from 'styled-components';
import Size from './Size';
import Flavour from './Flavour';
import Quantity from './Quantity';

import { useOrder } from '../../context';
import Starting from './Starting';
import Checkout from './checkout';

const Content = styled.div`
  border-radius: 4rem;
  display: flex;
  height: 90%;
  width: 90%;
  padding: 5rem;
  background: ${({ theme }) => theme.white};
  margin: 2rem;

  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;

export default function Main() {
  const { step } = useOrder();

  const renderContent = () => {
    switch (step) {
      case 0:
        return <Starting />;
      case 1:
        return <Size />;
      case 2:
        return <Flavour />;
      case 3:
        return <Quantity />;
      case 4:
        return <Checkout />;
    }
  };

  return (
    <div className="container-with-side">
      <SideBar />
      <Content>{renderContent()}</Content>
    </div>
  );
}
