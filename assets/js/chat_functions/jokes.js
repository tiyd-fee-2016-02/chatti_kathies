function getJokes() {

  var myUrl = "http://api.icndb.com/jokes/random";

  $.getJSON(myUrl, function(data) {
    // console.log("data => " + data);
    console.log("data.value.joke => " + data.value.joke);
    var htmlStr =
    "    <li class='botText'>" +
    "      <div>" + data.value.joke + "</div>" +
    "    </li>";
    $(".chatList").append(htmlStr);
  });
}

//------------------------------------------------------------------------------
//  Please do not remove the following code examples
//------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------
//  Command line trouble shooting
//------------------------------------------------------------------------------
// curl --get --include 'http://tambal.azurewebsites.net/joke/random' \
//   -H 'Accept: application/json'
