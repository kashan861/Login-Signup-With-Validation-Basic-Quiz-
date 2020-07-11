const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const gender = document.getElementById("gender");


var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

form.addEventListener("submit", (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const genderValue = gender;
	
	

	if (usernameValue === "" || usernameValue.length <= 3 ) {
		setErrorFor(username, "Username should not be blank and greater than 3 ");
    }
    else{
		setSuccessFor(username);
	}

	if (emailValue === "") {
		setErrorFor(email, "Email cannot be blank");
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, "Not a valid email");
	} else {
		setSuccessFor(email);
	}

	if (passwordValue === "" || passwordValue.length < 6) {
		setErrorFor(password, "Password cannot be blank or greater than 6");
	}else if(!regularExpression.test(passwordValue)){
		
		setErrorFor(password, "It should be combination of alphabets , number and special character");

	}
	 else {
		setSuccessFor(password);
	}

	if (password2Value === "") {
		setErrorFor(password2, "Password2 cannot be blank");
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, "Passwords does not match");
	} else {
		setSuccessFor(password2);
	}	
	
	if (genderValue.checked == false){

		setErrorFor(genderValue, "Any of the radio should be checked");
		
	} else {

		setSuccessFor(gender);
		
	}
	
}

	function setErrorFor(input, message) {
		var formControl = input.parentElement;
		var small = formControl.querySelector("small");
		formControl.className = "form-control error";
		small.innerText = message;
	}

	function setSuccessFor(input) {
		var formControl = input.parentElement;
		formControl.className = "form-control success";
	}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		email
	);
}

function store(){

	localStorage.setItem('username', username.value);
	localStorage.setItem('email', email.value);
	localStorage.setItem('password', password.value);
	localStorage.setItem('password2', password2.value);
	localStorage.setItem('gender', gender.value);
}

function check(){

	//store data from registration
	var storeUserName = localStorage.getItem('usernaem');
	var storeEmail = localStorage.getItem('email');
	var storePassword = localStorage.getItem('password');
	var storePassword2 = localStorage.getItem('password2');
	var storegender = localStorage.getItem('gender');

	//enter data from login
	var userEmail = document.getElementById('loginEmail');
	var userPass = document.getElementById('loginPassword');


	if (userEmail.value !== storeEmail || userPass.value !== storePassword) {
		window.alert('Your email and password are incorrect');	
	}else{
		window.alert('you are  login');
		
	}

}
function quizapp(){
window.location.replace("index.html")
}
