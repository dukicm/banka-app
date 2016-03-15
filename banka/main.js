var signIn = document.getElementById('btn4');

signIn.addEventListener('click', function(){
    var user = document.querySelectorAll('input[type=text]').value;
    var pass = document.querySelectorAll('input[type=password]').value;

	if ((user.length < 1) && (pass.length < 1)) {
		alert("Molimo Vas da popunite formu!");
	}else{
		checkForm(user, pass);
	}
});


function checkForm (user, pass) {
	var forma = document.getElementsByTagName('form');

	var userName = "Milan";
	var passsword = "123";   

	if ((userName === arg1) && (password === arg2)) {
	   	forma.style.display="none";
	}
}
