const apiKey = "2a58ec4bbfa26bfe6e0948b24c90bb76";
// const apiKey = process.env.API_KEY
let city = "gothenburg";

const url = `https://api.openweathermap.org/data/2.5`;

const fetchCurrent = async () => {
  const res = await fetch(
    `${url}/weather?q=${city}&appid=${apiKey}&units=metric`
  );
  const data = await res.json();
  renderCurrent(data);
  console.log(data);
};

// const fetchForecast = async (data) => {
//   const res = await fetch(`${url}/forecast?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}`);
//   const object = await res.json();
//   render(object)
//   console.log(object);
// };

const renderCurrent = (data) => {
  document.getElementById("city").innerHTML = 
    `<h2>${data.name}, ${data.sys.country}</h2>`;
  document.getElementById("icon").innerHTML = `
    <img src=http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png /></img>
    <p>${data.weather[0].description}</p>`;
  document.getElementById("details").innerHTML = `
    <h2>${data.main.temp} C</h2>
    <p><i class="fa-solid fa-arrow-up"></i> ${data.main.temp_max} C <i class="fa-solid fa-arrow-down"></i> ${data.main.temp_min} C</p>`;
};

fetchCurrent();
// fetchForecast()
