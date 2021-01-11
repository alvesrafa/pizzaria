import { useEffect } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { MdPersonAdd } from 'react-icons/md';
import 'firebase/auth';
import firebase from 'firebase/app';

import logo from 'assets/svg/logo.svg';
import { Container } from './styles';
import Button from 'components/Button';

var firebaseConfig = {
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
  const loginWithGitHub = async () => {
    const provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithRedirect(provider);
  };

  return (
    <Container>
      <div className="header">
        <img className="logo" alt="Logo PizzaDex" src={logo} />
        <h1>Entrar</h1>
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
