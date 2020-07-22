
//seleccion de ejercicio a realizar

let opcion = prompt("Ingrese Numero de Ejercicio")

switch (opcion ) {
    case "1":
      ejercicio1()
      break;
    case "2":
      ejercicio2()
      break;
    case "3":
        ejercicio3()
        break;
    case "4":
        ejercicio4()
        break;
    case "5":
        ejercicio5()
    default:
          alert("ingrese un numero del 1 al 5.");
}


// ejercicio 1 valida que los numeros ingresados sean entre 1 y 100, imprime por consola  numeros hasta llegar al numero ingresado por usuario

      function ejercicio1(){
        let n = prompt("Ingrese un numero del 1 al 100.");
        n <= 100 && n >= 0 ? validacion(n): reingreso();
      }

    function reingreso(){
        alert("ingrese solo numeros entre 0 y 100");
        ejercicio1();
    }
      
      function validacion(n){
        for (numero = 0;numero <= n ;numero++) {console.log(numero);}
    }


   //ejercicio 2 valida el color ingresado por el usuario si es correcto lo indica con un mensaje alert, si es incorrecto vuelve a pedir el color


   function ejercicio2(){

        let n = prompt("De que Color era el Caballo Blanco de Napoleon");

        let color = "blanco"
        n == color ? alert("Respuesta Correcta"): reingreso2();

   }


   function reingreso2(){

    alert("Ingrese el Color Correcto")
    ejercicio2();
    
   }

   // ejercicio 3 calcular promedio de notas entregadas por el  usuario y saca un promedio
   
   
function ejercicio3(){

    let m = +prompt("Ingrese la Nota de Matematicas");
    let c = +prompt("Ingrese la Nota de Ciencia");
    let f = +prompt("Ingrese la Nota de Fisica");
 
    let promedio = (m+c+f)/3;
    alert(Math.round(promedio));

}


//ejercio 4 pide ingresar 3 frutas ,se imprimen todas las frutas ingresadas menos manzana


function ejercicio4(){

    let a = prompt("Ingrese la fruta 1");
    let b = prompt("Ingrese la fruta 2");
    let c = prompt("Ingrese la fruta 3");


    let frutas = [];
    frutas.push(a,b,c);


    frutas.forEach(element => {


    if(element !== "manzana"){  

         console.log(element);

    }
    

    });

}
  


/* ejercicio 5 usuario escribe su nombre. Luego, debe determinar la cantidad de vocales y
consonantes que tiene dicho nombre y mostrarlos por pantalla */



function ejercicio5(){

    let nombre = prompt("Ingrese su Nombre");
    let vocales = nombre.split(" ");
    let numeroVocales = nombre.match(/[aeiou]/gi).length;

    let numeroconsonantes = nombre.match(/[^aeyiuo]/gi).length;
      
    alert(numeroVocales + " vocales");
    alert(numeroconsonantes + " consonantes");


    console.log(numeroVocales + " vocales");
    console.log(numeroconsonantes + " consonantes");
}





