let homeBetting = 0;
let awayBetting = 0;
let totalAmount = 0;
let selectedTeam = "home";

function betting() {
  const betAmount = parseInt(document.getElementById("bet-amount").value);

  if (!betAmount || betAmount <= 0) {
    alert("Please enter a valid bet amount.");
    return;
  }

  if (selectedTeam === "home") {
    homeBetting += betAmount;
  } else if (selectedTeam === "away") {
    awayBetting += betAmount;
  }

  calculateTotals();
  displayOdds();
}

function calculateTotals() {
  totalAmount = homeBetting + awayBetting;
}

function displayOdds() {
  let homeOdds = 1.0;
  let awayOdds = 1.0;

  if (totalAmount > 0) {
    homeOdds = (totalAmount / homeBetting).toFixed(2);
    awayOdds = (totalAmount / awayBetting).toFixed(2);
  }

  homeOdds = homeBetting === 0 ? "N/A" : homeOdds;
  awayOdds = awayBetting === 0 ? "N/A" : awayOdds;

  document.getElementById("total-amount").textContent = totalAmount;
  document.getElementById("home-odds").textContent = homeOdds;
  document.getElementById("away-odds").textContent = awayOdds;
}

function selectTeam(team) {
  selectedTeam = team;
}

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
