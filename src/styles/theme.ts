import { CSSObject, DefaultTheme } from 'styled-components';

export interface ThemeProps extends DefaultTheme {
  theme: {
    white: CSSObject;
    black: CSSObject;
    background: CSSObject;
    orange: CSSObject;
    orangeLight: CSSObject;
  };
}

export const light = {
  white: '#FFFFFF',
  black: '#676873',
  background: '#FAF9FB',
  orange: '#FB9300',
  orangeLight: '#F2E0C9',
};

export const dark = {
  white: '#FFFFFF',
  black: '#676873',
  background: '#FAF9FB',
  orange: '#FB9300',
  orangeLight: '#F2E0C9',
};
