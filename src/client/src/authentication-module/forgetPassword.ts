import "../shared/css/mdb.min.css";
import "../shared/css/style.css";
import { sendForgetPassword } from "./services/sendForgetPassword";

const forgetPasswordButton = async () => {
  const email = document.getElementById("email")! as HTMLInputElement;

  await sendForgetPassword({
    email: email.value,
  });
};

document.getElementById("forgetPasswordButton")!.onclick = forgetPasswordButton;

const forgetPasswordBtn = document.getElementById("email")! as HTMLInputElement;

forgetPasswordBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    forgetPasswordButton();
  }
});
