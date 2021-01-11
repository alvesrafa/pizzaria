import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading } from 'react-icons/ai';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const LoadingIcon = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
const LoadingPage = ({ background }) => {
  return (
    <Container background={background}>
      <LoadingIcon>
        <AiOutlineLoading size={60} />
      </LoadingIcon>
    </Container>
  );
};
export default LoadingPage;
