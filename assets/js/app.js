$(function () {
  'use strict';

// console.log(getJokes());

// var jokeText = "";

  new Vue({
    el: '.chatBox',
    data: {
      newChatMsg: '',
      inputMsgs: [
        // { text: 'Add some text' }
      ]
    },
    methods: {
      processMsg: function () {
        var text = this.newChatMsg.trim();
        var textArray = text.split(" ");
        if (textArray) {
          switch (textArray[0]) {
            case ("@joke"):
              this.inputMsgs.push({ text: "You asked for a joke!" });
              this.newChatMsg = '';
              getJokes();
            break;
            case ("@piglatin"):
              textArray.shift();
              console.log(textArray);
              this.inputMsgs.push({ text: "Okay. Erehay isyay omesay Igpay Atinlay" }, { text: pigLatein(textArray.join(" ")) });
              this.newChatMsg = '';
            break;
            case ("@weather"):
              this.inputMsgs.push({ text: "You asked for the weather!" });
              this.newChatMsg = '';
              getWeather();
            break;
            default:
              this.inputMsgs.push({ text: "Try again!  I don't understand." });
              this.newChatMsg = '';
          }
        }
      }
      //other methods will call our functions contained in separate files, like getJokes()
    }
  })

});  // End of file.



// $(function () {
//   'use strict';
//
// $("ul").append("<li>"+$(getWeather())+"</li>");
//
//   new Vue({
//     el: '.chatBox',
//     data: {
//       newChatMsg: '',
//       inputMsgs: [
//         // { text: 'Add some text' }
//       ]
//     },
//     methods: {
//       processMsg: function () {
//         var text = this.newChatMsg.trim()
//         var textArray = text.split(" ")
//         if (textArray.length === 0) {
//           textArray[0] = text
//         }
//         if (textArray) {
//           // switch (textArray[0]) {
//             // case ("@joke"):
//               // console.log("switch")
//               console.log(getWeather())
//               this.inputMsgs.push({ text: getWeather() })
//               this.newChatMsg = ''
//             // break
//             // case ("@piglatin"):
//             //   this.inputMsgs.push({ text: pigLatein(textArray[1]) })
//             //   this.newChatMsg = ''
//             // break
//             // case ("@weather"):
//             //   console.log(getWeather());
//             //   this.inputMsgs.push({ text: getWeather() })
//             //   this.newChatMsg = ''
//             // break
//             // default:
//             //   this.inputMsgs.push({ text: 'What do you mean?' })
//             //   this.newChatMsg = ''
//           // }
//         }
//       }
//       //other methods will call our functions contained in separate files, like getJokes()
//     }
//   })
//
// });  // End of file.
