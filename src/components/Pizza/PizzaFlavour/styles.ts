import styled from 'styled-components';

export const Container = styled.div`
  padding: 0.5rem;
  margin: 0.5rem;
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
`;
