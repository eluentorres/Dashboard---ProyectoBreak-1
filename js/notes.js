const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");
const miniNotesContainer = document.getElementById("miniNotes");




let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotesFull() {
  if (!notesContainer) return;

  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.classList.add("note-item");

    div.innerHTML = `
      <p class="note-date">📅 ${note.date}</p>
      <p class="note-text">${note.text}</p>
      <button class="note-delete">Eliminar</button>
    `;

    div.querySelector(".note-delete").addEventListener("click", () => {
      notes.splice(index, 1);
      saveNotes();
      renderNotesFull();
      renderNotesMini();
    });

    notesContainer.appendChild(div);
  });
}

function renderNotesMini() {
  if (!miniNotesContainer) return;

  miniNotesContainer.innerHTML = "";

  const lastNotes = notes.slice(-3).reverse();

  lastNotes.forEach(note => {
    const div = document.createElement("div");
    div.classList.add("mini-note");

    div.innerHTML = `
      <p class="mini-note-date">${note.date}</p>
      <p class="mini-note-text">${note.text}</p>
    `;

    miniNotesContainer.appendChild(div);
  });
}

if (addNoteBtn) {
  addNoteBtn.addEventListener("click", () => {
    const text = noteInput.value.trim();

    if (text === "") {
      alert("Escribe una nota primero");
      return;
    }

    const now = new Date();
    const formattedDate = now.toLocaleString("es-ES");

    notes.push({
      text,
      date: formattedDate
    });

    saveNotes();
    renderNotesFull();
    renderNotesMini();

    noteInput.value = "";
  });
}

renderNotesFull();
renderNotesMini();