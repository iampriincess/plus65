@extends('layouts.master')

@section('title','About')

@section('content')

<section id="bannerAbout">
	<div class="container text-center">
		<h1 class="t-white section-title">About us</h1>
	</div>
</section>
<section id="about">
	<div class="container">
		<div class="row d-flex align-items-center">
			<div class="col-sm-6 col-xs-12 animate-left animate__animated animate__slow">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatem nesciunt ipsum praesentium sunt, repellat deserunt unde fuga reprehenderit, numquam suscipit in, error ipsa explicabo, aspernatur quo ipsum rem aperiam. Facere nulla fugit suscipit voluptatem repellendus a ut voluptatibus eaque aspernatur sunt consequatur cupiditate animi aut, molestias ea totam ullam harum eos! Error iste harum animi maxime rem </p>

				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae rem sit quas ipsam accusamus nam natus unde numquam assumenda? impedit nemo consequuntur odio qui maiores? Ad commodi provident obcaecati quos architecto nulla voluptas qui dolor, ullam vel maxime quidem sapiente nesciunt eaque soluta aliquam quod, sunt quis adipisci consectetur reprehenderit sint mollitia. Cum sint quaerat temporibus? Cupiditate in quisquam culpa porro laborum laudantium ex fugiat expedita veniam incidunt. Vero omnis necessitatibus, facere sequi id numquam rerum veritatis?</p>
			</div>
			<div class="col-sm-6 col-xs-12 animate-right animate__animated animate__slow">
				<img src="{{ asset('img/about.jpg') }}" alt="img">
				
			</div>
		</div>
		
	</div>
</section>

@stop