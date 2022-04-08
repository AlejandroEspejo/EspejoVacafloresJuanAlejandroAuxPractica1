// EJERCICIO 1
let age = prompt( 'Introduza la edad', '' );
if ( age > 18 ) {
    console.log ( 'Ya puede conducir' );
    document.write( 'Ya puede conducir' );
} else {
    console.log ( 'Aun no puede conducir' );
    document.write( 'Aun no puede conducir' );
}
// EJERCICIO 2
let suma = 0;
while ( true ) {
    let valor = prompt( 'Introduzca numero' );
    if ( !isNaN(valor) && valor != null ) {
        suma += parseInt(valor);
    } else {
        if ( valor != null ){
            alert ( 'valor erroneo' )
        }
    }
    if ( !confirm( 'Continuar' ) ) {
        break;
    }
}
console.log( "El resultado de la sumatoria es igual a " + suma );
document.write( "El resultado de la sumatoria es igual a " + suma );
// EJERCICIO 3
let personaUno = { 
    nombre : prompt( 'nombre primera persona ' ),
    edad : prompt( 'edad primera persona' ),
};
let personaDos = { 
    nombre : prompt( 'nombre segunda persona ' ),
    edad : prompt( 'edad segunda persona' )
};
let personaTres = { 
    nombre : prompt( 'nombre tercera persona ' ),
    edad : prompt( 'edad segunda persona' )
};

if ( personaUno.edad > personaDos.edad && personaUno.edad > personaTres.edad ) {
    console.log( "El mayor es: " + personaUno.nombre );
    document.write( "El mayor es: " + personaUno.nombre )
} else if ( personaDos.edad > personaUno.edad && personaDos.edad > personaTres.edad ) {
    console.log( "El mayor es: " + personaDos.nombre );
    document.write( "El mayor es: " + personaDos.nombre );
} else if ( personaTres.edad > personaUno.edad && personaTres.edad > personaDos.edad ) {
    console.log( "El mayor es: " + personaTres.nombre );
    document.write( "El mayor es: " + personaTres.nombre );
}
// EJERCICIO 4
let numeroUno;
let numeroDos; 
let numeroTres; 
let random;
for (let i = 0; i < 3; i++) {
    random = Math.floor ( (Math.random() * 99) + 1 )
    if ( random != numeroUno && random != numeroDos && random != numeroTres ) {
        if ( i == 0 ) {
            numeroUno = random;
        } else if ( i == 1) {
            numeroDos = random;
        } else {
            numeroTres = random;
        }
    } else {
        i --;
    }
}
document.write("Numeros randoms Generados: " + numeroUno + " " + numeroDos +" "+ numeroTres);
console.log("Numeros randoms Generados: " +numeroUno + " " + numeroDos +" "+ numeroTres); 
// EJERCICIO 5
let cadena = prompt("Intruduza palabra"), numero = 0;
for ( let i = 0; i < cadena.length; i++ ) {
    if ( cadena.charAt(i) == 'a' || cadena.charAt(i) == 'e' || cadena.charAt(i) == 'i' || cadena.charAt(i) == 'o' || cadena.charAt(i) == 'u' ||  
        cadena.charAt(i) == 'A' || cadena.charAt(i) == 'E' || cadena.charAt(i) == 'I' || cadena.charAt(i) == 'O' || cadena.charAt(i) == 'U' ) {
        numero ++;
    }
}
document.write("Cantidad de vocales: " + numero);
console.log("Cantidad de vocales: " + numero);
// EJERCICIO 6
let cadena = prompt( "Introduza frase con parentesis" );
let cadenaaux = "";
let a = false
for ( let i = 0; i < cadena.length; i++ ) {
    
    if ( cadena.charAt(i) == '(' ) {
        a = true;
        i ++;
    }
    
    if ( cadena.charAt(i) == ')' ) {
        a = false;
    }

    if ( a ) {
        cadenaaux = cadenaaux + cadena.charAt(i);
    }
    
}
document.write("texto: " + cadenaaux)
console.log("texto: " + cadenaaux);
// EJERCICIO 7
let cadena = prompt("Introduza frase");
let cadenaaux = "";
for ( let i = cadena.length - 1; i >= 0; i-- ) {
    cadenaaux = cadenaaux + cadena.charAt(i);    
}
document.write("texto : " + cadenaaux)
console.log("texto : " + cadenaaux);
// EJERCICIO 8
let numero = prompt("introduzca numero del 1 al 100"), a = 1, b = 0;
document.write("numeros fibonacci:");
for (let i = 0; i < numero; i++) {
    a = a + b;
    b = a - b;
    document.write(b+" ");
    console.log(b);
}
// EJERCICIO 9
let jugador, computadora;
jugador = prompt("Introduzca un numero del uno al tres, las referencias son las siguientes \n 1 -> piedra \n 2 -> papel \n 3 -> tijera");
computadora = Math.floor( (Math.random() * 3) + 1 );
console.log( jugador, computadora );
if ( jugador == 1 || jugador == 2 || jugador == 3) {
    if ( jugador == computadora ) {
      document.write( "Tu seleccion fue " + jugador + " y la seleccion de la pc fue " + computadora );
      console.log( "Tu seleccion fue " + jugador + " y la seleccion de la pc fue " + computadora );
      console.log(" EMPATE");
      document.write( " EMPATE" )
    } else if ( ( jugador == 1 & computadora == 2 ) || ( jugador ==  2 & computadora == 3) || ( jugador ==  3 & computadora == 1) ) {
      document.write( "Tu seleccion fue " + jugador + " y la seleccion de la pc fue " + computadora );
      console.log( "Tu seleccion fue " + jugador + " y la seleccion de la pc fue " + computadora );
      console.log(" PERDISTE");
      document.write( " PERDISTE" )
    } else if ( ( jugador == 2 & computadora == 1 ) || ( jugador ==  3 & computadora == 2) || ( jugador ==  1 & computadora == 3) ) {
      document.write( "Tu seleccion fue " + jugador + " y la seleccion de la pc fue " + computadora );
      console.log( "Tu seleccion fue " + jugador + " y la seleccion de la pc fue " + computadora );
      console.log(" GANASTE");
      document.write( " GANASTE" )
  }
} else {
  document.write( "numero invalido" )
  console("Numero invalido");
}
// EJERCICIO 10
function masIva(precio, iva){
    iva = iva || 21
    var coniva = (precio + precio*iva/100);
    return coniva;
  }
  var precio = Number(prompt("Introduce un precio"));
  var iva = Number(prompt("Introduce el iva"));
  if(iva > 0){
    var resultado = masIva(precio, iva);
  }
  else{
    var resultado = masIva(precio);
  }
  document.write("Precio sin iva: " + precio);
  document.write("<br>Precio más Iva: " + resultado);
