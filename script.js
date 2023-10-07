const cartElement = document.querySelector(".cart-items");
const productsElement = document.querySelector('.products');
const subtotalElement = document.querySelector(".subtotal");
const totalItemsInCart = document.querySelector(".quantity");




document.addEventListener("DOMContentLoaded", function() {
    
            const navigationItems = [
                { id: "home", url: "index.html" },
                { id: "sale", url: "/sale.html" },
                { id: "review", url: "/reviews.html" },
                { id: "cart-link", url: "cart.html" },
                { id: "newest", url: "/newest.html" },
                { id: "bass", url: "/bass.html" },
                { id: "classics", url: "/classics.html" },
                { id: "access", url: "accessories.html" },
            ];

   
            navigationItems.forEach(item => {
                
                const element = document.getElementById(item.id);
                if (element) {

                    element.addEventListener("click", function() {
                        
                        window.location.href = item.url;
                        
                        
                    });
                    updateCartDisplay();
                    
                }
            });



    
            if (window.location.pathname.endsWith("cart.html")) {
                updateCart();
                updateUI();
            }
});



const pageToProductType = {
    "/newest.html": "new",
    "/bass.html": "bass",
    "/classics.html": "classic",
    "/accessories.html": "accessories",
    "/sale.html": "sale",
};


function addToCart(id) { 

    const storedCartData = localStorage.getItem('cart');
    let cart = storedCartData ? JSON.parse(storedCartData) : [];

    if (cart.some((item) => item.id === id)) {
        changeNumberOfUnits("plus", id); 
    } else {
    const item = products.find((product) => product.id === id)

        cart.push({
            ...item,
            numberOfUnits: 1,
        });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    updateCartDisplay();
    
};



function updateCart() {

    const storedCartData = localStorage.getItem('cart');
    
    if (storedCartData) {
                
        cart = JSON.parse(storedCartData);
    }
            
    renderCartItems();
    renderSubtotal();
    updateCartDisplay();
    console.log(storedCartData);

    };
        
function renderCartItems() {

    let newContent = ''; 

    cart.forEach((item) => {
        newContent += `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${item.imgSrc}" alt="${item.name}">
                        <h4>${item.name}</h4>
                        <span><ion-icon class="icon-close" onclick="removeItemFromCart(${item.id})" name="close-circle-outline"></ion-icon></span>
                </div>
                <div class="unit-price">
                    <h2><small>$</small>${item.price}</h2>
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                    <div class="number">${item.numberOfUnits}</div>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
                </div>
            </div>`;
                               
        });
            cartElement.innerHTML = newContent;
                    
    };

    function changeNumberOfUnits(action, id) {
        // Retrieve the existing cart data from localStorage and parse it into an array
        const storedCartData = localStorage.getItem('cart');
        let cart = storedCartData ? JSON.parse(storedCartData) : [];
    
        // Iterate through the cart items and update the number of units for the matching item
        cart = cart.map((item) => {
            if (item.id === id) {
                let numberOfUnits = item.numberOfUnits;
    
                if (action === "minus" && numberOfUnits > 1) {
                    numberOfUnits--;
                } else if (action === "plus" && numberOfUnits < item.instock) {
                    numberOfUnits++;
                }

    
                return {
                    ...item,
                    numberOfUnits,
                };
            }
    
            return item;
        });
    
        
        localStorage.setItem('cart', JSON.stringify(cart));
    
       
        updateCart();
    }
    

function renderSubtotal(action, id) {
    let totalPrice = 0, totalItems = 0; 

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    })
    subtotalElement.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCart.innerHTML = totalItems;
}
function removeItemFromCart(id) {
    // Retrieve the existing cart data from localStorage and parse it into an array
    const storedCartData = localStorage.getItem('cart');
    let cart = storedCartData ? JSON.parse(storedCartData) : [];

    // Filter out the item with the specified id
    cart = cart.filter((item) => item.id !== id);

    // Store the updated cart data back in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update the cart display
    updateCart();
    updateUI();
}

function renderProducts(type) {

    const productsElement = document.querySelector(`.${type}Products`);

    products.forEach((product) => {
        if (type === "sale" && product.type === "sale") {
            const card = document.createElement("div");
            card.classList.add("card-border");
            card.innerHTML = `
                <img class="card" src="${product.imgSrc}" alt="">
                <h3>${product.name}</h3>
                <h2 id="old-price"><small>$</small>${product.oldPrice}</h2>
                <h2 id="price"><small>$</small>${product.price}</h2>
                <button type="button" onclick="addToCart(${product.id})">Add To Cart</button>
            `;
            productsElement.appendChild(card);
        } else if (product.type === type) {
            const card = document.createElement("div");
            card.classList.add("card-border");
            card.innerHTML = `
                <img class="card" src="${product.imgSrc}" alt="">
                <h3>${product.name}</h3>
                <h2 id="price"><small>$</small>${product.price}</h2>
                <button type="button" onclick="addToCart(${product.id})">Add To Cart</button>
            `;
            productsElement.appendChild(card);
        } 
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const page = window.location.pathname;
    const productType = pageToProductType[page];

    if (productType) {
        renderProducts(productType);
    }
});


function updateCartDisplay() {
    const totalItemsInCart = document.querySelector(".quantity");
    const storedCartData = localStorage.getItem('cart');
    const cart = storedCartData ? JSON.parse(storedCartData) : [];
    const itemCount = cart.reduce((total, item) => total + item.numberOfUnits, 0);
    
    // Update the cart quantity display
    totalItemsInCart.textContent = itemCount;
}

function updateUI() {

    const cartEmpty = document.getElementById('empty-cart-message');
    const cartView = document.getElementById('cart-container');
    const cartData = localStorage.getItem('cart');
    let cart = cartData ? JSON.parse(cartData) : [];

    if (cart.length === 0) {
        cartView.style.display = 'none';
        cartEmpty.style.display = 'block';
    } else {
        cartView.style.display = 'block';
        cartEmpty.style.display = 'none';
    }
};
  
  

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');

// Add a click event listener to a common ancestor element (e.g., document)
document.addEventListener('click', (event) => {
    const target = event.target;

    // Handle click on register link
    if (target === registerLink) {
        wrapper.classList.add('active');
    }

    // Handle click on login link
    if (target === loginLink) {
        wrapper.classList.remove('active');
    }

    // Handle click on btnPopup
    if (target === btnPopup) {
        wrapper.classList.add('active-popup');
    }

    // Handle click on btnClose
    if (target === btnClose) {
        event.preventDefault(); 
        wrapper.classList.remove('active-popup');
       
    }

    // Handle click on other elements, if needed
    // ...
});

function subscribe() {
    const emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
        alert("A confirmation email has been sent to " + emailInput + ". You are now subscribed to the mailing list.");
    } else {
        alert("Please enter a valid email address.");
    }
}

