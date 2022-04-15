let count = 0;
let i = 0;
let price_initial = 125.00;
let price = 0;
// let closed = 0;

const increment = document.getElementById("right");
const decrement = document.getElementById("left");
const selector = document.getElementById("middle");
const AddToCart = document.getElementById("button");
const cart_notif = document.getElementById("cart-notif");
const cart = document.getElementById("cart");
const cart_infor = document.getElementById("info");
const pricing = document.getElementById("pricing");
const counts = document.getElementById("counts");
const cart_infor_emp = document.getElementById("info-empty")
const closed = document.getElementById("close");
const closedd = document.getElementById("closed");

increment.addEventListener('click', function (){
	i++;
	selector.innerHTML = i;
});

decrement.addEventListener('click', function (){
	if (i == 0)
		console.log("nope");
	else
	{
		i--;
		price += price_initial * count;
		selector.innerHTML = i;
	}
});

AddToCart.addEventListener('click', function(){
	if (i == 0)
		console.log("nope");
	else
	{
		count += i;
		cart_notif.innerHTML = count;
		cart_notif.style.backgroundColor = "orange";
		cart_notif.style.border = "2px solid orange";
	}
});

cart.addEventListener('click', function(){
	if (count == 0)
	{
		cart_infor_emp.style.backgroundColor = "#eaeaea";
		cart_infor_emp.style.height = "130px";
		cart_infor_emp.style.width = "300px";
		cart_infor_emp.style.display = "inline";
		closed = document.getElementById("close");
		
	}
	else
	{
		cart_infor.style.backgroundColor = "#eaeaea";
		cart_infor.style.height = "250px";
		cart_infor.style.width = "310px";
		price = price_initial * count;
		cart_infor.style.display = "inline";
		pricing.textContent = "$" + price;
		counts.textContent = "Fall Limited Edition Sneakers x " + count;
	}
});

closed.addEventListener('click', function(){
	cart_notif.innerHTML = "";
	cart_notif.style.backgroundColor = "white";
	cart_notif.style.border = "2px solid white";
	count = 0;
	cart_infor_emp.style.display = "none";
});

closedd.addEventListener('click', function(){
	cart_notif.innerHTML = "";
	cart_notif.style.backgroundColor = "white";
	cart_notif.style.border = "2px solid white";
	count = 0;
	cart_infor.style.display = "none";
});