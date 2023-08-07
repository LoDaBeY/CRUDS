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
var DeleteAllBtn = document.querySelector(".DeleteAll");
var Update = document.querySelector('.Update');
var Delete = document.querySelector('.Delete');
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
    total.style.background = "";
  }
}

// look for a data of the product in the localstorgae
if (localStorage.product != null) {
  DataProduct = JSON.parse(localStorage.product);
} else {
  DataProduct = [];
}

//Create the new product and look how many count there're then save it in the LocalStorage and ShowData
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
  if (count.value > 1) {
    for (let i = 0; i < count.value; i++) {
      DataProduct.push(NewProduct);
    }
  } else {
    DataProduct.push(NewProduct);
  }
  localStorage.setItem("product", JSON.stringify(DataProduct));
  DeleteAllDataAfterTakingThem();
  GetTotalAcc();
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

  //Creat btn to delete all the data in table and in Localstorage too
  if (DataProduct.length > 0) {
    DeleteAllBtn.innerHTML = `<button type="button" class="btn btn-danger" >Delete All (${DataProduct.length}) </button>`;
    DeleteAllBtn.style.display = "block";
  } else {
    DeleteAllBtn.innerHTML = "";
    DeleteAllBtn.style.display = "none";
  }
}
ShowData();

//function to delete all the data by one click if there're
DeleteAllBtn.addEventListener("click", function () {
  DataProduct.splice(0);
  localStorage.clear();
  ShowData();
});

Delete.addEventListener('click', function (i) {
console.log(i)
})
