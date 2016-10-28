	function validateForm(){
	/* Escribe tú código aquí */
// variables para campos a verificar
var valorNombre = document.getElementById('name').value;
var valorNombre1 = document.getElementById('name');
var valorApellido = document.getElementById('lastname').value;
var valorMail = document.getElementById('input-email').value;
var valorPass = document.getElementById('input-password').value;
var selecBici = document.querySelector('select').selectedIndex;


// verificar si está completo el campo
	if ( valorNombre == null || valorNombre.length == 0 || /^\s+$/.test(valorNombre)){
		var alertaNombre = document.createElement('span');
		var nodoTextoNombre = document.createTextNode('Este Campo es Obligatorio');
		alertaNombre.appendChild(nodoTextoNombre);
		document.body.appendChild(alertaNombre);
		}
};