import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.gray}88;
  box-shadow: 0 4px 20px -2px ${(props) => props.theme.shadow};
  display: flex;
  justify-content: center;
`;
