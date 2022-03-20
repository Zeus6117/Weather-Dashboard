//api key
const apiKey = "449a366ead9b85f401e6712d2454211d";

//declare city to store searched variable
var city = "";

//declare user form variable 
var userFormEl = document.getElementById("user-form");

//declare city input variable 
var cityInputEl = document.querySelector(".form-input");

//declare container for city search history
var citySearchContainerEl = document.getElementById("city-history");

//declare current weather area 
var cityCurrentWeatherEl = document.getElementById("city-details");

//declare UV index container
var UVI = document.getElementById("uvi");

//future weather variables
var day0 = document.getElementById("weather0");

var day1 = document.getElementById("weather1");

var day2 = document.getElementById("weather2");

var day3 = document.getElementById("weather3");

var day4 = document.getElementById("weather4");

var day5 = document.getElementById("weather5");

var day6 = document.getElementById("weather6");

var day7 = document.getElementById("weather7");

var day8 = document.getElementById("weather8");

var day9 = document.getElementById("weather9");

let citySearchHistory = JSON.parse(localStorage.getItem(city)) || [];

var formSubmitHandler = function (event) {
    //stops page from refreshing
    event.preventDefault();
  
    var city = cityInputEl.value.trim();
  
    //gets value from the city input element and runs getCityWeather function
    if (city) {
      getCityWeather(city);
      cityHistory(city);
      //clear out old content
      cityInputEl.value = "";
    }
  };

  var getCityWeather = function (city) {

    var apiURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    //user's city input
    city +
    "&units=imperial" +
    //API Key
    "&appid=" +
    apiKey;
    console.log(apiURL);
    fetch(apiURL).then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          
          var lat = data.city.coord.lat;

          console.log(data.city.coord.let);

          var lon = data.city.coord.lon;

          console.log(data.city.coord.lon);

          //setting UVI URL
          var UVIURL =
          "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" +
          lat +
          "&lon=" +
          lon +
          "&appid=" +
          apiKey +
          "&cnt=1";
          fetch(UVIURL).then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                console.log(data);
                console.log(data[0].value);

                if (data[0].value > 7 && data[0].value < 11) {
                  UVI.className = "bg-danger text-white";
                  UVI.innerText = data[0].value;
  
                } else if (data[0].value > 2 && data[0].value < 7) {
                  UVI.className = "bg-warning text-white";
                  UVI.innerText = data[0].value;

                } else if (data[0].value > 0 && data[0].value < 2) {
                  UVI.className = "bg-success text-white";
                  UVI.innerText = data[0].value;
                }
              });
            } else {
              alert("Error -" + response.statusText);
            }
          });

          //create current weather elements
          var cityName = document.createElement("h2");
          var currentDate = document.getElementById("current-date");
          var weatherIcon = document.createElement("img");

          var icon = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;

          var currentTemperature = document.getElementById("current-temperature");
          var currentHumidity = document.getElementById("current-humidity");
          var currentWind = document.getElementById("current-wind");
          
          //set city name & date
          cityName.textContent = data.city.name;

          currentDate.innerText = data.list[0].dt_txt;

          weatherIcon.setAttribute("src", icon);

          cityCurrentWeatherEl.innerHTML = "";

          cityCurrentWeatherEl.prepend(cityName);
          cityCurrentWeatherEl.prepend(weatherIcon);
          cityCurrentWeatherEl.prepend(currentDate);

          currentTemperature.innerText = data.list[0].main.temp + "  °F";
          currentHumidity.innerText = data.list[0].main.humidity + " %";
          currentWind.innerText = data.list[0].wind.speed + " MPH";

          //day 0
          var day0Icon = document.createElement("img");

          var day0Date = document.getElementById("date0");

          var day0Url = `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`;

          var day0Temperature = document.getElementById("temperature-0");
          var day0Wind = document.getElementById("wind-0");
          var day0Humidity = document.getElementById("humidity-0");

          day0Date.innerText = data.list[4].dt_txt;

          //clear day 0
          day0.innerHTML = "";

          day0.prepend(day0Icon);

          day0Icon.setAttribute("src", day0Url);

          day0Temperature.innerText = data.list[4].main.temp + "  °F";
          day0Wind.innerText = data.list[4].wind.speed + " MPH";
          day0Humidity.innerText = data.list[4].main.humidity + " %";

          //day 1 
          var day1Icon = document.createElement("img");

          var day1Date = document.getElementById("date1");

          var day1Url = `https://openweathermap.org/img/w/${data.list[12].weather[0].icon}.png`;

          var day1Temperature = document.getElementById("temperature-1");
          var day1Wind = document.getElementById("wind-1");
          var day1Humidity = document.getElementById("humidity-1");

          day1Date.textContent = data.list[12].dt_txt;

          //clear day 1
          day1.innerHTML = "";

          day1.prepend(day1Icon);

          day1Icon.setAttribute("src", day1Url);
          day1Temperature.innerText = data.list[12].main.temp + "  °F";
          day1Wind.innerText = data.list[12].wind.speed + " MPH";
          day1Humidity.innerText = data.list[12].main.humidity + " %";

          // day 2
          var day2Icon = document.createElement("img");

          var day2Url = `https://openweathermap.org/img/w/${data.list[20].weather[0].icon}.png`;

          var day2Date = document.getElementById("date2");

          var day2Temperature = document.getElementById("temperature-2");
          var day2Wind = document.getElementById("wind-2");
          var day2Humidity = document.getElementById("humidity-2");

          day2Date.textContent = data.list[20].dt_txt;

          //clear day 2
          day2.innerHTML = "";
          day2.prepend(day2Icon);

          day2Icon.setAttribute("src", day2Url);
          day2Temperature.innerText = data.list[20].main.temp + "  °F";
          day2Wind.innerText = data.list[20].wind.speed + " MPH";
          day2Humidity.innerText = data.list[20].main.humidity + " %";

          //say 3
          var day3Icon = document.createElement("img");

          var day3Url = `https://openweathermap.org/img/w/${data.list[28].weather[0].icon}.png`;

          var day3Date = document.getElementById("date3");

          var day3Temperature = document.getElementById("temperature-3");
          var day3Wind = document.getElementById("wind-3");
          var day3Humidity = document.getElementById("humidity-3");

          day3Date.textContent = data.list[28].dt_txt;

          //clear day 3
          day3.innerHTML = "";

          day3.prepend(day3Icon);

          day3Icon.setAttribute("src", day3Url);
          day3Temperature.innerText = data.list[28].main.temp + "  °F";
          day3Wind.innerText = data.list[28].wind.speed + " MPH";
          day3Humidity.innerText = data.list[28].main.humidity + " %";

          //day 4
          var day4Icon = document.createElement("img");

          var day4Url = `https://openweathermap.org/img/w/${data.list[36].weather[0].icon}.png`;

          var day4Date = document.getElementById("date4");

          var day4Temperature = document.getElementById("temperature-4");
          var day4Wind = document.getElementById("wind-4");
          var day4Humidity = document.getElementById("humidity-4");

          day4Date.textContent = data.list[36].dt_txt;

          //clear day 4
          day4.innerHTML = "";

          day4.prepend(day4Icon);

          day4Icon.setAttribute("src", day4Url);

          day4Temperature.innerText = data.list[36].main.temp + "  °F";
          day4Wind.innerText = data.list[36].wind.speed + " MPH";
          day4Humidity.innerText = data.list[36].main.humidity + " %";

          //day 5

          var day5Icon = document.createElement("img");

          var day5Date = document.getElementById("date5");

          var day5Url = `https://openweathermap.org/img/w/${data.list[44].weather[0].icon}.png`;

          var day5Temperature = document.getElementById("temperature-5");
          var day5Wind = document.getElementById("wind-5");
          var day5Humidity = document.getElementById("humidity-5");

          day5Date.innerText = data.list[44].dt_txt;

          //clear day 5
          day5.innerHTML = "";
          day5.prepend(day5Icon);

          day5Icon.setAttribute("src", day5Url);

          day5Temperature.innerText = data.list[44].main.temp + "  °F";
          day5Wind.innerText = data.list[44].wind.speed + " MPH";
          day5Humitidy.innerText = data.list[44].main.humidity + " %";

          //day 6

          var day6Icon = document.createElement("img");

          var day6Date = document.getElementById("date6");

          var day6Url = `https://openweathermap.org/img/w/${data.list[52].weather[0].icon}.png`;

          var day6Temperature = document.getElementById("temperature-6");
          var day6Wind = document.getElementById("wind-6");
          var day6Humidity = document.getElementById("humidity-6");

          day6Date.textContent = data.list[52].dt_txt;

          //clear day 6
          day6.innerHTML = "";

          day6.prepend(day6Icon);

          day6Icon.setAttribute("src", day6Url);
          day6Temperature.innerText = data.list[52].main.temp + "  °F";
          day6Wind.innerText = data.list[52].wind.speed + " MPH";
          day6Humidity.innerText = data.list[52].main.humidity + " %";

          //day 7
          var day7Icon = document.createElement("img");

          var day7Url = `https://openweathermap.org/img/w/${data.list[60].weather[0].icon}.png`;

          var day7Date = document.getElementById("date7");

          var day7Temperature = document.getElementById("temperature-7");
          var day7Wind = document.getElementById("wind-7");
          var day7Humidity = document.getElementById("humidity-7");

          day7Date.textContent = data.list[60].dt_txt;

          //clear day 7
          day7.innerHTML = "";
          day7.prepend(day7Icon);

          day7Icon.setAttribute("src", day7Url);
          day7Temperature.innerText = data.list[60].main.temp + "  °F";
          day7Wind.innerText = data.list[60].wind.speed + " MPH";
          day7Humidity.innerText = data.list[60].main.humidity + " %";

          //day 8
          var day8Icon = document.createElement("img");

          var day8Url = `https://openweathermap.org/img/w/${data.list[68].weather[0].icon}.png`;

          var day8Date = document.getElementById("date8");

          var day8Temperature = document.getElementById("temperature-8");
          var day8Wind = document.getElementById("wind-8");
          var day8Humidity = document.getElementById("humidity-8");

          day8Date.textContent = data.list[68].dt_txt;

          //clear day 8
          day8.innerHTML = "";

          day8.prepend(day8Icon);

          day8Icon.setAttribute("src", day8Url);
          day8Temperature.innerText = data.list[68].main.temp + "  °F";
          day8Wind.innerText = data.list[68].wind.speed + " MPH";
          day8Humidity.innerText = data.list[68].main.humidity + " %";

          //day 9
          var day9Icon = document.createElement("img");

          var day9Url = `https://openweathermap.org/img/w/${data.list[76].weather[0].icon}.png`;

          var day9Date = document.getElementById("date9");

          var day9Temperature = document.getElementById("temperature-9");
          var day9Wind = document.getElementById("wind-9");
          var day9Humidity = document.getElementById("humidity-9");

          day9Date.textContent = data.list[76].dt_txt;

          //clear day 9
          day9.innerHTML = "";

          day9.prepend(day9Icon);

          day9Icon.setAttribute("src", day9Url);
          day9Temperature.innerText = data.list[76].main.day0Temp + "  °F";
          day9Wind.innerText = data.list[76].wind.speed + " MPH";
          day9Humidity.innerText = data.list[76].main.humidity + " %";
        });

            // Else statement if city does not return with ok response
            } else {
              alert("Error - City " + response.statusText);
            }
          });
        };
      var cityHistory = function (city) {

        var searchTerm = document.createElement("li");
      
        citySearchContainerEl.appendChild(searchTerm);
      
        searchTerm.innerHTML = `<button type= 'text-align-center' class='btn searchTerm'> ${city} </button>`;
      
        //use localStorage to collect the city term when a city is searched
        var searchHistory = {
          cityTerm: city,
        };
        citySearchHistory.push(searchHistory);
        localStorage.setItem("city", JSON.stringify(citySearchHistory));
      
        $(".searchTerm").on("click", function () {
          localStorage.getItem($(this).text());
      
          //set the city variable equal to the city information from the clicked button
          var city = $(this).text().trim();
      
          getCityWeather(city);
        });
      };
      
      //add event listeners
      userFormEl.addEventListener("submit", formSubmitHandler);