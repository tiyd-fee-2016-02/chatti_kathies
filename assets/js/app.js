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
        var text = this.newChatMsg.trim()
        if (text) {
          this.inputMsgs.push({ text: text })
          this.newChatMsg = ''
        }
      }
    }
  })

});  // End of file.
