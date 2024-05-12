let form = document.querySelector(".form");
  // Insert data
  form.addEventListener("submit", (event) => {
    //   Getting input data
    event.preventDefault();
    let name = document.getElementById("name").value;
    let telephone = document.getElementById("telephone").value;
    let email = document.getElementById("email").value;

    let dataObject = { name, telephone, email };

    //   Checking name array
    let dataStorage = JSON.parse(localStorage.getItem("dataStorage"));

    if (dataStorage == null) {
      let dataArray = [dataObject];
      localStorage.setItem("dataStorage", JSON.stringify(dataArray));
      window.location.href = "/project/index.html";
    } else {
      dataStorage.push(dataObject);
      localStorage.setItem("dataStorage", JSON.stringify(dataStorage));
      window.location.href = "/project/index.html";
    }
  });