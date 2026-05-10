const titleInput = document.getElementById("title");
const urlInput = document.getElementById("url");
const addBtn = document.getElementById("addBtn");
const linksContainer = document.getElementById("linksContainer");


if (titleInput && urlInput && addBtn && linksContainer) {

  let links = JSON.parse(localStorage.getItem("links")) || [];

  function saveLinks() {
    localStorage.setItem("links", JSON.stringify(links));
  }

  function renderLinks() {
    linksContainer.innerHTML = "";

    links.forEach((link, index) => {
      const div = document.createElement("div");
      div.classList.add("link-item");

      div.innerHTML = `
        <a href="${link.url}" target="_blank">${link.title}</a>
        <button class="delete-btn">Eliminar</button>
      `;

      const deleteBtn = div.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => {
        links.splice(index, 1);
        saveLinks();
        renderLinks();
      });

      linksContainer.appendChild(div);
    });
  }

  addBtn.addEventListener("click", () => {
    const title = titleInput.value.trim();
    const url = urlInput.value.trim();

    if (title === "" || url === "") {
      alert("Rellena título y URL");
      return;
    }

    links.push({ title, url });
    saveLinks();
    renderLinks();

    titleInput.value = "";
    urlInput.value = "";
  });

  renderLinks();
}