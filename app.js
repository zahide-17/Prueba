'use strict'

var formulario = document.querySelector("#form");
var resultado = document.querySelector(".cambio");
var borrar = document.getElementById("borrar");

formulario.addEventListener('submit',function(){

    var venta = parseFloat(document.querySelector("#venta").value); 
    var montoCajero = parseFloat(document.querySelector("#montoCajero").value); 
    var p = document.createElement("p");
    if(!isNaN(venta) && !isNaN(montoCajero) && venta <= montoCajero){
        var cambio = montoCajero - venta;
        denominacionCambio(cambio);
        p.append("Total Entregado $"+cambio);  
    }
    else{
        p.append("Datos Incorrectos");
    }
    resultado.append(parrafo);
});

function denominacionCambio(cambio){
    
    var denominaciones = [1000,500,200,100,50,20,10,5,2,1,0.50];
    for(var i=0; i<=denominaciones.length ;i++){
        var division = Math.trunc(cambio/denominaciones[i]);
        if(division != 0){
            cambio = cambio - denominaciones[i]*division;
            var h4 = document.createElement("h4");
            h4.append( division +" Denominacion entregada de $"+ denominaciones[i]);
            resultado.append(h4);
            if(cambio == 0)
                break;   
        }      
    }  
}


borrar.addEventListener('click', function(){
    resultado.remove();
    location.reload();
});






