import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Container = styled.div`
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

  .header-main {
    text-align: center;
    > h3 {
    }
    > h4 {
    }
  }
  .content-main {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const PizzaFlavour = styled.div`
  flex: 1;
  margin: 12px;
  border: 1px solid ${(props) => props.theme.black};
  color: ${(props) => props.theme.black};
  text-align: center;
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  cursor: pointer;
  transition: all 0.4s;

  &.active {
    background: ${(props) => props.theme.primary};
  }
  &:hover,
  &:focus {
    transform: scale(0.95);
    color: ${(props) => props.theme.black}88;
  }

  .item-header {
    padding: 12px;
    border-bottom: 1px solid ${(props) => props.theme.black};
    display: flex;
    align-items: center;
    justify-content: center;

    text-align: center;
  }
  .item-body {
    width: 200px;

    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > h3 {
      background: red;
      padding: 100px;
      font-size: 45px;
      text-align: center;
    }
    .actions {
      display: flex;
      align-items: center;
    }
  }
`;
