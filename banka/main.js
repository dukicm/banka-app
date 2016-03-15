(function () {
	
var signIn = document.getElementById('btn4');
var forma = document.getElementsByTagName('form');
var user = document.querySelectorAll('input[type=text]').val; // ovo izgleda ne radi
var pass = document.querySelectorAll('input[type=password]').val; // ovo izgleda ne radi

signIn.addEventListener('click', validacija);



function validacija(){
	if ((user.length < 1) && (pass.length < 1)) {
		alert("Molimo Vas da popunite formu!")
	}
}


function checkForm () {
	var userName = "Milan";
	var passsword = "123";   

	   // if ((userName === arg1) && (password === arg2)) {
	   		
	   // };
}


 checkForm();


})()

