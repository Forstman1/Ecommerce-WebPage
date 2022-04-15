

const small_images1 = document.getElementById("small-images1");
const small_images2 = document.getElementById("small-images2");
const small_images3 = document.getElementById("small-images3");
const small_images4 = document.getElementById("small-images4");
const closing = document.getElementById("closing");
const big_shadow = document.getElementById("big-shadow")
const center_image = document.getElementById("center-image");



small_images1.addEventListener('click', function(){
	closing.style.display = "inline";
	small_images1.style.border = "3px solid orange";
	small_images1.style.opacity = "0.2";
	big_shadow.style.display = "inline";
	center_image.style.display = "inline";
	center_image.innerHTML = "<img class='box-images' src='images/image-product-1.jpg' alt='product'></img>";
});


small_images2.addEventListener('click', function(){
	closing.style.display = "inline";
	small_images2.style.border = "3px solid orange";
	small_images2.style.opacity = "0.2";
	big_shadow.style.display = "inline";
	center_image.style.display = "inline";
	center_image.innerHTML = "<img class='box-images' src='images/image-product-2.jpg' alt='product'></img>";
});

small_images3.addEventListener('click', function(){
	closing.style.display = "inline";
	small_images3.style.border = "3px solid orange";
	small_images3.style.opacity = "0.2";
	big_shadow.style.display = "inline";
	center_image.style.display = "inline";
	center_image.innerHTML = "<img class='box-images' src='images/image-product-3.jpg' alt='product'></img>";
});


small_images4.addEventListener('click', function(){
	closing.style.display = "inline";
	small_images4.style.border = "3px solid orange";
	small_images4.style.opacity = "0.2";
	big_shadow.style.display = "inline";
	center_image.style.display = "inline";
	center_image.innerHTML = "<img class='box-images' src='images/image-product-4.jpg' alt='product'></img>";
});


closing.addEventListener('click', function(){
	closing.style.display = "none";
	small_images1.style.border = "none";
	small_images1.style.opacity = "1";
	small_images2.style.border = "none";
	small_images2.style.opacity = "1";
	small_images3.style.border = "none";
	small_images3.style.opacity = "1";
	small_images4.style.border = "none";
	small_images4.style.opacity = "1";
	big_shadow.style.display = "none";
	center_image.style.display = "none";
})