$(function () {
  'use strict';

console.log(getJokes());

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
            case ("@jokes"):
              this.inputMsgs.push({ text: "You asked for a joke!" }, { text: getJokes() });
              this.newChatMsg = '';
            break;
            case ("@piglatin"):
              textArray.shift();
              console.log(textArray);
              this.inputMsgs.push({ text: "Okay. Erehay isyay omesay Igpay Atinlay" }, { text: pigLatein(textArray.join(" ")) });
              this.newChatMsg = '';
            break;
            default:
              this.inputMsgs.push({ text: text });
              this.newChatMsg = '';
          }
        }
      }
      //other methods will call our functions contained in separate files, like getJokes()
    }
  })

});  // End of file.
