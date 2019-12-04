var database = [
	{
		userName: "kutlu",
		password: "123"
	}
];

var newsfeed = [
	{
		username: "Ersan",
		timeline: "Yoruldum bea!"
	},
	{
		username: "Omer",
		timeline: "Tas yok mu tas?"
	},
	{
		username: "Mirkelam",
		timeline: "Hava super"
	}
];

var userNameSor = prompt("adınnız nedir?");
var sifreSor = prompt("sifreniz nedir?");

function sifreDogrulama(a,b) {
	if (a===database[0].userName && b===database[0].password ){
		var kim = prompt("hosgeldin, kimi merak ettin?");
			if (kim === "Ersan") {
		document.getElementById("kimdemis").innerHTML = newsfeed[0].username;
		document.getElementById("nedemis").innerHTML = newsfeed[0].timeline;
		} else if (kim === "Omer") {
		document.getElementById("kimdemis").innerHTML = newsfeed[1].username;
		document.getElementById("nedemis").innerHTML = newsfeed[1].timeline;
		} else {
		document.getElementById("kimdemis").innerHTML = newsfeed[2].username;
		document.getElementById("nedemis").innerHTML = newsfeed[2].timeline;
		}


	} else { alert("tekrar deneyin");}
}

sifreDogrulama(userNameSor,sifreSor);