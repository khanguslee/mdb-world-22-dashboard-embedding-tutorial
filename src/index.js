// API Documentation found in https://www.npmjs.com/package/@mongodb-js/charts-embed-dom
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

import { setupLoginPage } from "./helper";

/**
 * START
 */

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-uvgyb",
});

const dashboardOptions = {
  showAttribution: false,
  widthMode: "scale",
};

const dashboard = sdk.createDashboard({
  dashboardId: "6252bcf4-70f4-400e-8a06-68f6a46e26d0",
  ...dashboardOptions,
  getUserToken: () => {
    return window.sessionStorage.getItem("jwtToken") || "";
  },
});

const toggleDarkMode = async () => {
  // Toggle dark mode for dashboard via Charts SDK
  const currentTheme = await dashboard.getTheme();
  await dashboard.setTheme(currentTheme === "dark" ? "light" : "dark");

  // Toggle dark mode icon
  const darkModeIcon = document.getElementById("icon-dark-mode");
  darkModeIcon.classList.toggle("bi-moon-fill");
  darkModeIcon.classList.toggle("bi-sun-fill");

  // Toggle dark mode for ALL tailwind components
  document.documentElement.classList.toggle("dark");
};

const filterPurchaseMethod = async (event) => {
  const { value } = event.target;
  const charts = await dashboard.getAllCharts();
  charts.forEach(async (chart) => {
    const filter = value === "All" ? {} : { purchaseMethod: value };
    await chart.setFilter(filter);
  });
};

export const renderDashboard = async () => {
  const dashboardElement = document.getElementById("dashboard");
  await dashboard.render(dashboardElement);
};

/**
 * END
 */

const darkModeBtn = document.getElementById("btn-dark-mode");
darkModeBtn.addEventListener("click", toggleDarkMode);

const purchaseMethodSelect = document.getElementById("purchaseMethod");
purchaseMethodSelect.addEventListener("change", filterPurchaseMethod);

setupLoginPage();
