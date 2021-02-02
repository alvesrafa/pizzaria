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

  .item-main {
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
    max-width: 1280px;
  }
  .item-body {
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 6px;
    > h3 {
    }
    .actions {
      display: flex;
      > button {
        margin: 12px;
        padding: 6px;
        border-radius: 8px;

        font-weight: bold;
        font-size: 22px;
        background: ${(props) => props.theme.primary};
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
`;
