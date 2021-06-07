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
  word-wrap: break-word;
  .container {
  }
  .container-with-side {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 720px) {
      display: grid;
      grid-template-rows: 60px 1fr;
    }
    transition: all 0.2s;
  }
`;
interface LayoutProps {
  background?: string;
  children: React.ReactNode;
}
export default function Layout({ children, background }: LayoutProps) {
  return <Container background={background}>{children}</Container>;
}
