/**
 * DOM
 */

// console.log(document);

// mult = 5*'5';

// if(mult === '25'){
//     alert('son lo mismo');
// }else{
//     alert('Son diferentes');
// }

// switch
let fecha = new Date('November 9, 2021 18:44:30');
let dia = fecha.getDay();
let nombreDia;

switch(dia){
    case 0:
        nombreDia = 'Domingo'
        break;
    case 1:
    nombreDia = 'Lunes'
        break;
    case 2:
    nombreDia = 'Martes'
        break;
    case 3:
    nombreDia = 'Miercoles'
        break;
    case 4:
    nombreDia = 'Jueves'
        break;
    case 5:
    nombreDia = 'Viernes'
        break;
    case 6:
    nombreDia = 'Sabado'
        break;
}


alert(`El dia de hoy es: ${nombreDia}`);

// || OR  
// && and

// if(nombreDia === 'Lunes' || nombreDia === 'Miercoles' || nombreDia === 'Viernes'){
//     alert('Vamos al Gym')
// }else{
//     alert('No Vamos al gym, vamos a dormir')
// }
nombreDia === 'Lunes' && nombreDia === 'Miercoles' && nombreDia === 'Viernes' ? alert('Vamos al Gym') 
                                                                              : alert('No Vamos al gym, vamos a dormir')

                                                                            

console.log(dia);










var mensajeError;
const mostrarDatos = function () {
    // Tomar la etiqueta correo
    let etiquetaCorreo = document.getElementById('email');
    let textoCorreo = etiquetaCorreo.value;

    // Modificar el valor de la etiqueta de correo
    // etiquetaCorreo.value = 'hola mundo';

    // Tomar la etiqueta de contraseña
    let etiquetaPassword = document.getElementById('pass');
    let textoPassword = etiquetaPassword.value;

    validacionEmail = validarSiHayDatosEnElCorreo(textoCorreo,textoPassword);

    if(validacionEmail == true){
        alert(`Tu correo es: ${textoCorreo} y la contraseña es: ${textoPassword}`);
    }else{
        alert(mensajeError);
    }
}

// Condicionales

const validarSiHayDatosEnElCorreo = function(correo, contraseña){
    //if
    if(correo.length == 0 ){
         mensajeError = 'Faltan datos en el input de correo';
        return false;
    }else if(contraseña.length ==0){
         mensajeError = 'Faltan datos en el input de contraseña';
        return false;
    }
    else{
        return true;
    }
}