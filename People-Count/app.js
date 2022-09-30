const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");

const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}
function save() {
  saveEl.textContent += count + " - ";
  count = 0;
  countEl.innerText = count;
}
