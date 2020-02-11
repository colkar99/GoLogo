//const products = require('../data/products');

// Add product to cart function called in product detail page
function addProductToCart(event){
	let productId = document.getElementById('productId').value;
	let quantity = document.getElementById('quantity').value;
	let embroideredBefore = document.getElementById('embroideredBefore').value;
	let size = document.getElementById('size').value;
	let color = document.getElementById('color').value;
	let embroideryLocation = document.getElementById('embroideryLocation').value;
	let comments = "Logo cost not added"
	let addtionalCost = 0;
	debugger
	if (embroideredBefore == 'no'){
		addtionalCost = 300;
		 comments = "Logo cost 300 included"
		}
	let product = products.find((product)=> product.id == productId);
	let singleProduct = {
		productId: product.id,
		productName: product.name,
		productImage: product.images,
		quantity:quantity,
		productPrice: product.price,
		embroideredBeforeCost: addtionalCost,
		totalPrice: (product.price * quantity) + addtionalCost,
		size: size,
		color: color,
		embroideryLocation: embroideryLocation,
		comments: comments
	}
	let getCart = JSON.parse(localStorage.getItem("cart") || "[]");
	if(getCart.length == 0){
		let cart = {
			products: [],
			totalCost: 0,
		}
		cart.products.push(singleProduct);
		cart.totalCost = totalCostCalculator(cart);
		getCart.push(cart)
	}else{
		getCart[0].products.push(singleProduct);
		getCart[0].totalCost = totalCostCalculator(getCart[0]);
	}
	localStorage.setItem("cart", JSON.stringify(getCart));
	//window.location = "http://127.0.0.1:5500/my-cart.html";
	window.location = `${path}/my-cart.html`
}


function dynamicQuantity(e){
	e.stopPropagation();
	let count = 0;
	let dynamicDivParent = document.getElementById('buttonWrapperParent');
	let dynamicDiv = document.getElementById('buttonWrapper0');
	let newDiv = dynamicDiv.cloneNode(true);
	newDiv.id = `buttonWrapper${dynamicDivParent.children.length -1}`;
	dynamicDivParent.appendChild(newDiv);

}
function removeDynamicQuantity(){
	let dynamicDivParent = document.getElementById('buttonWrapperParent');
	if(dynamicDivParent.children.length == 2) return;
	dynamicDivParent.removeChild(dynamicDivParent.lastChild);
}