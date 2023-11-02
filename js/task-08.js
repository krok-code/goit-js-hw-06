const loginform = document.querySelector(".login-form");

loginform.addEventListener("submit", function (event) {
	event.preventDefault();

	const emailInput = loginform.elements.email;
	const passwordInput = loginform.elements.password;

	if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
		alert("Усі поля повинні бути заповнені!");
	} else {
		const formData = {
			email: emailInput.value,
			password: passwordInput.value,
		};

		console.log(formData);

		loginform.reset();
	}
});