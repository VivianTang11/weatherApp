const apiKey = "2a58ec4bbfa26bfe6e0948b24c90bb76";
const url = `https://api.openweathermap.org/data/2.5`;

function search() {
  document.getElementById("search").addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      fetchCurrent(document.getElementById("search").value);
    }
  });
}

async function fetchCurrent(city) {
  const res = await fetch(
    `${url}/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();
  renderCurrent(data);
}

function renderCurrent(data) {
  const mainContainer = document.createElement("div")
  mainContainer = document.setAttribute('id', 'main-container')
  // const mainContainer = document.getElementById("main-container");
  let currentDate = new Date().toLocaleDateString();

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

    const main =  document.getElementsByTagName(main)
   main.append(mainContainer, cityBox, iconBox, detailsBox);
}

window.addEventListener("load", search());
