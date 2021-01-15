import { useContext } from 'react';
import { Container, LogoutIcon } from './styles';

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

import { AuthContext } from 'services/context/auth';
import { AppContext } from 'services/context/app';

const Header = () => {
  const { logout, userInfo } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(AppContext);

  const { user } = userInfo;

  return (
    <Container>
      <div className="header-wrapper">
        <div className="home-wrapper">
          <button onClick={toggleTheme}>
            {theme === 'light' ? (
              <FaSun size={20} color="#F5C84D" />
            ) : (
              <FaMoon size={20} color="#F5B04D" />
            )}
          </button>
        </div>

        <div className="logout-wrapper">
          <p>Olá {user.firstName}</p>
          <button className="logout-button" onClick={logout}>
            Sair
            <LogoutIcon />
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
