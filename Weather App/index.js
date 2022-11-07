let weather = {
    "apiKey": "ef735dfbacfa1580568c026e20dd83fb",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid="
             + this.apiKey
        )
            .then((response) => response.json())
            .then((data) =>this.displayWeather(data));
    },


    displayWeather: function(data){
         const { name } = data;
         const { icon, description } = data.weather[0];
         const { temp, humidity } = data.main;
         const { speed } = data.wind;
        
        document.querySelector(".city").innerText = "Weather in " +name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°c";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity +  "%";
        document.querySelector(".wind").innerText = "wind speed: "  + speed + "Km/hr";
        document.querySelector(".weather").classList.remove("loading");
        

    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};
document.querySelector(".search button").addEventListener("click", function (){
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function (event){
  if(event.key == "Enter") {
    weather.search();
  }
})
weather.fetchWeather("Banda");