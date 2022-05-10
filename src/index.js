// API Documentation found in https://www.npmjs.com/package/@mongodb-js/charts-embed-dom
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import { login, logout } from "./authenticate";
import { toggleView } from "./helper";

function _setup() {
  toggleView(!!window.sessionStorage.getItem("jwtToken"));

  const loginBtn = document.getElementById("btn-login");
  const logoutBtn = document.getElementById("btn-logout");

  loginBtn.addEventListener("click", login);
  logoutBtn.addEventListener("click", logout);
}

/**
 * START
 */

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-uvgyb",
});

const addedDashboardOptions = {
  showAttribution: false,
  widthMode: "scale",
  heightMode: "scale",
};

const dashboard = sdk.createDashboard({
  dashboardId: "6252bcf4-70f4-400e-8a06-68f6a46e26d0",
  ...addedDashboardOptions,
  getUserToken: () => {
    return window.sessionStorage.getItem("jwtToken") || "";
  },
});

/**
 * END
 */

async function renderDashboard() {
  await dashboard.render(document.getElementById("dashboard"));
}

_setup();

renderDashboard();
