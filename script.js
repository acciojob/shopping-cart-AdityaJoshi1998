//your code here
let grandtotal = 0;
const addData = () => {
  let name = document.getElementById('itemname').value;
  let quantity = document.getElementById('itemquantity').value;
  let price = document.getElementById('itemprice').value;
  let table = document.getElementById('table');
  let newRow = table.insertRow(table.rows.length - 1);
  let namecell = newRow.insertCell(0);
  let quantitycell = newRow.insertCell(1);
  let pricecell = newRow.insertCell(2);
  let totalprice = newRow.insertCell(3);
  namecell.classList.add("item");
  totalprice.classList.add("price");
  namecell.innerHTML = name;
  quantitycell.innerHTML = quantity;
  pricecell.innerHTML = price;
  totalprice.innerHTML = quantity * price;
  grandtotal += quantity * price;
  document.getElementById('total').innerHTML = "Total Ammount " + grandtotal + " RS";
  document.getElementById('input').reset();
}

module.exports = addData;