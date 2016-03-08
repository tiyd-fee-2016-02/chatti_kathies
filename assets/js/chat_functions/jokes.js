function getJokes() {



  var str = "Yes!!!";

// Working API URLs
  // var myUrl = "http://api.github.com/users/octocat";
  // var myUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?" +
  //               "id=4464368" +    // Durham, NC, US
  //               "&cnt=1" +        // 1 record from 5 Day, 3 Hour Forecast
  //               "&APPID=82f61d5df7730f4b96d58ed8e8aa6b63";

// Broken API URLs
  var myUrl = "http://tambal.azurewebsites.net/joke/random";
// var myUrl = "https://getpuns.herokuapp.com/api/random";

  // $.ajax({
  //     beforeSend: function(request) {
  //         // request.setRequestHeader("Access-Control-Allow-Origin", "*");
  //         request.setRequestHeader("Accept", "application/json");
  //     },
  //     //jeremy's public IP address: 172.56.4.224
  //     // header: "Access-Control-Allow-Origin: http://localhost:9000",
  //     // Access-Control-Allow-Origin: http://localhost:3000
  //     crossDomain: true,
  //     dataType: "json",
  //     url: myUrl,
  //     success: function(data) {
  //         //Your code
  //     console.log(data);
  //     }
  // });

  // $.getJSON((url), function (data) {

    // console.log(data.joke);
    // console.log(data);

  // });   end JSON call

  return str;

}

// curl --get --include 'http://tambal.azurewebsites.net/joke/random' \
//   -H 'Accept: application/json'
