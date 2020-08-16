@extends('layouts.master')

@section('title','Contact')

@section('content')

<section id="bannerContact">
	<div class="container text-center">
		<h1 class="t-white section-title">Contact Us</h1>
	</div>
</section>
<section id="contact">
	<div class="container">
		<div class="row">
			<div class="col-md-5 col-sm-12 animate-left animate__animated animate__slow">
				<h2 class="section-title">Get in Touch</h2>
				<p class="f18 t-black-2">Our Customer Service Department is at your complete disposal for any questions.</p>

				<p class="mt-5 font-weight-bold">Address</p>
				<p class="font-weight-light">Cebu City, Philippines</p>
				<p class="font-weight-bold">Phone</p>
				<p class="font-weight-light">1234567</p>
				<p class="font-weight-bold">Email Address</p>
				<p class="font-weight-light">info@website.com</p>
			</div>
			<div class="col-md-7 col-sm-12 animate-right animate__animated animate__slow">
				<p class="f22 mt-sm-5">Need some help? Fill out the form below and our staff will be in touch!</p>
				<form action="" id="contactForm" class="mt-5">
					<div class="form-group">
						<input type="text" class="form-control" name="name*" id="name" value="" placeholder="Your Name">
						<span class="error-message">The field is required.</span>
					</div>
					<div class="form-group">
						<input type="email" class="form-control" name="email*" id="email" value="" placeholder="Your E-mail">
						<span class="error-message">The field is required.</span>
					</div>
					<div class="form-group">
						<textarea name="message" rows="5" cols="40" id="message" placeholder="Your Message..." class="form-control"></textarea>
						<span class="error-message">The field is required.</span>
					</div>

					<button class="btn btn-1 mt-3 btn-submit" id="submitForm">Send Message</button>
				</form>
			</div>
		</div>
	</div>
</section>

@stop