// API Documentation found in https://www.npmjs.com/package/@mongodb-js/charts-embed-dom
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";

const sdk = new ChartsEmbedSDK({
  baseUrl: "https://charts.mongodb.com/charts-project-0-uvgyb",
});

const dashboard = sdk.createDashboard({
  dashboardId: "6252bcf4-70f4-400e-8a06-68f6a46e26d0",
  showAttribution: false,
  widthMode: "scale",
  heightMode: "scale",
});

async function renderDashboard() {
  await dashboard.render(document.getElementById("dashboard"));
}

renderDashboard().catch((e) => window.alert(e.message));
