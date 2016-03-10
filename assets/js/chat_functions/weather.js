function getWeather(str) {

  var htmlStr = "";
  var windStr = "";
  var apiURL = "";
  var cityStr = "";
  var locationStr = "";
  var errorMsg = "What?!?  I don't understand!";

  if (str !== undefined && str.length > 5 && str.indexOf(", ") >= 0) {

    cityStr = str.split(", ")[0].replace(" ","_");
    locationStr = str.split(", ")[1].toUpperCase();
    apiURL += "http://api.wunderground.com/api/bb07f40ea899d427/conditions/q/" +
              locationStr +  "/" + cityStr + ".json";

    console.log(apiURL);

    $.getJSON(apiURL, function (value) {
      // console.log(value);
      // console.log(value.response.error);
      if (value.response.error !== undefined) {
        $(".chatList").append('<li class="userText"><div>' + str + '</div></li>');
        $(".chatList").append("<li class='botText'><div>" + errorMsg + "</div></li>");
        $(".chatField").value = '';
        console.log("ERROR => getWeather() => " + value.response.error.type);
      } else {
        htmlStr +=
          "    <li class='botText'>\n      <div>" +
          "Right now in " + value.current_observation.display_location.full + "...<br>" +
          "The current temperature is " + value.current_observation.temperature_string +
          " and conditions are " + value.current_observation.weather;
        windStr += value.current_observation.wind_string
        if ( windStr !== "NA" && windStr.length > 0 ) {
          htmlStr += " with winds " + windStr.charAt(0).toLowerCase() + windStr.slice(1);
        }
        htmlStr += "</div>\n    </li>"
      }
      console.log(htmlStr);
      $(".chatList").append(htmlStr);
    });   // end JSON
  } else {
    htmlStr += "    <li class='botText'>\n      <div>" + errorMsg + "</div>\n    </li>";
  }
  $(".chatList").append(htmlStr);
}
