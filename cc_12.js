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