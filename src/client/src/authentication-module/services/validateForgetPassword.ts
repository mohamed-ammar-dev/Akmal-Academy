export const validateForgetPassword = async (params: any) => {
  const data = {
    email: params.email,
    code: params.code,
  };

  const response = await fetch("/auth/user/validateForgetPasswordCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return alert("Something went wrong!");

  document.cookie = `code=${params.code};email=${params.email};`;

  return (window.location.href = "/forgetPassword/reset");
};
