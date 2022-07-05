import "../shared/css/mdb.min.css";
import "../shared/css/style.css";
import { getCookie } from "../shared/utils/getCookie";
import { validateForgetPassword } from "./services/validateForgetPassword";

const submitButton = async () => {
  const code = document.getElementById("code")! as HTMLInputElement;
  const email = getCookie("email");

  await validateForgetPassword({
    code: code.value,
    email,
  });
};

document.getElementById("submitButton")!.onclick = submitButton;

const forgetPasswordBtn = document.getElementById("code")! as HTMLInputElement;

forgetPasswordBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    submitButton();
  }
});
