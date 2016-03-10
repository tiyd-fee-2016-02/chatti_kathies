function translate(toTranslate){

// this page is the reference to this API: http://www.frengly.com/controller?action=forum#!/api

// here's what I want to do with this - run an English string through mutiple translators until eventually spitting out a multiple translated English string. Call the command "Telephone"

var telString;

$.ajax({
	url: 'http://www.frengly.com/',
	data: {
		src: 'en',
		dest: 'fr',
		text: toTranslate,
		outformat: 'json',
		email: 'smithjeremym@gmail.com',
		password: 'password'
	},
	success: function(data){
    // console.log("french version: " + data.translation);
    $(".chatList").append('<li class="botText frenchTrans"><div>'+data.translation+'</div></li>');
	},
	error: function (errormessage) {
		return "We couldn't translate that for you. Excusez-moi!";
	}
});

// $.ajax({
//   url: 'http://www.frengly.com/',
//   data: {
//     src: 'fr',
//     dest: 'de',
//     text: telString,
//     outformat: 'json',
//     email: 'smithjeremym@gmail.com',
//     password: 'password'
//   },
//   success: function(data){
//     console.log(data.translation);
//   },
//   error: function (errormessage) {
//     return "We couldn't translate that for you. Es tut uns Leid!";
//   }
// });

  // console.log(telString);

  // $.ajax({
	// 	url: 'http://www.frengly.com/',
	// 	data: {
	// 		src: 'fr',
	// 		dest: 'de',
	// 		text: telString,
	// 		outformat: 'json',
	// 		email: 'smithjeremym@gmail.com',
	// 		password: 'password'
	// 	},
	// 	success: function(data){
	// 		telString = data.translation;
	// 	},
	// 	error: function (errormessage) {
	// 		return "We couldn't translate that for you. Es tut uns Leid!";
	// 	}
	// });
  //
  // console.log(telString);
  //
  // $.ajax({
	// 	url: 'http://www.frengly.com/',
	// 	data: {
	// 		src: 'de',
	// 		dest: 'es',
	// 		text: telString,
	// 		outformat: 'json',
	// 		email: 'smithjeremym@gmail.com',
	// 		password: 'password'
	// 	},
	// 	success: function(data){
	// 		telString = data.translation;
	// 	},
	// 	error: function (errormessage) {
	// 		return "We couldn't translate that for you. Excusez-moi!";
	// 	}
	// });
  //
  // console.log(telString);
  //
  // $.ajax({
	// 	url: 'http://www.frengly.com/',
	// 	data: {
	// 		src: 'es',
	// 		dest: 'zhCN',
	// 		text: telString,
	// 		outformat: 'json',
	// 		email: 'smithjeremym@gmail.com',
	// 		password: 'password'
	// 	},
	// 	success: function(data){
	// 		telString = data.translation;
	// 	},
	// 	error: function (errormessage) {
	// 		return "We couldn't translate that for you. Es tut uns Leid!";
	// 	}
	// });
  //
  // console.log(telString);
  //
  // $.ajax({
	// 	url: 'http://www.frengly.com/',
	// 	data: {
	// 		src: 'zhCN',
	// 		dest: 'hu',
	// 		text: telString,
	// 		outformat: 'json',
	// 		email: 'smithjeremym@gmail.com',
	// 		password: 'password'
	// 	},
	// 	success: function(data){
	// 		telString = data.translation;
	// 	},
	// 	error: function (errormessage) {
	// 		return "We couldn't translate that for you. Excusez-moi!";
	// 	}
	// });
  //
  // console.log(telString);
  //
  // $.ajax({
	// 	url: 'http://www.frengly.com/',
	// 	data: {
	// 		src: 'hu',
	// 		dest: 'ru',
	// 		text: telString,
	// 		outformat: 'json',
	// 		email: 'smithjeremym@gmail.com',
	// 		password: 'password'
	// 	},
	// 	success: function(data){
	// 		telString = data.translation;
	// 	},
	// 	error: function (errormessage) {
	// 		return "We couldn't translate that for you. Es tut uns Leid!";
	// 	}
	// });
  //
  // console.log(telString);
  //
  // $.ajax({
	// 	url: 'http://www.frengly.com/',
	// 	data: {
	// 		src: 'ru',
	// 		dest: 'en',
	// 		text: telString,
	// 		outformat: 'json',
	// 		email: 'smithjeremym@gmail.com',
	// 		password: 'password'
	// 	},
	// 	success: function(data){
	// 		telString = data.translation;
	// 	},
	// 	error: function (errormessage) {
	// 		return "We couldn't translate that for you. Sorry!";
	// 	}
	// });
  //
  // return telString;

};
