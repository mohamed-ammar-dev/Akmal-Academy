import "../shared/css/mdb.min.css";
import "../shared/css/style.css";
import { getCookie } from "../shared/utils/getCookie";
import { resetPassword } from "./services/resetPassword";

const resetButton = async (event: Event) => {
  event.preventDefault();

  const newPassword = document.getElementById(
    "new-password"
  )! as HTMLInputElement;
  const email = getCookie("email");
  const code = getCookie("code");

  await resetPassword({
    code,
    email,
    newPassword: newPassword.value,
  });
};

document.getElementById("resetButton")!.onclick = resetButton;

const forgetPasswordBtn = document.getElementById(
  "confirm-password"
)! as HTMLInputElement;

forgetPasswordBtn.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    resetButton(event);
  }
});
