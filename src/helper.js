import { dashboardPage, loginPage } from "./index";

export const showDashboardPage = function () {
  dashboardPage.classList.remove("hidden");
  loginPage.classList.add("hidden");
};

export const showLoginPage = function () {
  loginPage.classList.remove("hidden");
  dashboardPage.classList.add("hidden");
};
