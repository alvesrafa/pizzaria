import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const LogoutIcon = styled(FiLogOut).attrs({
  size: 20,
})`
  color: ${(props) => props.theme.black};
  margin-left: 8px;
`;
export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.gray}88;
  box-shadow: 0 4px 20px -2px ${(props) => props.theme.shadow};
  display: flex;
  justify-content: center;
  .header-wrapper {
    width: 100%;
    max-width: 1280px;

    padding: 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 500px) {
      flex-direction: column;
    }
    .home-wrapper {
      display: flex;
      align-items: center;
      > button {
        margin-right: 8px;
        cursor: pointer;
        padding: 6px;
        background-color: ${(props) => props.theme.black}88;
        border-radius: 8px;
      }
    }
    .logout-wrapper {
      display: flex;
      align-items: center;

      > p {
      }
      @media (max-width: 500px) {
        width: 100%;
        > p {
          display: none;
        }
      }
    }
    .logout-button {
      margin-left: 12px;
      color: ${(props) => props.theme.black};
      display: flex;
      align-items: center;

      border-radius: 12px;

      padding: 8px;
      background: ${(props) => props.theme.secondary};

      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
      @media (max-width: 500px) {
        width: 100%;
        margin-top: 16px;
        justify-content: center;
      }
    }
  }
`;
