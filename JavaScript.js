var body = document.getElementsByClassName("body")[0];
var DarkModeBtn = document.querySelector(".toggle");
var dropdownItems = document.querySelectorAll(".dropdown-item");
var dropdownMenu = document.querySelector(".dropdown-menu");
var title = document.querySelector("#title");
var price = document.querySelector("#price");
var ads = document.querySelector("#ads");
var discount = document.querySelector("#discount");
var count = document.querySelector("#count");
var catagory = document.querySelector("#catagory");
var SearchByTitle = document.querySelector("#SearchByTitle");
var SearchByCatagory = document.querySelector("#SearchByCatagory");
var DataCollector = "";

DarkModeBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  dropdownMenu.classList.toggle("bg-dark");
  dropdownItems.forEach(function (item) {
    item.classList.toggle("text-white");
    item.classList.toggle("bg-dark");
  });
});

function DataCollector() {
    if (title.value != '') {
        DataCollector: {
            title = title.value;
            
          }
    } else {
        window.prompt('Please add values to records')
    }
}
