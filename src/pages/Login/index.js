import { useEffect, useState, useCallback } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { MdPersonAdd } from 'react-icons/md';
import 'firebase/auth';
import firebase from 'firebase/app';

import logo from 'assets/svg/logo.svg';
import { Container } from './styles';
import Button from 'components/Button';

const firebaseConfig = {
  apiKey: 'AIzaSyDcG1KgbjCjD4jkWlLTMBTgfpYRJ8etM6g',
  authDomain: 'pizza-dex.firebaseapp.com',
  projectId: 'pizza-dex',
  storageBucket: 'pizza-dex.appspot.com',
  messagingSenderId: '367966904656',
  appId: '1:367966904656:web:fb05246a36159ffcdbcc55',
  measurementId: 'G-LH705P9R8P',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const Login = () => {
  const [userInfo, setUserInfo] = useState({ isLogged: false, user: null });
  const { isLogged, user } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isLogged: !!user,
        user,
      });
    });
  }, []);

  const loginWithGitHub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();

    return await firebase.auth().signInWithRedirect(provider);
  };
  const logout = useCallback(async () => {
    return await firebase
      .auth()
      .signOut()
      .then(() => {
        setUserInfo({
          isLogged: false,
          user: null,
        });
      });
  }, []);

  return (
    <Container>
      <div className="header">
        <img className="logo" alt="Logo PizzaDex" src={logo} />
        <h1>{isLogged ? `Bem vindo(a) ${user?.displayName}` : 'Entrar'}</h1>
        {isLogged && <Button onClick={logout}>Sair</Button>}
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
