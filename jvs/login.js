const users = JSON.parse(localStorage.getItem("users")) || [
  {
    username: "DucAnhPham",
    password: "ducanh123",
  },
  {
    username: "AdminOrange",
    password: "test567",
  },
];

const form = document.getElementById("Form-Login");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("Username").value.trim();
  const password = document.getElementById("Password").value.trim();
  const validate = () => {
    if (username === "" && password === "") {
      alert("Vui lòng nhập Username và Password");
      return false;
    } else if (username === "") {
      alert("Vui lòng nhập Username");
      return false;
    } else if (password === "") {
      alert("Vui lòng nhập Password");
      return false;
    }
    return true;
  };

  if (validate()) {
    const Userfind = users.find(
      (users) => users.username === username && users.password === password
    );
    if (Userfind) {
      alert("Đăng nhập thành công!");
      window.location.href = "home.html";
    } else {
      alert("Sai Username hoặc Password!");
    }
  }
});

const Changebutton = document.querySelector(".toggleBtn");
const password = document.getElementById("Password");
Changebutton.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    Changebutton.textContent = "🫣";
  } else {
    password.type = "password";
    Changebutton.textContent = "👀";
  }
});
