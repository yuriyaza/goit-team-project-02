// import Notiflix from 'notiflix';
// import { Notify } from 'notiflix';
// import { Users } from './users';

function signup() {
  const name = document.getElementById('name-1');
  const email = document.getElementById('email-1');
  const password = document.getElementById('password-1');

  const userInfo = {
    name: name.value,
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);

  localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
  alert('Registration was successful, now you can sign in');
  // Notiflix.Notify.success('Registration was successful, now you can sign in');
  // Очищенние импутов после введения данных
  // name.value = '';
  // email.value = '';
  // password.value = '';
  const openPopUp1 = document.querySelector('.header-sign-btn');
  openPopUp1.hide();
}

function chechData() {
  const email = document.getElementById('email-2');
  const password = document.getElementById('password-2');
  // const user = new Users();
  const userInfo = {
    email: email.value,
    password: password.value,
  };

  let getUser = JSON.parse(localStorage.getItem(userInfo.email));

  email.value = '';
  password.value = '';

  if (getUser === null) {
    alert('User Not Found');
    // Notiflix.Notify.failure('User Not Found');
  } else if (
    getUser.email === user.email &&
    getUser.password === user.password
  ) {
    // user.setActiveUser('Ivan Ivanov', 'i.ivanov@gmail.com');
    // window.location.href = '/src/index.html';
    window.location.href = '/goit-team-project-02/';
  } else {
    alert('Invalid datails');
    // Notiflix.Notify.failure('Invalid datails');
  }
}
