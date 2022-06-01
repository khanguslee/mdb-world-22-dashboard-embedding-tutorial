// API Documentation found in https://www.npmjs.com/package/@mongodb-js/charts-embed-dom
import { setupLoginPage } from "./helper";

/**
 * START
 */

const toggleDarkMode = async () => {
  // TODO: Toggle dark mode for dashboard via Charts SDK

  // Toggle dark mode icon
  const darkModeIcon = document.getElementById("icon-dark-mode");
  darkModeIcon.classList.toggle("bi-moon-fill");
  darkModeIcon.classList.toggle("bi-sun-fill");

  // Toggle dark mode for ALL tailwind components
  document.documentElement.classList.toggle("dark");
};

const filterPurchaseMethod = async (event) => {
  // TODO: Filter charts by purchase method
};

/**
 * END
 */

const darkModeBtn = document.getElementById("btn-dark-mode");
darkModeBtn.addEventListener("click", toggleDarkMode);

const purchaseMethodSelect = document.getElementById("purchaseMethod");
purchaseMethodSelect.addEventListener("change", filterPurchaseMethod);

setupLoginPage();
