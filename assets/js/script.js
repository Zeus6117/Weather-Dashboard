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

//future weather variable
var day1 = document.getElementById("weather0");

var day2 = document.getElementById("weather1");

var day3 = document.getElementById("weather2");

var day4 = document.getElementById("weather3");

var day5 = document.getElementById("weather4");

var day6 = document.getElementById("weather5");

var day7 = document.getElementById("weather6");

var day8 = document.getElementById("weather7");

var day9 = document.getElementById("weather8");

var day10 = document.getElementById("weather9");

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

  fetch(UVQueryURL).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        console.log(data[0].value);

        // Conditional if value is greater than 7 and less than 11
        if (data[0].value > 7 && data[0].value < 11) {
          UVI.className = "bg-danger text-white rounded py-2 px-2";
          UVI.innerText = data[0].value;

          // Conditional if value is greater than 2 and less than 7
        } else if (data[0].value > 2 && data[0].value < 7) {
          UVI.className = "bg-warning text-white rounded py-2 px-2";
          UVI.innerText = data[0].value;
          // Conditional if value is greater than 0 and less than 2
        } else if (data[0].value > 0 && data[0].value < 2) {
          UVI.className = "bg-success text-white rounded py-2 px-2";
          UVI.innerText = data[0].value;
        }
      });
    } else {
      alert("Error -" + response.statusText);
    }
  });