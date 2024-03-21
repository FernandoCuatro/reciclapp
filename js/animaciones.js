window.addEventListener('scroll', function() {
	let animacion_1 = document.getElementById('ilustracion-1');
	let posicion_1 = animacion_1.getBoundingClientRect().top;

	let animacion_2 = document.querySelectorAll('.card-acerca');
	let posicion_2 = animacion_2[0].getBoundingClientRect().top;

	let tamanio_pantalla = window.innerHeight / 4;

	if (posicion_1 < tamanio_pantalla) {
		animacion_1.style.animation = 'imagenes 1s';
	}

	if (posicion_2 < tamanio_pantalla) {
		animacion_2[0].style.animation = 'animacion-2 .5s';
		animacion_2[1].style.animation = 'animacion-2 .5s .5s';
		animacion_2[2].style.animation = 'animacion-2 .5s 1s';
	}

});