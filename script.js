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
                { id: "new", url: "/new.html" },
                { id: "bass", url: "/bass.html" },
                { id: "classic", url: "/classic.html" },
                { id: "accessories", url: "accessories.html" },
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
            } else { 
                if (window.location.pathname.endsWith("sale.html")) {
                    renderSaleProducts();
                }
        };
})



const pageToProductType = {
    "/new.html": "new",
    "/bass.html": "bass",
    "/classic.html": "classic",
    "/accessories.html": "accessories"
};


document.addEventListener("DOMContentLoaded", function () {
    const page = window.location.pathname;
    const productType = pageToProductType[page];

    if (productType) {
        renderProducts(productType);
    }
});
        
function renderCartItems(cart) {

    let newContent = ''; 

    cart.forEach((product) => {
        newContent += `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${product.product.imgsrc}" alt="${product.product.name}">
                        <h4>${product.product.name}</h4>
                        <span><ion-icon class="icon-close" onclick="removeItemFromCart(${product.id})" name="close-circle-outline"></ion-icon></span>
                </div>
                <div class="unit-price">
                    <h2><small>$</small>${product.product.price}</h2>
                </div>
                <div class="units">
                    <div class="btn minus" onclick="changeNumberOfUnits('minus', ${product.product.id})">-</div>
                    <div class="number">${product.numberOfUnits}</div>
                    <div class="btn plus" onclick="changeNumberOfUnits('plus', ${product.product.id})">+</div>
                </div>
            </div>`;
                               
        });
            cartElement.innerHTML = newContent;
                    
};

function addToCart(id) {

    const storedCartData = localStorage.getItem('cart');
    let cart = storedCartData ? JSON.parse(storedCartData) : [];

    fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then(product => { 
    
           const existingCartItem = cart.find(item => item.product.id === id);

           if (existingCartItem) {
                if (existingCartItem.numberOfUnits < product.instock) {
                    existingCartItem.numberOfUnits++;
                } else {
                    console.warn('exceeded available stock for this product.');
                 }
                } else {
                 cart.push({
                        product,
                        numberOfUnits: 1,
                    });
           }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
        
        })
        .catch(error => {
            console.error('Error:', error);
        }); 
};

function changeNumberOfUnits(action, id) {
        
        const storedCartData = localStorage.getItem('cart');
        let cart = storedCartData ? JSON.parse(storedCartData) : [];
    
        
        cart = cart.map((product) => {
            if (product.product.id === id) {
                let numberOfUnits = product.numberOfUnits;
    
                if (action === "minus" && numberOfUnits > 1) {
                    numberOfUnits--;
                } else if (action === "plus" && numberOfUnits < product.product.instock) {
                    numberOfUnits++;
                }

    
                return {
                    ...product,
                    numberOfUnits,
                };
            }
    
            return product;
        });
    
        
        localStorage.setItem('cart', JSON.stringify(cart));
    
       
        updateCart();
};

function renderSubtotal(action, id) {
    let totalPrice = 0, totalItems = 0; 

    cart.forEach((product) => {
        totalPrice += product.product.price * product.numberOfUnits;
        totalItems += product.numberOfUnits;
    })
    subtotalElement.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
    totalItemsInCart.innerHTML = totalItems;
};

function removeItemFromCart(id) {
    
    const storedCartData = localStorage.getItem('cart');
    let cart = storedCartData ? JSON.parse(storedCartData) : [];

     
     const itemIndex = cart.findIndex(product => product.id === id);

     if (itemIndex !== -1) {
        
         cart.splice(itemIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));

    
    updateCart();
    updateUI();
   };
}

function renderProducts(type) {

    const productsElement = document.querySelector(`.${type}Products`);
    const path = window.location.pathname;
    const productType = path.split('/').pop().replace('.html', '');

        fetch(`http://localhost:3000/products/type/${productType}`)
        .then(response => response.json())
        .then(products => {
                console.log(products);
                products.forEach((product) => {
                    
                     if (product.type === type) {
                        const card = document.createElement("div");
                        card.classList.add("card-border");
                        card.innerHTML = `
                            <img class="card" src="${product.imgsrc}" alt="">
                            <h3>${product.name}</h3>
                            <h2 id="price"><small>$</small>${product.price}</h2>
                            <button type="button" onclick="addToCart(${product.id})">Add To Cart</button>
                        `;
                        productsElement.appendChild(card);
                        
                    } 
                });
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

    
};

function renderSaleProducts() {

    const saleProductsElement = document.querySelector(`.saleProducts`);

        fetch(`http://localhost:3000/products/type/sale`)
        .then(response => response.json())
        .then(products => {
            console.log(products);
                products.forEach((product) => {
                    
                        const card = document.createElement("div");
                        card.classList.add("card-border");
                        card.innerHTML = `
                            <img class="card" src="${product.imgsrc}" alt="">
                            <h3>${product.name}</h3>
                            <h2 id="old-price"><small>$</small>${product.oldprice}</h2>
                            <h2 id="price"><small>$</small>${product.price}</h2>
                            <button type="button" onclick="addToCart(${product.id})">Add To Cart</button>
                        `;
                        saleProductsElement.appendChild(card);
                        
                    } 
                );
        })
        .catch(error => {
            console.log('Error:', error);
        });

    
};

function updateCartDisplay() {
    const totalItemsInCart = document.querySelector(".quantity");
    const storedCartData = localStorage.getItem('cart');
    const cart = storedCartData ? JSON.parse(storedCartData) : [];
    const itemCount = cart.reduce((total, item) => total + item.numberOfUnits, 0);
    
    
    totalItemsInCart.textContent = itemCount;
};

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
  
function updateCart() {

    const storedCartData = localStorage.getItem('cart');
    
    if (storedCartData) {
                
        cart = JSON.parse(storedCartData);
    }
            
    renderCartItems(cart);
    renderSubtotal();
    updateCartDisplay();

};

  

const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const btnClose = document.querySelector('.icon-close');


document.addEventListener('click', (event) => {
    const target = event.target;

    
    if (target === registerLink) {
        wrapper.classList.add('active');
    }

    if (target === loginLink) {
        wrapper.classList.remove('active');
    }
    
    if (target === btnPopup) {
        wrapper.classList.add('active-popup');
    }
    
    if (target === btnClose) {
        event.preventDefault(); 
        wrapper.classList.remove('active-popup');
    }

});

function subscribe() {
    const emailInput = document.getElementById("emailInput").value;
    if (emailInput) {
        alert("A confirmation email has been sent to " + emailInput + ". You are now subscribed to the mailing list.");
    } else {
        alert("Please enter a valid email address.")
    }
}