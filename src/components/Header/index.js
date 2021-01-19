import { useContext } from 'react';
import { Container, LogoutIcon } from './styles';

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

import { AuthContext } from 'services/context/auth';
import { AppContext } from 'services/context/app';

import { ThemeContext } from 'styled-components';

const Header = () => {
  const { logout, userInfo } = useContext(AuthContext);
  const { toggleTheme, theme } = useContext(AppContext);

  const { user } = userInfo;
  const themeContext = useContext(ThemeContext);

  return (
    <Container>
      <div className="header-wrapper">
        <div className="left-side">
          <h1>Pizzaria tal</h1>
        </div>
        <div className="right-side">
          <div className="profile">
            Olá,
            <p>
              {` `} {user.firstName}
            </p>
            <img />
          </div>
          <button
            className={`button ${theme === 'light' ? 'light' : 'dark'}`}
            onClick={toggleTheme}
          >
            {theme === 'light' ? (
              <FaSun size={14} color={themeContext.primary} />
            ) : (
              <FaMoon size={14} color={themeContext.primary} />
            )}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Header;
