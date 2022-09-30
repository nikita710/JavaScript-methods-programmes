const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

const inputBtn = document.getElementById("input-btn");
const saveBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");

let myLeads = [];

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads(myLeads);
}

saveBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
  });
});

inputBtn.addEventListener("click", () => {
  const inputValue = inputEl.value;
  if (inputValue !== "") {
    myLeads.push(inputValue);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
  }
  inputEl.value = "";
  renderLeads(myLeads);
});

deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads(myLeads);
});

function renderLeads(leads) {
  let leadsList = "";
  for (let i = 0; i < leads.length; i++) {
    leadsList += `<li> <a href="${leads[i]}"> ${leads[i]} </a> </li>`;
  }
  ulEl.innerHTML = leadsList;
}
