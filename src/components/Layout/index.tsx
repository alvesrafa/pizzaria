import styled from 'styled-components';

interface ContainerProps {
  background?: string;
}

const Container = styled.div<ContainerProps>`
  background: ${(props) =>
    props.background ? props.background : props.theme.background};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  .container {
  }
  .container-with-side {
  }
`;
interface LayoutProps {
  background?: string;
  children: React.ReactNode;
}
export default function Layout({ children, background }: LayoutProps) {
  return <Container background={background}>{children}</Container>;
}
