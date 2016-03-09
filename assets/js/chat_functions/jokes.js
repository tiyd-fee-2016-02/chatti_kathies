function getJokes(str) {

    // var jokeText = "xyz";
    // jokeText = "xyz";

    var myUrl = "http://api.icndb.com/jokes/random";

    $.getJSON(myUrl, getInfo);

    function getInfo(data) {
      // console.log("data => " + data);
      console.log("data.value.joke => " + data.value.joke);
      // jokeText = data.value.joke;
      // console.log("jokeText => " + jokeText);
      // return jokeText = data.value.joke;

      var htmlStr =
        "    <li>" +
        "      <div>" + data.value.joke + "</div>" +
        "    </li>";

      $(".chatList").append(htmlStr);
    }
    // console.log("jokeText => " + jokeText);
    // return jokeText;
}


//   $.ajax({
//       url: myUrl,
//       crossDomain: true,
//       dataType: "json",
//       success: function(data) {
//         console.log(data.value.joke);
//         jokeText = data.value.joke;
//         console.log(jokeText);
//         return jokeText;
//       },
//       error: function(errormessage) {
//         return "I can not think of joke right now...";
//       }
//   });
//   console.log(jokeText);
//   return jokeText;
// }

//try number 1
// $.ajax({
//     beforeSend: function(request) {
//         request.setRequestHeader("Access-Control-Allow-Origin", "*");
//         request.setRequestHeader("Origin", "");
//         request.setRequestHeader("Accept", "application/json");
//     },
//     crossDomain: true,
//     dataType: "json",
//     url: myUrl,
//     success: function(data) {
//         //Your code
//     console.log(data);
//     }
// });

// try number 2
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


// curl --get --include 'http://tambal.azurewebsites.net/joke/random' \
//   -H 'Accept: application/json'
