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
              this.inputMsgs.push({ text: getJokes() });
              this.newChatMsg = '';
            break;
            case ("@piglatin"):
              this.inputMsgs.push({ text: pigLatein(textArray[1]) });
              this.newChatMsg = '';
            break;
            default:
              this.inputMsgs.push({ text: getJokes() })
              this.newChatMsg = ''
          }
        }
      }
      //other methods will call our functions contained in separate files, like getJokes()
    }
  })

});  // End of file.
