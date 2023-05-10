import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDbgY6AeKCUeYDdnDa3RwqGJag6FgL4yRs',
  authDomain: 'goit-team-project02.firebaseapp.com',
  projectId: 'goit-team-project02',
  storageBucket: 'goit-team-project02.appspot.com',
  messagingSenderId: '543957732549',
  appId: '1:543957732549:web:f69c70aa0bc06b1883f4ac',
  measurementId: 'G-56V4Q6BEEK',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
// Зарегистрируйте новых пользователей

function signup(e) {
  e.preventDefault();

  const name = document.getElementById('name-1');
  const email = document.getElementById('email-1');
  const password = document.getElementById('password-1');

  const user = {
    name: name.value,
    email: email.value,
    password: password.value,
  };

  createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(function (success) {
      alert('Registration was successful, now you can sign in');
    })
    .catch(function (err) {
      alert('error' + err);
    });
  console.log(user);
}

// Войти существующих пользователей

//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//     });
