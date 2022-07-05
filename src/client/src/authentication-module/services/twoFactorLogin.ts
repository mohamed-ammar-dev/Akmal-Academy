export const twoFactorLogin = async (params: any) => {
  const data = {
    code: params.code,
  };

  const response = await fetch("/auth/user/twoFactorLogin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) return alert("Something went wrong!");

  return (window.location.href = "/playlists/me");
};
