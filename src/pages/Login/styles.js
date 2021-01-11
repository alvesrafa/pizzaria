import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 48px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .logo {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }
  .header {
    display: flex;
    margin-bottom: 8px;
    align-items: center;
  }
`;
