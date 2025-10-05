async function getPost() {
  try {
    const response = await fetch(
      "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={current}&appid={ef5d1b173c5153cc6a40a7da278c8d40}"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json()) // Chuyển dữ liệu trả về thành JSON
  .then((data) => {
    console.log("Information:", data);
  })
  .catch((error) => console.error("Lỗi khi gọi API:", error));

getPost();

async function getData(cityName) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=7ce0865529ebeb2c82a0f27055e5216a&units=metric&lang=vi`
    );

    const data = await response.json();

    domElement.innerHTML = `
      <h1>Thành Phố: ${data.name}</h1>
      <p>Độ ẩm: ${data.main.temp} độ C</p>
    `;

    console.log("Data ====>", data);
  } catch (error) {
    console.error("Lỗi rồi ====>", error);
  }
}

getData("Hà Nội");
