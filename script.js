document.addEventListener("DOMContentLoaded", function() {
    
    const bassElement = document.getElementById("bass");

    bassElement.addEventListener("click", function() {
        
        window.location.href = "/bass.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const classicsElement = document.getElementById("classics");

    classicsElement.addEventListener("click", function() {
        
        window.location.href = "/classics.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const newestElement = document.getElementById("newest");

    newestElement.addEventListener("click", function() {
        
        window.location.href = "/newest.html";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    
    const cartElement = document.getElementById("cart-link");

    cartElement.addEventListener("click", function() {
        
        window.location.href = "cart.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const homeElement = document.getElementById("home");

    homeElement.addEventListener("click", function() {
        
        window.location.href = "index.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    
    const accessElement = document.getElementById("access");

    accessElement.addEventListener("click", function() {
        
        window.location.href = "accessories.html";
    });
});





const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

btnClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})

function subscribe() {
    const emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
        alert("A confirmation email has been sent to " + emailInput + ". You are now subscribed to the mailing list.");
    } else {
        alert("Please enter a valid email address.");
    }
}

