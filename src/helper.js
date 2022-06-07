import { login, logout } from "./authenticate";
import { enableLogin } from "./config";
import { renderDashboard } from "./index";

const _getComponents = function () {
  const dashboardPage = document.getElementById("dashboard-page");
  const loginPage = document.getElementById("login-page");
  const logoutBtn = document.getElementById("btn-logout");
  return { dashboardPage, loginPage, logoutBtn };
};

export const toggleView = function (isLoggedIn) {
  const { dashboardPage, loginPage, logoutBtn } = _getComponents();
  if (isLoggedIn || !enableLogin) {
    dashboardPage.classList.remove("hidden");
    if (enableLogin) logoutBtn.classList.remove("hidden");
    loginPage.classList.add("hidden");
  } else {
    loginPage.classList.remove("hidden");
    dashboardPage.classList.add("hidden");
    logoutBtn.classList.add("hidden");
  }
};

export async function setupLoginPage() {
  const isLoggedIn = !!window.sessionStorage.getItem("jwtToken");
  toggleView(isLoggedIn);

  const loginBtn = document.getElementById("btn-login");
  const logoutBtn = document.getElementById("btn-logout");

  loginBtn.addEventListener("click", login);
  logoutBtn.addEventListener("click", logout);

  if (isLoggedIn || !enableLogin) {
    await renderDashboard();
  }
}
