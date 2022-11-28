console.log('Hola buenas tardes')

// Tiposb de datos en js
// string: cadena de caracteres 'a' 'hola buenas tardes'
let miPrimeraVariable = 'Mi primera variable'
console.log(miPrimeraVariable); 

miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable); 

 let miBoolean = true
let miOtroBoolean = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -251

//console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBoolean, miPrimeraVariable);

let undef 
//console.log(undef);

let nulo = null
//console.log(nulo);

//Objeto agrupacion de datos que hacen sentido entre si :)
const miObjeto = {
    unNumero: 12,
    unString: 'Cadena de caracteres',
    unaCondicion: true,
}
console.log(miObjeto.unNumero); 

const arrVacio = []
const arr = [1, 2, 'Hola', "Mundo", miObjeto]
//.console.log(arrVacio, arr);

arrVacio.push(5)
arrVacio.push(6)
arrVacio.push(1)
arrVacio.push(5)
arrVacio.push(9)
arrVacio.push(8)
arrVacio.push(7)
arrVacio.push(2)
arrVacio.push(miPrimeraVariable)
console.log(arrVacio);