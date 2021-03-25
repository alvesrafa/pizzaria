import styled from 'styled-components';

const Card = styled.div`
  border-radius: 16px;

  background: ${({ theme }) => theme.background};
  flex: 1;

  width: 50rem;
  height: 25rem;
  overflow: hidden;

  @media (max-width: 750px) {
    width: 100%;
    padding: 5rem;
  }

  display: flex;
  align-items: center;

  > img {
    background: ${({ theme }) => theme.black};
    height: 100%;
    width: 40%;
    @media (max-width: 750px) {
      display: none;
    }
  }
  .card-content {
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default function Login() {
  return (
    <div className="container">
      <Card>
        <img />

        <div className="card-content">
          <h1>Entrar</h1>
          <p>
            Ainda não possui conta? <a>Cadastre-se</a>
          </p>

          <div className="input-wrapper">
            <input placeholder="Celular ou e-mail" />
          </div>
          <div className="input-wrapper">
            <input placeholder="Senha" />
          </div>
          <button>Entrar</button>
        </div>
      </Card>
    </div>
  );
}
