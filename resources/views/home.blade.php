@extends('layouts.master')

@section('title','Home')

@section('content')

	<section id="banner">
 		<div class="container text-center">
 			<h1 class="t-white">DEMO</h1>
 			<p class="t-yellow-1 f25">plus 65</p>
 		</div>

 		<a class="page-scroll" href="#services">
	    	<div class="mouse-icon">
		        <div class="wheel"></div>
		    </div>
		</a>
 	</section>
 	<section id="services">
 		<div class="container">
 			<div class="row">
 				<div class="col-md-4 col-sm-12 d-flex animate-up animate__animated animate-1">
 					<i class="fas fa-bezier-curve"></i>
 					<div class="description">
 						<h4>GRAPHIC DESIGN</h4>
 						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos?</p>
 					</div>
 				</div>
 				<div class="col-md-4 col-sm-12 d-flex animate-up animate__animated animate-2">
 					<i class="fas fa-desktop"></i>
 					<div class="description">
 						<h4>WEB DEVELOPMENT</h4>
 						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos?</p>
 					</div>
 				</div>
 				<div class="col-md-4 col-sm-12 d-flex animate-up animate__animated animate-3">
 					<i class="fas fa-bullhorn"></i>
 					<div class="description">
 						<h4>MARKETING</h4>
 						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quos?</p>
 					</div>
 				</div>
 			</div>
 		</div>
 	</section>
 	<section id="expertise">
 		<div class="container">
 			<h2 id="expertiseId" class="section-title animate-up animate__animated">Our Expertise</h2>
 			<div class="row">
 				<div class="col-md-4 col-sm-12">
		 			<div class="progress-wrapper mt-2">
		 				<div class="expertise-box">
				              <div class="expertise-bar">
				                    <div id="expertiseBranding" class="expertisebar-bar"><div class="percent-text">90%</div></div>
				              </div>
				              <div class="expertise-area">BRANDING</div>
				        </div>
				        <div class="expertise-box">
				              <div class="expertise-bar">
				                    <div id="expertiseDesign" class="expertisebar-bar"><div class="percent-text">80%</div></div>
				              </div>
				              <div class="expertise-area">DESIGN</div>
				        </div>
				        <div class="expertise-box">
				              <div class="expertise-bar">
				                    <div id="expertiseDevelopment" class="expertisebar-bar"><div class="percent-text">85%</div></div>
				              </div>
				              <div class="expertise-area">DEVELOPMENT</div>
				        </div>
		 			</div>
		 		</div>
		 		<div class="col-md-8 col-sm-12">
		 			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt obcaecati voluptate, dolor repellendus sit velit, minus corrupti culpa numquam nisi quae, odit rem dicta officiis eligendi quod incidunt consequatur quia sint? Error nemo ea illum, aspernatur dignissimos distinctio velit sapiente vero esse at iusto nulla quae odio voluptatibus exercitationem quos, tenetur numquam recusandae nesciunt maiores reiciendis aut reprehenderit hic harum. Sapiente rem ab perspiciatis obcaecati sint, praesentium quidem quos nisi aspernatur nulla ratione saepe veniam magnam labore veritatis temporibus laborum quaerat asperiores officia. Sit minima quidem, neque exercitationem distinctio obcaecati modi enim aspernatur possimus? Esse cupiditate accusantium dolor culpa deleniti!</p>
		 		</div>
 			</div>
 		</div>
 	</section>
 	<section id="magic">
 		<div class="row d-flex align-items-center bg-gray-1">
 			<div class="col-md-6 col-sm-12 no-pad-right">
 				<img src="{{ asset('img/magic.png') }}" alt="img">
 			</div>
			<div class="col-md-6 col-sm-12 pl-0">
				<div class="container">
					<div class="row m-0">
						<div class="col-lg-9 col-sm-12 pt-3 pb-3">
							<h2 class="section-title animate-up animate__animated animate-1">Let's make magic.</h2>
							<p class="animate-up animate__animated animate-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem nesciunt ipsum praesentium sunt, repellat deserunt unde fuga reprehenderit, numquam suscipit in, error ipsa explicabo, aspernatur quo ipsum rem aperiam. Facere nulla fugit suscipit voluptatem repellendus a ut voluptatibus eaque aspernatur sunt consequatur cupiditate animi aut, molestias ea totam ullam harum eos! Error iste harum animi maxime rem?</p>
							<p class="animate__animated animate-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem sit quas ipsam accusamus nam natus unde numquam assumenda? impedit nemo consequuntur odio qui maiores? Ad commodi provident obcaecati quos architecto nulla voluptas qui dolor, ullam vel maxime quidem sapiente nesciunt eaque soluta aliquam quod, sunt quis adipisci consectetur reprehenderit sint mollitia. Cum sint quaerat temporibus? Cupiditate in quisquam culpa porro laborum laudantium ex fugiat expedita veniam incidunt. Vero omnis necessitatibus, facere sequi id numquam rerum veritatis?</p>
						</div>
					</div>
				</div>
			</div>
 		</div>
 	</section>

 @stop