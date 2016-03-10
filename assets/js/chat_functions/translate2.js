function translate2(toTranslate){

// this page is the reference to this API: http://www.frengly.com/controller?action=forum#!/api

// here's what I want to do with this - run an English string through mutiple translators until eventually spitting out a multiple translated English string. Call the command "Telephone"
// console.log("toTranslate is " + toTranslate);
var newString = toTranslate;

$.ajax({
	url: 'http://www.frengly.com/',
	data: {
		src: 'fr',
		dest: 'de',
		text: newString,
		outformat: 'json',
		email: 'smithjeremym@gmail.com',
		password: 'password'
	},
	success: function(data){
    // console.log("german version: "+ data.translation);    // console.log(data.translation);
    // telString = data.translation;
    $(".chatList").append('<li class="botText germanTrans"><div>'+data.translation+'</div></li>');
	},
	error: function (errormessage) {
		return "We couldn't translate that for you. Es tut uns Leid!";
	}
});

};
