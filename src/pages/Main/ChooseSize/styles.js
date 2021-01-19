import styled from 'styled-components';

import { Link } from 'react-router-dom';
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 500px) {
    padding: 12px;
  }
  @media (min-width: 800px) {
    padding: 24px;
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

export const PizzaSize = styled(Link)`
  flex: 1;
  margin: 12px;
  border: 1px solid ${(props) => props.theme.black};
  color: ${(props) => props.theme.black};
  text-align: center;
  border-radius: 12px;
  background: ${(props) => props.theme.background};
  cursor: pointer;
  transition: all 0.4s;
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
  }
  .item-body {
    padding: 12px;
    > h4 {
      font-size: 22px;
    }
    > p {
    }
  }
`;
export const Pizza = styled.div`
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.gray};

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 20px;
    font-weight: bold;
    padding: 0;
    margin: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${(props) => props.theme.background};
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${(props) => props.theme.gray};
    transform: rotate(45deg);
  }
  &:before {
    width: 160px;
    height: 1px;
  }
  &:after {
    height: 160px;
    width: 1px;
  }
`;
