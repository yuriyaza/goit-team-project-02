function signup(){var e=document.getElementById("name-1"),a=document.getElementById("email-1"),t=document.getElementById("password-1"),l={name:e.value,email:a.value,password:t.value};console.log(l),localStorage.setItem(l.email,JSON.stringify(l)),alert("Registration was successful, now you can sign in"),document.querySelector(".header-sign-btn").hide()}function chechData(){var e=document.getElementById("email-2"),a=document.getElementById("password-2"),t={email:e.value,password:a.value},l=JSON.parse(localStorage.getItem(t.email));e.value="",a.value="",null===l?alert("User Not Found"):l.email===user.email&&l.password===user.password?window.location.href="/goit-team-project-02/":alert("Invalid datails")}
//# sourceMappingURL=index.7bcd5cef.js.map
