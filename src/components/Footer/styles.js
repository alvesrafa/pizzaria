import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  box-shadow: 0 4px 20px -2px ${(props) => props.theme.shadow};
  display: flex;
  justify-content: center;
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
    .actions {
      display: flex;
      align-items: center;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;

    > h3 {
      margin-bottom: 12px;
    }
  }
`;
