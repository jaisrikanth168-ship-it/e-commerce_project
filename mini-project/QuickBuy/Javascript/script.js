let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

function addToCart(name,price){
    cart.push({name,price});
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartCount();
    alert(name+" added to cart");
}

function searchProduct() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let productName = card.querySelector("h3").innerText.toLowerCase();

        if (productName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function darkMode(){
    document.body.classList.toggle("dark");
}

function updateCartCount(){

let count=document.getElementById("cart-count");

    if(count){
    count.innerText=cart.length;
    }

}

function displayCart(){

let cartItems=document.getElementById("cart-items");

if(!cartItems) return;
let total=0;

cartItems.innerHTML="";

cart.forEach((item,index)=>{
let row=document.createElement("tr");

row.innerHTML=`
<td>${item.name}</td>
<td>₹${item.price}</td>
<td><button onclick="removeItem(${index})">X</button></td>`;

cartItems.appendChild(row);
total+=item.price;
});
document.getElementById("total").innerText="Total: ₹"+total;
}

function removeItem(index){
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart));
displayCart();
updateCartCount();
}
displayCart();
