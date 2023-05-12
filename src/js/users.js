export class Users {
  baseElements = document.querySelectorAll('[data-sign-base]');
  advancedElements = document.querySelectorAll('[data-sign-advanced]');
  signUpButtonName = document.querySelectorAll('[data-sign-name]');
  logOutButton = document.querySelectorAll('[data-sign-logout]');
  signUpButton = document.querySelectorAll('[data-sign-up]');

  setActiveUser(name, email) {
    const user = { name, email };
    localStorage.setItem('active-user', JSON.stringify(user));
    this.checkSignInStatus();
  }

  getActiveUser() {
    const user = JSON.parse(localStorage.getItem('active-user'));
    if (user) return user;
  }

  getActiveUserName() {
    const user = this.getActiveUser();
    if (!user) return;
    const userName = user.name;
    let userFirstName = userName.split(' ')[0];
    userFirstName =
      userFirstName.charAt(0).toUpperCase() +
      userFirstName.slice(1).toLowerCase();
    return userFirstName;
  }

  removeActiveUser() {
    localStorage.removeItem('active-user');
  }

  onUserSignIn(userName) {
    for (const element of this.baseElements) {
      element.classList.add('hidden');
    }
    for (const element of this.advancedElements) {
      element.classList.remove('hidden');
    }
    for (const element of this.signUpButton) {
      element.classList.remove('hidden');
    }
    for (const element of this.signUpButtonName) {
      element.textContent = userName;
    }
  }

  onUserSignOut() {
    this.removeActiveUser();
    for (const element of this.signUpButton) {
      element.classList.add('hidden');
    }
    for (const element of this.logOutButton) {
      element.classList.add('hidden');
    }
    for (const element of this.advancedElements) {
      element.classList.add('hidden');
    }
    for (const element of this.baseElements) {
      element.classList.remove('hidden');
    }
  }

  checkSignInStatus() {
    const userName = this.getActiveUserName();
    if (userName) {
      this.onUserSignIn(userName);
    } else {
      this.onUserSignOut();
    }
  }
}

const signUpButton = document.querySelectorAll('[data-sign-up]');
for (const element of signUpButton) {
  element.onclick = () => {
    for (const el of logOutButton) {
      el.classList.toggle('hidden');
    }
  };
}

const logOutButton = document.querySelectorAll('[data-sign-logout]');
for (const element of logOutButton) {
  element.onclick = () => user.onUserSignOut();
}

const user = new Users();
user.checkSignInStatus();
