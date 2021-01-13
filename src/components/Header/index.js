import { useContext } from 'react';
import { Container, LogoutIcon } from './styles';

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

import { AuthContext } from 'services/context/auth';
import { AppContext } from 'services/context/app';

const Header = () => {
  const { logout } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <Container>
      <div className="home-wrapper">
        <button onClick={toggleTheme}>
          {theme === 'light' ? (
            <FaMoon size={20} color="#F5B04D" />
          ) : (
            <FaSun size={20} color="#F5C84D" />
          )}
        </button>
        <h1>Logomarca</h1>
      </div>

      <div className="logout-wrapper">
        <p>Olá TESTE</p>
        <button className="logout-button" onClick={logout}>
          Sair
          <LogoutIcon />
        </button>
      </div>
    </Container>
  );
};

export default Header;
