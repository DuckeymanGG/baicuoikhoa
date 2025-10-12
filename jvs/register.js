const users = JSON.parse(localStorage.getItem("users")) || [];

const form = document.getElementById("Form-Register");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("Username").value.trim();
  const password = document.getElementById("Password").value.trim();
  const rePassword = document
    .querySelector('input[name="re-password"]')
    .value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const dob = document.querySelector('input[name="dob"]').value;

  const validate = () => {
    if (
      username === "" ||
      password === "" ||
      rePassword === "" ||
      !gender ||
      dob === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return false;
    }
    if (password !== rePassword) {
      alert("Mật khẩu nhập lại không khớp!");
      return false;
    }
    const existed = users.find((u) => u.username === username);
    if (existed) {
      alert("Tên đăng nhập đã tồn tại!");
      return false;
    }
    return true;
  };

  if (validate()) {
    const newUser = {
      username: username,
      password: password,
      gender: gender.value,
      dob: dob,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    window.location.href = "login.html";
  }
});
