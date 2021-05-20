import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;

  .flavour-item {
    padding: 0.3rem;
    border-radius: 1.5rem;
    border: 1px solid ${(props) => props.theme.gray};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 720px) {
      width: 100%;
    }
    &:hover {
      cursor: pointer;
    }
    .item-header {
      padding: 12px;
      border-bottom: 1px solid ${(props) => props.theme.black};
      display: flex;
      align-items: center;
      justify-content: center;

      > img {
        max-width: 200px;
        max-height: 200px;
      }
    }
    &.selected {
      background-color: ${(props) => props.theme.black};
      color: ${(props) => props.theme.white};
    }
  }
`;
