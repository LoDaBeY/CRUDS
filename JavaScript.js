var body = document.getElementsByClassName("body")[0];
var DarkModeBtn = document.querySelector(".toggle");
var dropdownItems = document.querySelectorAll(".dropdown-item");
var dropdownMenu = document.querySelector(".dropdown-menu");
var title = document.querySelector("#title");
var price = document.querySelector("#price");
var ads = document.querySelector("#ads");
var discount = document.querySelector("#discount");
var total = document.querySelector(".total");
var count = document.querySelector("#count");
var catagory = document.querySelector("#catagory");
var SearchByTitle = document.querySelector("#SearchByTitle");
var SearchByCatagory = document.querySelector("#SearchByCatagory");
var Create = document.querySelector(".Create");
let mood = "Create";
let temp;
var DataProduct;

DarkModeBtn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  dropdownMenu.classList.toggle("bg-dark");
  dropdownItems.forEach(function (item) {
    item.classList.toggle("text-white");
    item.classList.toggle("bg-dark");
  });
});

//Get the total from Price,ads and discount by okeyup in the HTMl
function GetTotalAcc() {
  if (price.value && ads.value != "") {
    let result = +price.value + +ads.value - +discount.value;
    total.innerHTML = result;
    total.style.background = "green";
  } else {
    total.innerHTML = "";
    total.style.background = "white";
  }
}

// look for a data of the product in the localstorgae
if (localStorage.product != null) {
  DataProduct = JSON.parse(localStorage.product);
} else {
  DataProduct = [];
}

//Create the Submit btn and save it in the LocalStorage and ShowData
Create.addEventListener("click", function () {
  var NewProduct = {
    title: title.value,
    price: price.value,
    discount: discount.value,
    ads: ads.value,
    total: total.innerHTML,
    count: count.value,
    catagory: catagory.value,
  };
  DataProduct.push(NewProduct);
  localStorage.setItem("product", JSON.stringify(DataProduct));
  DeleteAllDataAfterTakingThem();
  GetTotalAcc()
  ShowData();
});

//Data clear after create
function DeleteAllDataAfterTakingThem() {
  title.value = "";
  price.value = "";
  discount.value = "";
  ads.value = "";
  count.value = "";
  catagory.value = "";
  total.innerHTML = "";
}

//Show the data in the Table
function ShowData() {
  let table = "";
  for (let i = 0; i < DataProduct.length; i++) {
    table += `
    <tr>
    <td>${i + 1} </td>
    <td>${DataProduct[i].title} </td>
    <td>${DataProduct[i].price}</td>
    <td>${DataProduct[i].ads}</td>
    <td>${DataProduct[i].discount}</td>
    <td>${DataProduct[i].total}</td>
    <td>${DataProduct[i].count}</td>
    <td>${DataProduct[i].Catagory}</td>
    <td><button class="Update"> Update </button></td>
    <td><button class="Delete"> Delete </button></td>
  </tr>
    `;
  }
  document.getElementById("tbody").innerHTML = table;
}
ShowData();
