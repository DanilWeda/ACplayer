// Регулярный значения для проверки данних
let regLogin = /^(?=.*[A-Za-z])(?=.*)[A-Za-z]{5,}$/;
let regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


// Эллементы с которыми работаем
let inputLogin = document.querySelector('.login');
let inputEmail = document.querySelector('.email');
let inputPassword = document.querySelector('.password');
let btn = document.querySelector('.reg')
let errorLogin = document.querySelector('.error-login')
let errorEmail = document.querySelector('.error-email')
let errorPass = document.querySelector('.error-pass')
let readyForm = document.querySelector('.ready-form')

// Финальная проверка
let readyLogin;
let readyEmail;
let readyPass;

// Кнопка 
btn.addEventListener('click', (e) => {
	e.preventDefault();
	if (validete(regLogin,inputLogin)) {
		errorLogin.classList.add('visible');
		errorLogin.innerHTML = 'Логин должен содержать 5 и более латинских букв';
	} else {
		errorLogin.classList.remove('visible');
		readyLogin = true;
	}
	if (validete(regEmail,inputEmail)) {
		errorEmail.classList.add('visible');
		errorEmail.innerHTML = `Введите корректный e-mail`;
	} else {
		errorEmail.classList.remove('visible');
		readyEmail = true;
	}
	if (validete(regPass,inputPassword)) {
		errorPass.classList.add('visible');
		errorPass.innerHTML = `Пароль должен содержать 8 символов, большую букву и цифру`;
	} else {
		errorPass.classList.remove('visible');
		readyPass = true;
	}
	if ( readyLogin && readyPass && regEmail ) {
		readyForm.classList.add('visible')
		readyForm.innerHTML = `Спасибо за регестрацию!`
	}
})

function validete(regex,inp) {
	return !regex.test(inp.value);
}