// EJERCICIO 11
function validar() {
  const button = document.querySelector('button');
  button.disabled = true;
  button.innerHTML = "ENVIANDO";
  const win = window.open("", '_blank');
  win.focus();
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  win.document.write("La informacion que se envio fue " + "nombre: " +nombre + " apellido: " + apellido);
}
// EJERCICIO 12
setInterval( function() {
    let actual = new Date();
    let dia = actual.getUTCDate();
    let mes = actual.getUTCMonth() + 1;
    let anio = actual.getFullYear();
    let hora = actual.getHours();
    let minuto = actual.getMinutes();
    let segundo = actual.getSeconds();
    let tiempo = "dia: " + dia+ " mes: " + mes + " año " + anio + " hora: " + hora + " minutos: " + minuto + " segundos: " + segundo;
    document.write(tiempo);
    document.close();
    console.log(tiempo); 
}, 1000);
// EJERCICIO 13
function  anio ( fecha ) {
    let data = new Date();
    let actual = data.getFullYear();
    if ( fecha < actual && fecha >= 0 ) {
        document.write( "La diferencia de años es: " + (actual - fecha) );
        console.log( "La diferencia de años es: " + (actual - fecha) );
    } else {
        document.write( "Error" );
        console.log( "Error" );
    }
}
anio ( prompt("Introduzca año") );
// EJERCICIO 14
function cantidades (cadena) {
    
    let sumcon = 0, sumvoc = 0;
    for (let i = 0; i < cadena.length; i++) {
        if ( ( cadena.charCodeAt(i) >= 65 && cadena.charCodeAt(i) <= 90 ) ||  ( cadena.charCodeAt(i) >= 97 && cadena.charCodeAt(i) <= 122 ) ) {
            if ( cadena.charCodeAt(i) == 97 || cadena.charCodeAt(i) == 101 || cadena.charCodeAt(i) == 105 || cadena.charCodeAt(i) == 111 || cadena.charCodeAt(i) == 117 ||
                cadena.charCodeAt(i) == 65 || cadena.charCodeAt(i) == 69 || cadena.charCodeAt(i) == 73 || cadena.charCodeAt(i) == 79 || cadena.charCodeAt(i) == 85 ) {
                sumvoc ++;    
            } else {
                sumcon ++;
            }
        }
    }
    document.write("consonantes : " + sumcon + " vocales :" + sumvoc);
    console.log("consonantes : " + sumcon + " vocales :" + sumvoc);
}
cantidades ( prompt("Ingrese una palabra o frase") );
// EJERCICIO 15
function nombre (cadena) {
    let i;
    for (i = 1; i < cadena.length; i++) {
        if (  cadena.charCodeAt(i) < 65 || (cadena.charCodeAt(i) > 90 && cadena.charCodeAt(i) < 96) && cadena.charCodeAt(i) > 122  ) {
            console.log("falso");
            document.write("falso");
            break;
        }
    }
    if ( i === cadena.length ) {
        console.log("verdadero");
        document.write("verdadero");
    }
    
}
nombre ( prompt("Introduza un nombre"));
// EJERCICIO 16
function vec ( array ) {
    let vector = [];
    for (let i = array.length - 1 ; i >= 0; i--) {
        let contador  = 0;
        for (let j = i ; j >= 0; j--) {
            if ( array[i] === array[j] ) {
                contador ++;
            }
        }
        if ( contador == 1) {
            vector.push( array[i] );
        }
    }
    return vector;
}

    
let vector = [ 5, 25, 10, 's', 5, 'a', 'a'];  
let vectorresult = vec( vector );
let ultimovec = [];
for (let index = vectorresult.length - 1; index >= 0 ; index--) {
    ultimovec.push(vectorresult[index]);
}
document.write("salida: " + ultimovec);
// EJERCICIO 17
function transform(vectorcompleto) {
    let objetoVectores = { 
        numeroPares: [], 
        numerosImpares: [] 
    };
    for (let i = 0; i < vectorcompleto.length; i++) {
      if (vectorcompleto[i] % 2 == 0) {
        objetoVectores.numeroPares.push(vectorcompleto[i]);
      } else {
        objetoVectores.numerosImpares.push(vectorcompleto[i]);
      }
    }
    return objetoVectores;
  }
