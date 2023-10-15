const prompt= require ('prompt-sync')();
var  c = parseFloat(prompt("inglese el glado cercius a comvertir: "))


function opcion(){

  console.log("1 = celsius a farenhait")
  console.log("2 = celsius a kelvin")
  
  var operacion = prompt ("ingrese una operacion :")

  if (operacion == 1){
    function celsius_a_fahren(c){
      var farenheit = (c * 9/5) +32

      return farenheit
    }

    console.log("la cantida de grados en farenhait es: ",     
    celsius_a_fahren(c))
  }
  else if (operacion == 2){
    function celsius_a_kelvin(){
      var kel = c + 273.15
      return kel
    }

    console.log("la cantida de grados en kelvin es: ", 
    celsius_a_kelvin(c))
 
  }  
  
  else {
    consol.log("ingrese una opcion valida")
  }

  


}
console.log(opcion())