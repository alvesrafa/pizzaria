import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  height: max-content;

  /* box-shadow: 0 4px 20px -2px ${(props) => props.theme.shadow}; */
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    height: 70px;
  }
  @media (max-width: 500px) {
    height: 80px;
  }

  .header-wrapper {
    width: 100%;
    max-width: 1280px;

    padding: 8px 24px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-side {
      display: flex;
      align-items: center;
      > img {
        width: 70px;
        height: 45px;
        background: ${(props) => props.theme.gray};
      }
    }

    .right-side {
      display: flex;
      align-items: center;
      .profile {
        font-weight: bold;
        display: flex;
        align-items: center;
        > p {
          margin: 0 4px;
        }
        > img {
          margin: 6px 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: ${(props) => props.theme.gray};
          border: 2px solid ${(props) => props.theme.black};
        }
      }
      .button {
        margin-right: 8px;
        cursor: pointer;
        padding: 4px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.light {
          border: 1px solid ${(props) => props.theme.gray};
          background: ${(props) => props.theme.black};
        }
        &.dark {
          border: 1px solid ${(props) => props.theme.gray};
          background: ${(props) => props.theme.black};
        }
      }
    }
  }
`;
export const LogoutIcon = styled(FiLogOut).attrs({
  size: 20,
})`
  color: ${(props) => props.theme.black};
  margin-left: 8px;
`;
