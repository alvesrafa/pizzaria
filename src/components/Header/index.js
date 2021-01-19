import { useContext } from 'react';
import { Container } from './styles';

import { FaMoon } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';

import { ThemeContext } from 'styled-components';

import { useAuth, useApp } from 'services';

const Header = () => {
  const { userInfo } = useAuth();
  const { toggleTheme, theme } = useApp();

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
