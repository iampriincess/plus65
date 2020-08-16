<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8"> 
	<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1"> 
	<meta http-equiv="X-UA-Compatible" content="ie=edge"> 
	<title>@yield('title')</title>

	<!-- <link rel="stylesheet" href="/public/css/bootstrap.min.css"> -->
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css">
	<link rel="stylesheet" href="/css/app.css">
</head>
<body>
	<header id="main-header">
		<div class="container ">
			<div class="row">
				<div class="col">
					<div class="logo"></div>
				</div>
				<div class="col">
					<div class="d-none d-md-block">
						<ul class="nav pull-right">
					  <li class="nav-item">
					    <a class="nav-link {{ Request::is('/*') ? 'active' : '' }}" href="/">HOME</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link {{ Request::is('about*') ? 'active' : '' }}" href="/about">ABOUT</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link {{ Request::is('contact*') ? 'active' : '' }}" href="/contact">CONTACT</a>
					  </li>
					  <span class="underline"></span>
					</ul>
					</div>
					<div class="d-sm-block d-md-none">
					<div class="menu-btn" id="menuMobileTrigger">
						<a href="#" class="fas fa-bars"></a>
						<a href="#" class="fas fa-times"></a>
					</div>
				</div>
			</div>
		</div>

		<div class="menu" id="menuMobileDrop">
			<ul class="menu-nav">
			  <li class="nav-item">
			    <a class="nav-link active" href="/">HOME</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="/about">ABOUT</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link" href="/contact">CONTACT</a>
			  </li>
			  <span class="underline"></span>
			</ul>
		</div>
	</header>

	@yield('content')

	<footer id="footer">
		<div class="container d-flex justify-content-center text-center">
			<div>
				<div class="logo d-inline-block"></div>
			<div class="nav-wrapper d-flex flex-content-center mt-5">
				<ul class="nav">
				  <li class="nav-item animate-up animate__animated animate-1">
				    <a class="nav-link" href="#">FACEBOOK</a>
				  </li>
				  <li class="nav-item animate-up animate__animated animate-2">
				    <a class="nav-link" href="#">TWITTER</a>
				  </li>
				  <li class="nav-item animate-up animate__animated animate-3">
				    <a class="nav-link" href="#">GOOGLE +</a>
				  </li>
				  <li class="nav-item animate-up animate__animated animate-4">
				    <a class="nav-link" href="#">DRIBBLE</a>
				  </li>
				  <li class="nav-item animate-up animate__animated animate-5">
				    <a class="nav-link" href="#">INSTAGRAM</a>
				  </li>
				  <span class="underline"></span>
				</ul>
			</div>
			<div class="mt-5">
				<p class="t-white">demo</p>
				<p class="t-white">1231231312</p>
			</div>
			</div>
		</div>
		<div class="copyright">
			<div class="text-center t-white">@2018 Demo</div>
		</div>
	</footer>

	<script src="https://kit.fontawesome.com/a076d05399.js"></script>
	<script type="text/javascript" src="/js/script.js"></script>
</body>
</html>