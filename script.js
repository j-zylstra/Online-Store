const cartElement = document.querySelector(".cart-items");
const productsElement = document.querySelector(".products");
const subtotalElement = document.querySelector(".subtotal");
const totalItemsInCart = document.querySelector(".quantity");

(() => {
    document.addEventListener("DOMContentLoaded", function () {
      const navigationItems = [
        { id: "home", url: "/" },
        { id: "sale", url: "sale" },
        { id: "review", url: "reviews" },
        { id: "cart-link", url: "cart" },
        { id: "new", url: "new" },
        { id: "bass", url: "bass" },
        { id: "classic", url: "classic" },
        { id: "accessories", url: "accessories" },
      ];
  
      const handleNavigation = (item) => {
        console.log("Clicked on", item.id);
        window.location.href = item.url;
        console.log(window.location.href);
      };
  
      const handleCartPage = () => {
        if (window.location.pathname.endsWith("cart")) {
          updateCart();
          updateUI();
        }
      };
  
      const handleSalePage = () => {
        if (window.location.pathname.endsWith("sale")) {
          renderSaleProducts();
        }
      };
  
      navigationItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          element.addEventListener("click", () => handleNavigation(item));
        }
      });
      handleSalePage();
      updateCartDisplay();
      handleCartPage();
    });
  })();
  
  
  const pageToProductType = {
    "/new": "new",
    "/bass": "bass",
    "/classic": "classic",
    "/accessories": "accessories",
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
        const productId = product.product.id; // Get product ID
        
        newContent += `
            <div class="cart-item">
                <div class="item-info">
                    <img src="${product.product.imgsrc}" alt="${product.product.name}">
                    <h4>${product.product.name}</h4>
                    <span><ion-icon class="icon-close" data-id="${productId}" name="close-circle-outline"></ion-icon></span>
                </div>
                <div class="unit-price">
                    <h2><small>$</small>${product.product.price}</h2>
                </div>
                <div class="units">
                    <div class="btn minus" data-action="minus" data-id="${productId}">-</div>
                    <div class="number">${product.numberOfUnits}</div>
                    <div class="btn plus" data-action="plus" data-id="${productId}">+</div>
                </div>
            </div>`;
    });

    cartElement.innerHTML = newContent;



    // Add event listeners for click and touch events to each individual element
    const iconCloseElements = document.querySelectorAll('.icon-close');
    iconCloseElements.forEach((element) => {
        const productId = element.dataset.id; // Get product ID
        element.addEventListener('click', () => {
            removeItemFromCart(productId);
            console.log(productId);
        });
        element.addEventListener('touchstart', (event) => {
            event.preventDefault(); // Prevent default touch behavior
            removeItemFromCart(productId);
            console.log(productId);
        });
    });

    const btnElements = document.querySelectorAll('.btn');
    btnElements.forEach((element) => {
        const productId = element.dataset.id; // Get product ID
        element.addEventListener('click', () => {
            const action = element.dataset.action;
            changeNumberOfUnits(action, productId);
            console.log(action, productId); 
        });
        element.addEventListener('touchstart', (event) => {
            event.preventDefault(); // Prevent default touch behavior
            const action = element.dataset.action;
            changeNumberOfUnits(action, productId);
            console.log(action, productId); 
        });
    });
}


function addToCart(id) {

    const storedCartData = localStorage.getItem('cart');
    let cart = storedCartData ? JSON.parse(storedCartData) : [];

    fetch(`https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/products/${id}`)
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

    // Find the index of the item with the specified ID
    const itemIndex = cart.findIndex(item => item.product.id === id);
    console.log(itemIndex);
    if (itemIndex !== -1) {
        // Remove the item from the cart array
        cart.splice(itemIndex, 1);

        // Update localStorage with the modified cart array
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update the cart display
        updateCart();
        
        // Update the UI
        updateUI();
    }
}