let vectorcompleto = [5 , 20 , 2 , 4 , 3 , 5, 9, 15];
let objetoVectores = transform(vectorcompleto);
console.log("Pares: " + objetoVectores.numeroPares + " Impares: " + objetoVectores.numerosImpares);
document.write("Pares: " + objetoVectores.numeroPares + " Impares: " + objetoVectores.numerosImpares);
// EJERCICIO 18
const carta = 'bici coche balon _playstation bici  coche   peluche';

function listGifts(letter) {
  const arrCarta = letter.split(" ");
  return arrCarta.filter((regalo) => {
    let value = regalo.startsWith("_")
    if (value !== true && regalo !=="") return regalo !== value
  })
  .reduce((contador, regalo) => {
    contador[regalo] = (contador[regalo] || 0) + 1;
    return contador
  }, {});
}

const regalos = listGifts(carta)
console.log(regalos)
// EJERCICIO 19
function iterate(obj) {
  let res = [];
  for (let property in obj) {
    const child = obj[property];
    if (typeof child === 'object') {
      res = [...res, ...iterate(child)]
    }
    res.push(child);
  }
  return res;
}

function contains(store, product) {
  return iterate(store).some((item) => item === product)
}


const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log(contains(almacen, 'camiseta'));
console.log(contains(otroAlmacen, 'gameboy'));
// EJERCICIO 20
function missingReindeer(ids) {
  let idsOrdenados = ids;
  for ( let i = 0 ; i < idsOrdenados.length; i++ ) {
      for ( let j = i+1; j < idsOrdenados.length; j++ ) {
        if( idsOrdenados[i] > idsOrdenados[j] ){
          let aux = idsOrdenados[i];
          idsOrdenados[i] = idsOrdenados[j];
          idsOrdenados[j] = aux;
        }
      }
  }
  let k, salida;
  for ( k = 0 ; k < idsOrdenados.length - 1; k++ ){
    if ( (idsOrdenados[k + 1] - idsOrdenados[k]) != 1 ) {
      salida = idsOrdenados[k] + 1;
      break;
    }
  }
  if ( k == idsOrdenados.length - 1 ) {
    salida = idsOrdenados.length;
  }
  return salida;
}

console.log(missingReindeer([0, 2, 3])) // -> 1
console.log(missingReindeer([5, 6, 1, 2, 3, 7, 0])) // -> 4
console.log(missingReindeer([0, 1])) // -> 2 (¡es el último el que falta!)
console.log(missingReindeer([3, 0, 1])) // -> 2
console.log(missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1])) // -> 8
console.log(missingReindeer([0])) // -> 1 (¡es el último el que falta!)