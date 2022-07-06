import "../shared/css/mdb.min.css";
import "../shared/css/style.css";
import { getCookie } from "../shared/utils/getCookie";
// import { getCookie } from "../shared/utils/getCookie";
import { login } from "./services/login";
import { register } from "./services/register";

const isAuth = getCookie("isAuth");

if (isAuth == "true") window.location.href = "/playlists/me";

const registerButton = async () => {
  const email = document.getElementById("registerEmail")! as HTMLInputElement;
  const name = document.getElementById("registerName")! as HTMLInputElement;
  const password = document.getElementById(
    "registerPassword"
  )! as HTMLInputElement;

  await register({
    name: name.value,
    email: email.value,
    password: password.value,
  });
};

const loginButton = async () => {
  const email = document.getElementById("loginEmail")! as HTMLInputElement;
  const password = document.getElementById(
    "loginPassword"
  )! as HTMLInputElement;

  await login({
    email: email.value,
    password: password.value,
  });
};

document.getElementById("registerButton")!.onclick = registerButton;

document.getElementById("loginButton")!.onclick = loginButton;

const loginForm = document.getElementById("loginForm")! as HTMLFormElement;
const registerForm = document.getElementById(
  "registerForm"
)! as HTMLFormElement;

loginForm.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    loginButton();
  }
});

registerForm.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    registerButton();
  }
});

const checkBox = document.getElementById("registerCheck") as HTMLInputElement;
const registerBtn = document.getElementById(
  "registerButton"
)! as HTMLButtonElement;

checkBox.addEventListener("change", function () {
  if (this.checked) return (registerBtn.disabled = false);
  registerBtn.disabled = true;
});
