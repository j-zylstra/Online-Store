

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.form-box.login form');
    const registerForm = document.querySelector('.form-box.register form');
    const wrapper = document.querySelector('.wrapper');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        var emailInput = loginForm.querySelector('input[type="email"]');
        var passwordInput = loginForm.querySelector('input[type="password"]');
        var email = emailInput.value;
        var password = passwordInput.value;

        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
            
        });

        if (response.ok) {
            wrapper.classList.remove('active-popup');
            alert('Login Successful');
            emailInput.value = '';
            passwordInput.value = '';
            console.log('User is logged in');

            

        } else if (response.status === 400) {
            console.log('Login failed: wrong credentials');
        } else {
            console.log('Login failed: Unexpected error');
        }
    });



    
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        var nameVal = registerForm.querySelector('input[type="user"]');
        var emailVal = registerForm.querySelector('input[type="email"]');
        var passwordVal = registerForm.querySelector('input[type="password"]');
        var name = nameVal.value;
        var email = emailVal.value;
        var password = passwordVal.value;
       
        const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        if (response.ok) {
            wrapper.classList.remove('active-popup')
            alert('Registration Was Successful')
            nameVal.value = '';
            emailVal.value = '';
            passwordVal.value = '';
            console.log('User was registered successfully');
        } else {
            alert('That E-mail is already in use')
            console.log('Registration failed');
        }
    });
});

