var database = [
	{
		userName: "kutlu",
		password: "123"
	},
	{	userName: "mirna",
		password: "123"
	},
	{
		userName:"yasmin",
		password:"123"
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

var userNameSor = prompt("Adiniz nedir?");
var sifreSor = prompt("Sifreniz nedir?");

userOK=false;
function usercheck(k,j) {
for (var i=0; i<database.length; i++) {
	if (database[i].userName===k && database[i].password===j ) {
	 	userOK = true;
	 	} 
}
}

usercheck(userNameSor,sifreSor);


if (userOK===true ) {
	alert("Giris basarili!");
		var kim = prompt("hosgeldin, kimi merak ettin?");
			if (kim === "Ersan") {
		document.getElementById("kimdemis").innerHTML = "Arkadaşınız  " + newsfeed[0].username;
		document.getElementById("nedemis").innerHTML = newsfeed[0].timeline + "  demiş";
		} else if (kim === "Omer") {
		document.getElementById("kimdemis").innerHTML = "Arkadaşınız  " + newsfeed[1].username;
		document.getElementById("nedemis").innerHTML = newsfeed[1].timeline + "  demiş";
		} else if (kim === "Mirkelam") {
		document.getElementById("kimdemis").innerHTML = "Arkadaşınız  " + newsfeed[2].username;
		document.getElementById("nedemis").innerHTML = newsfeed[2].timeline + "  demiş";
		} else {
			document.getElementById("hic").innerHTML = "Böyle bir arkadaşınız yok!!!";
		}


	} else { alert("Adiniz yada sifreniz hatali!");}

	

