(function ($) {
	"use strict";

	// Preloader
	$(window).on('load', function () {
		if ($('#preloader').length) {
			$('#preloader').delay(100).fadeOut('slow', function () {
				$(this).remove();
			});
		}

	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	var nav = $('nav');
	var navHeight = nav.outerHeight();

	/*--/ ScrollReveal /Easy scroll animations for web and mobile browsers /--*/
	window.sr = ScrollReveal();
	sr.reveal('.foo', { duration: 1000, delay: 15 });

	/*--/ Carousel owl /--*/
	$('#carousel').owlCarousel({
		loop: true,
		margin: -1,
		items: 1,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true
	});

	/*--/ Animate Carousel /--*/
	$('.intro-carousel').on('translate.owl.carousel', function () {
		$('.intro-content .intro-title').removeClass('zoomIn animated').hide();
		$('.intro-content .intro-price').removeClass('fadeInUp animated').hide();
		$('.intro-content .intro-title-top, .intro-content .spacial').removeClass('fadeIn animated').hide();
	});

	$('.intro-carousel').on('translated.owl.carousel', function () {
		$('.intro-content .intro-title').addClass('zoomIn animated').show();
		$('.intro-content .intro-price').addClass('fadeInUp animated').show();
		$('.intro-content .intro-title-top, .intro-content .spacial').addClass('fadeIn animated').show();
	});

	/*--/ Navbar Collapse /--*/
	$('.navbar-toggle-box-collapse').on('click', function () {
		$('body').removeClass('box-collapse-closed').addClass('box-collapse-open');
	});
	$('.close-box-collapse, .click-closed').on('click', function () {
		$('body').removeClass('box-collapse-open').addClass('box-collapse-closed');
		$('.menu-list ul').slideUp(700);
	});

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).bind('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-default').addClass('navbar-reduce');
			$('.navbar-default').removeClass('navbar-trans');
		} else {
			$('.navbar-default').addClass('navbar-trans');
			$('.navbar-default').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--/ Property owl /--*/
	$('#property-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Property owl owl /--*/
	$('#property-single-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		responsive: {
			0: {
				items: 1,
			}
		}
	});

	/*--/ News owl /--*/
	$('#new-carousel').owlCarousel({
		loop: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			769: {
				items: 2,
			},
			992: {
				items: 3,
			}
		}
	});

	/*--/ Testimonials owl /--*/
	$('#testimonial-carousel').owlCarousel({
		margin: 0,
		autoplay: true,
		nav: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeInUp',
		navText: ['<i class="ion-ios-arrow-back" aria-hidden="true"></i>', '<i class="ion-ios-arrow-forward" aria-hidden="true"></i>'],
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			}
		}
	});

})(jQuery);

// function loadDropdown(options){
// 	var select = document.getElementById("carVariety"); 
// 	select.innerHTML = null;
// 	for(let option of options){
// 		var opt = option.value;
// 		var el = document.createElement("option");
// 		el.textContent = opt;
// 		el.value = opt;
// 		select.appendChild(el);
// 	}
// }
// function bookingForm(event) {
// 	debugger
// 	let obj = loadFormValue();
// 	console.log(obj);
// 	$.ajax({
// 		headers: {
// 			'Access-Control-Allow-Origin': '*',
// 			'Content-Type': 'application/json'
// 		},
// 		url: "https://api.ezclean.co.in/api/order/web-order",
// 		type: "post",
// 		data: JSON.stringify(obj),
// 		success: function (d) {
// 			console.log(d)
// 		},
// 		error: function (d) {
// 			console.log(d);
// 		}


// 	});
// 	var element = document.getElementById("body");
// 	element.setAttribute('class', "box-collapse-closed");


