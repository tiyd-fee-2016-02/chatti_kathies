$(function () {
  'use strict';

  $('#chatField').on("keypress", function (e) {
    if(event.which === 13) {
      var textArray = this.value.split(" ");
      // console.log(textArray);
      if (textArray) {
        switch (textArray[0]) {
          case ("@joke"):
            $(".chatList").append('<li class="userText"><div>'+textArray.join(" ")+'</div></li>');
            $(".chatList").append('<li class="botText"><div>Okay. You asked for a joke!</div></li>');
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
            translate(textArray.join(" "));
            setTimeout(function() {
              var frenchText = $(".frenchTrans").text();
              setTimeout(function() {
                translate2(frenchText);
                setTimeout(function() {
                  var germanText = $(".germanTrans").text();
                  setTimeout(function(){
                    translate3(germanText);
                    setTimeout(function(){
                      var hungryText = $(".hungryTrans").text();
                      setTimeout(function(){
                        translate4(hungryText);
                      }, 3000);
                    }, 5000);
                  }, 3000);
                }, 5000);
              }, 3000);
            }, 5000);
            this.value = '';
            break;
          case ("@weather"):
            // console.log(textArray);
            if (textArray !== undefined && textArray.join(" ").length > 5) {
              $(".chatList").append('<li class="userText"><div>'+textArray.join(" ")+'</div></li>');
              $(".chatList").append('<li class="botText"><div>Okay. You asked for the weather!</div></li>');
              textArray.shift();
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
