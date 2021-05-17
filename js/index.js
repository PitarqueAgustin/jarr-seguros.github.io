//---Modificar variables Carousel---

var myCarousel = document.querySelector('#slider')
var carousel = new bootstrap.Carousel(myCarousel)

// console.log(carousel)

//Intervalo del slider

//carousel._config.interval = 4000;




//---Formulario Cotiza---

window.onload = ()=>{
	showDatos()
}

const menu = Array.from(document.getElementsByClassName('cotiza--box-title'))

const boxCotiza = document.querySelector('#cotiza--data')

const imgHacker = document.querySelector('#img--hacker')

imgHacker.onmouseenter = ()=>{

	imgHacker.src = "assets/hacker2.png";

}

imgHacker.onmouseout = () =>{

	imgHacker.src = "assets/hacker.png";

}

menu.forEach(item =>{

	item.onclick = ()=>{ selectItem(item) }

})

function selectItem(item){

	menu.forEach(item =>{
		item.classList.remove('active')
	})

	item.classList.add('active')
	viewCotiza(item.id)
}

function viewCotiza(id){


	switch(id){

		case "cotiza--btn-datos":
			showDatos()
		break

		case "cotiza--btn-vehiculo":
			showVehiculo()
		break

		case "cotiza--btn-imagenes":
			showImagenes()
		break

	}

}

function showDatos(){

	boxCotiza.innerHTML = 
	`
		<div class="cotiza--form-row">
		  <label for="nombre">Nombre</label>
		  <input type="text" name="nombre" id="nombre">
		</div>
		<div class="cotiza--form-row">
		  <label for="apellido">Apellido</label>
		  <input type="text" name="apellido" id="apellido">
		</div>
		<div class="cotiza--form-row">
		  <label for="email">Email</label>
		  <input type="email" name="email" id="email">
		</div>
		<div class="cotiza--form-row">
		  <label for="documento">Documento</label>
		  <input type="number" name="documento" id="documento">
		</div>   
	`
}

function showVehiculo(){
	boxCotiza.innerHTML = 
	`
        <div class="row">
		  <div class="cotiza--form-row col-6">
		    <label for="marca">Marca</label>
		    <select name="marca" id="marca">
		      <option>Honda</option>
		      <option>Ford</option>
		      <option>Chevrolet</option>
		      <option>Peugeot</option>
		      <option>Renault</option>
		    </select>
		  </div>
		  <div class="cotiza--form-row col-6">
		     <label for="modelo">Modelo</label>
		     <input type="text" name="modelo"> 
		  </div>
		</div>
		<div class="row">
		  <div class="cotiza--form-row col-6">
		    <label for="año">Año</label>
		    <input type="number" name="año">
		  </div>
		  <div class="cotiza--form-row col-6">
		    <label for="codigopostal">Codigo Postal</label>
		    <input type="numer" name="codigopostal">
		  </div>
		</div>
		<div class="cotiza--form-row">
		  <label for="agregados">Agregados</label>
		  <textarea cols="20" rows="4"></textarea>
		</div>
	`
}

function showImagenes(){
	boxCotiza.innerHTML = ''
}