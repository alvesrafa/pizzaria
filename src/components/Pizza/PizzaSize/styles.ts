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
`;
export const Pizza = styled.div`
  position: relative;
  height: 9rem;
  width: 9rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.gray};

  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0;
    margin: 0;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: ${(props) => props.theme.white};
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: ${(props) => props.theme.text};
    transform: rotate(45deg);
  }
  &:before {
    width: 7rem;
    height: 1px;
  }
  &:after {
    height: 7rem;
    width: 1px;
  }
  @media (max-width: 720px) {
    height: 12rem;
    width: 12rem;
    &:before {
      width: 10rem;
      height: 1px;
    }
    &:after {
      height: 10rem;
      width: 1px;
    }
  }
`;
