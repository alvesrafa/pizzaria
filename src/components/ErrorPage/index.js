import styled from 'styled-components';

import Button from 'components/Button';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f79d5c;
`;

const ErrorPage = () => {
  return (
    <Container>
      <h1>Erro ao tentar carregar o conteudo</h1>
      <Button>Voltar ao inicio</Button>
    </Container>
  );
};

export default ErrorPage;
