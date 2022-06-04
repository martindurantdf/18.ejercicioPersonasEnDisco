/* Consigna original************
• Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total
*** Consiga con nuevos parámetros******
Si el aleatorio se genera entre 16 y 40..
Cuántas personas quedan afuera?
Cuántas personas entran? Y de las que entran...cuántas tienen entre 18 y 21 años 
y cuántas más de 21?

*/
let capacidadDiscoteca: number = 270;
let discoteca: number[] = new Array(capacidadDiscoteca); //arreglo para guardar la edad de los asistentes a la discoteca
let edadMinima: number = 16; // edad minima
let edadMaxima: number = 40; // edad maxima

//Función que genera aleatoriamente la edad de los asistentes a la discoteca
function generarEdadAleatoria(min: number, max: number):number{
  return Math.round((Math.random() * (max - min) + min));
}

//Función que carga el arreglo con valores aleatorios de edades en la discoteca
function cargarArreglo(arrayDiscoteca: number[], min: number, max: number): void {
  for (let i: number = 0; i < arrayDiscoteca.length; i++) {
    arrayDiscoteca[i] = generarEdadAleatoria(min, max);
  }
}

function contarEdades (arrayDiscoteca: number[]): void{
let mayor:number=0;
let menor:number=0;
let rechazado:number=0;
  for (var i in arrayDiscoteca) {
    if (arrayDiscoteca[i]<18){
      rechazado++;
    }else if (arrayDiscoteca[i]<21 && arrayDiscoteca[i]>=18){
      menor++;
    }else if (arrayDiscoteca[i]>=21){
      mayor++;
    }
  }
  console.log (`Hay ${rechazado} persona/s menores de 18 años que no pudieron ingresar`);
  console.log (`Hay en la discoteca ${menor} persona/s cuya edad es entre 18 y 20 años`);
  console.log (`Hay en la discoteca ${mayor} persona/s mayores de 21 años`);
  console.log (`Pudieron ingresar a la discoteca ${menor+mayor} personas`);
}

cargarArreglo(discoteca, edadMinima, edadMaxima);
console.log (`${discoteca}`);
contarEdades (discoteca);