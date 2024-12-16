
//lo primero que hago es limpiar la pantalla    

document.addEventListener("DOMContentLoaded", function () {
        document.getElementById('resultado').value = "";
    });    

//muestro el resultado de lo que devuelve la funcion muestra
function muestra(valor) {    
    document.getElementById('resultado').value += valor;
}

//borrar la pantalla al pulsar la tecla C y cuando ingreso la primera vez
function borrar() {
    document.getElementById('resultado').value = "";
}


function resultado() {    
let x = document.getElementById('resultado').value;
        //controlo que si se ingresa este valor (/0) muestre un aviso        
        //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
        //El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.        

        if (x.includes('/0')) {
            //document.getElementById('resultado').value = "No se puede dividir por cero"// si quiero ver esta leyenda en el imput de resultado
            //o uso una alerta como este caso
            //lo puse entre comillas para comparar cadena de caracteres
            alert("no se puede dividir por cero") //muestro alerta y borro //
            borrar()

        } else {                        
                //La función eval() evalúa un código JavaScript representado como una cadena de caracteres (string)
                //, sin referenciar a un objeto en particular.
                let y = eval(x);
                document.getElementById('resultado').value = y;
            
        }

        

} 

