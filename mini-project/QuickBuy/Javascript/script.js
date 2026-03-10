function searchProduct(){
let input = document.getElementById("search").value.toLowerCase();
let cards = document.querySelectorAll(".card");
cards.forEach(card => {

let title = card.querySelector("h3").innerText.toLowerCase();

if(title.includes(input)){
card.style.display="block";
}else{
card.style.display="none";
}
});
}


let wishlist = [];

function addWishlist(product){
wishlist.push(product);
alert(product + " added to wishlist ❤️");
}



let cart = [];

function addToCart(name,price){
cart.push({name,price});
updateCartCount();
saveCart();
alert("Product added to cart successfully");
}

function updateCartCount(){
document.querySelectorAll("#cart-count").forEach(el=>{
el.innerText = cart.length;
})
}

function saveCart(){
localStorage.setItem("cart",JSON.stringify(cart));
}

function loadCart(){

let data = localStorage.getItem("cart");
if(data){
cart = JSON.parse(data);
updateCartCount();
}

}

function displayCart(){
let table = document.getElementById("cart-items");
let total = 0;
table.innerHTML="";
cart.forEach((item,index)=>{
total += item.price;
table.innerHTML += `
<tr>
<td>${item.name}</td>
<td>₹${item.price}</td>
<td><button onclick="removeItem(${index})">Remove</button></td>
</tr>
`

});

document.getElementById("total").innerText = total;

}

function removeItem(index){
cart.splice(index,1);
saveCart();
displayCart();
updateCartCount();
}

loadCart();