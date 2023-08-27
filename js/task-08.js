const formLogin = document.querySelector('.login-form');

// console.dir(formLogin);

function onFormSubmitHandler(event) {
    event.preventDefault();

    const loginValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;

    if (loginValue === "" || passwordValue === "") {
        return alert('All form fields must be filled!')
    };

    const result = {
       email: loginValue,
        password: passwordValue,
    };

    console.log(result);

    event.currentTarget.reset();
};

formLogin.addEventListener('submit', onFormSubmitHandler);
