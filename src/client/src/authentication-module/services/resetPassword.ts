export const resetPassword = async (params: any) => {
  const data = {
    email: params.email,
    code: params.code,
    newPassword: params.newPassword,
  };

  const response = await fetch("/auth/user/resetPassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return alert("Something went wrong!");

  alert("Done!");

  return (window.location.href = "/login");
};
