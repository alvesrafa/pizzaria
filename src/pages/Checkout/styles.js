import styled from 'styled-components';

export const Container = styled.div`
  background: red;
  flex: 1;
  width: 100%;
  @media (max-width: 550px) {
    padding: 16px;
  }
  @media (max-width: 440px) {
    padding: 32px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
