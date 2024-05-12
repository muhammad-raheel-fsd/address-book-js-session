// Targetting elements
let root = document.querySelector(".root");
let id = localStorage.getItem("id");

let dataStorage = JSON.parse(localStorage.getItem("dataStorage"));

let targetValue = dataStorage[id];

let ul = document.createElement("ul");
let ulHTML = `<h1 class = "con-head-1">${targetValue.name}</h1>
<h4 class = "con-head-2">Phone</h4>
<li class = "contacts-li"><span>${targetValue.telephone}</span>
<span>
<i onClick = "updateData(${id})" class="contact-icons fa-solid fa-pen-to-square"></i>
<i onClick = "delData(${id})" class="contact-icons fa-solid fa-trash"></i>
<span></li>
<h4 class = "con-head-2">Email</h4>
<li class = "contacts-li">${targetValue.email}`;
ul.innerHTML = ulHTML;
root.appendChild(ul);

// Delete data
function delData(id) {
  let permission = confirm("Are you sure to delete contact?");

  if (permission) {
    let dataStorage = JSON.parse(localStorage.getItem("dataStorage"));
    dataStorage.splice(id, 1);
    localStorage.setItem("dataStorage", JSON.stringify(dataStorage));
    window.location.href = "../index.html";
    readData();
  }
}

// Update data
function updateData() {
  return (window.location.href = "./update.html");
}
