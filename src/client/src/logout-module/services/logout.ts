export const logout = async () => {
  await fetch("/auth/user/logout", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return (window.location.href = "/");
};
