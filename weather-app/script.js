var displayCity = document.getElementById("city");
var displaySummary = document.getElementById("summary");
var displayTemp = document.getElementById("temperature");
var getIcon = document.getElementById("icon");

var darkSkyUrl = "https://crossorigin.me/https://api.darksky.net/forecast/2d03b5a1b5e4d149de71c3ef13b3e80d/";
var city, latitude, longitude;
var summary, temp, icon;
var celsius;
var displayCelsius = document.getElementById("celsius");


function whereAreYou() {
  var getCoordinates = new XMLHttpRequest();
  getCoordinates.open("GET", "http://ip-api.com/json/", false);
  getCoordinates.send(null);

  var r = JSON.parse(getCoordinates.response);
  city = r.city;
  latitude = r.lat;
  longitude = r.lon;
  darkSkyUrl += latitude + "," + longitude
  displayCity.innerHTML = city;
}

function getWeather() {
  var weather = new XMLHttpRequest();
  weather.open("GET", darkSkyUrl, false);
  weather.send(null);

  var q = JSON.parse(weather.response);
  summary = q.currently.summary;
  temp = q.currently.temperature;
  icon = q.currently.icon;
  displaySummary.innerHTML = summary;
  displayTemp.innerHTML = Math.floor(temp) + "&#8457;" ;
  getIcon.innerHTML = '<canvas id="' + icon + '" width="200" height="200"></canvas>';
}

whereAreYou();
getWeather();

var icons = new Skycons({"color": "#A5DEF1"});

icons.set("clear-day", Skycons.CLEAR_DAY);
icons.set("clear-night", Skycons.CLEAR_NIGHT);
icons.set("partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
icons.set("partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
icons.set("cloudy", Skycons.CLOUDY);
icons.set("rain", Skycons.RAIN);
icons.set("sleet", Skycons.SLEET);
icons.set("snow", Skycons.SNOW);
icons.set("wind", Skycons.WIND);
icons.set("fog", Skycons.FOG);

icons.play();

function getCelsius() {
  var celsius = new XMLHttpRequest();
  celsius.open("GET", darkSkyUrl + "?units=si", false);
  celsius.send(null);

  var z = JSON.parse(celsius.response);
  celsius = z.currently.temperature;
  displayCelsius.innerHTML = Math.floor(celsius) + "&#8451;";
}

getCelsius();

$('#celsius').hide();

$('#toggle-button').on(
  'click',
  function()
  {
    $('#temperature, #celsius').toggle()
  }
);
