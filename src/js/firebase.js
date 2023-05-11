import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const authform1 = document.querySelector('#auth-form-1');
authform1.addEventListener('submit', signup);

const firebaseConfig = {
  apiKey: 'AIzaSyC-eMd5m0dMO7LKnERBDzjQI041CFFQPLc',
  authDomain: 'goit-team-project-02-27328.firebaseapp.com',
  projectId: 'goit-team-project-02-27328',
  storageBucket: 'goit-team-project-02-27328.appspot.com',
  messagingSenderId: '343120497607',
  appId: '1:343120497607:web:18d2f5c8a6382ac09f27e2',
  measurementId: 'G-BJL1GBZW1W',
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
// Зарегистрируйте новых пользователей

var name = document.getElementById('name-1');
var email = document.getElementById('email-1');
var password = document.getElementById('password-1');

function signup() {
  e.preventDefault();

  var user = {
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
