// API Documentation found in https://www.npmjs.com/package/@mongodb-js/charts-embed-dom
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { login, logout } from "./authenticate";
import { showDashboardPage, showLoginPage } from "./helper";

function _setup() {
  window.sessionStorage.getItem("jwtToken")
    ? showDashboardPage()
    : showLoginPage();
  document.getElementById("btn-login").addEventListener("click", login);
  document.getElementById("btn-logout").addEventListener("click", logout);
}

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-uvgyb",
});

const dashboard = sdk.createDashboard({
  dashboardId: "6252bcf4-70f4-400e-8a06-68f6a46e26d0",
  showAttribution: false,
  widthMode: "scale",
  heightMode: "scale",
  getUserToken: () => {
    return window.sessionStorage.getItem("jwtToken");
  },
});

const dashboardPage = document.getElementById("dashboard-page");
const loginPage = document.getElementById("login-page");

async function renderDashboard() {
  await dashboard.render(document.getElementById("dashboard"));
}

_setup();

renderDashboard();

export { dashboard, dashboardPage, loginPage, usernameInput, passwordInput };
