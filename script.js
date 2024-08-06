const apiKey = "8758c6e7319033a48b1430186408e912";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        // if city name is invalid..error msg will appear
        document.querySelector(".error").style.display = "block"
        // when we click on search btn..city name is invalid..then no data will appear
        document.querySelector(".weather").style.display = "none"
    }
    else{
        var data = await response.json();
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";  
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        }
        if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        // when we click on search btn..then only data will appear
        document.querySelector(".weather").style.display = "block";
        // if city name is valid..error msg will not appear
        document.querySelector(".error").style.display = "none"

    }

}

searchBtn.addEventListener("click", () =>{
    checkWeather(searchBox.value);
})



