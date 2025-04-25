<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AntWorld - Especies Exclusivas de Hormigas</title>
<script src="https://cdn.tailwindcss.com/3.4.16"></script>
<script>tailwind.config={theme:{extend:{colors:{primary:'#8B4513',secondary:'#D2B48C'},borderRadius:{'none':'0px','sm':'4px',DEFAULT:'8px','md':'12px','lg':'16px','xl':'20px','2xl':'24px','3xl':'32px','full':'9999px','button':'8px'}}}}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css" rel="stylesheet">
<style>
:where([class^="ri-"])::before { content: "\f3c2"; }
body {
font-family: 'Montserrat', sans-serif;
color: #333;
}
.ant-card:hover {
transform: translateY(-5px);
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}
.cart-drawer {
transform: translateX(100%);
transition: transform 0.3s ease-in-out;
}
.cart-drawer.open {
transform: translateX(0);
}
.overlay {
opacity: 0;
visibility: hidden;
transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}
.overlay.open {
opacity: 1;
visibility: visible;
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
input[type="number"] {
-moz-appearance: textfield;
}
.custom-checkbox {
position: relative;
cursor: pointer;
}
.custom-checkbox input {
position: absolute;
opacity: 0;
cursor: pointer;
}
.checkmark {
position: absolute;
top: 0;
left: 0;
height: 20px;
width: 20px;
background-color: #fff;
border: 2px solid #ddd;
border-radius: 4px;
}
.custom-checkbox:hover input ~ .checkmark {
border-color: #ccc;
}
.custom-checkbox input:checked ~ .checkmark {
background-color: #8B4513;
border-color: #8B4513;
}
.checkmark:after {
content: "";
position: absolute;
display: none;
}
.custom-checkbox input:checked ~ .checkmark:after {
display: block;
}
.custom-checkbox .checkmark:after {
left: 6px;
top: 2px;
width: 5px;
height: 10px;
border: solid white;
border-width: 0 2px 2px 0;
transform: rotate(45deg);
}
.range-slider {
-webkit-appearance: none;
width: 100%;
height: 6px;
border-radius: 5px;
background: #ddd;
outline: none;
}
.range-slider::-webkit-slider-thumb {
-webkit-appearance: none;
appearance: none;
width: 20px;
height: 20px;
border-radius: 50%;
background: #8B4513;
cursor: pointer;
}
.range-slider::-moz-range-thumb {
width: 20px;
height: 20px;
border-radius: 50%;
background: #8B4513;
cursor: pointer;
border: none;
}
.tab-content {
display: none;
}
.tab-content.active {
display: block;
}
.custom-switch {
position: relative;
display: inline-block;
width: 44px;
height: 24px;
}
.custom-switch input {
opacity: 0;
width: 0;
height: 0;
}
.switch-slider {
position: absolute;
cursor: pointer;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: #ccc;
transition: .4s;
border-radius: 24px;
}
.switch-slider:before {
position: absolute;
content: "";
height: 18px;
width: 18px;
left: 3px;
bottom: 3px;
background-color: white;
transition: .4s;
border-radius: 50%;
}
input:checked + .switch-slider {
background-color: #8B4513;
}
input:checked + .switch-slider:before {
transform: translateX(20px);
}
</style>
</head>
<body class="bg-white">
<!-- Overlay para el carrito -->
<div class="overlay fixed inset-0 bg-black bg-opacity-50 z-40" id="overlay"></div>
<!-- Header y Navegación -->
<header class="sticky top-0 bg-white shadow-sm z-30">
<div class="container mx-auto px-4 py-3 flex items-center justify-between">
<a href="#" class="flex items-center">
<span class="text-3xl font-['Pacifico'] text-primary">AntWorld</span>
</a>
<nav class="hidden md:flex items-center space-x-8">
<a href="#" class="nav-link text-gray-800 hover:text-primary font-medium" data-section="inicio">Inicio</a>
<a href="#especies" class="nav-link text-gray-800 hover:text-primary font-medium" data-section="especies">Especies</a>
<a href="#hormigueros" class="nav-link text-gray-800 hover:text-primary font-medium" data-section="hormigueros">Hormigueros</a>
<a href="#cuidados" class="nav-link text-gray-800 hover:text-primary font-medium" data-section="cuidados">Cuidados</a>
<a href="#contacto" class="nav-link text-gray-800 hover:text-primary font-medium" data-section="contacto">Contacto</a>
</nav>
<div class="flex items-center space-x-4">
<div class="relative">
<input type="text" id="searchInput" placeholder="Buscar especies..." class="py-2 pl-10 pr-4 w-40 lg:w-64 rounded-full border-none bg-gray-100 focus:ring-2 focus:ring-primary focus:outline-none text-sm">
<div class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-500">
<i class="ri-search-line"></i>
</div>
</div>
<button id="cartButton" class="relative w-10 h-10 flex items-center justify-center text-gray-700 hover:text-primary">
<i class="ri-shopping-cart-2-line text-xl"></i>
<span id="cartCount" class="absolute -top-1 -right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">0</span>
</button>
<button class="md:hidden w-10 h-10 flex items-center justify-center" id="mobileMenuButton">
<i class="ri-menu-line text-xl"></i>
</button>
</div>
</div>
<!-- Menú móvil -->
<div class="md:hidden hidden bg-white border-t" id="mobileMenu">
<div class="container mx-auto px-4 py-2">
<a href="#" class="nav-link block py-2 text-gray-800 hover:text-primary font-medium" data-section="inicio">Inicio</a>
<a href="#especies" class="nav-link block py-2 text-gray-800 hover:text-primary font-medium" data-section="especies">Especies</a>
<a href="#hormigueros" class="nav-link block py-2 text-gray-800 hover:text-primary font-medium" data-section="hormigueros">Hormigueros</a>
<a href="#cuidados" class="nav-link block py-2 text-gray-800 hover:text-primary font-medium" data-section="cuidados">Cuidados</a>
<a href="#contacto" class="nav-link block py-2 text-gray-800 hover:text-primary font-medium" data-section="contacto">Contacto</a>
</div>
</div>
</header>
<!-- Hero Section -->
<section class="relative h-[500px] overflow-hidden">
<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://readdy.ai/api/search-image?query=A%20close-up%20macro%20photography%20of%20a%20beautiful%20ant%20in%20natural%20environment%2C%20with%20blurred%20natural%20background.%20The%20image%20shows%20incredible%20detail%20of%20the%20ants%20exoskeleton%2C%20antennae%2C%20and%20legs.%20Soft%20natural%20lighting%20creates%20a%20warm%20atmosphere.%20The%20background%20is%20a%20soft%20gradient%20of%20earthy%20tones%20that%20complements%20the%20ants%20coloration&width=1600&height=800&seq=1&orientation=landscape');">
<div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
</div>
<div class="container mx-auto px-4 h-full flex items-center">
<div class="max-w-2xl text-white relative z-10">
<h1 class="text-4xl md:text-5xl font-bold mb-4">Especies Exclusivas de Hormigas</h1>
<p class="text-lg md:text-xl mb-8">Descubre el fascinante mundo de las hormigas con nuestra colección de especies seleccionadas para coleccionistas y entusiastas.</p>
<a href="#especies" class="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 !rounded-button whitespace-nowrap">Explorar Especies</a>
</div>
</div>
</section>
<!-- Sección Principal con Filtros y Galería -->
<section id="especies" class="py-16 bg-gray-50">
<div class="container mx-auto px-4">
<h2 class="text-3xl font-bold text-center mb-12">Nuestra Colección de Hormigas</h2>
<div class="flex flex-col lg:flex-row gap-8">
<!-- Filtros laterales -->
<div class="lg:w-1/4">
<div class="bg-white p-6 rounded shadow-sm">
<h3 class="text-xl font-semibold mb-4">Filtros</h3>
<div class="mb-6">
<h4 class="font-medium mb-3">Dificultad de cuidado</h4>
<div class="space-y-2">
<label class="custom-checkbox flex items-center pl-7 relative">
<input type="checkbox" class="filter-checkbox" data-filter="difficulty" data-value="facil">
<span class="checkmark"></span>
<span class="ml-2">Fácil</span>
</label>
<label class="custom-checkbox flex items-center pl-7 relative">
<input type="checkbox" class="filter-checkbox" data-filter="difficulty" data-value="intermedio">
<span class="checkmark"></span>
<span class="ml-2">Intermedio</span>
</label>
<label class="custom-checkbox flex items-center pl-7 relative">
<input type="checkbox" class="filter-checkbox" data-filter="difficulty" data-value="experto">
<span class="checkmark"></span>
<span class="ml-2">Experto</span>
</label>
</div>
</div>
<div class="mb-6">
<h4 class="font-medium mb-3">Precio</h4>
<div class="px-1">
<input type="range" class="range-slider" id="priceRange" min="0" max="120" value="120">
<div class="flex justify-between mt-2 text-sm text-gray-600">
<span>0€</span>
<span id="priceValue">120€</span>
</div>
</div>
</div>
<div class="mb-6">
<h4 class="font-medium mb-3">Tamaño</h4>
<div class="space-y-2">
<label class="custom-checkbox flex items-center pl-7 relative">
<input type="checkbox" class="filter-checkbox" data-filter="difficulty" data-value="pequeño">
<span class="checkmark"></span>
<span class="ml-2">Pequeño</span>
</label>
<label class="custom-checkbox flex items-center pl-7 relative">
<input type="checkbox" class="filter-checkbox" data-filter="difficulty" data-value="mediano">
<span class="checkmark"></span>
<span class="ml-2">Mediano</span>
</label>
<label class="custom-checkbox flex items-center pl-7 relative">
<input type="checkbox" class="filter-checkbox" data-filter="difficulty" data-value="grande">
<span class="checkmark"></span>
<span class="ml-2">Grande</span>
</label>
</div>
</div>
<button id="clearFilters" class="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 !rounded-button whitespace-nowrap">Limpiar filtros</button>
</div>
</div>
<!-- Galería de productos -->
<div class="lg:w-3/4">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="productGrid">
<!-- Los productos se generarán dinámicamente con JavaScript -->
</div>
</div>
</div>
</div>
</section>
<!-- Sección de Cuidados -->
<section id="hormigueros" class="py-16 bg-white">
<div class="container mx-auto px-4">
<h2 class="text-3xl font-bold text-center mb-12">Hormigueros Profesionales</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Hormiguero 1 -->
<div class="bg-white rounded-lg shadow-sm overflow-hidden">
<div class="relative h-64">
<img src="https://readdy.ai/api/search-image?query=A%20professional%20ant%20farm%20setup%20with%20multiple%20chambers%20and%20tunnels%2C%20made%20with%20high-quality%20acrylic.%20The%20formicarium%20features%20clear%20viewing%20panels%2C%20proper%20ventilation%2C%20and%20a%20sophisticated%20hydration%20system.%20The%20design%20is%20modern%20and%20minimalist%20with%20clean%20lines.%20Natural%20lighting%20highlights%20the%20quality%20craftsmanship&width=600&height=600&seq=42&orientation=squarish" alt="Hormiguero Profesional Premium" class="w-full h-full object-cover">
<span class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">En stock</span>
</div>
<div class="p-6">
<h3 class="text-xl font-bold mb-2">Hormiguero Profesional Premium</h3>
<p class="text-gray-600 mb-4">Sistema modular de acrílico con control de humedad y temperatura integrado. Ideal para colonias medianas y grandes.</p>
<ul class="text-sm text-gray-600 mb-4">
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>3 cámaras de cría</li>
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Sistema de hidratación avanzado</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Ventilación regulable</li>
</ul>
<div class="flex justify-between items-center">
<span class="text-2xl font-bold">199.99€</span>
<button class="add-to-cart-btn bg-primary hover:bg-primary/90 text-white px-6 py-2 !rounded-button whitespace-nowrap" data-id="formicario1" data-name="Hormiguero Profesional Premium" data-price="199.99" data-image="https://readdy.ai/api/search-image?query=A%20professional%20ant%20farm%20setup%20with%20multiple%20chambers%20and%20tunnels%2C%20made%20with%20high-quality%20acrylic.%20The%20formicarium%20features%20clear%20viewing%20panels%2C%20proper%20ventilation%2C%20and%20a%20sophisticated%20hydration%20system.%20The%20design%20is%20modern%20and%20minimalist%20with%20clean%20lines.%20Natural%20lighting%20highlights%20the%20quality%20craftsmanship&width=600&height=600&seq=42&orientation=squarish" data-stock="15">Añadir al carrito</button>
</div>
</div>
</div>
<!-- Hormiguero 2 -->
<div class="bg-white rounded-lg shadow-sm overflow-hidden">
<div class="relative h-64">
<img src="https://readdy.ai/api/search-image?query=A%20compact%20and%20elegant%20ant%20farm%20designed%20for%20beginners%2C%20featuring%20a%20simple%20yet%20effective%20setup%20with%20clear%20acrylic%20walls.%20The%20formicarium%20includes%20basic%20tunnels%20and%20chambers%20with%20a%20built-in%20water%20reservoir.%20The%20design%20is%20user-friendly%20and%20perfect%20for%20small%20colonies.%20Natural%20lighting%20shows%20the%20practical%20layout&width=600&height=600&seq=43&orientation=squarish" alt="Hormiguero Iniciación Plus" class="w-full h-full object-cover">
<span class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">En stock</span>
</div>
<div class="p-6">
<h3 class="text-xl font-bold mb-2">Hormiguero Iniciación Plus</h3>
<p class="text-gray-600 mb-4">Perfecto para principiantes. Diseño compacto con excelente visibilidad y fácil mantenimiento.</p>
<ul class="text-sm text-gray-600 mb-4">
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>2 cámaras conectadas</li>
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Sistema de hidratación básico</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Guía de inicio incluida</li>
</ul>
<div class="flex justify-between items-center">
<span class="text-2xl font-bold">89.99€</span>
<button class="add-to-cart-btn bg-primary hover:bg-primary/90 text-white px-6 py-2 !rounded-button whitespace-nowrap" data-id="formicario2" data-name="Hormiguero Iniciación Plus" data-price="89.99" data-image="https://readdy.ai/api/search-image?query=A%20compact%20and%20elegant%20ant%20farm%20designed%20for%20beginners%2C%20featuring%20a%20simple%20yet%20effective%20setup%20with%20clear%20acrylic%20walls.%20The%20formicarium%20includes%20basic%20tunnels%20and%20chambers%20with%20a%20built-in%20water%20reservoir.%20The%20design%20is%20user-friendly%20and%20perfect%20for%20small%20colonies.%20Natural%20lighting%20shows%20the%20practical%20layout&width=600&height=600&seq=43&orientation=squarish" data-stock="20">Añadir al carrito</button>
</div>
</div>
</div>
<!-- Hormiguero 3 -->
<div class="bg-white rounded-lg shadow-sm overflow-hidden">
<div class="relative h-64">
<img src="https://readdy.ai/api/search-image?query=A%20vertical%20ant%20farm%20with%20multiple%20levels%20and%20interconnected%20chambers%2C%20made%20from%20high-quality%20materials.%20The%20formicarium%20features%20a%20unique%20vertical%20design%20with%20specialized%20areas%20for%20different%20colony%20activities.%20The%20setup%20includes%20advanced%20moisture%20control%20and%20proper%20ventilation.%20Natural%20lighting%20emphasizes%20the%20innovative%20vertical%20layout&width=600&height=600&seq=44&orientation=squarish" alt="Hormiguero Vertical Pro" class="w-full h-full object-cover">
<span class="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Últimas unidades</span>
</div>
<div class="p-6">
<h3 class="text-xl font-bold mb-2">Hormiguero Vertical Pro</h3>
<p class="text-gray-600 mb-4">Diseño vertical innovador con múltiples niveles. Perfecto para observar el desarrollo natural de la colonia.</p>
<ul class="text-sm text-gray-600 mb-4">
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>4 niveles conectados</li>
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Control de humedad por nivel</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Diseño expandible</li>
</ul>
<div class="flex justify-between items-center">
<span class="text-2xl font-bold">149.99€</span>
<button class="add-to-cart-btn bg-primary hover:bg-primary/90 text-white px-6 py-2 !rounded-button whitespace-nowrap" data-id="formicario3" data-name="Hormiguero Vertical Pro" data-price="149.99" data-image="https://readdy.ai/api/search-image?query=A%20vertical%20ant%20farm%20with%20multiple%20levels%20and%20interconnected%20chambers%2C%20made%20from%20high-quality%20materials.%20The%20formicarium%20features%20a%20unique%20vertical%20design%20with%20specialized%20areas%20for%20different%20colony%20activities.%20The%20setup%20includes%20advanced%20moisture%20control%20and%20proper%20ventilation.%20Natural%20lighting%20emphasizes%20the%20innovative%20vertical%20layout&width=600&height=600&seq=44&orientation=squarish" data-stock="10">Añadir al carrito</button>
</div>
</div>
</div>
<!-- Hormiguero 4 -->
<div class="bg-white rounded-lg shadow-sm overflow-hidden">
<div class="relative h-64">
<img src="https://readdy.ai/api/search-image?query=A%20desert-themed%20ant%20farm%20specifically%20designed%20for%20arid%20species%2C%20featuring%20sand%20substrate%20and%20specialized%20ventilation.%20The%20formicarium%20includes%20temperature%20control%20and%20minimal%20humidity%20zones.%20The%20design%20mimics%20natural%20desert%20ant%20habitats%20with%20proper%20heat%20distribution.%20Natural%20lighting%20shows%20the%20desert-appropriate%20setup&width=600&height=600&seq=45&orientation=squarish" alt="Hormiguero Desert Pro" class="w-full h-full object-cover">
<span class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">En stock</span>
</div>
<div class="p-6">
<h3 class="text-xl font-bold mb-2">Hormiguero Desert Pro</h3>
<p class="text-gray-600 mb-4">Especializado para especies desérticas. Control preciso de temperatura y humedad reducida.</p>
<ul class="text-sm text-gray-600 mb-4">
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Control térmico integrado</li>
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Sustrato especial incluido</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Ventilación optimizada</li>
</ul>
<div class="flex justify-between items-center">
<span class="text-2xl font-bold">179.99€</span>
<button class="add-to-cart-btn bg-primary hover:bg-primary/90 text-white px-6 py-2 !rounded-button whitespace-nowrap" data-id="formicario4" data-name="Hormiguero Desert Pro" data-price="179.99" data-image="https://readdy.ai/api/search-image?query=A%20desert-themed%20ant%20farm%20specifically%20designed%20for%20arid%20species%2C%20featuring%20sand%20substrate%20and%20specialized%20ventilation.%20The%20formicarium%20includes%20temperature%20control%20and%20minimal%20humidity%20zones.%20The%20design%20mimics%20natural%20desert%20ant%20habitats%20with%20proper%20heat%20distribution.%20Natural%20lighting%20shows%20the%20desert-appropriate%20setup&width=600&height=600&seq=45&orientation=squarish" data-stock="8">Añadir al carrito</button>
</div>
</div>
</div>
<!-- Hormiguero 5 -->
<div class="bg-white rounded-lg shadow-sm overflow-hidden">
<div class="relative h-64">
<img src="https://readdy.ai/api/search-image?query=A%20tropical%20ant%20farm%20with%20high%20humidity%20features%20and%20multiple%20chambers%2C%20designed%20for%20rainforest%20species.%20The%20formicarium%20includes%20specialized%20moisture%20retention%20systems%20and%20proper%20drainage.%20The%20setup%20maintains%20consistent%20humidity%20levels%20with%20good%20air%20circulation.%20Natural%20lighting%20highlights%20the%20moisture%20management%20features&width=600&height=600&seq=46&orientation=squarish" alt="Hormiguero Tropical Elite" class="w-full h-full object-cover">
<span class="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">Stock limitado</span>
</div>
<div class="p-6">
<h3 class="text-xl font-bold mb-2">Hormiguero Tropical Elite</h3>
<p class="text-gray-600 mb-4">Diseñado para especies tropicales. Sistema avanzado de mantenimiento de humedad alta.</p>
<ul class="text-sm text-gray-600 mb-4">
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Sistema de lluvia artificial</li>
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Control de humedad preciso</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Drenaje automático</li>
</ul>
<div class="flex justify-between items-center">
<span class="text-2xl font-bold">229.99€</span>
<button class="add-to-cart-btn bg-primary hover:bg-primary/90 text-white px-6 py-2 !rounded-button whitespace-nowrap" data-id="formicario5" data-name="Hormiguero Tropical Elite" data-price="229.99" data-image="https://readdy.ai/api/search-image?query=A%20tropical%20ant%20farm%20with%20high%20humidity%20features%20and%20multiple%20chambers%2C%20designed%20for%20rainforest%20species.%20The%20formicarium%20includes%20specialized%20moisture%20retention%20systems%20and%20proper%20drainage.%20The%20setup%20maintains%20consistent%20humidity%20levels%20with%20good%20air%20circulation.%20Natural%20lighting%20highlights%20the%20moisture%20management%20features&width=600&height=600&seq=46&orientation=squarish" data-stock="5">Añadir al carrito</button>
</div>
</div>
</div>
<!-- Hormiguero 6 -->
<div class="bg-white rounded-lg shadow-sm overflow-hidden">
<div class="relative h-64">
<img src="https://readdy.ai/api/search-image?query=A%20smart%20ant%20farm%20with%20integrated%20digital%20monitoring%20systems%20and%20LED%20lighting.%20The%20formicarium%20features%20modern%20technology%20for%20temperature%20and%20humidity%20tracking.%20The%20design%20includes%20digital%20displays%20and%20smart%20sensors.%20Natural%20lighting%20shows%20the%20high-tech%20features%20and%20clean%20design&width=600&height=600&seq=47&orientation=squarish" alt="Hormiguero Smart System" class="w-full h-full object-cover">
<span class="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">En stock</span>
</div>
<div class="p-6">
<h3 class="text-xl font-bold mb-2">Hormiguero Smart System</h3>
<p class="text-gray-600 mb-4">Sistema inteligente con monitorización digital y control mediante aplicación móvil.</p>
<ul class="text-sm text-gray-600 mb-4">
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Control vía smartphone</li>
<li class="flex items-center mb-2"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Sensores integrados</li>
<li class="flex items-center"><i class="ri-checkbox-circle-line text-green-500 mr-2"></i>Iluminación LED programable</li>
</ul>
<div class="flex justify-between items-center">
<span class="text-2xl font-bold">299.99€</span>
<button class="add-to-cart-btn bg-primary hover:bg-primary/90 text-white px-6 py-2 !rounded-button whitespace-nowrap" data-id="formicario6" data-name="Hormiguero Smart System" data-price="299.99" data-image="https://readdy.ai/api/search-image?query=A%20smart%20ant%20farm%20with%20integrated%20digital%20monitoring%20systems%20and%20LED%20lighting.%20The%20formicarium%20features%20modern%20technology%20for%20temperature%20and%20humidity%20tracking.%20The%20design%20includes%20digital%20displays%20and%20smart%20sensors.%20Natural%20lighting%20shows%20the%20high-tech%20features%20and%20clean%20design&width=600&height=600&seq=47&orientation=squarish" data-stock="3">Añadir al carrito</button>
</div>
</div>
</div>
</div>
</div>
</section>
<section id="cuidados" class="py-16 bg-gray-50">
<div class="container mx-auto px-4">
<h2 class="text-3xl font-bold text-center mb-12">Guía de Cuidados</h2>
<div class="bg-white rounded shadow-sm overflow-hidden">
<!-- Tabs de navegación -->
<div class="flex border-b">
<button class="tab-button flex-1 py-4 px-6 font-medium text-center hover:bg-gray-50" data-tab="alimentacion">Alimentación</button>
<button class="tab-button flex-1 py-4 px-6 font-medium text-center hover:bg-gray-50" data-tab="temperatura">Temperatura</button>
<button class="tab-button flex-1 py-4 px-6 font-medium text-center hover:bg-gray-50" data-tab="humedad">Humedad</button>
<button class="tab-button flex-1 py-4 px-6 font-medium text-center hover:bg-gray-50" data-tab="espacio">Espacio</button>
</div>
<!-- Contenido de los tabs -->
<div class="p-6">
<div id="alimentacion" class="tab-content active">
<div class="flex flex-col md:flex-row gap-8">
<div class="md:w-1/2">
<h3 class="text-xl font-semibold mb-4">Alimentación adecuada</h3>
<p class="mb-4">Las hormigas tienen diferentes necesidades nutricionales según su especie. La mayoría de las colonias necesitan:</p>
<ul class="list-disc pl-5 mb-6 space-y-2">
<li>Proteínas: insectos pequeños como moscas de la fruta, grillos o larvas.</li>
<li>Carbohidratos: soluciones de agua con azúcar o miel diluida.</li>
<li>Agua: siempre debe haber agua fresca disponible.</li>
</ul>
<p class="mb-4">La frecuencia de alimentación varía según el tamaño de la colonia:</p>
<ul class="list-disc pl-5 space-y-2">
<li>Colonias pequeñas (1-20 hormigas): 1-2 veces por semana</li>
<li>Colonias medianas (20-100 hormigas): 2-3 veces por semana</li>
<li>Colonias grandes (más de 100 hormigas): 3-4 veces por semana</li>
</ul>
<div class="mt-6">
<a href="#" class="text-primary hover:underline flex items-center">
<i class="ri-download-line mr-2"></i> Descargar guía completa de alimentación
</a>
</div>
</div>
<div class="md:w-1/2">
<img src="https://readdy.ai/api/search-image?query=Various%20foods%20for%20ants%20arranged%20neatly%20on%20a%20clean%20surface.%20The%20image%20shows%20small%20portions%20of%20sugar%20water%20in%20test%20tubes%2C%20tiny%20pieces%20of%20fruits%2C%20seeds%2C%20and%20small%20insects%20that%20serve%20as%20protein%20sources%20for%20ants.%20The%20lighting%20is%20bright%20and%20clear%2C%20highlighting%20the%20details%20of%20each%20food%20item.%20The%20background%20is%20simple%20and%20white%20to%20focus%20on%20the%20food%20items&width=600&height=400&seq=2&orientation=landscape" alt="Alimentación para hormigas" class="w-full h-auto rounded object-cover object-top">
</div>
</div>
</div>
<div id="temperatura" class="tab-content">
<div class="flex flex-col md:flex-row gap-8">
<div class="md:w-1/2">
<h3 class="text-xl font-semibold mb-4">Control de temperatura</h3>
<p class="mb-4">La temperatura es un factor crítico para la salud de la colonia. Cada especie tiene un rango óptimo:</p>
<ul class="list-disc pl-5 mb-6 space-y-2">
<li>Especies tropicales: 24-28°C</li>
<li>Especies templadas: 20-24°C</li>
<li>Especies desérticas: 26-30°C</li>
</ul>
<p class="mb-4">Consejos importantes:</p>
<ul class="list-disc pl-5 space-y-2">
<li>Evita cambios bruscos de temperatura</li>
<li>No coloques el hormiguero bajo luz solar directa</li>
<li>Utiliza calentadores específicos para mantener temperaturas estables</li>
<li>Considera crear un gradiente térmico para que las hormigas puedan elegir su zona de confort</li>
</ul>
<div class="mt-6">
<a href="#" class="text-primary hover:underline flex items-center">
<i class="ri-download-line mr-2"></i> Descargar guía de control de temperatura
</a>
</div>
</div>
<div class="md:w-1/2">
<img src="https://readdy.ai/api/search-image?query=A%20digital%20thermometer%20displaying%20temperature%20readings%20next%20to%20an%20ant%20farm%20or%20formicarium.%20The%20image%20shows%20a%20modern%20temperature%20control%20setup%20for%20ant%20keeping%2C%20with%20clear%20readings%20visible%20on%20the%20display.%20The%20background%20shows%20parts%20of%20a%20professional%20ant%20keeping%20setup%20with%20proper%20temperature%20management%20tools.%20The%20lighting%20is%20soft%20and%20even%2C%20clearly%20showing%20the%20details%20of%20the%20equipment&width=600&height=400&seq=3&orientation=landscape" alt="Control de temperatura" class="w-full h-auto rounded object-cover object-top">
</div>
</div>
</div>
<div id="humedad" class="tab-content">
<div class="flex flex-col md:flex-row gap-8">
<div class="md:w-1/2">
<h3 class="text-xl font-semibold mb-4">Gestión de la humedad</h3>
<p class="mb-4">La humedad adecuada es esencial para la supervivencia de la colonia. Los niveles óptimos varían según el hábitat natural:</p>
<ul class="list-disc pl-5 mb-6 space-y-2">
<li>Especies de bosque tropical: 70-90% de humedad</li>
<li>Especies de clima templado: 50-70% de humedad</li>
<li>Especies desérticas: 30-50% de humedad</li>
</ul>
<p class="mb-4">Métodos para controlar la humedad:</p>
<ul class="list-disc pl-5 space-y-2">
<li>Sistemas de hidratación con depósitos de agua</li>
<li>Sustrato húmedo en ciertas zonas del hormiguero</li>
<li>Rociado periódico de agua (según necesidades)</li>
<li>Uso de higrómetros para monitorizar los niveles</li>
</ul>
<div class="mt-6">
<a href="#" class="text-primary hover:underline flex items-center">
<i class="ri-download-line mr-2"></i> Descargar guía de control de humedad
</a>
</div>
</div>
<div class="md:w-1/2">
<img src="https://readdy.ai/api/search-image?query=A%20hygrometer%20displaying%20humidity%20readings%20next%20to%20an%20ant%20farm%20setup.%20The%20image%20shows%20moisture%20control%20equipment%20for%20ant%20keeping%2C%20with%20water%20reservoirs%20and%20hydration%20systems%20visible.%20The%20environment%20appears%20carefully%20controlled%20with%20proper%20humidity%20management%20for%20ant%20colonies.%20The%20lighting%20is%20even%20and%20clear%2C%20highlighting%20the%20details%20of%20the%20moisture%20management%20system&width=600&height=400&seq=4&orientation=landscape" alt="Control de humedad" class="w-full h-auto rounded object-cover object-top">
</div>
</div>
</div>
<div id="espacio" class="tab-content">
<div class="flex flex-col md:flex-row gap-8">
<div class="md:w-1/2">
<h3 class="text-xl font-semibold mb-4">Espacio y hábitat</h3>
<p class="mb-4">El espacio adecuado es fundamental para el desarrollo saludable de la colonia:</p>
<ul class="list-disc pl-5 mb-6 space-y-2">
<li>Formicarios con áreas diferenciadas (húmedas y secas)</li>
<li>Túneles y cámaras adaptados al tamaño de la especie</li>
<li>Área de forrajeo suficientemente amplia</li>
</ul>
<p class="mb-4">Recomendaciones según el tamaño de la colonia:</p>
<ul class="list-disc pl-5 space-y-2">
<li>Reina solitaria o colonia pequeña: formicario de 10x10cm</li>
<li>Colonia mediana (hasta 100 hormigas): formicario de 15x20cm</li>
<li>Colonia grande: sistemas modulares expandibles</li>
<li>Considerar siempre el crecimiento futuro de la colonia</li>
</ul>
<div class="mt-6">
<a href="#" class="text-primary hover:underline flex items-center">
<i class="ri-download-line mr-2"></i> Descargar guía de diseño de formicarios
</a>
</div>
</div>
<div class="md:w-1/2">
<img src="https://readdy.ai/api/search-image?query=A%20professional%20ant%20farm%20%28formicarium%29%20setup%20showing%20different%20chambers%20and%20tunnels.%20The%20image%20displays%20a%20well-designed%20habitat%20for%20ants%20with%20clear%20sections%20for%20different%20activities%20-%20nesting%20chambers%2C%20foraging%20areas%2C%20and%20water%20zones.%20The%20formicarium%20has%20a%20modern%20design%20with%20visible%20ant%20activity%20inside.%20The%20lighting%20highlights%20the%20intricate%20tunnel%20system%20and%20chamber%20structure&width=600&height=400&seq=5&orientation=landscape" alt="Formicario y espacio" class="w-full h-auto rounded object-cover object-top">
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Sección de Suscripción -->
<section class="py-16 bg-primary/10">
<div class="container mx-auto px-4 text-center">
<h2 class="text-3xl font-bold mb-4">Mantente Informado</h2>
<p class="text-lg mb-8 max-w-2xl mx-auto">Suscríbete a nuestro boletín para recibir consejos de cuidado, noticias sobre nuevas especies y ofertas exclusivas.</p>
<form class="max-w-md mx-auto flex" id="subscribeForm">
<input type="email" placeholder="Tu correo electrónico" class="flex-1 py-3 px-4 border-none rounded-l !rounded-button bg-white focus:ring-2 focus:ring-primary focus:outline-none" required>
<button type="submit" class="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-r !rounded-button whitespace-nowrap">Suscribirse</button>
</form>
<script>
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
e.preventDefault();
const email = this.querySelector('input[type="email"]').value;
showNotification('¡Gracias por suscribirte!');
this.reset();
});
</script>
</div>
</section>
<!-- Footer -->
<footer id="contacto" class="bg-gray-900 text-white py-12">
<div class="container mx-auto px-4">
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<a href="#" class="text-3xl font-['Pacifico'] text-white mb-4 inline-block">AntWorld</a>
<p class="text-gray-400 mb-4">Tu tienda especializada en hormigas para coleccionistas y entusiastas.</p>
<div class="flex space-x-4">
<a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary text-white">
<i class="ri-facebook-fill"></i>
</a>
<a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary text-white">
<i class="ri-instagram-line"></i>
</a>
<a href="#" class="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-primary text-white">
<i class="ri-youtube-line"></i>
</a>
</div>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
<ul class="space-y-2">
<li><a href="#" class="text-gray-400 hover:text-white">Inicio</a></li>
<li><a href="#especies" class="text-gray-400 hover:text-white">Especies</a></li>
<li><a href="#cuidados" class="text-gray-400 hover:text-white">Guía de Cuidados</a></li>
<li><a href="#" class="text-gray-400 hover:text-white">Blog</a></li>
<li><a href="#contacto" class="text-gray-400 hover:text-white">Contacto</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Información</h3>
<ul class="space-y-2">
<li><a href="#" class="text-gray-400 hover:text-white">Envíos</a></li>
<li><a href="#" class="text-gray-400 hover:text-white">Devoluciones</a></li>
<li><a href="#" class="text-gray-400 hover:text-white">Términos y Condiciones</a></li>
<li><a href="#" class="text-gray-400 hover:text-white">Política de Privacidad</a></li>
<li><a href="#" class="text-gray-400 hover:text-white">Preguntas Frecuentes</a></li>
</ul>
</div>
<div>
<h3 class="text-lg font-semibold mb-4">Contacto</h3>
<ul class="space-y-2">
<li class="flex items-start">
<i class="ri-map-pin-line mt-1 mr-2"></i>
<span class="text-gray-400">Calle Mirmecología 123, 28001 Madrid, España</span>
</li>
<li class="flex items-center">
<i class="ri-phone-line mr-2"></i>
<span class="text-gray-400">+34 912 345 678</span>
</li>
<li class="flex items-center">
<i class="ri-mail-line mr-2"></i>
<span class="text-gray-400">info@antworld.es</span>
</li>
<li class="flex items-center">
<i class="ri-time-line mr-2"></i>
<span class="text-gray-400">Lun-Vie: 9:00 - 18:00</span>
</li>
</ul>
</div>
</div>
<div class="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
<p class="text-gray-500 text-sm mb-4 md:mb-0">© 2025 AntWorld. Todos los derechos reservados.</p>
<div class="flex items-center space-x-4">
<i class="ri-visa-line text-2xl text-gray-400"></i>
<i class="ri-mastercard-line text-2xl text-gray-400"></i>
<i class="ri-paypal-line text-2xl text-gray-400"></i>
</div>
</div>
</div>
</footer>
<!-- Modal de Detalles del Producto -->
<div id="productModal" class="fixed inset-0 z-50 flex items-center justify-center hidden">
<div class="absolute inset-0 bg-black bg-opacity-50" id="modalOverlay"></div>
<div class="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
<button id="closeModal" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 w-8 h-8 flex items-center justify-center">
<i class="ri-close-line text-xl"></i>
</button>
<div class="p-6" id="modalContent">
<!-- El contenido del modal se llenará dinámicamente -->
</div>
</div>
</div>
<!-- Carrito Deslizable -->
<div id="cartDrawer" class="cart-drawer fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-xl z-50 overflow-y-auto">
<div class="p-6">
<div class="flex justify-between items-center mb-6">
<h3 class="text-xl font-bold">Tu Carrito</h3>
<button id="closeCart" class="text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center">
<i class="ri-close-line text-xl"></i>
</button>
</div>
<div id="cartItems" class="mb-6">
<!-- Los items del carrito se generarán dinámicamente -->
<div class="text-center py-8 text-gray-500" id="emptyCartMessage">
<i class="ri-shopping-cart-line text-5xl mb-3"></i>
<p>Tu carrito está vacío</p>
</div>
</div>
<div id="cartSummary" class="border-t pt-4 hidden">
<div class="flex justify-between mb-2">
<span class="text-gray-600">Subtotal</span>
<span id="subtotal">0.00€</span>
</div>
<div class="flex justify-between mb-2">
<span class="text-gray-600">Gastos de envío</span>
<span id="shipping">0.00€</span>
</div>
<div class="flex justify-between font-bold text-lg mb-4">
<span>Total</span>
<span id="total">0.00€</span>
</div>
<button id="checkoutButton" class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 !rounded-button whitespace-nowrap">
Finalizar Compra
</button>
</div>
</div>
</div>
<!-- Notificación de producto añadido -->
<div id="notification" class="fixed bottom-4 right-4 bg-primary text-white py-3 px-6 rounded-lg shadow-xl transform translate-y-20 opacity-0 transition-all duration-300 z-50 flex items-center">
<i class="ri-checkbox-circle-line mr-2 text-xl"></i>
<span id="notificationText">Producto añadido al carrito</span>
</div>
<script>
document.addEventListener('DOMContentLoaded', function() {
// Datos de productos
const products = [
{
id: 1,
name: "Messor barbarus shiny",
commonName: "Hormiga Recolectora Brillante",
price: 15.00,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20shiny%20Messor%20barbarus%20ant%20with%20its%20distinctive%20glossy%20exoskeleton%20and%20powerful%20mandibles.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background%2C%20highlighting%20its%20unique%20shiny%20appearance.%20The%20lighting%20is%20bright%20and%20even%2C%20showing%20the%20fine%20details%20of%20the%20ants%20body%20structure%20and%20metallic-like%20sheen&width=500&height=500&seq=6&orientation=squarish",
region: "españa",
size: "grande",
difficulty: "intermedio",
difficulty: "grande",
stock: 45,
description: "Las hormigas cortadoras de hojas son conocidas por su capacidad para cortar y transportar fragmentos de hojas a sus nidos, donde cultivan hongos que sirven como alimento. Son una de las especies más fascinantes para observar debido a su complejo comportamiento social y su sistema agrícola.",
habitat: "Bosques tropicales y subtropicales de América Central y del Sur",
careLevel: "Intermedio",
careDetails: "Requieren un formicario con zonas húmedas y secas bien diferenciadas. Necesitan material vegetal fresco regularmente para mantener sus cultivos de hongos. La temperatura óptima es de 24-28°C con una humedad del 70-80%.",
images: [
"https://readdy.ai/api/search-image?query=A%20leaf-cutter%20ant%20colony%20in%20action%2C%20showing%20multiple%20ants%20carrying%20leaf%20fragments%20along%20a%20trail.%20The%20image%20captures%20the%20coordinated%20work%20of%20the%20colony%20with%20several%20ants%20visible.%20The%20background%20shows%20hints%20of%20tropical%20forest%20environment.%20The%20lighting%20highlights%20the%20organized%20line%20of%20ants%20and%20their%20leaf-cutting%20behavior&width=500&height=350&seq=7&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20close-up%20of%20the%20fungus%20garden%20maintained%20by%20leaf-cutter%20ants%20inside%20their%20nest.%20The%20image%20shows%20the%20white%20fungal%20structures%20that%20the%20ants%20cultivate%20as%20their%20food%20source.%20Some%20worker%20ants%20can%20be%20seen%20tending%20to%20the%20garden.%20The%20lighting%20is%20sufficient%20to%20show%20the%20details%20of%20this%20underground%20chamber%20and%20the%20complex%20fungal%20structures&width=500&height=350&seq=8&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20professional%20formicarium%20setup%20designed%20specifically%20for%20leaf-cutter%20ants%2C%20showing%20the%20different%20chambers%20including%20farming%20areas.%20The%20image%20displays%20a%20modern%20ant%20keeping%20setup%20with%20proper%20humidity%20and%20temperature%20control.%20The%20formicarium%20design%20allows%20viewing%20of%20the%20ants%20agricultural%20activities&width=500&height=350&seq=9&orientation=landscape"
]
},
{
id: 2,
name: "Crematogaster scutellaris",
commonName: "Hormiga Acróbata",
price: 15.00,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20Crematogaster%20scutellaris%20ant%20with%20its%20distinctive%20heart-shaped%20gaster%20and%20reddish-brown%20coloration.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20unique%20shape%20of%20its%20abdomen%20and%20the%20fine%20details%20of%20its%20body%20structure&width=500&height=500&seq=10&orientation=squarish",
region: "españa",
size: "grande",
difficulty: "intermedio",
difficulty: "pequeño",
stock: 8,
description: "Las hormigas carpinteras japonesas son una especie robusta y de gran tamaño, conocidas por su fuerza y resistencia. Son excelentes para principiantes debido a su facilidad de cuidado y su comportamiento interesante. Pueden vivir varios años y desarrollar colonias de tamaño considerable.",
habitat: "Bosques templados de Japón, China y Corea",
careLevel: "Fácil",
careDetails: "Requieren un formicario simple con una zona de nidificación y área de forrajeo. Se alimentan de insectos pequeños y soluciones azucaradas. Temperatura óptima de 20-25°C con humedad moderada del 50-60%.",
images: [
"https://readdy.ai/api/search-image?query=A%20colony%20of%20Japanese%20carpenter%20ants%20with%20workers%20of%20different%20sizes%20attending%20to%20their%20queen.%20The%20image%20shows%20the%20social%20structure%20of%20the%20colony%20with%20the%20larger%20queen%20surrounded%20by%20worker%20ants.%20The%20background%20is%20neutral%20to%20focus%20on%20the%20ants%20interactions.%20The%20lighting%20clearly%20shows%20the%20size%20differences%20between%20the%20queen%20and%20workers&width=500&height=350&seq=11&orientation=landscape",
"https://readdy.ai/api/search-image?query=Japanese%20carpenter%20ants%20feeding%20on%20a%20drop%20of%20honey%20or%20sugar%20solution.%20The%20image%20shows%20several%20worker%20ants%20gathered%20around%20the%20food%20source%2C%20demonstrating%20their%20feeding%20behavior.%20The%20close-up%20perspective%20shows%20their%20mandibles%20and%20feeding%20apparatus%20in%20detail&width=500&height=350&seq=12&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20simple%20formicarium%20setup%20suitable%20for%20keeping%20Japanese%20carpenter%20ants%2C%20showing%20both%20the%20nesting%20chamber%20and%20foraging%20area.%20The%20image%20displays%20a%20beginner-friendly%20ant%20keeping%20setup%20with%20proper%20hydration%20system.%20The%20design%20is%20practical%20and%20allows%20easy%20observation%20of%20the%20ants&width=500&height=350&seq=13&orientation=landscape"
]
},
{
id: 3,
name: "Messor barbarus normal",
commonName: "Hormiga Cosechadora Común",
price: 49.99,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20regular%20Messor%20barbarus%20ant%20with%20its%20characteristic%20features%20and%20natural%20coloration.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20standard%20appearance%20and%20the%20fine%20details%20of%20its%20body%20structure&width=500&height=500&seq=14&orientation=squarish",
region: "españa",
size: "mediano",
difficulty: "facil",
stock: 20,
description: "Las hormigas cosechadoras son conocidas por recolectar y almacenar semillas, creando verdaderos graneros dentro de sus hormigueros. Son ideales para principiantes debido a su comportamiento interesante y fácil mantenimiento. Presentan un marcado polimorfismo con obreras de diferentes tamaños.",
habitat: "Regiones mediterráneas de Europa y norte de África",
careLevel: "Fácil",
careDetails: "Necesitan un formicario con cámaras amplias para almacenar semillas. Se alimentan principalmente de semillas y ocasionalmente de pequeños insectos. Temperatura óptima de 22-26°C con humedad moderada del 40-60%.",
images: [
"https://readdy.ai/api/search-image?query=Harvester%20ants%20collecting%20and%20transporting%20seeds%20to%20their%20nest.%20The%20image%20shows%20several%20worker%20ants%20carrying%20various%20seeds%20along%20a%20trail.%20The%20background%20suggests%20a%20Mediterranean%20environment%20with%20some%20soil%20and%20sparse%20vegetation.%20The%20lighting%20highlights%20the%20ants%20seed-collecting%20behavior&width=500&height=350&seq=15&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20close-up%20of%20a%20harvester%20ant%20seed%20storage%20chamber%20inside%20their%20nest.%20The%20image%20shows%20the%20organized%20piles%20of%20collected%20seeds%20that%20the%20ants%20have%20stored.%20Some%20worker%20ants%20can%20be%20seen%20sorting%20or%20moving%20seeds%20within%20the%20chamber.%20The%20lighting%20reveals%20the%20details%20of%20this%20specialized%20storage%20behavior&width=500&height=350&seq=16&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20formicarium%20setup%20designed%20for%20harvester%20ants%2C%20showing%20both%20the%20nesting%20area%20and%20foraging%20space.%20The%20image%20displays%20a%20practical%20ant%20keeping%20setup%20with%20chambers%20large%20enough%20for%20seed%20storage.%20The%20design%20allows%20observation%20of%20the%20ants%20harvesting%20and%20storage%20behaviors&width=500&height=350&seq=17&orientation=landscape"
]
},
{
id: 4,
name: "Camponotus cruentatus",
commonName: "Hormiga Carpintera Roja",
price: 79.99,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20Camponotus%20cruentatus%20ant%20with%20its%20distinctive%20red%20and%20black%20coloration.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20bicolored%20appearance%20and%20the%20fine%20details%20of%20its%20body%20structure&width=500&height=500&seq=18&orientation=squarish",
region: "españa",
size: "mediano",
difficulty: "experto",
stock: 5,
description: "Las hormigas tejedoras son conocidas por su impresionante habilidad para construir nidos tejiendo hojas vivas utilizando la seda producida por sus larvas. Son una especie arborícola con un color verde brillante y un comportamiento territorial muy marcado. Requieren cuidados especializados y son recomendadas para criadores con experiencia.",
habitat: "Bosques tropicales del sudeste asiático y Australia",
careLevel: "Experto",
careDetails: "Requieren formicarios especiales que simulen un entorno arborícola con ramas y hojas. Necesitan alta humedad (70-90%) y temperaturas cálidas (25-30°C). Se alimentan principalmente de insectos vivos y secreciones azucaradas.",
images: [
"https://readdy.ai/api/search-image?query=Weaver%20ants%20constructing%20a%20nest%20by%20pulling%20leaves%20together%20and%20using%20larval%20silk%20to%20bind%20them.%20The%20image%20shows%20multiple%20worker%20ants%20collaborating%20in%20the%20nest%20building%20process.%20The%20background%20shows%20green%20leaves%20in%20a%20tropical%20setting.%20The%20lighting%20highlights%20this%20remarkable%20nest-building%20behavior&width=500&height=350&seq=19&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20weaver%20ant%20colony%20with%20workers%20tending%20to%20their%20queen%20and%20larvae.%20The%20image%20shows%20the%20social%20structure%20of%20the%20colony%20with%20the%20queen%20surrounded%20by%20workers%20and%20developing%20brood.%20The%20background%20suggests%20the%20interior%20of%20a%20leaf%20nest.%20The%20lighting%20reveals%20the%20details%20of%20the%20colonys%20organization&width=500&height=350&seq=20&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20specialized%20formicarium%20setup%20designed%20for%20arboreal%20weaver%20ants%2C%20featuring%20vertical%20spaces%20with%20leaves%20and%20branches.%20The%20image%20displays%20an%20advanced%20ant%20keeping%20setup%20that%20mimics%20the%20ants%20natural%20tree-dwelling%20habitat.%20The%20design%20allows%20the%20ants%20to%20exhibit%20their%20natural%20nest-building%20behavior&width=500&height=350&seq=21&orientation=landscape"
]
},
{
id: 5,
name: "Lasius flavus",
commonName: "Hormiga Amarilla",
price: 59.99,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20Lasius%20flavus%20ant%20with%20its%20characteristic%20yellow%20coloration.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20pale%20yellow%20appearance%20and%20the%20fine%20details%20of%20its%20body%20structure&width=500&height=500&seq=22&orientation=squarish",
region: "españa",
size: "muy-grande",
difficulty: "avanzado",
stock: 3,
description: "Las hormigas toro australianas son una de las especies más grandes y agresivas del mundo. Conocidas por su potente picadura y excelente visión, son cazadoras solitarias que no dependen tanto de feromonas como otras hormigas. Su tamaño, comportamiento y características únicas las hacen fascinantes para coleccionistas experimentados.",
habitat: "Bosques y zonas costeras de Australia",
careLevel: "Avanzado",
careDetails: "Requieren formicarios espaciosos con áreas de caza. Necesitan presas vivas regularmente y son extremadamente territoriales. Temperatura óptima de 22-26°C con humedad moderada del 50-70%. Precaución: su picadura es dolorosa y potencialmente peligrosa.",
images: [
"https://readdy.ai/api/search-image?query=An%20Australian%20bull%20ant%20in%20hunting%20posture%2C%20showing%20its%20aggressive%20stance%20with%20mandibles%20open.%20The%20image%20captures%20the%20predatory%20behavior%20of%20this%20solitary%20hunter.%20The%20background%20suggests%20an%20Australian%20forest%20floor%20environment.%20The%20lighting%20highlights%20the%20ants%20powerful%20mandibles%20and%20alert%20posture&width=500&height=350&seq=23&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20bull%20ant%20using%20its%20excellent%20vision%20to%20track%20prey%2C%20with%20a%20focus%20on%20its%20large%20compound%20eyes.%20The%20image%20shows%20the%20ants%20head%20in%20detail%2C%20emphasizing%20the%20well-developed%20eyes%20that%20are%20unusual%20among%20ants.%20The%20close-up%20perspective%20reveals%20the%20visual%20hunting%20adaptations%20of%20this%20species&width=500&height=350&seq=24&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20specialized%20formicarium%20setup%20designed%20for%20bull%20ants%2C%20featuring%20a%20spacious%20hunting%20area%20and%20secure%20nesting%20chamber.%20The%20image%20displays%20an%20advanced%20ant%20keeping%20setup%20with%20proper%20safety%20features%20to%20manage%20these%20aggressive%20ants.%20The%20design%20allows%20observation%20while%20maintaining%20appropriate%20containment&width=500&height=350&seq=25&orientation=landscape"
]
},
{
id: 6,
name: "Camponotus pilicornis",
commonName: "Hormiga Carpintera Pilosa",
price: 69.99,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20Camponotus%20pilicornis%20ant%20with%20its%20distinctive%20hairy%20antennae%20and%20dark%20coloration.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20pilosity%20and%20the%20fine%20details%20of%20its%20body%20structure&width=500&height=500&seq=26&orientation=squarish",
region: "españa",
size: "mediano",
difficulty: "intermedio",
stock: 7,
description: "Las hormigas del desierto son especialistas en sobrevivir en condiciones extremas. Poseen adaptaciones únicas como patas largas que las mantienen alejadas de la arena caliente y la capacidad de orientarse mediante la luz polarizada. Son extremadamente rápidas y pueden soportar temperaturas que serían letales para la mayoría de los insectos.",
habitat: "Desiertos del norte de África y Oriente Medio",
careLevel: "Intermedio",
careDetails: "Requieren formicarios con sustrato arenoso y seco. Necesitan temperaturas elevadas (25-35°C) con baja humedad (30-40%). Se alimentan principalmente de insectos y pueden pasar períodos más largos sin alimento que otras especies.",
images: [
"https://readdy.ai/api/search-image?query=A%20desert%20ant%20navigating%20across%20hot%20sand%2C%20showing%20its%20characteristic%20high-stepping%20gait%20with%20long%20legs.%20The%20image%20captures%20the%20ants%20heat-avoidance%20behavior%20on%20desert%20terrain.%20The%20background%20shows%20a%20sandy%20desert%20environment.%20The%20lighting%20highlights%20how%20the%20ants%20long%20legs%20keep%20its%20body%20elevated%20above%20the%20hot%20surface&width=500&height=350&seq=27&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20desert%20ant%20using%20the%20position%20of%20the%20sun%20for%20navigation%2C%20with%20visual%20cues%20suggesting%20its%20orientation%20behavior.%20The%20image%20shows%20the%20ant%20in%20an%20open%20desert%20setting%20with%20visible%20sun%20position.%20The%20composition%20illustrates%20the%20ants%20remarkable%20navigation%20abilities%20using%20polarized%20light&width=500&height=350&seq=28&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20specialized%20formicarium%20setup%20designed%20for%20desert%20ants%2C%20featuring%20sandy%20substrate%20and%20arid%20conditions.%20The%20image%20displays%20an%20ant%20keeping%20setup%20that%20mimics%20desert%20conditions%20with%20proper%20temperature%20control.%20The%20design%20allows%20observation%20of%20the%20ants%20desert%20adaptation%20behaviors&width=500&height=350&seq=29&orientation=landscape"
]
},
{
id: 7,
name: "Camponotus barbaricus",
commonName: "Hormiga Carpintera Bárbara",
price: 84.99,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20Camponotus%20barbaricus%20ant%20with%20its%20distinctive%20robust%20build%20and%20dark%20coloration.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20powerful%20structure%20and%20the%20fine%20details%20of%20its%20body&width=500&height=500&seq=30&orientation=squarish",
region: "españa",
size: "mediano",
difficulty: "facil",
stock: 12,
description: "Las hormigas rojas de bosque son conocidas por construir grandes montículos de material vegetal que pueden alcanzar más de un metro de altura. Son importantes para el ecosistema forestal, ya que controlan plagas y ayudan a dispersar semillas. Tienen un comportamiento defensivo característico, rociando ácido fórmico cuando se sienten amenazadas.",
habitat: "Bosques de coníferas de Europa y Asia",
careLevel: "Fácil",
careDetails: "Requieren formicarios con material vegetal como agujas de pino. Temperatura óptima de 18-24°C con humedad moderada del 50-70%. Se alimentan de insectos pequeños y secreciones azucaradas.",
images: [
"https://readdy.ai/api/search-image?query=Red%20wood%20ants%20constructing%20their%20characteristic%20mound%20nest%20made%20of%20pine%20needles%20and%20plant%20debris.%20The%20image%20shows%20multiple%20worker%20ants%20adding%20material%20to%20a%20partially%20constructed%20mound.%20The%20background%20shows%20a%20coniferous%20forest%20setting.%20The%20lighting%20highlights%20the%20collaborative%20nest-building%20behavior&width=500&height=350&seq=31&orientation=landscape",
"https://readdy.ai/api/search-image?query=Red%20wood%20ants%20spraying%20formic%20acid%20as%20a%20defense%20mechanism%2C%20showing%20their%20characteristic%20defensive%20posture.%20The%20image%20captures%20the%20moment%20of%20acid%20release%20with%20ants%20in%20defensive%20positions.%20The%20close-up%20perspective%20shows%20this%20unique%20chemical%20defense%20in%20action&width=500&height=350&seq=32&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20formicarium%20setup%20designed%20for%20red%20wood%20ants%2C%20featuring%20a%20nesting%20area%20with%20pine%20needles%20and%20plant%20material.%20The%20image%20displays%20a%20practical%20ant%20keeping%20setup%20that%20mimics%20the%20ants%20natural%20forest%20habitat.%20The%20design%20allows%20observation%20of%20the%20ants%20nest-building%20behavior&width=500&height=350&seq=33&orientation=landscape"
]
},
{
id: 8,
name: "Paraponera clavata",
commonName: "Hormiga Bala",
price: 199.99,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20bullet%20ant%20%28Paraponera%20clavata%29%20with%20its%20distinctive%20large%20size%20and%20powerful%20mandibles.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20glossy%20black%20exoskeleton%20and%20the%20fine%20details%20of%20the%20ants%20formidable%20body%20structure&width=500&height=500&seq=34&orientation=squarish",
region: "españa",
size: "muy-grande",
difficulty: "experto",
stock: 2,
description: "Las hormigas bala son famosas por tener una de las picaduras más dolorosas del mundo animal, comparada con el dolor de recibir un disparo (de ahí su nombre). Son grandes, de color negro brillante y viven en colonias relativamente pequeñas. Su manejo requiere extrema precaución y experiencia.",
habitat: "Selvas tropicales de América Central y del Sur",
careLevel: "Experto",
careDetails: "Requieren formicarios especializados con alta seguridad. Temperatura óptima de 25-30°C con alta humedad (70-90%). Se alimentan de insectos y néctar. Extrema precaución: su picadura causa dolor intenso durante 24 horas y puede provocar reacciones alérgicas graves.",
images: [
"https://readdy.ai/api/search-image?query=A%20bullet%20ant%20in%20a%20threatening%20posture%20with%20mandibles%20open%2C%20showing%20its%20defensive%20stance.%20The%20image%20captures%20the%20intimidating%20appearance%20of%20this%20feared%20ant%20species.%20The%20background%20suggests%20a%20tropical%20rainforest%20environment.%20The%20lighting%20emphasizes%20the%20ants%20powerful%20build%20and%20aggressive%20posture&width=500&height=350&seq=35&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20bullet%20ant%20colony%20with%20workers%20attending%20to%20their%20brood%20in%20a%20small%20nest%20within%20a%20rotting%20log.%20The%20image%20shows%20the%20relatively%20small%20colony%20size%20typical%20of%20this%20species.%20The%20background%20suggests%20the%20interior%20of%20a%20decomposing%20tree%20trunk.%20The%20lighting%20reveals%20the%20details%20of%20the%20colonys%20organization&width=500&height=350&seq=36&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20highly%20specialized%20and%20secure%20formicarium%20setup%20designed%20for%20bullet%20ants%2C%20featuring%20escape-proof%20design%20and%20handling%20safety%20features.%20The%20image%20displays%20an%20expert-level%20ant%20keeping%20setup%20with%20multiple%20security%20measures.%20The%20design%20prioritizes%20containment%20while%20allowing%20observation%20of%20these%20dangerous%20ants&width=500&height=350&seq=37&orientation=landscape"
]
},
{
id: 9,
name: "Lasius niger",
commonName: "Hormiga Negra de Jardín",
price: 39.99,
image: "https://readdy.ai/api/search-image?query=A%20detailed%20close-up%20of%20a%20black%20garden%20ant%20%28Lasius%20niger%29%20with%20its%20distinctive%20small%20size%20and%20black%20coloration.%20The%20ant%20is%20shown%20in%20profile%20against%20a%20clean%20white%20background.%20The%20lighting%20is%20bright%20and%20even%2C%20highlighting%20the%20glossy%20black%20exoskeleton%20and%20the%20fine%20details%20of%20the%20ants%20body%20structure&width=500&height=500&seq=38&orientation=squarish",
region: "españa",
size: "pequeno",
difficulty: "facil",
stock: 25,
description: "Las hormigas negras de jardín son una de las especies más comunes en Europa. Son pequeñas, de color negro brillante y forman colonias numerosas. Son ideales para principiantes debido a su resistencia y fácil mantenimiento. Su comportamiento es interesante de observar, especialmente su relación con los pulgones, a los que 'ordeñan' para obtener melaza.",
habitat: "Zonas urbanas y rurales de Europa y América del Norte",
careLevel: "Fácil",
careDetails: "Requieren formicarios simples con una zona húmeda. Temperatura ambiente (18-25°C) con humedad moderada (50-60%). Se alimentan de insectos pequeños y soluciones azucaradas.",
images: [
"https://readdy.ai/api/search-image?query=Black%20garden%20ants%20tending%20to%20aphids%20on%20a%20plant%20stem%2C%20collecting%20the%20honeydew%20they%20produce.%20The%20image%20shows%20the%20mutualistic%20relationship%20between%20ants%20and%20aphids.%20The%20background%20shows%20green%20plant%20structures.%20The%20lighting%20highlights%20this%20interesting%20farming%20behavior&width=500&height=350&seq=39&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20black%20garden%20ant%20colony%20with%20workers%2C%20queen%2C%20and%20various%20stages%20of%20brood%20development.%20The%20image%20shows%20the%20social%20structure%20of%20the%20colony%20with%20eggs%2C%20larvae%2C%20and%20pupae%20visible.%20The%20background%20suggests%20the%20interior%20of%20a%20simple%20nest.%20The%20lighting%20reveals%20the%20details%20of%20the%20colonys%20organization&width=500&height=350&seq=40&orientation=landscape",
"https://readdy.ai/api/search-image?query=A%20simple%20beginner-friendly%20formicarium%20setup%20designed%20for%20black%20garden%20ants.%20The%20image%20displays%20a%20basic%20ant%20keeping%20setup%20with%20nesting%20and%20foraging%20areas.%20The%20design%20is%20straightforward%20and%20perfect%20for%20first-time%20ant%20keepers&width=500&height=350&seq=41&orientation=landscape"
]
}
]
// Estado del carrito
let cart = [];
// Elementos DOM
const productGrid = document.getElementById('productGrid');
const cartDrawer = document.getElementById('cartDrawer');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const emptyCartMessage = document.getElementById('emptyCartMessage');
const cartSummary = document.getElementById('cartSummary');
const subtotalElement = document.getElementById('subtotal');
const shippingElement = document.getElementById('shipping');
const totalElement = document.getElementById('total');
const cartCountElement = document.getElementById('cartCount');
const notification = document.getElementById('notification');
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
const mobileMenuButton = document.getElementById('mobileMenuButton');
const mobileMenu = document.getElementById('mobileMenu');
// Cargar productos
function loadProducts(filteredProducts = products) {
productGrid.innerHTML = '';
if (filteredProducts.length === 0) {
productGrid.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500"><p>No se encontraron productos que coincidan con los filtros seleccionados.</p></div>';
return;
}
filteredProducts.forEach(product => {
const productCard = document.createElement('div');
productCard.className = 'ant-card bg-white rounded shadow-sm overflow-hidden transition-all duration-300';
productCard.innerHTML = `
<div class="relative h-60 overflow-hidden">
<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-top">
<div class="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium ${product.stock > 10 ? 'text-green-600' : product.stock > 5 ? 'text-orange-500' : 'text-red-500'}">
${product.stock > 10 ? 'En stock' : product.stock > 5 ? 'Pocas unidades' : 'Últimas unidades'}
</div>
</div>
<div class="p-4">
<h3 class="font-semibold text-lg">${product.name}</h3>
<p class="text-gray-600 text-sm mb-2">${product.commonName}</p>
<div class="flex justify-between items-center mt-4">
<span class="text-lg font-bold">${product.price.toFixed(2)}€</span>
<button class="add-to-cart-btn bg-primary hover:bg-primary/90 text-white py-2 px-4 !rounded-button whitespace-nowrap" data-id="${product.id}">
Añadir
</button>
</div>
</div>
`;
productGrid.appendChild(productCard);
// Añadir evento para ver detalles
productCard.querySelector('img').addEventListener('click', () => showProductDetails(product));
productCard.querySelector('h3').addEventListener('click', () => showProductDetails(product));
// Añadir evento para añadir al carrito
productCard.querySelector('.add-to-cart-btn').addEventListener('click', (e) => {
e.stopPropagation();
addToCart(product);
});
});
}
// Mostrar detalles del producto
function showProductDetails(product) {
modalContent.innerHTML = `
<div class="flex flex-col md:flex-row gap-6">
<div class="md:w-1/2">
<div class="mb-4 h-80 overflow-hidden rounded">
<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-top" id="mainProductImage">
</div>
<div class="grid grid-cols-3 gap-2">
${product.images.map((img, index) => `
<div class="h-24 overflow-hidden rounded cursor-pointer thumbnail-image" data-img="${img}">
<img src="${img}" alt="${product.name} ${index + 1}" class="w-full h-full object-cover object-top">
</div>
`).join('')}
</div>
</div>
<div class="md:w-1/2">
<h2 class="text-2xl font-bold mb-1">${product.name}</h2>
<p class="text-gray-600 mb-4">${product.commonName}</p>
<div class="flex items-center mb-6">
<span class="text-2xl font-bold mr-4">${product.price.toFixed(2)}€</span>
<span class="${product.stock > 10 ? 'text-green-600' : product.stock > 5 ? 'text-orange-500' : 'text-red-500'} text-sm font-medium">
${product.stock > 10 ? 'En stock' : product.stock > 5 ? 'Pocas unidades' : 'Últimas unidades'} (${product.stock} disponibles)
</span>
</div>
<div class="mb-6">
<h3 class="font-semibold mb-2">Descripción</h3>
<p class="text-gray-700">${product.description}</p>
</div>
<div class="mb-6">
<h3 class="font-semibold mb-2">Características</h3>
<ul class="text-gray-700 space-y-1">
<li><span class="font-medium">Hábitat natural:</span> ${product.habitat}</li>
<li><span class="font-medium">Nivel de cuidado:</span> ${product.careLevel}</li>
<li><span class="font-medium">Región:</span> ${product.region === 'españa' ? 'España' : product.region === 'europa' ? 'Europa' : product.region === 'asia' ? 'Asia' : product.region === 'africa' ? 'África' : 'Oceanía'}</li>
<li><span class="font-medium">Tamaño:</span> ${product.size === 'pequeno' ? 'Pequeño' : product.size === 'mediano' ? 'Mediano' : product.size === 'grande' ? 'Grande' : ''}</li>
</ul>
</div>
<div class="mb-6">
<h3 class="font-semibold mb-2">Cuidados básicos</h3>
<p class="text-gray-700">${product.careDetails}</p>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center border rounded">
<button class="quantity-btn minus w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
<i class="ri-subtract-line"></i>
</button>
<input type="number" min="1" max="${product.stock}" value="1" class="quantity-input w-12 h-10 text-center border-none focus:outline-none focus:ring-0">
<button class="quantity-btn plus w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
<i class="ri-add-line"></i>
</button>
</div>
<button class="modal-add-to-cart flex-1 bg-primary hover:bg-primary/90 text-white py-3 px-6 !rounded-button whitespace-nowrap" data-id="${product.id}">
Añadir al carrito
</button>
</div>
</div>
</div>
`;
productModal.classList.remove('hidden');
document.body.classList.add('overflow-hidden');
// Cambiar imagen principal al hacer clic en miniaturas
const thumbnails = modalContent.querySelectorAll('.thumbnail-image');
const mainImage = modalContent.querySelector('#mainProductImage');
thumbnails.forEach(thumb => {
thumb.addEventListener('click', () => {
mainImage.src = thumb.dataset.img;
});
});
// Controles de cantidad
const quantityInput = modalContent.querySelector('.quantity-input');
const minusBtn = modalContent.querySelector('.minus');
const plusBtn = modalContent.querySelector('.plus');
minusBtn.addEventListener('click', () => {
let value = parseInt(quantityInput.value);
if (value > 1) {
quantityInput.value = value - 1;
}
});
plusBtn.addEventListener('click', () => {
let value = parseInt(quantityInput.value);
if (value < product.stock) {
quantityInput.value = value + 1;
}
});
// Añadir al carrito desde el modal
const addToCartBtn = modalContent.querySelector('.modal-add-to-cart');
addToCartBtn.addEventListener('click', () => {
const quantity = parseInt(quantityInput.value);
addToCart(product, quantity);
closeModal();
});
}
// Cerrar modal
function closeModal() {
productModal.classList.add('hidden');
document.body.classList.remove('overflow-hidden');
}
// Añadir al carrito
function addToCart(product, quantity = 1) {
const existingItem = cart.find(item => item.id === product.id);
if (existingItem) {
// No exceder el stock disponible
const newQuantity = Math.min(existingItem.quantity + quantity, product.stock);
existingItem.quantity = newQuantity;
} else {
cart.push({
id: product.id,
name: product.name,
commonName: product.commonName,
price: product.price,
image: product.image,
quantity: Math.min(quantity, product.stock)
});
}
updateCart();
showNotification(`${product.name} añadido al carrito`);
}
// Actualizar carrito
function updateCart() {
// Actualizar contador
const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
cartCountElement.textContent = totalItems;
// Actualizar lista de items
if (cart.length === 0) {
emptyCartMessage.classList.remove('hidden');
cartSummary.classList.add('hidden');
cartItems.innerHTML = '';
cartItems.appendChild(emptyCartMessage);
} else {
emptyCartMessage.classList.add('hidden');
cartSummary.classList.remove('hidden');
cartItems.innerHTML = '';
cart.forEach(item => {
const cartItem = document.createElement('div');
cartItem.className = 'flex items-start gap-3 py-3 border-b';
cartItem.innerHTML = `
<div class="w-16 h-16 rounded overflow-hidden flex-shrink-0">
<img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover object-top">
</div>
<div class="flex-1">
<h4 class="font-medium text-sm">${item.name}</h4>
<p class="text-gray-500 text-xs">${item.commonName}</p>
<div class="flex items-center justify-between mt-2">
<div class="flex items-center border rounded">
<button class="cart-quantity-btn minus w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-xs" data-id="${item.id}">
<i class="ri-subtract-line"></i>
</button>
<span class="w-8 h-6 flex items-center justify-center text-sm">${item.quantity}</span>
<button class="cart-quantity-btn plus w-6 h-6 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-xs" data-id="${item.id}">
<i class="ri-add-line"></i>
</button>
</div>
<span class="font-medium">${(item.price * item.quantity).toFixed(2)}€</span>
</div>
</div>
<button class="remove-item-btn w-6 h-6 flex items-center justify-center text-gray-400 hover:text-red-500" data-id="${item.id}">
<i class="ri-close-line"></i>
</button>
`;
cartItems.appendChild(cartItem);
});
// Añadir eventos a los botones
cartItems.querySelectorAll('.cart-quantity-btn.minus').forEach(btn => {
btn.addEventListener('click', () => {
const id = parseInt(btn.dataset.id);
const item = cart.find(item => item.id === id);
if (item.quantity > 1) {
item.quantity--;
updateCart();
}
});
});
cartItems.querySelectorAll('.cart-quantity-btn.plus').forEach(btn => {
btn.addEventListener('click', () => {
const id = parseInt(btn.dataset.id);
const item = cart.find(item => item.id === id);
const product = products.find(p => p.id === id);
if (item.quantity < product.stock) {
item.quantity++;
updateCart();
}
});
});
cartItems.querySelectorAll('.remove-item-btn').forEach(btn => {
btn.addEventListener('click', () => {
const id = parseInt(btn.dataset.id);
cart = cart.filter(item => item.id !== id);
updateCart();
});
});
// Actualizar resumen
const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 7.99) : 0;
const total = subtotal + shipping;
subtotalElement.textContent = subtotal.toFixed(2) + '€';
shippingElement.textContent = shipping === 0 ? 'Gratis' : shipping.toFixed(2) + '€';
totalElement.textContent = total.toFixed(2) + '€';
}
}
// Mostrar notificación
function showNotification(message) {
const notificationText = document.getElementById('notificationText');
notificationText.textContent = message;
notification.classList.remove('translate-y-20', 'opacity-0');
setTimeout(() => {
notification.classList.add('translate-y-20', 'opacity-0');
}, 3000);
}
// Filtrar productos
function filterProducts() {
const maxPrice = parseInt(priceRange.value);
const selectedDifficulties = Array.from(document.querySelectorAll('.filter-checkbox[data-filter="difficulty"]:checked')).map(cb => cb.dataset.value);
const filteredProducts = products.filter(product => {
const matchesPrice = product.price <= maxPrice;
const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(product.difficulty);
return matchesPrice && matchesDifficulty;
});
loadProducts(filteredProducts);
}
// Inicializar
loadProducts();
updateCart();
// Event Listeners
document.getElementById('cartButton').addEventListener('click', () => {
cartDrawer.classList.add('open');
overlay.classList.add('open');
document.body.classList.add('overflow-hidden');
});
document.getElementById('closeCart').addEventListener('click', () => {
cartDrawer.classList.remove('open');
overlay.classList.remove('open');
document.body.classList.remove('overflow-hidden');
});
overlay.addEventListener('click', () => {
cartDrawer.classList.remove('open');
overlay.classList.remove('open');
productModal.classList.add('hidden');
document.body.classList.remove('overflow-hidden');
});
document.getElementById('modalOverlay').addEventListener('click', closeModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('checkoutButton').addEventListener('click', () => {
if (cart.length > 0) {
// Cerrar el carrito
cartDrawer.classList.remove('open');
// Crear y mostrar el modal de pago
const checkoutModal = document.createElement('div');
checkoutModal.className = 'fixed inset-0 z-50 flex items-center justify-center';
checkoutModal.innerHTML = `
<div class="absolute inset-0 bg-black bg-opacity-50"></div>
<div class="relative bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto m-4">
<div class="p-6">
<button class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 w-8 h-8 flex items-center justify-center">
<i class="ri-close-line text-xl"></i>
</button>
<h2 class="text-2xl font-bold mb-6">Finalizar Compra</h2>
<!-- Resumen del pedido -->
<div class="mb-8">
<h3 class="font-semibold mb-4">Resumen del pedido</h3>
<div class="bg-gray-50 rounded p-4 space-y-2">
${cart.map(item => `
<div class="flex justify-between items-center">
<div>
<span class="font-medium">${item.name}</span>
<span class="text-gray-500 text-sm"> x${item.quantity}</span>
</div>
<span>${(item.price * item.quantity).toFixed(2)}€</span>
</div>
`).join('')}
<div class="border-t border-gray-200 mt-4 pt-4">
<div class="flex justify-between mb-2">
<span class="text-gray-600">Subtotal</span>
<span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}€</span>
</div>
<div class="flex justify-between mb-2">
<span class="text-gray-600">Gastos de envío</span>
<span>${cart.reduce((total, item) => total + (item.price * item.quantity), 0) >= 100 ? 'Gratis' : '7.99€'}</span>
</div>
<div class="flex justify-between font-bold text-lg">
<span>Total</span>
<span>${(cart.reduce((total, item) => total + (item.price * item.quantity), 0) + (cart.reduce((total, item) => total + (item.price * item.quantity), 0) >= 100 ? 0 : 7.99)).toFixed(2)}€</span>
</div>
</div>
</div>
</div>
<!-- Formulario de pago -->
<form id="paymentForm" class="space-y-6">
<!-- Información personal -->
<div>
<h3 class="font-semibold mb-4">Información personal</h3>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
<input type="text" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Apellidos</label>
<input type="text" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
<input type="email" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
<input type="tel" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
</div>
</div>
<!-- Dirección de envío -->
<div>
<h3 class="font-semibold mb-4">Dirección de envío</h3>
<div class="space-y-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
<input type="text" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Código Postal</label>
<input type="text" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Ciudad</label>
<input type="text" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">País</label>
<select required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
<option value="ES">España</option>
<option value="PT">Portugal</option>
<option value="FR">Francia</option>
<option value="IT">Italia</option>
</select>
</div>
</div>
</div>
</div>
<!-- Método de pago -->
<div>
<h3 class="font-semibold mb-4">Método de pago</h3>
<div class="space-y-4">
<div class="flex items-center space-x-4 mb-4">
<label class="flex items-center">
<input type="radio" name="paymentMethod" value="card" checked class="mr-2">
<i class="ri-bank-card-line text-xl mr-1"></i>
Tarjeta de crédito
</label>
<label class="flex items-center">
<input type="radio" name="paymentMethod" value="paypal" class="mr-2">
<i class="ri-paypal-line text-xl mr-1"></i>
PayPal
</label>
</div>
<div id="cardPaymentForm">
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Número de tarjeta</label>
<input type="text" pattern="[0-9]{16}" maxlength="16" placeholder="1234 5678 9012 3456" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Titular de la tarjeta</label>
<input type="text" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
</div>
<div class="grid grid-cols-2 gap-4">
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">Fecha de caducidad</label>
<input type="text" pattern="[0-9]{2}/[0-9]{2}" placeholder="MM/YY" maxlength="5" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
<div>
<label class="block text-sm font-medium text-gray-700 mb-1">CVV</label>
<input type="text" pattern="[0-9]{3,4}" maxlength="4" required class="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-primary focus:outline-none">
</div>
</div>
</div>
</div>
</div>
<!-- Botón de pago -->
<button type="submit" class="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 !rounded-button whitespace-nowrap">
Pagar ${(cart.reduce((total, item) => total + (item.price * item.quantity), 0) + (cart.reduce((total, item) => total + (item.price * item.quantity), 0) >= 100 ? 0 : 7.99)).toFixed(2)}€
</button>
</form>
</div>
</div>
`;
document.body.appendChild(checkoutModal);
// Cerrar modal
const closeButton = checkoutModal.querySelector('button');
closeButton.addEventListener('click', () => {
checkoutModal.remove();
overlay.classList.remove('open');
document.body.classList.remove('overflow-hidden');
});
// Cambiar entre métodos de pago
const paymentMethodRadios = checkoutModal.querySelectorAll('input[name="paymentMethod"]');
const cardPaymentForm = checkoutModal.querySelector('#cardPaymentForm');
paymentMethodRadios.forEach(radio => {
radio.addEventListener('change', () => {
if (radio.value === 'card') {
cardPaymentForm.style.display = 'block';
} else {
cardPaymentForm.style.display = 'none';
}
});
});
// Manejar envío del formulario
const paymentForm = checkoutModal.querySelector('#paymentForm');
paymentForm.addEventListener('submit', (e) => {
e.preventDefault();
showNotification('Procesando el pago...');
setTimeout(() => {
checkoutModal.remove();
cart = [];
updateCart();
overlay.classList.remove('open');
document.body.classList.remove('overflow-hidden');
showNotification('¡Pago realizado con éxito!');
}, 2000);
});
}
});
// Filtros
priceRange.addEventListener('input', () => {
priceValue.textContent = priceRange.value + '€';
filterProducts();
});
document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
checkbox.addEventListener('change', filterProducts);
});
document.getElementById('clearFilters').addEventListener('click', () => {
document.querySelectorAll('.filter-checkbox:checked').forEach(cb => {
cb.checked = false;
});
priceRange.value = 500;
priceValue.textContent = '500€';
filterProducts();
});
// Tabs de cuidados
document.querySelectorAll('.tab-button').forEach(button => {
button.addEventListener('click', () => {
// Desactivar todos los tabs
document.querySelectorAll('.tab-button').forEach(btn => {
btn.classList.remove('active-tab', 'text-primary', 'border-b-2', 'border-primary');
});
document.querySelectorAll('.tab-content').forEach(content => {
content.classList.remove('active');
});
// Activar el tab seleccionado
button.classList.add('active-tab', 'text-primary', 'border-b-2', 'border-primary');
const tabId = button.dataset.tab;
document.getElementById(tabId).classList.add('active');
});
});
// Búsqueda de productos
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', () => {
const searchTerm = searchInput.value.toLowerCase();
const filteredProducts = products.filter(product =>
product.name.toLowerCase().includes(searchTerm) ||
product.commonName.toLowerCase().includes(searchTerm)
);
loadProducts(filteredProducts);
});
// Navegación
document.querySelectorAll('.nav-link').forEach(link => {
link.addEventListener('click', (e) => {
e.preventDefault();
const section = link.dataset.section;
const targetSection = document.getElementById(section);
// Cerrar menú móvil si está abierto
mobileMenu.classList.add('hidden');
// Si es inicio, scroll al top
if (section === 'inicio') {
window.scrollTo({ top: 0, behavior: 'smooth' });
} else if (targetSection) {
targetSection.scrollIntoView({ behavior: 'smooth' });
}
// Actualizar clase activa
document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('text-primary'));
link.classList.add('text-primary');
});
});
// Menú móvil
mobileMenuButton.addEventListener('click', () => {
mobileMenu.classList.toggle('hidden');
});
});
document.addEventListener('DOMContentLoaded', function() {
// Añadir event listeners para los botones de añadir al carrito en la sección de hormigueros
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
button.addEventListener('click', function() {
const product = {
id: this.dataset.id,
name: this.dataset.name,
price: parseFloat(this.dataset.price),
image: this.dataset.image,
commonName: this.dataset.name, // Añadimos el nombre común para mantener consistencia
quantity: 1,
stock: 20 // Establecemos un stock por defecto
};
addToCart(product);
});
});
// Activar el primer tab por defecto
const firstTab = document.querySelector('.tab-button');
const firstTabContent = document.querySelector('.tab-content');
if (firstTab && firstTabContent) {
firstTab.classList.add('active-tab', 'text-primary', 'border-b-2', 'border-primary');
firstTabContent.classList.add('active');
}
// Marcar el enlace activo según la sección visible
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.5
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const sectionId = entry.target.id;
document.querySelectorAll('.nav-link').forEach(link => {
if (link.dataset.section === sectionId) {
link.classList.add('text-primary');
} else {
link.classList.remove('text-primary');
}
});
}
});
}, observerOptions);
// Observar secciones
['especies', 'hormigueros', 'cuidados', 'contacto'].forEach(sectionId => {
const section = document.getElementById(sectionId);
if (section) observer.observe(section);
});
});
</script>
</body>
</html>
