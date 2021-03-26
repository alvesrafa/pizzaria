import { Container } from './styles';

import {
  BiHomeAlt,
  BiFoodMenu,
  BiPaperPlane,
  BiLogOutCircle,
  BiMoney,
} from 'react-icons/bi';
import { useAuth } from '../../context/AuthContext';

function SideBar() {
  const { logout } = useAuth();

  return (
    <Container>
      <div className="side-header">
        <p>PizzaMenu</p>
      </div>
      <div className="side-body">
        <ul>
          <li className="active">
            <a href={'#'}>
              <BiHomeAlt />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <BiFoodMenu />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <BiFoodMenu />
            </a>
          </li>
          <li>
            <a href={'#'}>
              <BiMoney />
            </a>
          </li>
        </ul>
      </div>
      <div className="side-footer">
        <button onClick={logout}>
          <BiLogOutCircle />
        </button>
      </div>
    </Container>
  );
}

export default SideBar;
