// Task 1: Business Dashboard – DOM Element Selection and Creation
const dashboard = document.getElementById("dashboard");

const revenueCard = document.createElement("div");
revenueCard.setAttribute("class", "metric-card");
revenueCard.setAttribute("id", "revenueCard");
revenueCard.innerHTML = "<h3>Revenue</h3><p>$0</p>";

dashboard.appendChild(revenueCard);
// Task 2: Updating Dashboard Metrics – Working with NodeLists and Arrays
const metricCards = document.querySelectorAll(".metric-card");
const metricCardsArray = Array.from(metricCards);

metricCardsArray.forEach(card => {
    card.style.backgroundColor = "#e0f7fa"; // Light blue background
    card.querySelector("p").textContent += " - Updated";
});
// Task 3: Dynamic Inventory Management – Adding and Removing Items
const inventoryList = document.getElementById("inventoryList");

function addProduct(productName) {
    const productItem = document.createElement("li");
    productItem.setAttribute("class", "product-item");
    productItem.textContent = productName;
    inventoryList.appendChild(productItem);

    productItem.addEventListener("click", () => {
        inventoryList.removeChild(productItem);
    });
}

// Add a product
addProduct("Product 1");
addProduct("Product 2");