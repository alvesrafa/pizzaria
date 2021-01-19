import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > main {
    overflow-y: auto;
    @media (max-width: 550px) {
      padding: 16px;
    }
    @media (max-width: 440px) {
      padding: 32px;
    }
  }
`;
