import styled from 'styled-components';
import Mask from 'react-input-mask';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  @media (max-width: 750px) {
    padding: 16px;
    flex-direction: column;
  }
  @media (max-width: 440px) {
    padding: 8px;
  }

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1280px;

  .content {
    flex: 1;
    padding: 24px;
    @media (max-width: 750px) {
      padding: 16px;
    }
    @media (max-width: 440px) {
      padding: 8px;
    }
  }
`;
export const Error = styled.span`
  margin-top: 3px;
  width: 100%;
  color: #d44950;
  font-weight: bold;
  border-radius: 8px;
  font-size: 10px;
  padding: 4px;
`;
export const Title = styled.h3`
  color: ${(props) => props.theme.black};
`;
export const Box = styled.div`
  margin: 12px;
  padding: 24px;
  @media (max-width: 750px) {
    padding: 16px;
  }
  @media (max-width: 440px) {
    padding: 8px;
  }
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

  .input-wrapper {
    margin: 6px;
    padding: 16px 6px 6px;

    /* position: relative; */
    display: flex;
    width: 100%;
    flex-direction: column;
    > label {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.4s;
      /* position: absolute; */
    }
    /* > input + label {
      top: 45%;
      left: 15px;
    }
    > input:focus + label {
      font-size: 10px;
      top: 0px;
      left: 10px;
    } */
    > input:has([value]) + label {
      font-size: 10px;
      top: 0px;
      left: 10px;
    }
    > input {
      width: 100%;
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
  }
`;
export const InputMask = styled(Mask)`
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
`;
