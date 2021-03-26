import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-width: 5rem;
  background: ${({ theme }) => theme.white};

  padding: 3rem 1.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* margin-right: 2rem; */

  @media (max-width: 720px) {
    width: 100%;
    height: 5rem;
    flex-direction: row;
    /* margin-right: 0; */
    /* margin-bottom: 2rem; */
  }

  .side-header {
  }
  .side-body {
    ul {
      display: flex;
      flex-direction: column;

      > li {
        border-radius: 50%;

        padding: 0.5rem;
        margin: 1rem;

        transition: all 0.2s;

        &.active {
          background: ${({ theme }) => theme.orange};
          box-shadow: 2px 10px 8px ${({ theme }) => theme.orangeLight};
        }

        &:hover {
          transform: scale(1.01);
          box-shadow: 0 10px 8px ${({ theme }) => theme.orangeLight};
        }
      }
      > li a {
        width: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 0;
        padding: 0;
      }
      > li.active a {
        color: ${({ theme }) => theme.white};
      }
      @media (max-width: 720px) {
        flex-direction: row;
        > li a {
          font-size: 1rem;
        }
      }
    }
  }
  @media (max-width: 465px) {
    .side-body {
      display: none;
    }
  }
  .side-footer {
    > button {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      padding: 6px;
      font-size: 1.5rem;
      border: 0;
      background: transparent;
      transition: all 0.2s;

      &:hover {
        transform: scale(1.01);
        box-shadow: 5px 0px 8px ${({ theme }) => theme.orangeLight};
      }
      @media (max-width: 720px) {
        font-size: 1rem;
      }
    }
  }
`;
