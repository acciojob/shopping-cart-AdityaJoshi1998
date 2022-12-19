//your code here
let item = document.getElementsByTagName("input")[0];
let price = document.getElementsByTagName("input")[1];
let button = document.getElementsByTagName("button")[0];
let container = document.getElementsByClassName("container")[0];
let ss = document.getElementsByTagName('h3')[0];
let str = "";
let arr = [];
function addRow() {
   
  if (item.value == "" || price.value == "") {
     ss.innerText = "All fields required";
  }
  else if(item.validity.typeMismatch || price.validity.typeMismatch){
     ss.innerText = "Please insert valid input";
  }

else {
    str = str + "+" + price.value;
    ss.innerText = "";
    let table = document.getElementById("table");
   let row = table.insertRow(-1); 
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
   c1.innerText = item.value;
    c2.innerText = price.value;
    item.value = "";
    price.value = "";
    ss.innerText = "Total -:    " + eval(str);
  }
}
console.log(arr);
button.addEventListener("click", addRow);