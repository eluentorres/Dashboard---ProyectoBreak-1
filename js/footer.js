async function loadFooter() {
  const response = await fetch("../components/footer.html");
  const data = await response.text();
  document.body.insertAdjacentHTML("beforeend", data);
}

loadFooter();