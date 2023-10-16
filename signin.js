

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.form-box.login form');
    const registerForm = document.querySelector('.form-box.register form');
    const wrapper = document.querySelector('.wrapper');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = loginForm.querySelector('input[type="email"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            wrapper.classList.remove('active-popup')
            alert('Login Successful') 
        } else {
            console.log('Login failed');
        }
    });

    
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = registerForm.querySelector('input[type="user"]').value;
        const email = registerForm.querySelector('input[type="email"]').value;
        const password = registerForm.querySelector('input[type="password"]').value;

       
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
        } else {
            
            console.log('Registration failed');
        }
    });
});
