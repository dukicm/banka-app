var signIn = document.getElementById('btn4');


//dodaj event listener klik i uradi sledece:
//ako nista nije upisano u formu onda prikazi da nije popunjeno sta treba,
//a ako jesu popunjeni onda ih uporedi i vidi da li odredjen korisnik ima pristup.
signIn.addEventListener('click', function(){
 	//var user = document.querySelectorAll('input[type=text]').value; ovde je bio problem!
	// var pass = document.querySelectorAll('input[type=password]').value;

	var user = document.getElementById('u').value;
	var pass = document.getElementById('p').value;

	if ((user.length < 1) && (pass.length < 1)) {
		alert("Nista popunili podatke!");
	}
	else{
		checkForm(user, pass);
	}
});


//Funckija kojom definisem:
//1.moje podatke za pristup
//2.poredim svoje podatke za pristup sa podacima korisnika
//3.uklanjam formu i dugme kada su podaci tacni.
function checkForm (user, pass) {
	var forma = document.getElementById('f');
	var userName = "Milan";
	var password = "123";   

	if ((userName === user) && (password === pass)) {
	   	forma.style.display="none";
	   	signIn.style.display="none";
	}
	else{
		alert("Pogrešno korisničko ime ili lozinka! Pokušajte ponovo.")
	}
}
