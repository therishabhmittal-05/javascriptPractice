const apiKey="30051f9eb41b7cadecdba412bba2d5ef"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="
const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`)
    let data = await response.json()
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

}
searchButton.addEventListener("click", function(){
    checkWeather(searchBox.value);
})

//30051f9eb41b7cadecdba412bba2d5ef
