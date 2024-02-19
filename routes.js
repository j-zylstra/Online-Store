document.addEventListener("DOMContentLoaded", function () {
    const contentContainer = document.getElementById("content-container");

    const navigateTo = (url) => {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                contentContainer.innerHTML = html;
                // Additional logic if needed
            })
            .catch(error => console.error('Error fetching content:', error));
    };

    const handleNavigation = (item) => {
        console.log("Clicked on", item.id);
        const url = item.url;
        window.history.pushState(null, null, url);
        navigateTo(url);
        updateCartDisplay();
    };

    const handleCartPage = () => {
        if (window.location.pathname.endsWith("cart.html")) {
            updateCart();
            updateUI();
        }
    };

    const handleSalePage = () => {
        if (window.location.pathname.endsWith("sale.html")) {
            renderSaleProducts();
        }
    };

    window.addEventListener("popstate", () => {
        navigateTo(window.location.pathname);
    });

    const navigationItems = [
        { id: "home", url: "/index.html" },
        { id: "sale", url: "/sale.html" },
        { id: "review", url: "/reviews.html" },
        { id: "cart-link", url: "/cart.html" },
        { id: "new", url: "/new.html" },
        { id: "bass", url: "/bass.html" },
        { id: "classic", url: "/classic.html" },
        { id: "accessories", url: "/accessories.html" },
    ];

    navigationItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            element.addEventListener("click", () => handleNavigation(item));
        }
    });

    handleCartPage();
    handleSalePage();
});
