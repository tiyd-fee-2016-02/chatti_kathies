function translate(toTranslate){

// this page is the reference to this API: http://www.frengly.com/controller?action=forum#!/api

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
			return data.translation;
		},
		error: function (errormessage) {
			return "We couldn't translate that for you. Es tut uns Leid!"
		}
	});

});
