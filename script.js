const apikey = "993fd9f738b347a8bafd548ccaacfa30";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

document.getElementById("searchInput").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
})

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}` );
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{
    var data = await response.json(); 

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tempC").innerHTML = Math.round((data.main.temp)*10)/10 + "°C";
    document.querySelector(".tempF").innerHTML = "/" + Math.round ((data.main.temp*(9/5)+32)*10)/10 + "°F";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 

    if(data.weather[0].main == "Clouds"){
        if(data.weather[0].description == "broken clouds"){
            weathericon.src = "images/broken clouds.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        }   
        else if(data.weather[0].description == "overcast clouds"){
            weathericon.src = "images/overcast clouds.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        } 
        else if(data.weather[0].description == "scattered clouds"){
            weathericon.src = "images/scattered clouds.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        } 
        else if(data.weather[0].description == "few clouds"){
            weathericon.src = "images/few clouds.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        } 
    }
    else if(data.weather[0].main == "Rain"){
        // && (data.weather[0].description == "light rain" || data.weather[0].description == "heavy intensity rain"
        //     || data.weather[0].description == "moderate rain")
        if(data.weather[0].description == "light rain"){
            weathericon.src = "images/light rain.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        } 
        else if(data.weather[0].description == "heavy intensity rain"){
            weathericon.src = "images/heavy intensity rain.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        } 
        if(data.weather[0].description == "moderate rain"){
            weathericon.src = "images/moderate rain.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        } 
    }
    else if(data.weather[0].main == "Clear" && (data.weather[0].description == "clear sky")){
        weathericon.src = "images/sunny.png";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
    else if(data.weather[0].main == "Haze" && (data.weather[0].description == "haze")){
        weathericon.src = "images/haze.png";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
    else if(data.weather[0].main == "Snow" && (data.weather[0].description == "snow")){
        weathericon.src = "images/snow.png";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
    else if(data.weather[0].main == "Storm" && (data.weather[0].description == "heavy thunderstorm")){
        weathericon.src = "images/storm.png";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
    else if(data.weather[0].main == "Mist" && (data.weather[0].description == "mist")){
        weathericon.src = "images/mist.png";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }
    else if(data.weather[0].main == "Drizzle" && (data.weather[0].description == "drizzle")){
        weathericon.src = "images/drizzle.png";
        document.querySelector(".description").innerHTML = data.weather[0].description;
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}
searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
})

