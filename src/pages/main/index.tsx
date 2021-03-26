import SideBar from '../../components/SideBar';
import styled from 'styled-components';

const Content = styled.div`
  border-radius: 4rem;
  display: flex;
  height: 90%;
  width: 90%;
  padding: 5rem;
  background: ${({ theme }) => theme.white};
  margin: 2rem;

  overflow-y: auto;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  word-wrap: break-word;
  @media (max-width: 720px) {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }
`;

export default function Main() {
  return (
    <div className="container-with-side">
      <SideBar />
      <Content></Content>
    </div>
  );
}
