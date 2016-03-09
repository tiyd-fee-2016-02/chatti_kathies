function getWeather() {

  var weatherText = "";

  var apiURL = "http://api.openweathermap.org/data/2.5/forecast/daily?" +
                  "id=4464368" +    // Durham, NC, US
                  "&cnt=1" +        // 1 record from 5 Day, 3 Hour Forecast
                  "&APPID=82f61d5df7730f4b96d58ed8e8aa6b63";

  $.getJSON((apiURL), function (value) {

    console.log(apiURL);
    console.log(value);

    var myUserTemp = _.template("<%- m.name %> "
                              + "<%- m.date %> "
                              + "<%- m.count %> "
                              + "<%- m.dayTemp %> "
                              + "<%- m.minTemp %> "
                              + "<%- m.maxTemp %> "
                              + "<%- m.pressure %> "
                              + "<%- m.humity %> "
                              + "<%- m.weatherType %> "
                              + "<%- m.weatherDesc %> ", {variable: "m"});

    // console.log(myUserTemp({ name: value.city.name }));
    // console.log(myUserTemp({ name: value.list[0].dt }));
    // console.log(myUserTemp({ name: value.cnt }));
    // console.log(myUserTemp({ name: value.list[0].temp.min }));
    // console.log(myUserTemp({ name: value.list[0].temp.max }));
    // console.log(myUserTemp({ name: value.list[0].temp.day }));
    // console.log(myUserTemp({ name: value.list[0].pressure }));
    // console.log(myUserTemp({ name: value.list[0].humidity }));
    // console.log(myUserTemp({ name: value.list[0].weather[0].main }));
    // console.log(myUserTemp({ name: value.list[0].weather[0].description }));

    // var minTemp = myUserTemp({ name: value.list[0].temp.min});
    // $(".minTemp").html(parseInt(minTemp.split(".")[1], 10) + "&deg;F");
    // var maxTemp = myUserTemp({ name: value.list[0].temp.max});
    // $(".maxTemp").html(parseInt(maxTemp.split(".")[1], 10) + "&deg;F");
    var dayTemp = myUserTemp({ name: value.list[0].temp.day});
    // $(".dayTemp").html(parseInt(dayTemp.split(".")[1], 10) + "&deg;F");
    // var pressure = myUserTemp({ name: value.list[0].pressure});
    // $(".pressure").html(pressure.split(".")[1]+ "hPa");
    // $(".humidity").html(myUserTemp({ name: value.list[0].humidity}) + "%");
    // $(".weatherType").html(myUserTemp({ name: value.list[0].weather[0].main}));
    // $(".weatherDesc").html(myUserTemp({ name: value.list[0].weather[0].description}));

    weatherText = parseInt(dayTemp.split(".")[1], 10) + "&deg;F";
    console.log(weatherText);

    var htmlStr =
      "    <li>" +
      "      <div>The current temperature is " + weatherText + ".</div>" +
      "    </li>";

      $(".chatBox ul").append(htmlStr);

    // return weatherText;
  });   // end JSON
}
