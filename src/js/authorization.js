function signup() {
  //   e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //   const name = document.querySelector('#name').value;
  //   const email = document.querySelector('#email').value;
  //   const password = document.querySelector('#password').value;

  const user = {
    name: name,
    email: email,
    password: password,
  };
  console.log(user);

  localStorage.setItem(user.email, JSON.stringify(user));
  console.log('Регистрация прошла успешно');
}

function chechData() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const user = {
    email: email,
    password: password,
  };

  let getUser = JSON.parse(localStorage.getItem(user.email));

  if (getUser.email === user.email && getUser.password === user.password) {
    // alert('Login Successful');
    window.location.href = 'index.html';
  } else {
    alert('Invalid Datails');
  }
}
