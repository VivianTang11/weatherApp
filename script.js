const apiKey = "2a58ec4bbfa26bfe6e0948b24c90bb76";
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

const searchValue = document.getElementById("search")

searchValue.addEventListener("keyup", (e) => {
  if (e.key == "Enter") {
    fetchCurrent(searchValue.value);
  }
});

async function fetchCurrent(city) {
  const res = await fetch(url(city))
  const data = await res.json();
  renderCurrent(data);
}

function renderCurrent(data) {
  let currentDate = new Date().toLocaleDateString();

  const mainContainer = document.getElementById("main-container");
  mainContainer.classList.add("main-container");

  const cityBox = document.createElement("div");
  cityBox.setAttribute("id", "city");
  cityBox.innerHTML = `
    <h3>Today</h3>
    <span>${currentDate}</span>
    <h2>${data.name}, ${data.sys.country}</h2>`;

  const iconBox = document.createElement("div");
  iconBox.setAttribute("id", "icon");
  iconBox.innerHTML = `
    <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png /></img>
    <p>${data.weather[0].description}</p>`;

  const detailsBox = document.createElement("div");
  detailsBox.setAttribute("id", "details");
  detailsBox.innerHTML = `
    <h2 class="main-temp">${data.main.temp} C</h2>
    <span><i class="fa-solid fa-arrow-up"></i> ${data.main.temp_max} C </span>
    <span><i class="fa-solid fa-arrow-down"></i> ${data.main.temp_min} C</span>`;

  const mainWrapper = document.getElementById("main-container");
  mainWrapper.innerHTML = ''
  mainWrapper.append(cityBox, iconBox, detailsBox);

  searchValue.value = ''

}

