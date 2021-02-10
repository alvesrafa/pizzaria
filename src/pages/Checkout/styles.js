import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  @media (max-width: 550px) {
    padding: 16px;
  }
  @media (max-width: 440px) {
    padding: 32px;
  }

  display: flex;

  justify-content: center;
  max-width: 1280px;

  .content {
    flex: 1;
    padding: 24px;
  }
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.black};
`;
export const Box = styled.div`
  margin: 12px;
  padding: 24px;
  flex: 1;
  border: 1px solid ${(props) => props.theme.black};
  box-shadow: 0 4px 10px -2px ${(props) => props.theme.shadow};
  border-radius: 8px;

  .pizza {
    margin-top: 6px;
    padding-bottom: 6px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${(props) => props.theme.shadow};
    flex-wrap: wrap;
    > p {
      font-weight: bold;
      font-size: 18px;
      margin-right: 16px;
    }
  }
  > input[type='text'] {
    margin-top: 16px;
    padding: 8px 12px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 2px 5px -2px ${(props) => props.theme.shadow};
    border-bottom: 1px solid ${(props) => props.theme.shadow};

    transition: all 0.4s;

    &:focus {
      box-shadow: 0 2px 10px -2px ${(props) => props.theme.primary};
      border-bottom: 1px solid ${(props) => props.theme.primary};
    }
  }
  > label {
    display: flex;
    align-items: center;
    > input[type='radio'] {
      margin-right: 12px;
    }
  }
`;
