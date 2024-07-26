function SignUp() {
  let usernameSignup = document.getElementById("usernameSignup");
  let passwordSignup = document.getElementById("passwordSignup");
  localStorage.setItem("username_" + usernameSignup.value, usernameSignup.value);
  localStorage.setItem("password_" + usernameSignup.value, passwordSignup.value);
  alert("Sign up Berhasil")
  location.reload();
}


function Login() {
  let usernameInput = document.getElementById("usernameInput");
  let passwordInput = document.getElementById("passwordInput");
  let storedUsername = localStorage.getItem("username_" + usernameInput.value);
  let storedPassword = localStorage.getItem("password_" + usernameInput.value);
  
  if (storedUsername && passwordInput.value === storedPassword) {
    alert("Anda telah login");
    window.location.href = "home.html";
  }
  else if (storedUsername && passwordInput.value !== storedPassword) {
    alert("Password salah");
  }
  else {
    alert("Username salah");
  }
}

function Logout() {
  window.location.href="indeks.html";
}