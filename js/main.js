function validateForm(){
	/* Escribe tú código aquí */
// variables para campos a verificar
var valorNombre = document.getElementById('name').value;
var valorNombreCont = document.getElementsByClassName("name-container")[0];
var valorApellido = document.getElementById('lastname').value;
var valorApellidoCont = document.getElementsByClassName("lastname-container")[0];
var valorMail = document.getElementById('input-email').value;
var valorMailCont = document.getElementsByClassName("email-container")[0];
var valorPass = document.getElementById('input-password').value; 
var valorPassCont = document.getElementsByClassName('form-group')[0];
var selecBici = document.querySelector('select').selectedIndex;

	(function validarNombre(){
		var alertaNombre = document.createElement('span');
		// verificar si está completo el campo
		if ( valorNombre == null || valorNombre.length == 0 || /^\s+$/.test(valorNombre)){
			var nodoTextoNombre = document.createTextNode('Este Campo es Obligatorio');
			alertaNombre.appendChild(nodoTextoNombre);
			valorNombreCont.appendChild(alertaNombre);
			return false;
			}
		else if (/^[a-zA-Z]*$/.test(valorNombre) == false){
			var nodoTextoNombre2 = document.createTextNode('Por favor ingrese sólo letras');
			alertaNombre.appendChild(nodoTextoNombre2);
			valorNombreCont.appendChild(alertaNombre);
			return true;

	 	}
	 	else if (valorNombre.charAt(0).toUpperCase() !== valorNombre.charAt(0)){
	 		var nodoTextoNombre3 = document.createTextNode('La inicial debe ser mayúscula');
			alertaNombre.appendChild(nodoTextoNombre3);
			valorNombreCont.appendChild(alertaNombre);
			return false;
	 	}
		})();

	(function validarApellido(){
		var alertaApellido = document.createElement('span');
		// verificar si está completo el campo
		if ( valorApellido == null || valorApellido.length == 0 || /^\s+$/.test(valorApellido)){
			var nodoTextoApellido = document.createTextNode('Este Campo es Obligatorio');
			alertaApellido.appendChild(nodoTextoApellido);
			valorApellidoCont.appendChild(alertaApellido);
			return false;
			}
		else if (/^[a-zA-Z]*$/.test(valorApellido) == false){
			var nodoTextoApellido2 = document.createTextNode('Por favor ingrese sólo letras');
			alertaApellido.appendChild(nodoTextoApellido2);
			valorApellidoCont.appendChild(alertaApellido);
			return true;

	 	}
	 	else if (valorApellido.charAt(0).toUpperCase() !== valorApellido.charAt(0)){
	 		var nodoTextoApellido3 = document.createTextNode('La inicial debe ser mayúscula');
			alertaApellido.appendChild(nodoTextoApellido3);
			valorApellidoCont.appendChild(alertaApellido);
			return false;
	 	}
		})();

  	(function validarCorreo(){
  			if (valorMail == null || valorMail.length == 0){
   				var alertaCorreo = document.createElement('span');
   				var nodoTextoMail = document.createTextNode('Este Campo es Obligatorio');
  				alertaCorreo.appendChild(nodoTextoMail);
  				valorMailCont.appendChild(alertaCorreo);
   	} 		else if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valorMail) != true){
     		var alertaCorreo = document.createElement('span');
   		var nodoTextoMail2 = document.createTextNode('Verifique su e-mail');
  			alertaCorreo.appendChild(nodoTextoMail2);
  			valorMailCont.appendChild(alertaCorreo);
     	} return false;
  	}) ();

	(function validarPass(){
		 	if (valorPass.length == 0 ){
		 		var alertaPass = document.createElement('span');		
				 var nodoTextoPass = document.createTextNode('Este Campo es Obligatorio');
				 alertaPass.appendChild(nodoTextoPass);
				 valorPassCont.appendChild(alertaPass);
   	return false;
 	}  else if (valorPass.length < 6){
 				var alertaPass = document.createElement('span');		
				var nodoTextoPass2 = document.createTextNode('Tu contraseña debe ser mayor a 6 caracteres');
				alertaPass.appendChild(nodoTextoPass2);
				valorPassCont.appendChild(alertaPass);
 		return false;
 	}
 			else if(valorPass == 123456 || valorPass == 098754){
 				var alertaPass = document.createElement('span');		
				var nodoTextoPass3 = document.createTextNode('Tu contraseña es muy débil');
				alertaPass.appendChild(nodoTextoPass3);
				valorPassCont.appendChild(alertaPass);
 		return false;
 	}
	}) ();


};