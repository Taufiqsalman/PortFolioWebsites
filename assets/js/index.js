let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName('myslides');
	if (n >= slides.length || slideIndex >= slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	if (window.matchMedia('only screen and (max-width: 768px)')) {
		slides[slideIndex - 1].style.display = 'block';
	} else {
		slides[slideIndex - 1].style.display = 'block';
		slides[slideIndex].style.display = 'block';
	}
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
	showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
	showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
	let i;
	let slides = document.getElementsByClassName('myslides-2');
	if (n >= slides.length || slideIndex2 >= slides.length) {
		slideIndex2 = 1;
	}
	if (n < 1) {
		slideIndex2 = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	if (window.matchMedia('only screen and (max-width: 768px)')) {
		slides[slideIndex2 - 1].style.display = 'block';
	} else {
		slides[slideIndex2 - 1].style.display = 'block';
		slides[slideIndex2].style.display = 'block';
	}
}
