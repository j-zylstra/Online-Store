const keepShopping = document.getElementById('continue-shopping');

function redirect() {

    window.location.href = 'index.html';
};

cartElement.addEventListener('click', function(event) {
    // Check if the clicked element is the close icon
    if (event.target.classList.contains('icon-close')) {
        // Get the product id from the data attribute of the parent element
        const productId = event.target.closest('.cart-item').getAttribute('data-product-id');
        console.log(productId); 
        removeItemFromCart(productId);
    }
});

const plusButtons = document.querySelectorAll('.btn plus');
plusButtons.addEventListener('click', () => {
        const productId = plusButtons.dataset.id;
        changeNumberOfUnits('plus', productId);
    });


const minusButtons = document.querySelectorAll('.btn minus');
minusButtons.addEventListener('click', () => {
        const productId = minusButtons.dataset.id;
        changeNumberOfUnits('minus', productId);
    });