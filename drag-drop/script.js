import { Draggable } from "/draggable.js";

const boardEl = document.getElementById("board");
const addNotesEl = document.getElementById("addNotes");
const inputEl = document.querySelector(".input");

addNotesEl.addEventListener("click", (e) => {
  const divEl = document.createElement("div");
  divEl.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
  divEl.setAttribute("draggable", "true");
  divEl.innerHTML = `<p>${inputEl.value}</p>`;
  divEl.classList.add("note")
  const btnEl = document.createElement("btn");
  btnEl.innerHTML = "X";
  btnEl.classList.add("cross")
  divEl.appendChild(btnEl)
  boardEl.appendChild(divEl);
  new Draggable(divEl);
});
