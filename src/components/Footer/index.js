import { Container } from './styles';
import { useAuth } from 'services';

const Footer = (props) => {
  const { userInfo } = useAuth();
  const { user } = userInfo;

  console.log('props', props);

  return (
    <Container>
      <div className="content">
        <div className="pedido">
          <p>{user.firstName} seu pedido é: </p>
          <p>
            Pizza <strong>MÉDIA</strong> - (6 fatias 2 sabores)
          </p>
        </div>
        <div className="actions">botao</div>
      </div>
    </Container>
  );
};

export default Footer;
