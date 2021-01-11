import 'firebase/auth';
import firebase from 'firebase/app';

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

export default firebase;
