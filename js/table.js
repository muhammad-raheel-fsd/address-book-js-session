// Targetting elements
let root = document.querySelector(".root");
let searchBox = document.querySelector(".search-box");
let liArray = document.getElementsByTagName("li");

// Read data
readData();

function readData(event) {
  let dataStorage = JSON.parse(localStorage.getItem("dataStorage"));

  if (dataStorage != null) {
    dataStorage.forEach((value, index) => {
      let ul = document.createElement("ul");
      ul.innerHTML = `<a onClick = manageData(${index})><li>${value.name}</li></a>`;
      root.appendChild(ul);
    });
  }
}

function manageData(id) {
  localStorage.setItem("id", id);
  window.location.href = "views/manage.html";
}

searchBox.addEventListener("keyup", () => {
  let searchVal = searchBox.value.toUpperCase();
  for (let ind = 0; ind < liArray.length; ind++) {
    let liTextVal = liArray[ind].textContent.toUpperCase();
    if (liTextVal.indexOf(searchVal) > -1) {
      liArray[ind].style.display = "";
    } else {
      liArray[ind].style.display = "none";
    }
  }
});
