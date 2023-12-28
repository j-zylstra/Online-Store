

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
        var bottomMenu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];
       

        const response = await fetch('https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
            
        });

        if (response.ok) {
            const responseText = await response.text()
            wrapper.classList.remove('active-popup');
            alert('Login Successful');
            emailInput.value = '';
            passwordInput.value = '';
            const responseBody = JSON.parse(responseText);
            const userId = responseBody.userId;
            const userName = responseBody.name;
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('userName', userName);
            bottomMenu.style.left = '0';
            console.log('User', userName, 'with the ID of:', userId, 'is logged in');
            

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
        var bottomMenu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];
       
        const response = await fetch('https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/register', {
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
            bottomMenu.style.left = '0';
            console.log('User was registered successfully');
            
        } else {
            alert('That E-mail is already in use')
            console.log('Registration failed');
        }
    });
});


