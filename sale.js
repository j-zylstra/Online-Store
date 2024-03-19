
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





document.addEventListener('DOMContentLoaded', () => {
    const salePath = {
        id: "sale",
        url: "/sale"
    };

    const saleBtn = document.getElementById('sale');

    saleBtn.addEventListener('click', () => {
        window.location.href = salePath.url;
    });
});

if (window.location.pathname.endsWith("sale")) {
    console.log("directed to sale page");
    renderSaleProducts();
}   