function renderProducts(type) {

    const productsElement = document.querySelector(`.${type}Products`);
    const path = window.location.pathname;
    const productType = path.split('/').pop().replace('.html', '');
        fetch(`https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/products/type/${productType}`)
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

        fetch(`https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/products/type/sale`)
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

document.addEventListener('DOMContentLoaded', async () => {
    const reviewForm = document.getElementById('reviewForm');
    const reviewContent = document.getElementById('reviewContent');

    if (reviewForm) {
        reviewForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const comment = reviewContent.value.trim(); // Trim comment value to remove leading and trailing whitespace
            const userId = sessionStorage.getItem('userId');

            // Check if the comment is not empty and userId is defined
            if (comment !== '' && userId !== null) {
                try {
                    // Make a fetch request to submit the review
                    const response = await fetch('https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/reviews', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ userId, comment }),
                    });

                    if (response.ok) {
                        // Handle the new review as needed (e.g., display it on the webpage)
                        const data = await response.json();

                        if (data.content.trim() !== "") {
                            // Display the review only if it's not empty
                            displayReview(data);
                        } else {
                            console.error('Received an empty review from the server:', data);
                        }

                        // Clear the form after submission
                        reviewContent.value = '';
                    } else {
                        console.error(`Error: ${response.status} - ${response.statusText}`);
                    }

                } catch (error) {
                    console.error(error);
                }
            } else {
                console.error('Comment is empty or userId is not defined');
            }
        });
    }

    async function fetchExistingReviews() {
        try {
            const response = await fetch('https://aqueous-ocean-91362-9acaca4dceea.herokuapp.com/reviews/DB', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }

            const text = await response.text();
            try {
                const reviews = JSON.parse(text);
                console.log('Fetched reviews:', reviews);
                return reviews || [];
            } catch (parseError) {
                console.error('Error parsing JSON:', parseError);
                return [];
            }
        } catch (error) {
            console.error(error.message);
            return [];
        }
    }

    // Code to fetch existing reviews and display them on the "reviews" page
    if (window.location.href === 'https://riff-wired-27891913b14e.herokuapp.com/reviews' || window.location.href === 'http://riff-wired-27891913b14e.herokuapp.com/reviews') {
        try {
            const existingReviews = await fetchExistingReviews();
            if (Array.isArray(existingReviews)) {
                existingReviews.forEach((review) => displayReview(review));
            } else if (existingReviews && Array.isArray(existingReviews.reviews)) {
                existingReviews.reviews.forEach((review) => displayReview(review));
            } else {
                console.error('Unable to find reviews in the response:', existingReviews);
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Function to display a review on the webpage
    function displayReview(review) {
        const reviewList = document.getElementById('reviewsList');
        const reviewItem = document.createElement('div');
        reviewItem.innerHTML = `<div class="user-review">
                                    <h2>${review.userName}</h2>
                                    <p>"${review.content}"</p>
                                </div>`;
        reviewList.appendChild(reviewItem);
    }
});


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
        try {
            const emailInput = document.getElementById("emailInput").value;
            if (emailInput) {
                alert("A confirmation email has been sent to " + emailInput + ". You are now subscribed to the mailing list.");
            } else {
                alert("Please enter a valid email address.")
            }
        } catch (error) {
            console.error('Error in subscribe function:', error);
        }
    }
    document.getElementById('hambrgr').addEventListener('click', function() {
        var menu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];
        var navList = document.getElementById('nav-list');
    
        // Check the current value of menu.style.left
        if (menu.style.left === '-100%') {
            menu.style.left = '0';
            navList.style.webkitBackdropFilter = 'blur(30px)'; // Safari
            navList.style.backdropFilter = 'blur(30px)'; // Standard
        } else {
            menu.style.left = '-100%';
            navList.style.webkitBackdropFilter = 'blur(0)'; // Safari
            navList.style.backdropFilter = 'blur(0)'; // Standard
        }
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        var loginElement = document.getElementById('login');
    
        // Check if the element with ID 'login' exists
        if (loginElement) {
            loginElement.addEventListener('click', function() {
                var bottomMenu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];
                
                if (window.innerWidth < 613) {
                    bottomMenu.style.left = '-100%';
                } 
            });
        }
    });


    

const closeLoginButton = document.getElementById('close-login');

if (closeLoginButton) {
    closeLoginButton.addEventListener('click', function() {
        var bottomMenu = document.getElementById('bottom-menu').getElementsByTagName('ul')[0];

        if (window.innerWidth < 613) {
            bottomMenu.style.left = '0';
        }
    });
};


