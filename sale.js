const salePath = {
    id: "sale",
    url: "/sale"
};

const saleBtn = document.getElementById('sale');

saleBtn.addEventListener('click', () => {
    window.location.href = salePath.url;
}); 

if (path === salePath.url) {
    renderSaleProducts();
};

