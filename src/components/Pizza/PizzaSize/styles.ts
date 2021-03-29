import styled from 'styled-components';

export const Container = styled.div``;
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
