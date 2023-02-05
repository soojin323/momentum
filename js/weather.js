const API_KEY = "34225a5abb1d5650ff55050442cc37ff";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    // console.log("you're live in",lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(reponse => reponse.json())
    .then(data => {       
        const weather = document.querySelector("#weather span:first-child");
        const weatherIcon= document.querySelector("#weather img");
        const temp = document.querySelector("#weather span:nth-of-type(2)");
        const city = document.querySelector("#weather span:last-child");
       
        weather.innerText =`${data.weather[0].main}`;
        weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
        temp.innerText = `/  ${data.main.temp} °C  `
        city.innerText = `/  ${data.name}`;
    }); 
    // console.log(url);
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);