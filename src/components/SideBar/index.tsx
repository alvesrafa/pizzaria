import { Container } from './styles';

import {
  BiHomeAlt,
  BiFoodMenu,
  BiPaperPlane,
  BiLogOutCircle,
  BiMoney,
} from 'react-icons/bi';
import { useAuth, useOrder } from '../../context';

function SideBar() {
  const { logout } = useAuth();
  const { step, changeStep } = useOrder();

  const menuItems = [
    {
      step: 0,
      render: (
        <a href={'#'}>
          <BiHomeAlt />
        </a>
      ),
    },
    {
      step: 1,
      render: (
        <a href={'#'}>
          <BiHomeAlt />
        </a>
      ),
    },
    {
      step: 2,
      render: (
        <a href={'#'}>
          <BiHomeAlt />
        </a>
      ),
    },
    {
      step: 3,
      render: (
        <a href={'#'}>
          <BiFoodMenu />
        </a>
      ),
    },
    {
      step: 4,
      render: (
        <a href={'#'}>
          <BiFoodMenu />
        </a>
      ),
    },
  ];

  return (
    <Container>
      <div className="side-header">
        <p>PizzaMenu</p>
      </div>
      <div className="side-body">
        <ul>
          {menuItems.map((item, i) => {
            return (
              <li
                key={i}
                onClick={() => changeStep(item.step)}
                className={item.step <= step ? 'active' : ''}
              >
                {item.render}
              </li>
            );
          })}
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
