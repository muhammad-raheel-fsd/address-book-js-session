let form = document.querySelector(".form");
let id = localStorage.getItem("id");
let dataStorage = JSON.parse(localStorage.getItem("dataStorage"));

let targetValue = dataStorage[id];

form.name.value = targetValue.name;
form.telephone.value = targetValue.telephone;
form.email.value = targetValue.email;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   Getting input data
  let name = document.getElementById("name").value;
  let telephone = document.getElementById("telephone").value;
  let email = document.getElementById("email").value;

  let dataObject = { name, telephone, email };

  let newData = {};

  newData.name = dataObject.name;
  newData.telephone = dataObject.telephone;
  newData.email = dataObject.email;

  dataStorage[id] = newData;
  localStorage.setItem("dataStorage", JSON.stringify(dataStorage));
  window.location.href = "../index.html";
});
