document.addEventListener('DOMContentLoaded', () => {
    const salePath = {
        id: "sale",
        url: "/sale"
    };

    const saleBtn = document.getElementById('sale');

    saleBtn.addEventListener('click', () => {
        window.location.href = salePath.url;
        console.log("new sale logic working");
    });
});
