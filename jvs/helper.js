const checkAuth = () => {
  const auth = localStorage.getItem("auth");
  if (auth) {
    return (window.location.href = "./pages/home.html");
  }
};
checkAuth();