// }
// function loadFormValue() {
// 	let params = (new URL(document.location)).searchParams;
// 	let obj = { preferDateTime: {} };
// 	obj['carModel'] = document.getElementById('carModel').value;
// 	obj['carVariety'] = document.getElementById('carVariety').value;
// 	obj.preferDateTime['preferDate'] = document.getElementById('preferDate').value;
// 	obj.preferDateTime['preferTime'] = document.getElementById('preferTime').value;
// 	obj['name'] = document.getElementById('name').value;
// 	obj['mobileNo'] = document.getElementById('mobileNo').value;
// 	obj['email'] = document.getElementById('email').value;
// 	obj['washType'] = document.getElementById('washType').value;
// 	obj['isDoorStep'] = true;
// 	obj['houseType'] = document.getElementById('houseType').value;
// 	obj['orderFrom'] = params.get('orderFrom') || "organic";
// 	return obj;
// }
let mainCart;
function gotoCart(filter) {
	let filterProduts;
	if (filter == "male" || filter == "female") {
		filterProduts = products.filter((product) => {
			return product.gender == filter;
		})
	} else {
		filterProduts = products;
	}
	let row = document.getElementById("appendProducts");
	for (let product of filterProduts) {
		console.log(product);
		let col_12 = document.createElement('div');
		col_12.className = "col-12 col-sm-8 col-md-6 col-lg-4 padding_20";
		let card = document.createElement("div");
		card.className = "card";
		let card_image = document.createElement('img');
		card_image.className = "card-img";
		card_image.src = product.images;
		card_image.height = "400";

		let card_body = document.createElement("div");
		card_body.className = "card-body";
		let card_title = document.createElement("h4");
		card_title.className = "card-title";
		card_title.innerText = product.name;
		let card_subtitle = document.createElement("h6");
		card_subtitle.className = "card-subtitle mb-2 text-muted";
		card_subtitle.innerText = product.style;
		let card_text = document.createElement('p');
		card_text.className = "card-text";
		card_text.innerText = product.brand;
		let d_flex = document.createElement('div');
		d_flex.className = "buy d-flex justify-content-between align-items-center";
		let price_text = document.createElement('div');
		price_text.className = "price text-success";
		let button = document.createElement('button');
		button.className = "card-link btn btn-danger mt-3";
		button.innerText = "Add To Cart";
		button.value = product.id;
		button.addEventListener('click', function (e) {
			gotoProductPage(e);
		})
		let mt_4 = document.createElement('h5');
		mt_4.className = "mt-4";
		let i_rupees = document.createElement('i');
		i_rupees.className = 'fa fa-inr';
		i_rupees.innerText = ` ${product.price}`;
		mt_4.appendChild(i_rupees)
		price_text.appendChild(mt_4);
		d_flex.appendChild(price_text);
		d_flex.appendChild(button);
		card_body.appendChild(card_title);
		card_body.appendChild(card_subtitle);
		card_body.appendChild(card_text);
		card_body.appendChild(d_flex);
		card.appendChild(card_image);
		card.appendChild(card_body);
		col_12.appendChild(card);
		row.appendChild(col_12);
	}
	myCartInit();


}
function initProduct() {
	let productId = localStorage.getItem('productId');
	let product = products.find((product) => product.id == productId);
	let productImgDiv = document.getElementById('productImage');
	let imgTag = document.createElement('img');
	imgTag.className = "agent-avatar img-fluid";
	imgTag.src = product.images;
	productImgDiv.appendChild(imgTag);
	document.getElementById('price').innerText = product.price;
	document.getElementById('partNumber').innerText = product.partNumber;
	document.getElementById('productTitle').innerText = product.name;
	document.getElementById('productId').value = product.id;
	myCartInit();
};
function gotoProductPage(event) {
	let productId = event.target.value;
	localStorage.setItem('productId', productId);
	window.location = "http://127.0.0.1:5500/products.html"
}
//Init cart produts to variable
function myCartInit() {
	mainCart = JSON.parse(localStorage.getItem("cart") || "[]");
	document.getElementById('cartValue').innerText = (mainCart[0]) ? mainCart[0].products.length : 0;
}
function totalCostCalculator(cart) {
	let count = 0;
	for(let pro of cart.products){
		count += pro.totalPrice
	}
	return count;
}
// This code used for my cart page
function createCartPage() {
	let body = document.getElementById('addCartData');
	myCartInit()
	if (mainCart.length <= 0) {
		let td = document.createElement('td')
		td.innerText = "No products available in cart";
		body.appendChild(td);
		document.getElementById('proceedToCheckout1').style.display = "none";
		document.getElementById('proceedToCheckout2').style.display = "none";
		document.getElementById('totalPrice').style.display = "none";
		return
	} else {
		for (let pro of mainCart[0].products) {
			let tr = document.createElement('tr');
			let td_1 = document.createElement('td');
			td_1.innerText = pro.productId;
			let td_2 = document.createElement('td');
			td_2.innerText = pro.productName;
			let td_3 = document.createElement('td');
			td_3.innerText = pro.comments;

			let td_4 = document.createElement('td');
			td_4.setAttribute("style", "width: 9%;")
			let div_4 = document.createElement('div');
			div_4.className = " form-group";
			let input_4 = document.createElement('input');
			input_4.type = 'number';
			input_4.className = 'form-control';
			input_4.id = "quantity";
			input_4.name = "quantity";
			input_4.value = pro.quantity
			input_4.required = true;
			input_4.disabled = true;
			div_4.appendChild(input_4);
			td_4.append(div_4);
			let td_5 = document.createElement('td');
			let span1_5 = document.createElement('span');
			span1_5.innerText = `${pro.quantity} * `;
			let span2_5 = document.createElement('span');
			let i_5 = document.createElement('i');
			i_5.className = "fa fa-inr";
			if(pro.embroideredBeforeCost > 0){
				i_5.innerText = `${pro.productPrice} + ${pro.embroideredBeforeCost}`
			}else{
				i_5.innerText = pro.productPrice
			}
			td_5.appendChild(span1_5);
			span2_5.appendChild(i_5);
			td_5.appendChild(span2_5);
			let td_6 = document.createElement('td');
			td_6.innerText = pro.totalPrice;
			let td_7 = document.createElement('td');
			let button = document.createElement('button');
			button.className = "btn btn-danger"
			button.innerText = "X";
			button.value = pro.productId;
			button.addEventListener('click', function (e) {
				removeFromCart(e);
			})
			td_7.appendChild(button);
			tr.appendChild(td_1)
			tr.appendChild(td_2)
			tr.appendChild(td_3)
			tr.appendChild(td_4)
			tr.appendChild(td_5)
			tr.appendChild(td_6)
			tr.appendChild(td_7)
			body.appendChild(tr);
		}
		document.getElementById('totalPrice').innerText = mainCart[0].totalCost;
	}
}
function removeFromCart(e) {

let productId = e.target.value;
let productIndex = mainCart[0].products.findIndex(x => x.productId == productId);
mainCart[0].products.splice(productIndex,1);
mainCart[0].totalCost = totalCostCalculator(mainCart[0]);
localStorage.setItem("cart", JSON.stringify(mainCart));
window.location = "http://127.0.0.1:5500/my-cart.html";
}
//

function pageEngine() {
	let homePage = document.getElementById('homePage');
	//let aboutPage = document.getElementById('aboutPage');
	let mensPage = document.getElementById('mensPage');
	let womansPage = document.getElementById('womansPage');
	let productPage = document.getElementById('productPage');
	let myCartPage = document.getElementById('myCartPage');
	if (homePage) {
		gotoCart('home')
	}
	else if (mensPage) {
		gotoCart('male')
	}
	else if (womansPage) {
		gotoCart('female')
	}
	else if (productPage) {
		initProduct();
	}
	else if (myCartPage) {
		createCartPage()
	}
	else {
		myCartInit();
	}
}

pageEngine();

