import "../shared/css/mdb.min.css";
import "../shared/css/style.css";
import { twoFactorLogin } from "./services/twoFactorLogin";

document.getElementById("submitButton")!.onclick = async () => {
  const code = document.getElementById("code")! as HTMLInputElement;

  await twoFactorLogin({
    code: code.value,
  });
};
