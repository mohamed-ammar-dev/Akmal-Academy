export const sendForgetPassword = async (params: any) => {
  const data = {
    email: params.email,
  };

  const response = await fetch("/auth/user/sendForgetPasswordCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return alert("Something went wrong!");

  document.cookie = `email=${params.email};`;

  return (window.location.href = "/forgetPassword/code");
};
