import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100% - 60px);
  .content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 720px) {
      flex-direction: column;
      height: 100%;
    }
  }
`;
