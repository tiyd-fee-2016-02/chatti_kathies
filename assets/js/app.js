$(function () {
  'use strict';

  $('#chatField').on("keypress", function (e) {
    if(event.which === 13) {
      var textArray = this.value.split(" ");
      // console.log(textArray);
      if (textArray) {
        switch (textArray[0]) {
          case ("@joke"):
            $(".chatList").append('<li class="botText"><div>You asked for a joke!</div></li>');
            getJokes();
            this.value = '';
          break;
          case ("@piglatin"):
            textArray.shift();
            console.log(textArray);
            $(".chatList").append('<li class="userText"><div>'+textArray.join(" ")+'</div></li>');
            $(".chatList").append('<li class="botText"><div>Okay. Erehay isyay omesay Igpay Atinlay</div></li>');
            pigLatein(textArray.join(" "));
            this.value = '';
          break;
          case("@telephone"):
            textArray.shift();
            $(".chatList").append('<li class="botText"><div>Time to play Telephone. You typed in "'+textArray.join(" ")+'"</div></li>');
            this.value = '';
            break;
          case ("@weather"):
            textArray.shift();
            // console.log(textArray);
            if (textArray !== undefined && textArray.join(" ").length > 5) {
              $(".chatList").append('<li class="botText"><div>You asked for the weather!</div></li>');
              getWeather(textArray.join(" "));
              this.value = '';
              break;
            }
          default:
            $(".chatList").append('<li class="userText"><div>'+textArray.join(" ")+'</div></li>');
            $(".chatList").append("<li class='botText'><div>What?!?  I don't understand!</div></li>");
            this.value = '';
        }
        $('.chatBox').scrollTop($('.chatBox')[0].scrollHeight);
      }
    }
  })
});  // End of file.
