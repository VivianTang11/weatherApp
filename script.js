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
  document.getElementById("city").innerHTML = `
    <h3>Today</h3>
    <h2>${data.name}, ${data.sys.country}</h2>`;
  document.getElementById("icon").innerHTML = `
    <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png /></img>
    <p>${data.weather[0].description}</p>`;
  document.getElementById("details").innerHTML = `
    <h2>${data.main.temp} C</h2>
    <p><i class="fa-solid fa-arrow-up"></i> ${data.main.temp_max} C <i class="fa-solid fa-arrow-down"></i> ${data.main.temp_min} C</p>`;
}

window.addEventListener("load", search());
