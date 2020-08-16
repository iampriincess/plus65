function forEach(arr, callback) {
	Array.prototype.forEach.call(arr, callback);
}

function mobileNav() {
	var trigger = document.getElementById('menuMobileTrigger');
	var mainHeader = document.getElementById('main-header');

	trigger.addEventListener('click', function(e){
		if(mainHeader.classList.contains('show-mobile-nav')) {
			mainHeader.classList.remove('show-mobile-nav');
		}
		else{
			mainHeader.classList.add('show-mobile-nav');
		}
		e.preventDefault();
	});
}

function validateForm () {

	var form = document.getElementById('contactForm');

	if(typeof(form) != undefined && form != null) {

		var formGroup = form.querySelectorAll('.form-group');
		var submit = document.getElementById('submitForm');

		var validateEmail = function(email) {
		    var se = /^[\w\.\-_]{1,}@[\w\.\-]{6,}/ 
		    return se.test(email);
		}

		submit.addEventListener('click', function(e) {
			e.preventDefault();

			forEach(formGroup, function(formField){
				var input = formField.getElementsByClassName('form-control');
				var errorMessage = formField.getElementsByClassName('error-message');
				var thisValue = input[0].value;

				input[0].classList.remove('error');

				thisValue = thisValue.trim();

				if( thisValue == '' && input[0].type !== 'textarea') {
					input[0].classList.add('error');
					errorMessage[0].innerHTML = 'this field is required.';
				}
				else {
					if(input[0].type == 'email') {
						if(!validateEmail(thisValue)) {
							input[0].classList.add('error');
							errorMessage[0].innerHTML = 'email is invalid.';
						}
					}
				}
			});

		});
	}
}

function scrollTo () {
	var pageToScroll = document.querySelectorAll('.page-scroll');

	if( pageToScroll.length > 0 ) {
		forEach(pageToScroll, function(el){
			el.addEventListener('click',function(e){
				e.preventDefault();
				var hash = this.hash;
				hash = hash.replace('#','');
				var target = document.getElementById(hash);
				console.log(target);
				window.scroll({
					behavior: 'smooth',
					left: 0,
					top: target.offsetTop
				});
			});
		});
	}
}


mobileNav();
validateForm();
scrollTo();

window.addEventListener('scroll', function(e){
	var currentScroll = window.pageYOffset;
	var service = document.getElementById('services');
	var expertise = document.getElementById('expertise');
	var magic = document.getElementById('magic');
	var footer = document.getElementById('footer');
	var about = document.getElementById('about');
	var contact = document.getElementById('contact');

	var vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	var reduce = vh / 2;

	if(typeof(expertise) != undefined && expertise != null) {

		var expertisePosition = expertise.offsetTop;

		if(currentScroll >= (expertisePosition - reduce)) {
			var expertisebarItem = expertise.querySelectorAll('.expertisebar-bar');
			var expertiseTitle = expertise.querySelectorAll('.animate__animated');

			expertiseTitle[0].classList.add('animate__fadeInUp');
			forEach(expertisebarItem, function(el){
				el.classList.add('animate');
			});
		}
	}

	if(typeof(service) != undefined && service != null) {

		var servicePosition = service.offsetTop;

		if(currentScroll >= (servicePosition - reduce)) {
			var serviceItem = service.querySelectorAll('.animate__animated');
			forEach(serviceItem, function(el){
				el.classList.add('animate__fadeInUp');
			});
		}
	}
	
	if(typeof(magic) != undefined && magic != null) {
		
		var magicPosition = magic.offsetTop;

		if(currentScroll >= (magicPosition - reduce)) {
			var magicItem = magic.querySelectorAll('.animate__animated');
			forEach(magicItem, function(el){
				el.classList.add('animate__fadeInUp');
			});
		}
	}

	
	if(typeof(footer) != undefined && footer != null) {
		
		var footerPosition = footer.offsetTop;

		if(currentScroll >= (footerPosition - reduce)) {
			var footerItem = footer.querySelectorAll('.animate__animated');
			forEach(footerItem, function(el){
				el.classList.add('animate__fadeInUp');
			});
		}
	}

	if(typeof(about) != undefined && about != null) {
		
		var aboutPosition = about.offsetTop;

		if(currentScroll >= (aboutPosition - reduce)) {
			var aboutItemLeft = about.querySelectorAll('.animate-left');
			var aboutItemRight = about.querySelectorAll('.animate-right');

			aboutItemLeft[0].classList.add('animate__fadeInLeft');
			aboutItemRight[0].classList.add('animate__fadeInRight');
		}
	}

	if(typeof(contact) != undefined && contact != null) {
		
		var contactPosition = contact.offsetTop;

		if(currentScroll >= (contactPosition - reduce)) {
			var contactItemLeft = contact.querySelectorAll('.animate-left');
			var contactItemRight = contact.querySelectorAll('.animate-right');

			contactItemLeft[0].classList.add('animate__fadeInLeft');
			contactItemRight[0].classList.add('animate__fadeInRight');
		}
	}
	
});


alert(1);