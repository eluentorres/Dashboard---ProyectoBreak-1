const path = window.location.pathname.includes("/pages/")
  ? "../components/footer.html"
  : "components/footer.html";

async function loadFooter() {
  const response = await fetch(path);
  const data = await response.text();
  document.body.insertAdjacentHTML("beforeend", data);
}

loadFooter();