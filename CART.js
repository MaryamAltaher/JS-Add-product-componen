document.getElementById("btn").setAttribute('onclick',"add_func()");
const delete_func=function(clicked){
    let removebtn = clicked.target.parentNode; 
    let row = removebtn.parentNode; 
    row.parentNode.removeChild(row);
};
const add_func=function() {
let productName=document.getElementById('product-name').value;
let productPrice=Number(document.getElementById('price').value);
let productNumber=Number(document.getElementById('quantity').value);
let total=productNumber*productPrice;
if (productName !=""&&productPrice !=""&&productNumber !=""&& !Number.isNaN(productPrice)&& productPrice > 0 &&Number.isInteger(productNumber) && productNumber > 0)
{document.getElementById('products').innerHTML+=`<tr class="thead-dark"><td>${productName}</td><td>${productPrice}$</td><td>${productNumber}</td><td>${total}$</td><td><button onclick="delete_func(event)">remove</button></td></tr>`}
else
{alert ("check Product name , Price & Quantity again please");}
};