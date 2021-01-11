import styled from 'styled-components';

const ButtonCustom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px 24px;
  margin: 8px;
  width: ${(props) => (props.width ? props.width : 'auto')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  background: ${(props) =>
    props.background ? props.background : props.theme.primary};
  color: ${(props) => (props.color ? props.color : props.theme.black)};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
  &:hover,
  &:focus,
  &.active {
    opacity: 0.7;
  }
`;

const Button = ({ children, ...props }) => {
  return <ButtonCustom {...props}>{children}</ButtonCustom>;
};

export default Button;
