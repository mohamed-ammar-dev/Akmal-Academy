export const login = async (params: any) => {
  const data = {
    email: params.email,
    password: params.password,
  };

  const response = await fetch("/auth/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return alert("Something went wrong!");

  return (window.location.href = "/twoFactorLogin");
};
