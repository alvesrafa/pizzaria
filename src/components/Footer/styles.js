import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 
  background-color: ${(props) => props.theme.gray}88;
  box-shadow: 0 4px 20px -2px ${(props) => props.theme.shadow};
  
  .content {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    .pedido {
      flex: 1;
    }
  }
  
`;
