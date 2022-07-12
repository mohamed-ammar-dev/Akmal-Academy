export const register = async (params: any) => {
  const data = {
    name: params.name,
    email: params.email,
    password: params.password,
  };

  const response = await fetch("/auth/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return alert("This email address is already being used");

  return (window.location.href = "/twoFactorLogin");
};
