import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { MdPersonAdd } from 'react-icons/md';

import logo from 'assets/svg/logo.svg';
import { Container } from './styles';
import Button from 'components/Button';

import { useAuth } from 'services';

const Login = () => {
  const { loginWithGitHub } = useAuth;

  return (
    <Container>
      <div className="header">
        <img className="logo" alt="Logo PizzaDex" src={logo} />
        <h2>Acessar sua conta</h2>
      </div>
      <Button onClick={loginWithGitHub} background="white" color="black">
        Entrar com GitHub
        <AiOutlineGithub style={{ marginLeft: 8 }} size={24} />
      </Button>
      <Button background="white" color="black">
        Entrar com Google
        <FcGoogle style={{ marginLeft: 8 }} size={24} />
      </Button>
      <Button background="white" color="black">
        Cadastre-se <MdPersonAdd style={{ marginLeft: 8 }} size={24} />
      </Button>
    </Container>
  );
};

export default Login;
